/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.

   Source: Shivane_Kapoor_Resume_3.pdf
   Nothing here is invented beyond light connective phrasing. Anywhere
   the resume was ambiguous, a TODO marks it rather than guessing.
   ================================================================== */

export const PROFILE = {
  first: "Shivane",
  last: "Kapoor",
  fullName: "Shivane Kapoor",
  tagline:
    "Studying how people decide — what they buy, what they believe, and what holds their attention.",
  location: "Chennai, Tamil Nadu, India",
  email: "",
  phone: "",
  photo: "",
  aboutPhoto: "",
  bio: [
    "I'm an IB Diploma student at Hiranandani Upscale School, Chennai, working across business, finance, real estate, and consumer behaviour. What ties my work together is a single question: how do people actually make decisions, and who is quietly shaping them?",
    "My published research, written under the guidance of a Cornell University professor, examined labelling practices in the food and consumer products industry — how claims on a package shape perception, and where institutional trust breaks down. At the Dalai Lama Centre for Ethics & Transformative Values at MIT, I turned that question inward: what constant digital stimulation is doing to the attention and inner lives of young people.",
    "Outside research, I build and run things. I've interned across marketing, customer acquisition, and product at one of India's largest transformation-education companies, won Best Business Idea at IIT Madras' Young CEO Program, captained a 200-student school house, and grown a sports media community from zero to roughly 15,000 followers in four months. I also sold 276 plates of noodles at a school fair — which taught me more about margins than any case study.",
  ],
  socials: {
    github: "", // ← Contact card stays hidden while empty
    scholar: "",
    linkedin: "", // ← add if you have one
    instagram: "", // ← add the sports media page handle if you want it public
    twitter: "",
  },
  cv: "/Shivane_Kapoor_CV.pdf",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research", to: "/research" },
  {
    label: "Experience",
    children: [
      { label: "Programmes", to: "/work" },
      { label: "Ventures", to: "/projects" },
    ],
  },
  { label: "Awards & Recognition", to: "/awards" },
  { label: "Leadership", to: "/volunteering" },
  { label: "Contact", to: "/contact" },
];

/* ==================================================================
   RESEARCH — two distinct pieces of work, presented separately.

   Wording note: the resume describes the Cornell piece as a published
   research article and the MIT piece as a research internship with five
   named deliverables. Neither is described as a peer-reviewed journal
   paper, and the copy below deliberately does not upgrade them.
   ================================================================== */

