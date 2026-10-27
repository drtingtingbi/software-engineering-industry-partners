import type { Metadata } from "next";

const emailLink =
  "mailto:tingting.bi@unimelb.edu.au?subject=Software%20Engineering%20Industry%20Partnership%20%E2%80%94%202027&body=Name%3A%0AOrganisation%3A%0AProject%20or%20problem%20you%20would%20like%20students%20to%20explore%3A%0APreferred%20subject%20(if%20known)%3A%0A";

export const metadata: Metadata = {
  title: "Previous Projects | Software Engineering Industry Partnerships",
  description:
    "Explore SWEN90014 student projects developed with industry and community partners in 2025 and 2026.",
  openGraph: {
    title: "Previous Projects | Software Engineering Industry Partnerships",
    description:
      "SWEN90014 projects developed by University of Melbourne software engineering students with real partners.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Previous Projects | Software Engineering Industry Partnerships",
    description: "SWEN90014 student projects from 2025 and 2026.",
  },
};

type Project = {
  title: string;
  summary: string;
  themes: string[];
};

const projects: Record<string, Project[]> = {
  "2026": [
    {
      title: "Yoir",
      summary:
        "A career advisory platform connecting job seekers with verified professionals for services such as CV reviews, mock interviews and career planning.",
      themes: ["Career services", "Marketplace", "Trust & safety"],
    },
    {
      title: "OppSpot Snap",
      summary:
        "A human-in-the-loop workflow that helps charity shops photograph donated garments, prepare reviewed online listings and track orders.",
      themes: ["Computer vision", "Retail operations", "Human review"],
    },
    {
      title: "English Pronunciation Practice",
      summary:
        "A browser-based learning platform where students record speech, receive pronunciation feedback and review their practice history.",
      themes: ["Education", "Speech technology", "Learning analytics"],
    },
    {
      title: "Dating Wellness Tracker",
      summary:
        "A private reflection tool that helps people record dating experiences, consider compatibility and notice patterns over time.",
      themes: ["Wellbeing", "Privacy", "Reflective design"],
    },
    {
      title: "FitTrack Pro",
      summary:
        "An operations platform for fitness studios covering memberships, scheduling, bookings, payments, engagement and reporting.",
      themes: ["Business operations", "Scheduling", "Reporting"],
    },
    {
      title: "Warehouse Management System",
      summary:
        "A warehouse operations platform supporting product, inventory and day-to-day management workflows.",
      themes: ["Warehouse operations", "Inventory", "Workflow management"],
    },
    {
      title: "Graduate Job Seeker Platform",
      summary:
        "An AI-powered platform providing graduate job seekers with structured tools and support for their employment journey.",
      themes: ["Graduate employment", "AI assistance", "Career services"],
    },
    {
      title: "VisualEd",
      summary:
        "A curated image library for education, with provenance, usage-rights information, citations and an expert review workflow.",
      themes: ["Education", "Content governance", "Provenance"],
    },
  ],
  "2025": [
    {
      title: "Ready to Learn Scale",
      summary:
        "A classroom check-in tool supporting trauma-informed teaching, student readiness reporting and practical strategies for educators.",
      themes: ["Education", "Wellbeing", "Decision support"],
    },
    {
      title: "Course Mapping",
      summary:
        "An interactive web application that generates and visualises prerequisite structures for University of Melbourne courses.",
      themes: ["Education", "Data visualisation", "Information systems"],
    },
    {
      title: "Trade School Education Platform",
      summary:
        "A full-stack platform designed to support interactive delivery of trade-school learning and teaching activities.",
      themes: ["Education", "Learning platform", "Full-stack delivery"],
    },
    {
      title: "Digital Twin Data Ingestion",
      summary:
        "A system that ingests heterogeneous factory data from files and APIs, then validates and normalises it for digital-twin applications.",
      themes: ["Data engineering", "Digital twins", "System integration"],
    },
    {
      title: "For Humanity AI Compliance",
      summary:
        "A workspace for organising AI-system audits, reusable compliance templates, evidence, tasks, reporting and team oversight.",
      themes: ["Responsible AI", "Compliance", "Workflow management"],
    },
    {
      title: "ArtCert",
      summary:
        "A digital gallery and artwork-authentication platform designed to record provenance and protect artists and collectors.",
      themes: ["Art technology", "Provenance", "Digital identity"],
    },
    {
      title: "ConstructAI Skills Analyser",
      summary:
        "A dashboard that analyses construction-sector job postings to identify demand for AI and machine-learning skills.",
      themes: ["Workforce analytics", "Construction", "Data insights"],
    },
    {
      title: "Digital Bricks for Science Gallery",
      summary:
        "A content-management platform for artists to develop digital exhibitions and for gallery staff to manage publishing and display operations.",
      themes: ["Arts & culture", "Content management", "Digital exhibitions"],
    },
    {
      title: "VisualEd",
      summary:
        "An academic image-generation and library platform supporting the creation, review and reuse of educational visual material.",
      themes: ["Education", "Image generation", "Content library"],
    },
    {
      title: "SkillRealms",
      summary:
        "An educational role-playing game platform where teachers manage sessions and student teams participate in real-time, turn-based challenges.",
      themes: ["Game-based learning", "Real-time systems", "Education"],
    },
  ],
};

