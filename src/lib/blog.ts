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
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogArticles.map((a) => a.slug);
}