export const RESEARCH = [
  {
    slug: "consumer-trust-labelling",
    title: "The Health Industry Is Lying to You: Why You Can't Trust the Label Anymore",
    subtitle: "Published Research Article",
    org: "Written under the guidance of Prof. Daniel W. Hooker, Cornell University",
    dates: "2025",
    status: "PUBLISHED",
    lead: "An investigation into labelling practices in the food and consumer products industry — how health claims on a package shape public perception, and what happens to institutional trust when the label and the product diverge.",
    sections: [
      {
        heading: "Motivation",
        body: "Shoppers rarely read a product; they read its label. That makes the label the single most consequential piece of design in the consumer goods industry — and the one with the widest gap between what it implies and what it is legally required to prove. I wanted to understand how that gap is built and who benefits from it.",
      },
      {
        heading: "Question",
        body: "How do labelling practices in the food and consumer products industry shape public perception, and what does the resulting distance between claim and substance do to institutional trust?",
      },
      {
        heading: "Approach",
        body: "The work was researched and written over a sustained collaboration with a university researcher, combining a review of labelling and marketing practices with analysis of how those practices land with the public. The emphasis was on argumentation and evidence rather than on anecdote.",
      },
      {
        heading: "Finding",
        body: "Deceptive and permissive labelling is not a series of isolated failures but a predictable outcome of how claims are regulated and marketed. Trust erodes not because any single claim is false, but because the accumulated distance between implication and substance becomes visible to consumers over time.",
      },
      {
        heading: "Related presentation",
        body: "I later led a Cornell University guest class discussion on deceptive practices in the consumer goods industry, presenting on the scientific mechanisms, public perception, and consumer impact of GLP-1 medications — a case where the gap between marketing narrative and clinical reality is unusually wide.",
      },
      {
        heading: "Why it matters",
        body: "Consumer protection depends on people being able to trust a claim without independently verifying it. Understanding how that trust is manufactured — and spent — is the first step toward regulating it better.",
      },
    ],
    outcomes: [
      "Published on Republic World",
      "Guest class presentation delivered at Cornell University, 2025",
    ],
    pipeline: null,
    tags: [
      "Consumer Behaviour",
      "Research Methodology",
      "Academic Writing",
      "Institutional Trust",
      "Public Perception",
    ],
    link: "", /* TODO: paste the Republic World article URL here */
    featured: true,
  },

  {
    slug: "digital-attention-youth-wellbeing",
    title: "Digital Stimulation, Attention, and the Inner Lives of Young People",
    subtitle: "Research Internship",
    org: "The Dalai Lama Centre for Ethics & Transformative Values at MIT",
    dates: "June – July 2026",
    status: "RESEARCH INTERNSHIP",
    lead: "A study of how constant digital stimulation affects the attention, emotional wellbeing, and inner lives of young people — ending in a framework and toolkit now in use with educators and students.",
    sections: [
      {
        heading: "Motivation",
        body: "Young people are the most measured generation in history and the least equipped to interpret what is being done to their attention. The centre's work sits at the intersection of ethics and lived experience, which made it the right place to ask what sustained digital stimulation actually costs.",
      },
      {
        heading: "Question",
        body: "How does digital stimulation shape the attention, emotional wellbeing, and inner lives of young people — and what would it take for a student to examine their own relationship with it honestly?",
      },
      {
        heading: "Approach",
        body: "The research combined a literature-grounded report with primary input from students, gathered through interviews and a survey. The aim was practical from the outset: not only to describe the problem, but to produce something a teacher or a sixteen-year-old could pick up and use.",
      },
      {
        heading: "Outputs",
        body: "Five deliverables came out of the internship: a research report, the Youth Attention & Wellbeing Toolkit, a presentation deck, a student interview and survey summary, and a public website resource for educators and young people.",
      },
      {
        heading: "Where it went",
        body: "The resulting framework is now shared with educators and students across school, helping both groups examine their relationship with attention, technology, and social media rather than simply being told to use less of it.",
      },
    ],
    outcomes: [
      "Research report, toolkit, presentation deck, and student interview & survey summary",
      "Public website resource for educators and young people — theintentionalmind.org",
      "Framework adopted for use with educators and students across school",
    ],
    pipeline: [
      "Literature review on digital stimulation, attention, and adolescent wellbeing",
      "Student interviews and survey to gather primary input",
      "Synthesis into a research report and presentation deck",
      "Translation of findings into the Youth Attention & Wellbeing Toolkit",
      "Publication of a public web resource for educators and young people",
    ],
    tags: [
      "Attention Research",
      "Adolescent Wellbeing",
      "Survey & Interviews",
      "Ethics of Technology",
      "Toolkit Design",
    ],
    link: "https://theintentionalmind.org",
    featured: true,
  },
];

/* ==================================================================
   PROGRAMMES — internships, summer programmes, and selective cohorts

   TODO on dates: the resume lists the MIT internship as June–July 2026
   and the Being Centred Leaders Program as 2026–2027. Both are carried
   over verbatim. Correct them here if either is a typo.
   ================================================================== */

