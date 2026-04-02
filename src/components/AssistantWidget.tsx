"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

// ------------------------------------
// Types
// ------------------------------------
interface Message {
  role: "user" | "assistant";
  content: string;
  route?: string | null;
  routeLabel?: string | null;
}

// ------------------------------------
// Routes where the assistant should NOT render
// ------------------------------------
const EXCLUDED_ROUTES = ["/book", "/intake"];

// ------------------------------------
// Starter chips
// ------------------------------------
const STARTER_CHIPS = [
  "What does JadorWorks do?",
  "Is this only for demo industries?",
  "I already have a website",
  "What does pricing look like?",
];

const BOOKING_CHIP = "Book a consultation \u2192";

// ------------------------------------
// Component
// ------------------------------------
export function AssistantWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Do not render on excluded routes (after all hooks)
  if (EXCLUDED_ROUTES.some((route) => pathname?.startsWith(route))) {
    return null;
  }

  // Send a message to the API
  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    setHasInteracted(true);
    const userMessage: Message = { role: "user", content: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || "Request failed");
      }

      const data = await response.json();
      const assistantMessage: Message = {
        role: "assistant",
        content: data.reply,
        route: data.route,
        routeLabel: data.routeLabel,
      };
      setMessages([...updatedMessages, assistantMessage]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "Something went wrong. You can try again, or book a consultation directly.",
          route: "/book",
          routeLabel: "Book a free consultation",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChipClick(text: string) {
    if (text === BOOKING_CHIP) {
      window.location.href = "/book";
      return;
    }
    sendMessage(text);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  // Is the last message a /book handoff?
  const lastMessage = messages[messages.length - 1];
  const isHandoff = lastMessage?.role === "assistant" && lastMessage?.route === "/book";

  return (
    <>
      {/* Launcher button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="assistant-launcher fixed z-[90] transition-opacity duration-200 hover:opacity-90"
          style={{
            bottom: 24,
            right: 24,
            height: 44,
            paddingLeft: 16,
            paddingRight: 16,
            backgroundColor: "#0D1B2A",
            color: "#FAF9F6",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontWeight: 500,
            fontSize: 13,
            letterSpacing: "0.04em",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Any questions?
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          className="assistant-panel fixed z-[90] flex flex-col"
          style={{
            bottom: 24,
            right: 24,
            width: 380,
            height: 520,
            backgroundColor: "#FAF9F6",
            border: "1px solid rgba(13,27,42,0.1)",
            borderRadius: 4,
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            boxShadow: "0 4px 24px rgba(13,27,42,0.08)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between shrink-0"
            style={{
              padding: "14px 16px",
              borderBottom: "1px solid rgba(13,27,42,0.1)",
            }}
          >
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontWeight: 300,
                  fontSize: 15,
                  color: "#0D1B2A",
                  letterSpacing: "-0.01em",
                }}
              >
                Jador
              </span>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#0D1B2A",
                  letterSpacing: "-0.01em",
                  marginLeft: -6,
                }}
              >
                Works
              </span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: "rgba(13,27,42,0.45)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase" as const,
                  marginLeft: 6,
                }}
              >
                Assistant
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: 18,
                color: "rgba(13,27,42,0.45)",
                cursor: "pointer",
                padding: "0 4px",
                lineHeight: 1,
              }}
            >
              \u00d7
            </button>
          </div>

          {/* Messages area */}
          <div
            className="flex-1 overflow-y-auto"
            style={{ padding: "16px 16px 8px" }}
          >
            {/* Opening state */}
            {!hasInteracted && (
              <div>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    color: "#0D1B2A",
                    marginBottom: 16,
                  }}
                >
                  What brings you here today?
                </p>

                {/* Starter chips - 2x2 grid */}
                <div
                  className="assistant-chips-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  {STARTER_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleChipClick(chip)}
                      className="transition-colors duration-150"
                      style={{
                        padding: "10px 12px",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "rgba(13,27,42,0.68)",
                        backgroundColor: "transparent",
                        border: "1px solid rgba(13,27,42,0.15)",
                        borderRadius: 4,
                        cursor: "pointer",
                        textAlign: "left",
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#0D1B2A";
                        e.currentTarget.style.color = "#FAF9F6";
                        e.currentTarget.style.borderColor = "#0D1B2A";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "rgba(13,27,42,0.68)";
                        e.currentTarget.style.borderColor = "rgba(13,27,42,0.15)";
                      }}
                    >
                      {chip}
                    </button>
                  ))}
                </div>

                {/* Booking chip - full width */}
                <button
                  onClick={() => handleChipClick(BOOKING_CHIP)}
                  className="w-full transition-colors duration-150"
                  style={{
                    padding: "10px 12px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "rgba(13,27,42,0.68)",
                    backgroundColor: "transparent",
                    border: "1px solid rgba(13,27,42,0.15)",
                    borderRadius: 4,
                    cursor: "pointer",
                    textAlign: "center",
                    lineHeight: 1.4,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0D1B2A";
                    e.currentTarget.style.color = "#FAF9F6";
                    e.currentTarget.style.borderColor = "#0D1B2A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "rgba(13,27,42,0.68)";
                    e.currentTarget.style.borderColor = "rgba(13,27,42,0.15)";
                  }}
                >
                  {BOOKING_CHIP}
                </button>
              </div>
            )}

            {/* Message history */}
            {messages.map((msg, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                {/* Message bubble */}
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius: 4,
                    fontSize: 14,
                    fontWeight: 300,
                    lineHeight: 1.7,
                    maxWidth: "90%",
                    ...(msg.role === "user"
                      ? {
                          backgroundColor: "#0D1B2A",
                          color: "#FAF9F6",
                          marginLeft: "auto",
                        }
                      : {
                          backgroundColor: "#EDEAE4",
                          color: "#0D1B2A",
                        }),
                  }}
                >
                  {msg.content}
                </div>

                {/* Route chip or handoff CTA */}
                {msg.role === "assistant" && msg.route && (
                  <div style={{ marginTop: 8 }}>
                    {msg.route === "/book" && i === messages.length - 1 ? (
                      // Handoff CTA - full width navy button
                      <a
                        href="/book"
                        style={{
                          display: "block",
                          width: "100%",
                          padding: "14px 16px",
                          backgroundColor: "#0D1B2A",
                          color: "#FAF9F6",
                          fontSize: 14,
                          fontWeight: 600,
                          textAlign: "center",
                          textDecoration: "none",
                          borderRadius: 4,
                          lineHeight: 1,
                        }}
                      >
                        Book a free consultation \u2192
                      </a>
                    ) : (
                      // Route chip
                      <a
                        href={msg.route}
                        style={{
                          display: "inline-block",
                          padding: "6px 12px",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#0D1B2A",
                          border: "1px solid rgba(13,27,42,0.15)",
                          borderRadius: 4,
                          textDecoration: "none",
                          lineHeight: 1.4,
                        }}
                      >
                        \u2192 {msg.routeLabel || msg.route}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Loading indicator */}
            {isLoading && (
              <div
                style={{
                  padding: "10px 14px",
                  backgroundColor: "#EDEAE4",
                  borderRadius: 4,
                  fontSize: 14,
                  fontWeight: 300,
                  color: "rgba(13,27,42,0.45)",
                  maxWidth: "90%",
                  marginBottom: 12,
                }}
              >
                ...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input area - hide after handoff */}
          {!isHandoff && (
            <form
              onSubmit={handleSubmit}
              className="shrink-0"
              style={{
                padding: "12px 16px",
                borderTop: "1px solid rgba(13,27,42,0.1)",
                display: "flex",
                gap: 8,
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  fontSize: 14,
                  fontWeight: 300,
                  color: "#0D1B2A",
                  backgroundColor: "transparent",
                  border: "1px solid rgba(13,27,42,0.1)",
                  borderRadius: 4,
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                style={{
                  padding: "10px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  backgroundColor: "#0D1B2A",
                  color: "#FAF9F6",
                  border: "none",
                  borderRadius: 4,
                  cursor: isLoading || !input.trim() ? "default" : "pointer",
                  opacity: isLoading || !input.trim() ? 0.4 : 1,
                  fontFamily: "inherit",
                }}
              >
                Send
              </button>
            </form>
          )}
        </div>
      )}

    </>
  );
}
