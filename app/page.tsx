const emailLink =
  "mailto:tingting.bi@unimelb.edu.au?subject=SWEN90009%20Industry%20Partnership%20%E2%80%94%20Semester%201%2C%202027&body=Name%3A%0AOrganisation%3A%0AThe%20problem%20we%20would%20like%20to%20explore%3A%0AWho%20is%20affected%3A%0A";

const examples = [
  {
    number: "01",
    title: "Decisions under pressure",
    text: "Triage requests, allocate scarce resources or prioritise work—without hiding the trade-offs.",
    tags: ["Operations", "Decision support"],
  },
  {
    number: "02",
    title: "Knowledge that is hard to reach",
    text: "Help people find and trust answers spread across documents, teams and legacy systems.",
    tags: ["Knowledge", "Responsible AI"],
  },
  {
    number: "03",
    title: "Services that exclude people",
    text: "Redesign a process around accessibility, conflicting needs and the people most affected by it.",
    tags: ["Service design", "Accessibility"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="SWEN90009 home">
          <span className="wordmark-mark">SRA</span>
          <span>SWEN90009</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#partnership">The partnership</a>
          <a href="#fit">Project fit</a>
          <a href="#process">The process</a>
          <a className="nav-cta" href={emailLink}>
            Start a conversation
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Industry partnership · Semester 1, 2027</p>
          <h1>
            Bring us a real problem.<br />
            <em>We&apos;ll uncover what to build.</em>
          </h1>
          <p className="hero-intro">
            Partner with Master of Software Engineering students at the
            University of Melbourne to investigate a complex operational,
            human or AI-enabled challenge—before costly assumptions become
            software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={emailLink}>
              Propose a challenge <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#partnership">
              See how it works <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Partnership summary">
          <div className="signal"><span></span> Expressions of interest open</div>
          <p className="card-kicker">SWEN90009</p>
          <h2>Software Requirements Analysis</h2>
          <dl>
            <div><dt>Format</dt><dd>One semester</dd></div>
            <div><dt>Partner time</dt><dd>~6–8 hours total</dd></div>
            <div><dt>Best for</dt><dd>Open, complex problems</dd></div>
            <div><dt>Outcome</dt><dd>Evidence-led requirements</dd></div>
          </dl>
        </aside>
      </section>

      <section className="statement" id="partnership">
        <p>Not a free development service.</p>
        <h2>A structured investigation into the problem behind the product.</h2>
      </section>

      <section className="split-section">
        <div className="section-label">What you gain</div>
        <div className="large-copy">
          <p>
            A student team will challenge assumptions, speak with stakeholders
            and make the invisible work visible.
          </p>
          <div className="outcomes">
            <div><span>01</span><p>A clear account of the real problem and who it affects</p></div>
            <div><span>02</span><p>Prioritised functional, quality and responsible-AI requirements</p></div>
            <div><span>03</span><p>Models, prototypes and evidence from stakeholder validation</p></div>
            <div><span>04</span><p>A decision-ready brief for your next product or procurement step</p></div>
          </div>
        </div>
      </section>

      <section className="fit-section" id="fit">
        <div className="section-heading">
          <p className="eyebrow">A good challenge has room to discover</p>
          <h2>Come with a knot,<br /><em>not a shopping list.</em></h2>
        </div>

        <div className="fit-grid">
          <article className="fit-card good-fit">
            <p className="fit-kicker"><span>✓</span> A strong fit</p>
            <h3>You have a problem that resists an obvious answer.</h3>
            <ul>
              <li>Several stakeholders want different things</li>
              <li>Work relies on judgement, workarounds or scattered information</li>
              <li>Failure has meaningful human or organisational consequences</li>
              <li>You can provide access to people, workflows or de-identified examples</li>
            </ul>
          </article>
          <article className="fit-card weak-fit">
            <p className="fit-kicker"><span>×</span> Probably not a fit</p>
            <h3>You already know every screen and feature you want.</h3>
            <ul>
              <li>A fixed website or app build with no open questions</li>
              <li>Work that requires production code by semester end</li>
              <li>A project with no access to real users or evidence</li>
              <li>A request to add a chatbot without a defined user problem</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="examples-section">
        <div className="section-heading compact">
          <p className="eyebrow">The shape of a good problem</p>
          <h2>Questions worth<br />investigating.</h2>
        </div>
        <div className="examples-grid">
          {examples.map((example) => (
            <article className="example-card" key={example.number}>
              <span className="example-number">{example.number}</span>
              <h3>{example.title}</h3>
              <p>{example.text}</p>
              <div className="tags">
                {example.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="example-note">
          Your challenge does not need to be an “AI project”. Students will
          examine whether AI, conventional software or process change is the
          responsible response—and explain why.
        </p>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading light">
          <p className="eyebrow">One semester · four partner moments</p>
          <h2>Generous insight.<br /><em>Manageable commitment.</em></h2>
        </div>
        <ol className="timeline">
          <li>
            <span className="step">01</span>
            <div><p className="when">Before semester</p><h3>Shape the challenge</h3><p>A short conversation with the teaching team to frame an open, suitable problem.</p></div>
          </li>
          <li>
            <span className="step">02</span>
            <div><p className="when">Weeks 2–4</p><h3>Open the context</h3><p>Brief the team and connect them with relevant stakeholders, examples and workflows.</p></div>
          </li>
          <li>
            <span className="step">03</span>
            <div><p className="when">Weeks 5–9</p><h3>Test their understanding</h3><p>Join two focused check-ins to challenge assumptions and respond to emerging findings.</p></div>
          </li>
          <li>
            <span className="step">04</span>
            <div><p className="when">End of semester</p><h3>Review the evidence</h3><p>Attend the final requirements review and receive the team&apos;s analysis and recommendations.</p></div>
          </li>
        </ol>
      </section>

      <section className="principles-section">
        <div>
          <p className="eyebrow">What students are learning</p>
          <h2>Requirements are decisions—not documents.</h2>
        </div>
        <div className="principles-copy">
          <p>
            Students learn to elicit, model, negotiate and validate requirements
            for contemporary socio-technical systems. They must trace every
            recommendation to evidence and confront uncertainty, accessibility,
            privacy, safety and responsible AI.
          </p>
          <p>
            Partners receive thoughtful analysis and fresh perspectives. The
            educational focus is discovery and specification; implementation
            or production deployment is outside the scope of this subject.
          </p>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-label">Common questions</div>
        <div className="faq-list">
          <details>
            <summary>Do we need an AI project?<span>+</span></summary>
            <p>No. Bring an important problem. Students will evaluate AI alongside conventional software and non-technical alternatives.</p>
          </details>
          <details>
            <summary>Can students sign an NDA?<span>+</span></summary>
            <p>Projects should preferably use non-confidential or de-identified information. Any confidentiality needs must be discussed before the project is accepted.</p>
          </details>
          <details>
            <summary>Will we receive working software?<span>+</span></summary>
            <p>No production system is promised. Teams may create low-fidelity prototypes to test requirements, but the primary outcome is a validated requirements package.</p>
          </details>
          <details>
            <summary>Who can become a partner?<span>+</span></summary>
            <p>Companies, government teams, research groups, not-for-profits and community organisations are all welcome to propose a challenge.</p>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Expressions of interest · Semester 1, 2027</p>
        <h2>What problem keeps<br />your team working around it?</h2>
        <p className="cta-copy">
          Send a few sentences about the challenge, who it affects and why it
          matters. We will help determine whether it suits the subject.
        </p>
        <a className="button button-light" href={emailLink}>
          Tell us about the problem <span aria-hidden="true">↗</span>
        </a>
        <a className="email" href="mailto:tingting.bi@unimelb.edu.au">tingting.bi@unimelb.edu.au</a>
      </section>

      <footer>
        <div className="footer-mark"><span className="wordmark-mark">SRA</span><strong>SWEN90009</strong></div>
        <p>Software Requirements Analysis · School of Computing and Information Systems</p>
        <p>University of Melbourne · Semester 1, 2027</p>
      </footer>
    </main>
  );
}