export default function ProjectsPage() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="../" aria-label="Software Engineering Industry Partnerships home">
          <span className="wordmark-mark">MSE</span>
          <span>Industry Partnerships</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="../">Partner call</a>
          <a href="#projects-2026">2026</a>
          <a href="#projects-2025">2025</a>
          <a className="nav-cta" href={emailLink}>Submit an enquiry</a>
        </nav>
      </header>

      <section className="showcase-hero">
        <div>
          <p className="eyebrow">SWEN90014 · 2025–2026</p>
          <h1>Previous student<br /><em>projects.</em></h1>
        </div>
        <div className="showcase-intro">
          <p>
            A complete view of the distinct project streams represented in the
            2025 and 2026 organizations, spanning industry, community and
            university partnerships.
          </p>
          <dl>
            <div><dt>2</dt><dd>project cohorts</dd></div>
            <div><dt>18</dt><dd>project streams</dd></div>
          </dl>
        </div>
      </section>

      <aside className="privacy-note">
        <strong>About these examples</strong>
        <p>
          Multiple team and requirements repositories are consolidated into
          one entry per project. Student details, private repositories, partner
          documents and internal technical information are not published here.
        </p>
      </aside>

      {Object.entries(projects)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, yearProjects]) => (
        <section className="project-year" id={`projects-${year}`} key={year}>
          <header className="year-heading">
            <p>SWEN90014</p>
            <h2>{year}</h2>
            <p>Masters Software Engineering Project</p>
          </header>
          <div className="case-grid">
            {yearProjects.map((project, index) => (
              <article className="case-card" key={project.title}>
                <div className="case-number">{year.slice(-2)}—{String(index + 1).padStart(2, "0")}</div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul aria-label={`${project.title} themes`}>
                  {project.themes.map((theme) => <li key={theme}>{theme}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
        ))}

      <section className="continuity-callout">
        <p className="section-label">From discovery to delivery</p>
        <div>
          <h2>Some challenges can continue across both subjects.</h2>
          <p>
            SWEN90009 can investigate the problem and validate requirements.
            A suitable project may then progress to design and delivery in
            SWEN90014, subject to scope, allocation and teaching-team approval.
          </p>
          <a className="text-link" href="../#subjects">Compare the two subjects <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Industry project expressions of interest · 2027</p>
        <h2>Could your challenge be next?</h2>
        <p className="cta-copy">
          Partnership is free of charge. Bring a genuine organisational need,
          access to relevant people and a willingness to work with a student team.
        </p>
        <a className="button button-light" href={emailLink}>Submit a project enquiry <span aria-hidden="true">↗</span></a>
        <a className="email" href="mailto:tingting.bi@unimelb.edu.au">tingting.bi@unimelb.edu.au</a>
      </section>

      <footer>
        <div className="footer-mark"><span className="wordmark-mark">MSE</span><strong>Industry Partnerships</strong></div>
        <p>School of Computing and Information Systems</p>
        <p>University of Melbourne · 2027</p>
      </footer>
    </main>
  );
}
