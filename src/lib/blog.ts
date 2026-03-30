// =============================================
// Blog Data — Article metadata and content
// =============================================

export interface BlogArticle {
  slug: string;
  title: string;
  headline: string;
  description: string;
  category: string;
  readTime: string;
  date: string;        // ISO date string
  dateLabel: string;    // Display label
  keyPoints: string[];
  sections: {
    heading: string;
    content: string;  // HTML string
  }[];
  ctas: {
    position: "mid" | "bottom";
    headline: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  }[];
  relatedService?: {
    label: string;
    href: string;
  };
  relatedDemo?: {
    label: string;
    href: string;
  };
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "hvac-website-design-indianapolis",
    title: "Why HVAC Companies in Indianapolis Need a Website | JadorWorks Blog",
    headline: "Why HVAC companies in Indianapolis need a website — not just a Google listing.",
    description: "Most HVAC businesses rely on Google Business Profiles alone. Learn why a professional website is what closes the deal once homeowners find you on Google Maps.",
    category: "Website Design",
    readTime: "6 min",
    date: "2026-03-29",
    dateLabel: "March 2026",
    keyPoints: [
      "Why a Google Business Profile alone leaves money on the table",
      "What a homeowner actually does before they call an HVAC company",
      "What a professional HVAC website needs to do its job",
      "What the difference looks like in practice",
    ],
    sections: [
      {
        heading: "",
        content: `<p>Most HVAC businesses in Indianapolis rely on two things to get customers: word of mouth and a Google Business Profile. That combination works — until it doesn't. A GBP gets you on the map. A professional website is what closes the deal once someone finds you there.</p>`,
      },
      {
        heading: "What homeowners do before they call",
        content: `<p>Before any homeowner in Indianapolis calls an HVAC company, they search. They find a few names on Google Maps, look at star ratings, and then — almost every time — they click through to the website. What they find in the next thirty seconds determines whether they call you or move on to the next result.</p>
<p>If there is no website, most people move on. Not because they decided you were bad at your job. They moved on because there was nothing to evaluate. No phone number above the fold, no list of services, no proof that you are licensed and insured, no indication that you serve their neighbourhood. Without a website, you are asking a potential customer to make a high-trust decision with almost no information.</p>
<p>A Google Business Profile is a listing. A website is a business.</p>`,
      },
      {
        heading: "What a GBP cannot do on its own",
        content: `<p>Your GBP shows your hours, your address, your reviews, and your phone number. That is genuinely valuable. But there are things it cannot do no matter how well optimised it is.</p>
<p>It cannot tell a homeowner which specific services you offer and how they work. It cannot show your pricing structure or explain your flat-rate policy. It cannot walk someone through what happens when they call — do you give a free estimate? Do you charge a diagnostic fee? Do you offer emergency service after hours? These are the questions homeowners in Carmel, Fishers, and Indianapolis have before they pick up the phone, and a GBP has nowhere to answer them.</p>
<p>It also cannot rank for the specific searches that convert. "AC repair Indianapolis" and "furnace tune-up Carmel IN" and "plumber near Fishers" are all searches where a well-structured service page on your website will outperform a GBP listing over time. A GBP tells Google you exist. A website tells Google what you do, where you do it, and for whom.</p>`,
      },
      {
        heading: "What a professional HVAC website actually needs",
        content: `<p>Not every website works. A website that looks outdated, loads slowly, or buries the phone number does more harm than good. Here is what an HVAC website needs to do its job in the Indianapolis market.</p>
<p>The phone number needs to be the first thing visible — not tucked in a header dropdown, not in the footer only. On mobile especially, the number should be tappable and above the fold before anything else loads.</p>
<p>The service list needs to be explicit. Homeowners do not want to guess whether you handle mini-splits or just central air, whether you do drain cleaning or only plumbing repairs. Every service gets its own clear description. If you offer 24/7 emergency service, that needs to be prominent — it is one of the strongest trust signals an HVAC company can have.</p>
<p>Trust signals need to be visible without scrolling. Licensed and insured, background-checked technicians, BBB accredited, years in business — these are the things homeowners look for before they call, and they need to appear near the top of the page, not buried in an about section.</p>
<p>The service area needs to be stated clearly. Indianapolis is a large metro. If you serve Carmel, Fishers, Noblesville, Greenwood, Avon, and Brownsburg, say so explicitly — both for the visitor reading your page and for the search engines deciding who to show your site to.</p>
<p>Finally, the contact form needs to be simple and work correctly. Name, phone number, service needed, brief description. That is enough. A broken or confusing contact form is the last reason to lose a customer who was ready to book.</p>`,
      },
      {
        heading: "What the difference looks like",
        content: `<p>The HVAC companies winning in Indianapolis right now are not necessarily the ones with the most Google reviews. They are the ones who show up in search, have a website that answers the homeowner's questions quickly, and make it easy to take the next step.</p>
<p>A GBP gets you in the consideration set. A professional website gets you the call.</p>`,
      },
    ],
    ctas: [
      {
        position: "mid",
        headline: "Want a website built specifically for your HVAC business?",
        body: "We build professional websites for HVAC and plumbing companies in Indianapolis — with Google Business Profile setup and local SEO built in from day one. Free consultation, no commitment.",
        primaryLabel: "Book a Free Consultation",
        primaryHref: "/#contact",
      },
      {
        position: "bottom",
        headline: "See it in action",
        body: "Browse the JadorWorks HVAC demo site or learn what's included in our HVAC website package.",
        primaryLabel: "See the HVAC demo",
        primaryHref: "/demos/hvac",
        secondaryLabel: "HVAC website package",
        secondaryHref: "/services/hvac-website-design",
      },
    ],
    relatedService: { label: "HVAC Website Design", href: "/services/hvac-website-design" },
    relatedDemo: { label: "HVAC Demo Site", href: "/demos/hvac" },
  },
  {
    slug: "google-business-profile-mistakes-indiana",
    title: "GBP Mistakes Indiana Businesses Make | JadorWorks Blog",
    headline: "The biggest Google Business Profile mistakes Indiana service businesses make.",
    description: "After auditing GBP profiles for HVAC, remodeling, landscaping, and home care businesses across Indiana, the same six errors appear again and again. Here is how to fix them.",
    category: "Google Business Profile",
    readTime: "5 min",
    date: "2026-03-29",
    dateLabel: "March 2026",
    keyPoints: [
      "The six GBP errors that hurt your visibility and credibility",
      "Why wrong categories are often the biggest invisible problem",
      "What Google actually looks for when ranking local businesses",
      "How to fix each error yourself or get professional help",
    ],
    sections: [
      {
        heading: "",
        content: `<p>A Google Business Profile is one of the most powerful free tools available to a local service business. It is also one of the most consistently misused. After auditing profiles for HVAC companies, remodelers, landscapers, and home care providers across Indiana, the same errors appear again and again — and they are costing real businesses real customers.</p>
<p>Here are the six most common mistakes and exactly how to fix them.</p>`,
      },
      {
        heading: "Mistake 1: Wrong or missing business categories",
        content: `<p>Your primary category is one of the most important signals you send to Google. It tells the algorithm what kind of business you are and which searches you should appear for. Getting it wrong — or leaving it vague — means you are invisible for the searches that matter most.</p>
<p>We regularly see HVAC companies listed under "Contractor" instead of "HVAC contractor," landscapers listed under "Home improvement" instead of "Landscaping company," and home care providers listed under "Health" instead of "Home health care service." These are not minor distinctions. They are the difference between appearing and not appearing when someone searches for your service in your area.</p>
<p><strong>Fix:</strong> Go into your GBP settings and check your primary category against Google's full category list. Choose the most specific category that accurately describes your core service. You can also add up to nine secondary categories — use them for every service you legitimately offer.</p>`,
      },
      {
        heading: "Mistake 2: No service area defined",
        content: `<p>If you run a mobile service business — HVAC, landscaping, plumbing, cleaning — you likely serve customers at their location rather than at a fixed address. Many businesses in this situation list a business address and leave the service area blank. That is a significant missed opportunity.</p>
<p>Without a defined service area, Google does not know how far your reach extends. Your profile may only appear in searches near your business address, even if you regularly serve customers in Carmel, Fishers, Noblesville, and Avon.</p>
<p><strong>Fix:</strong> In your GBP settings under "Service area," list every city, town, or county you actively serve. Be honest — do not list areas you cannot realistically cover — but be thorough about the areas you do cover.</p>`,
      },
      {
        heading: "Mistake 3: No photos, or outdated photos",
        content: `<p>Google explicitly confirms that businesses with photos receive more direction requests and website clicks than those without. Despite this, a large number of Indiana service businesses have either zero photos or photos that are years old and no longer represent the business accurately.</p>
<p>For a remodeling contractor, photos of completed projects are your most powerful sales tool. For an HVAC company, photos of your team and your vans build trust before anyone has spoken to you. For a home care provider, warm and professional imagery sets the emotional tone before a family has made a decision.</p>
<p><strong>Fix:</strong> Upload a minimum of ten photos — your team, your vehicles, your completed work, and your business premises if applicable. Add new photos regularly. Google rewards active profiles.</p>`,
      },
      {
        heading: "Mistake 4: Ignoring reviews — especially the negative ones",
        content: `<p>Reviews are one of the strongest local ranking signals Google uses. A business with 200 reviews and a 4.7 rating will almost always outperform a business with 12 reviews and a 4.9 rating in terms of visibility. But the bigger mistake is not responding to reviews — particularly the negative ones.</p>
<p>A negative review with no response from the business looks like confirmation of the complaint. A negative review with a professional, solution-oriented response shows every potential customer reading it that you take your work seriously and handle problems with integrity.</p>
<p><strong>Fix:</strong> Ask every satisfied customer to leave a Google review — in person, via text, or with a follow-up email. Respond to every review, positive and negative, within 48 hours.</p>`,
      },
      {
        heading: "Mistake 5: An incomplete or generic business description",
        content: `<p>Your business description is a 750-character opportunity to tell Google and potential customers exactly who you are, what you do, and where you do it. Most profiles either leave it blank or fill it with something vague like "We provide excellent service to our customers."</p>
<p>A well-written description includes your core services, your service area, your years in business, and one or two trust signals. It reads like a confident, specific introduction — not a generic placeholder.</p>
<p><strong>Fix:</strong> Write a description that mentions your primary service, your service area (specific cities or counties), your years in business, and what makes you worth calling. Keep it under 750 characters and read it as a customer would.</p>`,
      },
      {
        heading: "Mistake 6: Not keeping hours accurate",
        content: `<p>This one seems obvious, but it is consistently overlooked. Holiday hours, seasonal changes, and temporary closures all need to be reflected in your GBP in real time. A customer who calls during hours listed as open and gets no answer will not call back. They will call your competitor.</p>
<p><strong>Fix:</strong> Update your hours whenever they change. Use the special hours feature for public holidays and seasonal variations. If you offer 24/7 emergency service, make sure that is reflected clearly in both your hours and your business description.</p>
<p>A complete, accurate, and actively maintained Google Business Profile is not optional for a local service business in Indiana. It is the foundation that every other marketing effort sits on top of. Get it right and your website, your reviews, and your word of mouth all work harder.</p>`,
      },
    ],
    ctas: [
      {
        position: "mid",
        headline: "Need help setting up or cleaning up your Google Business Profile?",
        body: "We handle GBP setup and optimisation for Indiana service businesses — getting your profile verified, complete, and visible. Free consultation.",
        primaryLabel: "See what's included",
        primaryHref: "/services/gbp-setup",
      },
      {
        position: "bottom",
        headline: "Get your GBP right",
        body: "Learn more about our Google Business Profile setup service for Indiana businesses.",
        primaryLabel: "GBP Setup service",
        primaryHref: "/services/gbp-setup",
        secondaryLabel: "Book a consultation",
        secondaryHref: "/#contact",
      },
    ],
    relatedService: { label: "GBP Setup", href: "/services/gbp-setup" },
  },
  {
    slug: "website-cost-small-business-indiana",
    title: "Website Cost for Small Businesses in Indiana | JadorWorks Blog",
    headline: "How much does a website cost for a small business in Indiana?",
    description: "From free to custom-built — a straight breakdown of every option, what you get at each price point, and how to decide what your Indiana service business actually needs.",
    category: "Website Design",
    readTime: "7 min",
    date: "2026-03-29",
    dateLabel: "March 2026",
    keyPoints: [
      "What you get at each price point, from free to custom",
      "Why the cheapest options often cost more in the long run",
      "What separates a website that works from one that just exists",
      "What JadorWorks offers and how to find out what's right for your business",
    ],
    sections: [
      {
        heading: "",
        content: `<p>The honest answer is: anywhere from nothing to several thousand dollars. And the range matters, because what you get at each price point is dramatically different — not just in how the site looks, but in whether it actually helps your business get found, get calls, and stay running after launch.</p>
<p>Here is a straight breakdown of every option, what you actually get, and how to decide what your business needs.</p>`,
      },
      {
        heading: "The free and DIY options",
        content: `<p>There are genuinely free ways to build a website — Google Sites, WordPress.com on the free plan, Wix or Squarespace on their lowest tiers. If your budget is zero, these are better than nothing.</p>
<p>But they come with real limitations. Free plans typically show the platform's branding on your site. You usually cannot use a custom domain without paying. The designs are generic and hard to customise meaningfully without design experience. And critically — none of these platforms help you with local SEO, Google Business Profile setup, or ongoing maintenance. You build it, you own every problem that comes after.</p>
<p>For a local service business in Indiana trying to compete against established competitors in Carmel, Fishers, or Indianapolis, a free website is rarely a real advantage. It signals to both Google and to potential customers that the business is not yet investing in its online presence.</p>`,
      },
      {
        heading: "Template builders — Wix, Squarespace, and similar",
        content: `<p>Paid plans on template builders typically run between $16 and $49 per month — roughly $200 to $600 per year. For that, you get a custom domain, no platform branding, and access to a library of templates you can customise without writing code.</p>
<p>This is a legitimate option for businesses with the time and inclination to build and maintain their own site. The design quality ceiling is real though — template sites tend to look like template sites, which matters when you are trying to stand out from competitors in the same market. More significantly, template builders do not include local SEO setup, Google Business Profile management, or any form of ongoing professional support. If something breaks or you need to make updates, that responsibility falls to you.</p>
<p>For a sole operator or a very new business testing demand, a paid template builder is a reasonable starting point. For an established service business competing for real search visibility in Indiana, it is usually a gap rather than a solution.</p>`,
      },
      {
        heading: "Freelancers",
        content: `<p>A freelance web designer in Indiana might charge anywhere from $500 to $5,000 for a website build, depending on their experience level, what is included, and how complex the project is. At the lower end, you are typically getting a template with some customisation. At the higher end, you may be getting a genuinely custom-designed site with better SEO foundations.</p>
<p>The challenge with freelancers is variability. Great freelancers can be excellent — the issue is that outcomes vary widely depending on the individual's availability, reliability, technical knowledge, and whether they will still be reachable six months after launch when something needs updating. Many freelance-built sites are handed off at launch with no support structure, no maintenance agreement, and no guarantee of future availability.</p>
<p>The other gap is specialisation. A freelancer who designs websites for all kinds of businesses — restaurants, retail, services — may not have deep knowledge of what an HVAC company or a home care provider specifically needs to rank locally and convert visitors into calls.</p>`,
      },
      {
        heading: "Agencies",
        content: `<p>Traditional web agencies — the kind with a full team, a formal process, and account managers — typically start at $5,000 and go well into the tens of thousands for a local service business website. For that budget, you generally get custom design, professional copywriting, technical SEO implementation, and structured ongoing support.</p>
<p>For many small service businesses in Indiana, this is simply not the right price point. The ROI is there for larger businesses with larger margins, but for an HVAC company or a landscaping business just getting established online, a five-figure website investment is difficult to justify before the site has proven its value.</p>`,
      },
      {
        heading: "What JadorWorks offers",
        content: `<p>JadorWorks Web Studio offers three tiers for Indiana service businesses.</p>
<p>The Starter package covers a core website of up to five pages — mobile-first, fast-loading, and built to convert visitors into calls — alongside Google Business Profile setup or cleanup, a local SEO foundation built into the page structure from day one, and launch support and handoff.</p>
<p>The Growth package expands on Starter with additional service and location pages, deeper content structure for search, enhanced Google Business Profile optimisation, and priority support and refinement. This is the right fit for businesses that want to compete more aggressively for local search visibility across multiple cities or service types.</p>
<p>The Custom tier is for businesses with more specific needs — custom scope and strategy, expanded page structure, advanced integrations, and a tailored build based on your business.</p>
<p>Monthly care plans are available separately for hosting, updates, and ongoing support after your site launches. Every package starts with a free consultation and includes a review and approval process before anything goes live.</p>
<p>The best way to know which package is right for your business is to have a quick conversation. There is no pressure and no commitment required to find out more.</p>`,
      },
      {
        heading: "How to decide what your business needs",
        content: `<p>If you are a service business in Indiana — HVAC, remodeling, landscaping, home care, cleaning, or trades — and your goal is to get found on Google, generate calls, and build credibility with potential customers, here is a quick decision guide:</p>
<ul>
<li><strong>Choose DIY</strong> if your budget is near zero and you can handle setup and updates yourself.</li>
<li><strong>Choose a template builder</strong> if speed matters more than differentiation and you have time to manage it.</li>
<li><strong>Choose a freelancer</strong> if you trust the individual and ongoing support is clearly defined upfront.</li>
<li><strong>Choose JadorWorks</strong> if the goal is local visibility, credibility, and lead generation — with Google Business Profile and local SEO included from day one.</li>
</ul>
<p>The question is not whether you can afford a professional website. The question is how much you are currently losing to competitors who have one.</p>`,
      },
    ],
    ctas: [
      {
        position: "mid",
        headline: "Ready to find out what's right for your business?",
        body: "We work with Indiana service businesses to build websites that get found and get calls — with Google Business Profile setup and local SEO included. Free consultation, no commitment.",
        primaryLabel: "Book a Free Consultation",
        primaryHref: "/#contact",
      },
      {
        position: "bottom",
        headline: "See what we build",
        body: "Browse website examples built for Indiana service businesses.",
        primaryLabel: "See our packages",
        primaryHref: "/services",
        secondaryLabel: "View demo sites",
        secondaryHref: "/demos",
      },
    ],
    relatedService: { label: "HVAC Website Design", href: "/services/hvac-website-design" },
    relatedDemo: { label: "Demo Sites", href: "/demos" },
  },
  // ── Article 4: Local SEO ──────────────────────────────────
  {
    slug: "local-seo-home-service-business-indiana",
    title: "What Local SEO Means for Home Service Businesses in Indiana | JadorWorks Blog",
    headline: "What local SEO actually means for a home service business in Indiana.",
    description: "Local SEO is not a single switch you flip. Learn how your website, Google Business Profile, reviews, and service pages work together to get your Indiana business found.",
    category: "Local SEO",
    readTime: "6 min",
    date: "2026-04-01",
    dateLabel: "April 2026",
    keyPoints: [
      "What local SEO is and what it is not",
      "How your website, GBP, reviews, and service pages work together",
      "Why ranking locally takes more than a good homepage",
      "The most common mistakes Indiana service businesses make",
      "What a strong local SEO foundation actually includes",
    ],
    sections: [
      {
        heading: "",
        content: `<p>Ask ten small business owners what local SEO means and you will get ten different answers — most of them partially right. It is not a single thing you switch on. It is a combination of decisions, structures, and signals that tell Google your business exists, where it operates, and whether it deserves to show up when someone nearby is looking for what you offer.</p>
<p>For an HVAC company in Fishers, a landscaping business in Avon, or a home care provider in Carmel, local SEO is the difference between appearing on the first page of results and not appearing at all.</p>`,
      },
      {
        heading: "What local SEO is — and what it is not",
        content: `<p>Local SEO is the practice of making your business visible to people searching for your services in a specific geographic area. When someone in Noblesville searches "plumber near me" or "landscaping company Carmel IN," local SEO determines whether your business appears in the results or whether your competitor's does.</p>
<p>It is not a plugin you install. It is not a one-time fix. And it is not the same as general SEO, which is focused on ranking for broad or national search terms. Local SEO is specifically about connecting your business to customers in the cities, counties, and neighbourhoods you actually serve.</p>`,
      },
      {
        heading: "The four things that work together",
        content: `<p>Local search visibility is not built on any single element. It is built on how four things interact.</p>
<p>Your <strong>website</strong> provides the foundation — the structure, the page headings, the service descriptions, and the technical signals that tell search engines what your business does and where it does it. A website without this foundation does almost nothing for local search, no matter how well it looks.</p>
<p>Your <strong>Google Business Profile</strong> tells Google you are a real, verified business at a real location or service area. A complete, accurate, and actively maintained GBP dramatically increases your chances of appearing in the local map pack — the three businesses that appear at the top of Google when someone searches locally.</p>
<p>Your <strong>reviews</strong> signal trust and authority. Google factors the volume, recency, and rating of your reviews into where you rank. In many cases, a business with consistent recent reviews often has a visibility advantage over an older business with a higher average rating but fewer total reviews — though search systems are not deterministic and many factors play a role.</p>
<p>Your <strong>service and location pages</strong> extend your reach beyond your homepage. A single homepage with "we serve Indianapolis" is much weaker than individual pages targeting "HVAC repair Carmel IN," "furnace installation Fishers," and "plumbing service Noblesville." Each page is an additional signal that tells Google — and potential customers — exactly what you offer and where.</p>`,
      },
      {
        heading: "Why your homepage alone is not enough",
        content: `<p>Most small business websites in Indiana have one page doing all the work — a homepage that mentions the city name somewhere in the text and hopes for the best. That approach consistently underperforms against competitors who have built out proper service and location page structures.</p>
<p>Google wants to serve the most relevant result for a specific search. "AC repair Greenwood Indiana" is a specific search. A page titled "AC Repair in Greenwood, Indiana" with content specifically about that service in that city often has a meaningful advantage over a homepage that mentions Greenwood in passing.</p>
<p>This does not mean you need hundreds of pages. It means the pages you do have need to be structured deliberately around the services and service areas that matter to your business.</p>`,
      },
      {
        heading: "The most common mistakes Indiana service businesses make",
        content: `<p>Listing a city name on the homepage without building it into the page title or heading structure. This is the most frequently missed opportunity — a city name buried in a paragraph does almost nothing compared to a city name in a page title or H1 heading.</p>
<p>Having no service area defined in the Google Business Profile. Without this, Google may only show your business to people searching near your business address rather than across the full area you serve.</p>
<p>Ignoring reviews entirely. A business with a small number of reviews will typically lose ground over time to a competitor who is consistently collecting new ones in the same market.</p>
<p>Having no pages dedicated to specific services. Bundling all services onto a single page is a common shortcut that limits how many relevant searches your site can rank for.</p>`,
      },
      {
        heading: "What a solid local SEO foundation includes",
        content: `<p>Every JadorWorks website is built with local search in mind from the first line of code. That means correct page title and heading structure, service and location pages where applicable, FAQPage and LocalBusiness schema markup, Google Business Profile setup, and a sitemap submitted to Google Search Console. These are not add-ons — they are part of how we build.</p>`,
      },
    ],
    ctas: [
      {
        position: "mid",
        headline: "Want local SEO built into your website from day one?",
        body: "We structure every JadorWorks website for local search — correct page hierarchy, service area pages, schema markup, and GBP setup all included. Free consultation.",
        primaryLabel: "See what\u2019s included",
        primaryHref: "/services/local-seo",
      },
      {
        position: "bottom",
        headline: "See how we build for local search",
        body: "Learn more about our Local SEO service or browse website examples for Indiana service businesses.",
        primaryLabel: "Local SEO service",
        primaryHref: "/services/local-seo",
        secondaryLabel: "View demo sites",
        secondaryHref: "/demos",
      },
    ],
    relatedService: { label: "Local SEO", href: "/services/local-seo" },
    relatedDemo: { label: "Demo Sites", href: "/demos" },
  },
  // ── Article 5: Remodeling Website Design ──────────────────
  {
    slug: "remodeling-website-design-indianapolis",
    title: "What Homeowners Look for on a Remodeling Website | JadorWorks Blog",
    headline: "What homeowners look for on a remodeling company website before they request an estimate.",
    description: "Remodeling is a high-trust, high-spend decision. Learn what homeowners actually evaluate on your website before they pick up the phone — and what your site needs to include.",
    category: "Website Design",
    readTime: "6 min",
    date: "2026-04-01",
    dateLabel: "April 2026",
    keyPoints: [
      "Why homeowners research remodelers so carefully before reaching out",
      "The trust signals that matter most at each stage of their decision",
      "What a remodeling website needs to include to convert visitors",
      "What before-and-after galleries actually communicate to prospective clients",
      "What JadorWorks builds for remodeling companies",
    ],
    sections: [
      {
        heading: "",
        content: `<p>Remodeling is one of the highest-trust, highest-spend decisions a homeowner makes. Before anyone picks up the phone to request an estimate, they spend time on your website evaluating whether you are worth calling. What they find in that time — or fail to find — determines whether they contact you or move on to the next result.</p>
<p>Understanding what homeowners are actually looking for changes how you build and present your online presence.</p>`,
      },
      {
        heading: "Why homeowners research remodelers before they call",
        content: `<p>Home remodeling projects — whether a kitchen, a bathroom, a basement, or a full addition — represent a significant financial and logistical commitment for most families. Unlike calling a plumber for a leak repair or a landscaper for a lawn cut, hiring a remodeling contractor is a decision people sit with for days or weeks before they make contact.</p>
<p>During that time, they look at your website carefully. They read your service descriptions. They look at your photos. They check whether you have reviews and whether those reviews sound believable. They try to understand whether you work on projects like theirs. And they make a judgment call about whether you feel like a company they can trust in their home.</p>
<p>A weak or missing website does not just lose you a lead. It removes you from the consideration set entirely.</p>`,
      },
      {
        heading: "The trust signals that matter most",
        content: `<p>Not all content is equal on a remodeling website. Homeowners at this stage of a decision respond to specific types of information more than others.</p>
<p><strong>Photos of completed projects</strong> are the single most powerful element on a remodeling website. They communicate quality directly, without requiring the visitor to interpret marketing language. Before-and-after pairs are especially effective — they show what you started with and what you delivered, which gives a prospective client a realistic picture of what working with you looks like. A portfolio page with real project photos consistently outperforms one without.</p>
<p><strong>Years in business and service area</strong> matter. A homeowner wants to know you have a track record and that you operate in their area. These should be stated clearly, not buried.</p>
<p><strong>Licensed and insured status</strong> needs to be visible without scrolling. This is not optional for a remodeling company. Homeowners hiring for high-value work will not assume you are licensed — they need to see it stated.</p>
<p><strong>A clear process section</strong> reduces anxiety. Many homeowners hold back from requesting an estimate because they are not sure what happens next — will they be pressured? How long does it take? What information do they need to provide? A brief, clear process section answering these questions converts hesitant visitors into enquiries.</p>`,
      },
      {
        heading: "What a remodeling website needs to include",
        content: `<p>A clear service list covering every type of project you take on — kitchen remodeling, bathroom renovations, basement finishing, additions, whole-home renovations. Each service should have its own description explaining what is included and what kinds of projects you typically handle.</p>
<p>A project gallery with real photos, organised by project type where possible. The more specific the better — a homeowner thinking about a kitchen remodel wants to see kitchens, not a mixed feed of every project type.</p>
<p>A service area section that lists the specific cities and communities you serve in the Indianapolis metro and across Indiana. This helps both the homeowner evaluating your site and Google deciding when to show it.</p>
<p>A contact or estimate request form that is simple and low-pressure. Name, phone number, type of project, and a brief description is enough. The goal is to lower the barrier to making contact — not to gather every piece of information before the first conversation.</p>`,
      },
      {
        heading: "What JadorWorks builds for remodeling companies",
        content: `<p>Our remodeling demo — Cornerstone Renovations — shows exactly how these elements come together in a website built for the Indianapolis market. Full service descriptions, project gallery structure, trust signals, service area coverage, and a clear estimate request CTA.</p>`,
      },
    ],
    ctas: [
      {
        position: "mid",
        headline: "Ready to show homeowners what you can do?",
        body: "We build websites for remodeling contractors that lead with trust, showcase real work, and make it easy for homeowners to take the next step. Free consultation.",
        primaryLabel: "See the Cornerstone Renovations demo",
        primaryHref: "/demos/remodeling",
      },
      {
        position: "bottom",
        headline: "See how we build for remodeling companies",
        body: "Browse the Cornerstone Renovations demo or learn about our remodeling website packages.",
        primaryLabel: "See the demo",
        primaryHref: "/demos/remodeling",
        secondaryLabel: "Remodeling packages",
        secondaryHref: "/services/remodeling-website-design",
      },
    ],
    relatedService: { label: "Remodeling Website Design", href: "/services/remodeling-website-design" },
    relatedDemo: { label: "Cornerstone Renovations", href: "/demos/remodeling" },
  },
  // ── Article 6: Home Care Trust Signals ────────────────────
  {
    slug: "home-care-website-trust-signals-indiana",
    title: "Trust Signals Every Home Care Website Needs | JadorWorks Blog",
    headline: "The trust signals every home care website needs before a family will call.",
    description: "Families searching for in-home care need more than a service list. Learn the trust signals, tone, and content that make a home care website convert.",
    category: "Website Design",
    readTime: "6 min",
    date: "2026-04-01",
    dateLabel: "April 2026",
    keyPoints: [
      "Why home care decisions are different from every other service category",
      "What families need to see before they trust a provider enough to call",
      "How caregiver credentials, communication, and service clarity build confidence",
      "Why FAQs and testimonials play a special role in this category",
      "What JadorWorks builds for home care businesses",
    ],
    sections: [
      {
        heading: "",
        content: `<p>A family searching for in-home care for a parent or loved one is not just looking for a service. They are looking for someone they can trust with a person they love, in a situation that is often stressful, emotional, and time-sensitive. The decision they make is rarely quick and almost never casual.</p>
<p>Your website is frequently the first interaction that family has with your business. What they find there — and how it makes them feel — determines whether they reach out or whether they keep looking.</p>`,
      },
      {
        heading: "Why this decision is different",
        content: `<p>When a homeowner calls an HVAC company, the stakes are comfort and cost. When a family reaches out to a home care provider, the stakes are safety, dignity, and the wellbeing of someone they love. That emotional weight changes what visitors need from your website entirely.</p>
<p>A family in this situation is not comparison shopping the way a homeowner might shop for a landscaper. They are searching for reassurance. They want to feel, before they ever speak to anyone, that the people they are about to call are trustworthy, professional, compassionate, and experienced. If your website does not create that feeling quickly, they will leave and keep looking.</p>
<p>This is why a home care website that simply lists services and a phone number consistently underperforms. The format matters as much as the content.</p>`,
      },
      {
        heading: "What families need to see before they trust a provider",
        content: `<p><strong>Caregiver credibility</strong> is the most important trust signal in this category. Families want to know that the people who will be in their loved one's home are vetted, trained, and supervised. This means stating your background check process clearly, listing any certifications or training requirements, and explaining how your caregivers are supervised and supported.</p>
<p><strong>Transparent service descriptions</strong> matter enormously. Many families searching for home care are doing so for the first time — they may not know the difference between companionship care and personal care, or what a respite service involves. A website that explains each service clearly, in plain language, without jargon, removes a significant barrier to contact.</p>
<p><strong>Testimonials from real families</strong> carry more weight in this category than in almost any other. A review that says "they cared for my mother for two years and I never had a moment of worry" communicates something a service description cannot. Testimonials should be specific, attributed, and positioned prominently.</p>
<p><strong>A warm, professional visual tone</strong> is not decorative — it is strategic. Images of caregivers with clients, families feeling at ease, and home environments that look comfortable and safe all contribute to the emotional register that home care families are evaluating. Stock photography that looks generic or clinical works against you.</p>`,
      },
      {
        heading: "How FAQs reduce the barrier to contact",
        content: `<p>Families searching for home care often have specific concerns they hesitate to raise in an initial phone call. Common questions include: How do you match caregivers to clients? What happens if a caregiver is sick? Can we request a different caregiver if it is not working? Is there a minimum number of hours? What is included in a care plan?</p>
<p>A FAQ section that addresses these questions directly does two things. It shows the family that you understand their concerns and have thought carefully about them. And it reduces the anxiety that can prevent someone from making that first call, because they no longer feel like they are going in blind.</p>
<p>This is one of the reasons FAQPage schema is particularly valuable for home care websites — these questions appear directly in search results, which means you can begin answering a family's concerns before they have even clicked through to your site.</p>`,
      },
      {
        heading: "What JadorWorks builds for home care businesses",
        content: `<p>Our home care demo — Graceful Living Home Care — is built specifically around the trust signals that matter to families in the Indianapolis area. Warm visual tone, clear service descriptions, caregiver credibility section, testimonials, FAQ, and a low-pressure consultation CTA.</p>`,
      },
    ],
    ctas: [
      {
        position: "mid",
        headline: "Building a website that earns trust for your home care business?",
        body: "We build websites for home care providers that lead with warmth, establish credibility, and make it easy for families to take the first step. Free consultation.",
        primaryLabel: "See the Graceful Living Home Care demo",
        primaryHref: "/demos/home-care",
      },
      {
        position: "bottom",
        headline: "See how we build for home care providers",
        body: "Browse the Graceful Living Home Care demo or learn about our home care website packages.",
        primaryLabel: "See the demo",
        primaryHref: "/demos/home-care",
        secondaryLabel: "Home care packages",
        secondaryHref: "/services/home-care-website-design",
      },
    ],
    relatedService: { label: "Home Care Website Design", href: "/services/home-care-website-design" },
    relatedDemo: { label: "Graceful Living Home Care", href: "/demos/home-care" },
  },
  // ── Article 7: Landscaping Website Design ─────────────────
  {
    slug: "landscaping-website-design-indiana",
    title: "Why Landscaping Companies Lose Leads Before Spring | JadorWorks Blog",
    headline: "Why landscaping companies lose leads before spring even starts.",
    description: "Homeowners book landscaping companies weeks before the season begins. If your website is not ready, you are losing leads before spring even starts.",
    category: "Website Design",
    readTime: "6 min",
    date: "2026-04-01",
    dateLabel: "April 2026",
    keyPoints: [
      "How seasonal demand actually works for landscaping businesses",
      "Why homeowners research landscapers online before they ever call",
      "How homeowners judge the quality of a landscaping company visually",
      "What a landscaping website needs to show to win the comparison",
      "How JadorWorks helps landscaping businesses get ready before busy season",
    ],
    sections: [
      {
        heading: "",
        content: `<p>Every spring, homeowners across Indiana start thinking about their yards. They search for landscaping companies, compare a few options, and make a decision — often before a single phone call happens. By the time they reach out to request a quote, many of them have already decided which company feels like the right fit.</p>
<p>If your website is not ready before that season begins, you are not losing leads during spring. You are losing them weeks before it.</p>`,
      },
      {
        heading: "How seasonal demand really works",
        content: `<p>The landscaping busy season in Indiana typically runs from April through October. But the decisions that fill that season are made earlier — in February and March, when homeowners start thinking ahead, requesting quotes, and booking companies for the spring.</p>
<p>A landscaping company that builds or updates its website in April is competing for the work that is already being booked. A company that has a strong, search-optimised website in place before the season turns is competing for the full wave of demand as it builds.</p>
<p>The same logic applies to autumn cleanups and early snow removal enquiries. The homeowners who book those services in advance are doing their research before the season, not during it.</p>`,
      },
      {
        heading: "Why homeowners research landscaping companies online first",
        content: `<p>Landscaping is a visual service. Homeowners want to see what you can do before they commit to a quote, let alone a project. They look at photos of completed work, read service descriptions to see if you offer what they need, and check whether you cover their neighbourhood.</p>
<p>A landscaping company with a professional website, clear project photos, and specific service area information consistently wins more comparisons than one relying only on a GBP listing and referrals. The referral gets them in the door — the website closes the gap.</p>`,
      },
      {
        heading: "How homeowners judge a landscaping company visually",
        content: `<p>This is where many landscaping websites miss. The visual quality of your photos does not just show what you build — it signals the quality of company you are. A homeowner who sees sharp, well-lit photos of a completed patio or a transformed front yard makes a different judgment than one who sees dark phone photos or no photos at all.</p>
<p>There is also a positioning question homeowners read from your imagery. A company whose photos show only lawn mowing and leaf cleanup reads as a maintenance operation. A company whose photos include hardscaping, planting design, and seasonal transformations reads as a full-service landscaping partner capable of larger, more profitable projects. Your photos tell that story whether you intend them to or not.</p>
<p>For landscaping companies with both maintenance and design capabilities, the website needs to make the design capability visible — not buried at the bottom of a services list, but shown prominently with photos that demonstrate the range of what you deliver.</p>
<p>Seasonal credibility matters too. Indiana homeowners thinking about spring planting want to see spring and summer work. Homeowners planning a patio want to see completed hardscaping. Showing the right work in the right context builds relevance faster than any service description.</p>`,
      },
      {
        heading: "What a landscaping website needs to show",
        content: `<p>Photos of real work are the starting point — lawns, landscape installs, hardscaping, seasonal cleanup. Before-and-after pairs are particularly effective because they demonstrate the transformation, not just the finished result.</p>
<p>A clear service list covering every offering, with specific descriptions rather than vague category names. "Lawn maintenance" is less useful than "weekly mowing, edging, and seasonal fertilisation for residential properties." Specificity builds confidence and helps search engines understand what you offer.</p>
<p>A service area section listing the specific cities, towns, and counties you cover in Indiana. For most landscaping companies in the Indianapolis area, this means Marion County plus surrounding communities — Hendricks, Hamilton, Johnson, Boone. Stating this clearly helps both the potential customer evaluating your site and Google deciding when to show it.</p>
<p>A prominent quote request CTA that appears more than once on the page. The decision to request a quote is often made quickly — the form needs to be reachable from wherever on the page that decision happens.</p>`,
      },
      {
        heading: "What JadorWorks builds for landscaping companies",
        content: `<p>Our landscaping demo — GreenLine Landscaping — demonstrates how photos, service descriptions, service area targeting, and a quote CTA come together in a site built for Indiana homeowners.</p>`,
      },
    ],
    ctas: [
      {
        position: "mid",
        headline: "Getting your landscaping business ready for the season?",
        body: "We build websites for landscaping companies in Indiana with project galleries, service area targeting, and quote request forms built in. Free consultation.",
        primaryLabel: "See the GreenLine Landscaping demo",
        primaryHref: "/demos/landscaping",
      },
      {
        position: "bottom",
        headline: "See how we build for landscaping companies",
        body: "Browse the GreenLine Landscaping demo or learn about our landscaping website packages.",
        primaryLabel: "See the demo",
        primaryHref: "/demos/landscaping",
        secondaryLabel: "Landscaping packages",
        secondaryHref: "/services/landscaping-website-design",
      },
    ],
    relatedService: { label: "Landscaping Website Design", href: "/services/landscaping-website-design" },
    relatedDemo: { label: "GreenLine Landscaping", href: "/demos/landscaping" },
  },
  // ── Article 8: Signs Your Website Is Costing You Leads ────
  {
    slug: "signs-your-small-business-website-is-costing-you-leads",
    title: "9 Signs Your Website Is Costing You Leads | JadorWorks Blog",
    headline: "9 signs your small business website is costing you leads.",
    description: "A website that looks fine can still lose you customers every day. Here are the nine most common signs — and what to fix first if your budget and time are limited.",
    category: "Website Design",
    readTime: "7 min",
    date: "2026-04-01",
    dateLabel: "April 2026",
    keyPoints: [
      "The nine most common website failures that cost small businesses leads",
      "Why some issues are more damaging than others",
      "What to fix first if your budget and time are limited",
      "When it is time to consider a full rebuild",
    ],
    sections: [
      {
        heading: "",
        content: `<p>A website that looks fine can still be losing you customers every day. The problem is usually not obvious — there is no error message, no alert, no notification that a potential customer just left your site and called your competitor instead. The loss is invisible, and that is what makes it expensive.</p>
<p>Here are the nine most common signs that your website is working against you — and what to do about each one.</p>`,
      },
      {
        heading: "1. There is no clear call to action",
        content: `<p>The most common failure on small business websites is the absence of a clear, prominent next step. If a visitor has to hunt for your phone number, or if your contact form is buried three scrolls deep, you are losing the people who were ready to reach out.</p>
<p>Every page on your site should have an obvious answer to the question "what do I do next?" — a phone number above the fold, a contact button in the navigation, a form that is easy to find. If your site makes people work to contact you, most of them will not bother.</p>
<p><strong>Fix:</strong> Move your phone number to the top of every page. Add a contact CTA after every major section. Make the form the easiest thing to find on the page.</p>`,
      },
      {
        heading: "2. Your trust signals are weak or missing",
        content: `<p>Would a stranger trust your business based on what your website says? Years in business, licensing and insurance status, service guarantees, certifications, review counts — these are the signals that separate "maybe" from "I'm calling them."</p>
<p>Many small business websites either omit these entirely or mention them once in an about page that most visitors never reach.</p>
<p><strong>Fix:</strong> Put your most important trust signals — licensed and insured, years in business, review count — near the top of your homepage, visible without scrolling.</p>`,
      },
      {
        heading: "3. Your city and service area are not in your page titles or headings",
        content: `<p>Mentioning Indianapolis once in a paragraph does almost nothing for local search. Google uses page titles, meta descriptions, H1 and H2 headings, and structured schema data to understand where your business operates. If those elements do not include your city and service area, you are likely invisible to many of the local searches that matter most.</p>
<p><strong>Fix:</strong> Make sure your page title, H1 heading, and at least one H2 heading on your homepage include your primary city and service type. "HVAC Repair in Indianapolis" as an H1 beats "Welcome to Our Business" every time.</p>`,
      },
      {
        heading: "4. Your site is slow or broken on mobile",
        content: `<p>More than half of local service searches happen on a phone. If your site loads slowly, has text that is too small to read without pinching, has buttons that are too close together to tap accurately, or has layout elements that break on a small screen, you are losing a significant portion of your potential customers before they have read a single word.</p>
<p><strong>Fix:</strong> Test your site on your own phone. If anything feels difficult to use, it needs to be fixed. A Google PageSpeed Insights test will also identify specific performance issues.</p>`,
      },
      {
        heading: "5. Your services page is thin or vague",
        content: `<p>"We offer quality services for all your needs" is not a services page. It is a placeholder. Potential customers reading your services page are trying to determine whether you can handle their specific situation — a vague description gives them nothing to evaluate and no reason to call.</p>
<p><strong>Fix:</strong> Give each service its own clear description that explains what is included, what kinds of situations it addresses, and what the customer can expect. Specific language builds confidence. Vague language creates doubt.</p>`,
      },
      {
        heading: "6. Your Google Business Profile is disconnected from your site",
        content: `<p>Your GBP and your website should tell a consistent story — same business name, same phone number, same address or service area, same services. When they contradict each other or when one is significantly more complete than the other, Google loses confidence in the accuracy of your information and your local visibility can suffer.</p>
<p><strong>Fix:</strong> Check that your GBP and website are completely consistent. Same name, address, and phone number format everywhere. Same service list. A link from your GBP to your website that works correctly.</p>`,
      },
      {
        heading: "7. There is no clear reason to choose you over a competitor",
        content: `<p>If a potential customer opened your website and your three nearest competitors' websites side by side, would yours give them a reason to choose you? Most small business websites answer the question "what do you do?" but not the question "why should I call you specifically?"</p>
<p>Your years in business, your service guarantee, your response time, your specialisation in a particular type of work, your local roots in the community — whatever makes your business genuinely different needs to be stated clearly and early.</p>
<p><strong>Fix:</strong> Write a one-sentence differentiator and put it in your hero section. "Indianapolis HVAC company serving homeowners for 15 years — flat-rate pricing, same-day availability" is a reason to choose you. "Quality HVAC services for your home" is not.</p>`,
      },
      {
        heading: "8. You have few or no reviews visible on your site",
        content: `<p>Potential customers check reviews before they call. If your website shows no social proof — no review count, no star rating, no testimonials — visitors have to go looking for it themselves. Some will. Many will not.</p>
<p><strong>Fix:</strong> Embed a review count and average rating from Google on your homepage. Add three to five real testimonials with names and locations. If you do not have reviews yet, make getting them a priority — ask every satisfied customer directly.</p>`,
      },
      {
        heading: "9. The design looks outdated or unprofessional",
        content: `<p>Design is trust. A website that looks like it was built a decade ago signals to a potential customer — consciously or not — that the business behind it may not be keeping up either. This is especially damaging for service businesses where the quality of work is difficult to assess before hiring.</p>
<p>You do not need an elaborate or expensive website. You need one that looks current, loads correctly, and presents your business with the same level of professionalism you bring to the work itself.</p>`,
      },
      {
        heading: "When it is time for a rebuild",
        content: `<p>If more than three of these issues apply to your current site, a rebuild is almost certainly more efficient than patching individual problems. A site with structural issues — bad mobile experience, wrong page structure, missing trust signals throughout — needs to be rebuilt from a strong foundation, not repaired incrementally.</p>`,
      },
      {
        heading: "What to fix first",
        content: `<p>Not everything here has equal weight. If your time and budget are limited, work through this priority order.</p>
<p><strong>Fix these first</strong> — they have the biggest immediate impact on whether someone contacts you at all: your call to action, your trust signals, and your mobile experience. These three affect every visitor regardless of how they found you.</p>
<p><strong>Fix these next</strong> — they determine how well you get found in the first place: your service page descriptions, your local page structure and city targeting, and your Google Business Profile consistency. These build search visibility over time.</p>
<p><strong>Fix these last</strong> — they matter but only once the foundations are right: your review volume, your differentiator language, and the overall design polish. These are refinements that compound on a strong base.</p>
<p>The businesses that generate consistent leads from their websites are not the ones with the most features or the most content. They are the ones with sites that are fast, clear, trustworthy, and easy to act on.</p>`,
      },
    ],
    ctas: [
      {
        position: "mid",
        headline: "Need help setting up or cleaning up your Google Business Profile?",
        body: "We handle GBP setup and optimisation for Indiana service businesses — getting your profile verified, complete, and visible. Free consultation.",
        primaryLabel: "Learn more about GBP Setup",
        primaryHref: "/services/gbp-setup",
      },
      {
        position: "bottom",
        headline: "See what a strong website looks like",
        body: "Browse website examples built for Indiana service businesses or see our packages.",
        primaryLabel: "See demo sites",
        primaryHref: "/demos",
        secondaryLabel: "See our packages",
        secondaryHref: "/services",
      },
    ],
    relatedService: { label: "HVAC Website Design", href: "/services/hvac-website-design" },
    relatedDemo: { label: "Demo Sites", href: "/demos" },
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogArticles.map((a) => a.slug);
}
