const emailLink =
  "mailto:tingting.bi@unimelb.edu.au?subject=Software%20Engineering%20Industry%20Partnership%20%E2%80%94%202027&body=Name%3A%0AOrganisation%3A%0AProject%20or%20problem%20you%20would%20like%20students%20to%20explore%3A%0APreferred%20subject%20(if%20known)%3A%0A";

const projectAreas = [
  "Business processes and internal tools",
  "Data, reporting and decision support",
  "Customer and community services",
  "Research software and digital platforms",
  "System integration and modernisation",
  "Responsible AI-enabled software",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Software Engineering Industry Partnerships home">
          <span className="wordmark-mark">MSE</span>
          <span>Industry Partnerships</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#subjects">Subjects</a>
          <a href="#projects">Project fit</a>
          <a href="#process">How it works</a>
          <a className="nav-cta" href={emailLink}>Submit an enquiry</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">University of Melbourne · Master of Software Engineering</p>
          <h1>
            Call for<br />
            <em>industry partners.</em>
          </h1>
          <p className="hero-intro">
            We invite organisations to partner with graduate software
            engineering teams—from early requirements analysis to the design
            and delivery of a substantial software solution.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={emailLink}>
              Submit a project enquiry <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#subjects">Compare the subjects <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <aside className="course-summary" aria-label="Available partnership subjects">
          <div className="signal"><span></span> Expressions of interest open for 2027</div>
          <article className="course-mini-card">
            <p className="card-kicker">SWEN90009 · Semester 1</p>
            <h2>Software Requirements Analysis</h2>
            <p>Investigate the problem, engage stakeholders and develop validated software requirements.</p>
          </article>
          <article className="course-mini-card">
            <p className="card-kicker">SWEN90014 · Semester 2</p>
            <h2>Masters Software Engineering Project</h2>
            <p>Design, build and evaluate a substantial software solution across a full project lifecycle.</p>
          </article>
        </aside>
      </section>

      <section className="statement">
        <p>No project fee</p>
        <h2>There is no charge for organisations to partner with our student teams.</h2>
        <p className="statement-note">Partners contribute their time, organisational context and feedback throughout the semester.</p>
      </section>

      <section className="subjects-section" id="subjects">
        <div className="section-intro">
          <p className="section-label">Choose the right pathway</p>
          <h2>Where is your project today?</h2>
          <p>You do not need to select a subject before contacting us. We will help identify the best fit and scope.</p>
        </div>

        <div className="subject-cards">
          <article className="subject-card requirements-card">
            <div className="subject-topline">
              <span>Semester 1</span>
              <span>SWEN90009</span>
            </div>
            <p className="subject-phase">Discover &amp; define</p>
            <h3>Software Requirements Analysis</h3>
            <p className="subject-description">
              Best for an important problem that is not yet well understood,
              where stakeholders, priorities or possible solutions need to be
              investigated.
            </p>
            <h4>Student teams may deliver</h4>
            <ul>
              <li>Stakeholder and problem analysis</li>
              <li>Business process and domain models</li>
              <li>Prioritised functional and quality requirements</li>
              <li>Prototypes and validation evidence</li>
              <li>A requirements package for future delivery</li>
            </ul>
            <p className="subject-note">Focus: deciding what should be built and why.</p>
          </article>

          <article className="subject-card delivery-card">
            <div className="subject-topline">
              <span>Semester 2</span>
              <span>SWEN90014</span>
            </div>
            <p className="subject-phase">Design &amp; deliver</p>
            <h3>Masters Software Engineering Project</h3>
            <p className="subject-description">
              Best for a well-framed project with a committed partner, a
              feasible semester scope and clear access to the knowledge or data
              needed by the team.
            </p>
            <h4>Student teams may deliver</h4>
            <ul>
              <li>Refined project scope and requirements</li>
              <li>Software architecture and technical design</li>
              <li>A substantial working prototype or solution</li>
              <li>Testing and quality evaluation</li>
              <li>Technical documentation and handover</li>
            </ul>
            <p className="subject-note">Focus: delivering and evaluating a software solution.</p>
          </article>
        </div>
        <p className="continuity-note">
          A project may be suitable for one or both subjects. Participation in
          both can create continuity from discovery to delivery, subject to
          scope, student allocation and teaching-team approval.
        </p>
      </section>

      <section className="partner-value">
        <div>
          <p className="section-label">Why participate</p>
          <h2>A fresh perspective on work that matters.</h2>
        </div>
        <div className="value-list">
          <div><span>01</span><h3>Structured attention</h3><p>A team devotes a semester to understanding or progressing a challenge that day-to-day work may leave unresolved.</p></div>
          <div><span>02</span><h3>Independent thinking</h3><p>Students bring current software engineering methods and question assumptions constructively.</p></div>
          <div><span>03</span><h3>Useful artefacts</h3><p>Receive documented analysis, models, prototypes or software outcomes suited to the selected subject.</p></div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-intro compact">
          <p className="section-label">Suitable projects</p>
          <h2>Grounded in a genuine organisational need.</h2>
          <p>
            Strong projects have an engaged contact person, access to domain
            knowledge and enough uncertainty for students to make meaningful
            engineering decisions.
          </p>
        </div>

        <div className="project-grid">
          {projectAreas.map((area, index) => (
            <div className="project-area" key={area}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{area}</p>
            </div>
          ))}
        </div>

        <div className="fit-guidance">
          <div>
            <h3>A good project provides</h3>
            <ul>
              <li>A real user, operational or research need</li>
              <li>A partner who can meet the team regularly</li>
              <li>Access to relevant stakeholders and domain knowledge</li>
              <li>A scope that can produce a meaningful semester outcome</li>
            </ul>
          </div>
          <div>
            <h3>Projects are less suitable when</h3>
            <ul>
              <li>The solution and every feature are already fixed</li>
              <li>No one is available to answer questions or review work</li>
              <li>Success depends on restricted data students cannot access</li>
              <li>A production-ready commercial system is required on a fixed deadline</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-intro light">
          <p className="section-label">The partnership</p>
          <h2>A clear process, supported by the teaching team.</h2>
        </div>
        <ol className="timeline">
          <li><span className="step">01</span><div><p className="when">Enquiry</p><h3>Tell us about the project</h3><p>Share the organisational context, the need and what a useful outcome might look like.</p></div></li>
          <li><span className="step">02</span><div><p className="when">Scoping</p><h3>Agree on subject and scope</h3><p>We assess suitability, expectations, access constraints and the appropriate student pathway.</p></div></li>
          <li><span className="step">03</span><div><p className="when">Semester</p><h3>Work with the student team</h3><p>Join a kickoff and regular focused meetings to provide context, answer questions and review progress.</p></div></li>
          <li><span className="step">04</span><div><p className="when">Completion</p><h3>Review and handover</h3><p>Attend the final presentation and receive the agreed project artefacts and recommendations.</p></div></li>
        </ol>
      </section>

      <section className="expectations-section">
        <div>
          <p className="section-label">What we ask of partners</p>
          <h2>Context, access and timely feedback.</h2>
        </div>
        <div className="expectation-grid">
          <div><strong>One</strong><p>named contact who can represent the organisation</p></div>
          <div><strong>Regular</strong><p>meetings at agreed points through the semester</p></div>
          <div><strong>Appropriate</strong><p>access to stakeholders, systems or de-identified examples</p></div>
          <div><strong>Constructive</strong><p>feedback on student understanding and project outcomes</p></div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-label">Common questions</div>
        <div className="faq-list">
          <details>
            <summary>Is there a fee to participate?<span>+</span></summary>
            <p>No. There is no project fee for participating organisations. Partners contribute time, access to relevant people or information, and regular feedback to the student team.</p>
          </details>
          <details>
            <summary>Which subject should I propose my project to?<span>+</span></summary>
            <p>You can submit one enquiry without choosing. SWEN90009 suits open problems requiring investigation; SWEN90014 suits well-framed projects ready for design and implementation.</p>
          </details>
          <details>
            <summary>Does the project need to involve AI?<span>+</span></summary>
            <p>No. We welcome a broad range of software and socio-technical problems. AI may be considered where it serves a genuine need, but it is not a requirement.</p>
          </details>
          <details>
            <summary>Will we receive production-ready software?<span>+</span></summary>
            <p>SWEN90009 focuses on analysis rather than implementation. SWEN90014 may produce a substantial working solution, but it remains an educational project and should not be treated as guaranteed production delivery.</p>
          </details>
          <details>
            <summary>Can projects involve confidential information?<span>+</span></summary>
            <p>Non-confidential or de-identified information is strongly preferred. Any confidentiality, privacy, intellectual-property or system-access needs must be discussed during scoping.</p>
          </details>
          <details>
            <summary>Who can become a partner?<span>+</span></summary>
            <p>Companies, government teams, research groups, not-for-profits and community organisations are welcome to enquire.</p>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Industry project expressions of interest · 2027</p>
        <h2>Start with a short conversation.</h2>
        <p className="cta-copy">
          Send a brief description of your organisation, the project or problem
          and the people it affects. We will help you assess its suitability.
        </p>
        <a className="button button-light" href={emailLink}>
          Submit a project enquiry <span aria-hidden="true">↗</span>
        </a>
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
