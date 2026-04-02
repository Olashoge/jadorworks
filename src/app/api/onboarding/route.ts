// =============================================
// COMPATIBILITY LAYER — /api/onboarding
// Canonical endpoint has moved to /api/intake.
// This re-export keeps the old path working
// during the transition period. Remove after
// one release cycle once all callers use /api/intake.
// =============================================

export { POST } from "../intake/route";
