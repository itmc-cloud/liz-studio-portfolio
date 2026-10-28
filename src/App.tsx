import { projects, type PortfolioProject, type ProjectCategory } from './content/projects'
import './App.css'

const navigation = [
  { label: 'Selected work', href: '#work' },
  { label: 'Graphic design', href: '#graphic-design' },
  { label: 'Illustration', href: '#illustration' },
  { label: 'Photography', href: '#photography' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const disciplines: { id: string; title: string; category: ProjectCategory }[] = [
  {
    id: 'graphic-design',
    title: 'Graphic design & branding',
    category: 'Graphic design & branding',
  },
  { id: 'illustration', title: 'Illustration', category: 'Illustration' },
  { id: 'photography', title: 'Photography', category: 'Photography' },
]

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <article className="project-card">
      <div
        className={`project-art project-art--${project.coverStyle}`}
        role="img"
        aria-label={`${project.category} artwork placeholder`}
      >
        <span className="placeholder-stamp">Artwork placeholder</span>
        <span className="project-art__mark" aria-hidden="true">
          {project.coverStyle === 'identity' && 'L'}
          {project.coverStyle === 'illustration' && '✳'}
          {project.coverStyle === 'photography' && '◯'}
        </span>
        <span className="project-art__caption" aria-hidden="true">
          LIZ STUDIO
        </span>
      </div>
      <div className="project-card__details">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        {project.year && <span className="project-year">{project.year}</span>}
      </div>
      <p className="project-card__description">{project.description}</p>
    </article>
  )
}

function ProjectGrid({ items }: { items: PortfolioProject[] }) {
  return (
    <div className="project-grid">
      {items.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

function App() {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="LIZ STUDIO home">
          <span className="wordmark__symbol" aria-hidden="true">
            L
          </span>
          <span>LIZ STUDIO</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">Independent creative studio</p>
            <h1 id="hero-title">
              Ideas made
              <br />
              <span>visible.</span>
            </h1>
            <p className="hero__intro">
              Graphic design, visual identity, illustration, and photography.
            </p>
            <a className="text-link" href="#work">
              Explore selected work <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="hero-art" aria-label="LIZ STUDIO visual identity artwork placeholder" role="img">
            <span className="hero-art__orbit hero-art__orbit--one" aria-hidden="true" />
            <span className="hero-art__orbit hero-art__orbit--two" aria-hidden="true" />
            <span className="hero-art__star" aria-hidden="true">✳</span>
            <span className="hero-art__letters" aria-hidden="true">LS</span>
            <span className="hero-art__note">Studio artwork placeholder</span>
          </div>
          <a className="scroll-cue" href="#work">
            Scroll to explore <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A growing portfolio</p>
              <h2 id="work-title">Selected work<span className="orange-dot">.</span></h2>
            </div>
            <p className="section-note">
              Portfolio previews are placeholders until authorized work is added.
            </p>
          </div>
          <ProjectGrid items={projects} />
        </section>

        {disciplines.map((discipline) => (
          <section
            className="discipline-section section-wrap"
            id={discipline.id}
            key={discipline.id}
            aria-labelledby={`${discipline.id}-title`}
          >
            <div className="section-heading section-heading--compact">
              <div>
                <p className="eyebrow">Explore by discipline</p>
                <h2 id={`${discipline.id}-title`}>{discipline.title}</h2>
              </div>
            </div>
            <ProjectGrid
              items={projects.filter((project) => project.category === discipline.category)}
            />
          </section>
        ))}

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-wrap about-section__inner">
            <div>
              <p className="eyebrow">A little about the studio</p>
              <h2 id="about-title">
                Thoughtful work,
                <br />
                made with feeling.
              </h2>
            </div>
            <div className="about-section__copy">
              <p>
                LIZ STUDIO is a creative portfolio spanning graphic design, branding and visual
                identity, illustration, photography, and editorial and digital design.
              </p>
              <p>
                This space is ready to tell the stories behind the work. Project details and imagery
                will be added when authorized materials are available.
              </p>
              <a className="text-link" href="#contact">
                Get in touch <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Have a good idea?</p>
            <h2 id="contact-title">
              Let’s make it
              <br />
              <span>visible.</span>
            </h2>
          </div>
          <div className="contact-section__action">
            <p>
              For collaborations and enquiries, reach out to LIZ STUDIO.
            </p>
            {contactEmail ? (
              <a className="contact-link" href={`mailto:${contactEmail}`}>
                {contactEmail} <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <p className="contact-placeholder">
                Contact link placeholder — set <code>VITE_CONTACT_EMAIL</code> to publish an email
                address.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home">
          <span className="wordmark__symbol" aria-hidden="true">L</span>
          <span>LIZ STUDIO</span>
        </a>
        <p>Ideas made visible.</p>
        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </>
  )
}

export default App