export const EXPERIENCE = [
  {
    slug: "success-gyan",
    role: "Intern — Customer Acquisition, Marketing, Product & Operations",
    org: "Success Gyan",
    logo: "",
    location: "Chennai, India",
    dates: "June – July 2024",
    meta: "2024 · Chennai ·",
    badge: "Multi-team rotation",
    desc: "Rotated across five functions inside one of India's largest transformation-education companies, seeing a coaching and ecommerce business from the inside.",
    bullets: [
      "Rotated across marketing, lead generation, customer service, HR, and product management",
      "Developed marketing plans and advertising campaigns for digital products",
      "Resolved 10+ customer service requests a day, building direct fluency in customer behaviour and retention",
      "Crewed two multi-day live programmes of roughly 300 participants each — Millionaire Mindset Intensive and Guerrilla Business Intensive",
      "Studied sales and distribution strategy for digital products from inside a functioning funnel",
    ],
    tags: ["Marketing", "Customer Acquisition", "Product Management", "Operations"],
    featured: true,
  },
  {
    slug: "young-ceo-iit-madras",
    role: "Participant — Winner, Best Business Idea",
    org: "Young CEO Program, IIT Madras",
    logo: "",
    location: "IIT Madras, India",
    dates: "2025",
    meta: "2025 · IIT Madras ·",
    badge: "Cohort of 15",
    desc: "Selected for an entrepreneurship programme at IIT Madras and won Best Business Idea for an app-based on-call laundry, dry-cleaning, and tailoring service.",
    bullets: [
      "Built and pitched a service business around an underserved, high-frequency household need",
      "Won Best Business Idea within a cohort of 15",
      "Worked through positioning, unit economics, and go-to-market for an on-demand model",
    ],
    tags: ["Entrepreneurship", "Business Modelling", "Pitching"],
    featured: true,
    /* TODO: confirm the year — the resume lists the award without a date.
       2025 is inferred from surrounding entries. */
  },
  {
    slug: "ut-austin-real-estate",
    role: "Participant",
    org: "Real Estate & Property Management, UT Austin",
    logo: "",
    location: "Austin, Texas, USA",
    dates: "July 2025",
    meta: "July 2025 · UT Austin ·",
    badge: "Summer programme",
    desc: "Fundamentals of commercial real estate and property management, with a focus on multifamily development and emerging markets.",
    bullets: [
      "Studied commercial real estate and property management fundamentals",
      "Examined multifamily development and emerging-market dynamics",
      "Connected asset-level decisions to the financial logic behind them",
    ],
    tags: ["Real Estate", "Property Management", "Finance"],
    featured: true,
  },
  {
    slug: "ut-austin-psychology",
    role: "Participant",
    org: "Psychology & Mental Well-being, UT Austin",
    logo: "",
    location: "Austin, Texas, USA",
    dates: "July 2025",
    meta: "July 2025 · UT Austin ·",
    badge: "Summer programme",
    desc: "Adolescent psychology, common mental-health conditions, and behavioural science — groundwork for the attention research that followed.",
    bullets: [
      "Studied adolescent psychology and common mental-health conditions",
      "Covered behavioural science and its application to everyday decision-making",
      "Built the background that later informed the MIT attention and wellbeing research",
    ],
    tags: ["Psychology", "Behavioural Science"],
    featured: false,
  },
  {
    slug: "salamanca-spanish-immersion",
    role: "Participant",
    org: "Spanish Language Immersion, Salamanca",
    logo: "",
    location: "Salamanca, Spain",
    dates: "Summer 2025",
    meta: "Summer 2025 · Salamanca ·",
    badge: "Immersion",
    desc: "B-level conversational Spanish taught in full immersion, with the language practised through community interaction and daily life rather than the classroom alone.",
    bullets: [
      "Completed B-level conversational classes",
      "Practised the language through daily community interaction",
      "Complements Spanish Ab Initio in the IB Diploma Programme",
    ],
    tags: ["Spanish", "Language Immersion"],
    featured: false,
  },
  {
    slug: "being-centred-leaders",
    role: "Participant",
    org: "Being Centred Leaders Program",
    logo: "",
    location: "Residential",
    dates: "2026 – 27",
    meta: "2026 – 27 · Residential ·",
    badge: "Four-day residential",
    desc: "A residential leadership programme built around 'The Design of a Human Being' — leading from being rather than ego.",
    bullets: [
      "Studied leading from being rather than from ego",
      "Practised listening to the unsaid as a communication discipline",
      "Worked on integrity, humility, and authenticity as leadership fundamentals",
    ],
    tags: ["Leadership", "Communication"],
    featured: false,
  },
];

/* ==================================================================
   VENTURES — things built, run, and sold. The research lives on
   /research; the roles live on /volunteering.
   ================================================================== */

export const PROJECTS = [
  {
    name: "Sports Media Community",
    org: "Founder & Operator",
    meta: "2024 – present",
    desc: "A sports community built on Instagram from zero to roughly 15,000 followers in four months. Everything — editing, posting cadence, engagement — was self-taught, and the page has since grown past a feed into a forum where sports communities actually talk to each other.",
    bullets: [
      "Grew the page from zero to ~15,000 followers in four months",
      "Self-taught video editing, content strategy, and audience engagement",
      "Attracted collaboration offers from businesses on the strength of the audience",
      "Learned what makes an audience stay, which is a different problem from making one arrive",
    ],
    tags: ["Content Strategy", "Video Editing", "Audience Growth", "Community"],
    code: "",
    live: "", /* TODO: add the Instagram URL if you want it linked */
    featured: true,
  },
  {
    name: "Noodles to a Science",
    org: "Food stall — 2023 school fair",
    meta: "2023",
    desc: "A food stall founded, marketed, and operated end to end at the school fair. Menu, pricing, supply, and staffing were all mine to get right, and the numbers were the only feedback that mattered.",
    bullets: [
      "Sold 276 plates for INR 9,000 profit across the fair",
      "Negotiated a distributor relationship to secure supply at a workable cost",
      "Managed a staff of two through service peaks",
      "Handled branding and on-the-day marketing for the stall",
    ],
    tags: ["Entrepreneurship", "Operations", "Negotiation", "Marketing"],
    code: "",
    live: "",
    featured: true,
  },
  {
    name: "On-Call Laundry & Tailoring",
    org: "Young CEO Program, IIT Madras",
    meta: "2025",
    desc: "An app-based on-call laundry, dry-cleaning, and tailoring service, built and pitched inside IIT Madras' Young CEO Program. It won Best Business Idea in a cohort of 15.",
    bullets: [
      "Designed an on-demand service model around a high-frequency household need",
      "Pitched positioning, unit economics, and go-to-market to programme judges",
      "Winner, Best Business Idea — cohort of 15",
    ],
    tags: ["Business Modelling", "On-Demand Services", "Pitching"],
    code: "",
    live: "",
    featured: true,
  },
  {
    name: "The Intentional Mind",
    org: "Public resource — MIT Dalai Lama Centre internship",
    meta: "2026",
    desc: "A public website resource for educators and young people, built as one of five deliverables from the attention and wellbeing research. It packages the findings into something a teacher can hand to a class.",
    bullets: [
      "Turned research findings into a usable public resource",
      "Written for two audiences at once — educators and the students they teach",
    ],
    tags: ["Web Resource", "Science Communication", "Youth Wellbeing"],
    code: "",
    live: "https://theintentionalmind.org",
    featured: false,
  },
];

/* ==================================================================
   AWARDS — recognition only; programmes live on /work and roles on
   /volunteering
   ================================================================== */

export const AWARDS = [
  {
    icon: "🏆",
    title: "Winner, Best Business Idea — Young CEO Program, IIT Madras",
    meta: "Cohort of 15",
    detail:
      "Awarded for an app-based on-call laundry, dry-cleaning, and tailoring service pitched within a 15-person cohort.",
    link: "",
    featured: true,
  },
  {
    icon: "🌍",
    title: "Honourable Mention — HUSMUN",
    meta: "2024 – 25",
    detail:
      "Recognised across two years of inter-school Model United Nations competition for research, negotiation, and policy analysis.",
    link: "",
    featured: true,
  },
  {
    icon: "🏀",
    title: "ISSO Basketball — National School Level",
    meta: "2024",
    detail:
      "Power forward at national school level; top-10 finish among 48 international schools.",
    link: "",
    featured: true,
  },
  {
    icon: "🎖️",
    title: "School Leadership Recognition — House Captain",
    meta: "2025 – 26",
    detail: "Appointed Captain of Cavaliers, a house of 200 students.",
    link: "",
    featured: false,
  },
];

/* ==================================================================
   LEADERSHIP & IMPACT
   ================================================================== */

export const VOLUNTEER = {
  stats: [
    { value: "200", label: "Students Led" },
    { value: "15K", label: "Community Members" },
    { value: "12", label: "Origami Workshops" },
  ],
  orgs: [
    {
      name: "Cavaliers House, Hiranandani Upscale School",
      role: "House Captain · 2025 – 2026",
      desc: "Leads a house of 200 students. Organised basketball campaigns across senior, junior, and girls' junior tournaments and coached the players. During term, the house swept table tennis across singles and doubles in both junior and senior categories, took all three top positions in chess, and won shot put.",
    },
    {
      name: "Math Through Origami",
      role: "Volunteer Educator · 2017 – Present",
      desc: "Teaches mathematics to underprivileged children through origami-based workshops with an NGO partner. Twelve workshops delivered to date, using folding as a way into geometry for students who had written the subject off.",
    },
    
    {
      name: "Inter-School Online Chess Tournament",
      role: "Organiser · 2026",
      desc: "Organised an open inter-school online tournament of roughly 100 players, including FIDE-rated participants. Chess has been a constant since 2019 — the tournament was an attempt to give other players the same competitive footing.",
    },
   
  ],
};

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Programmes", to: "/work" },
  { label: "Ventures", to: "/projects" },
  { label: "Awards", to: "/awards" },
  { label: "Leadership", to: "/volunteering" },
  { label: "About", to: "/about" },
];

export const FOOTER_PROFILES = [];