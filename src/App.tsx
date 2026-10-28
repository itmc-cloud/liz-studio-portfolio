import { useEffect, useState, type CSSProperties } from 'react'
import {
  SLIDE,
  agendaPhotos,
  agendasSlide,
  brands,
  brandingSlide,
  copy,
  marquee,
  coverCrop,
  illustrations,
  logos,
  photos,
  portraitCrop,
  type CropRegion,
  type Lang,
  type Piece,
} from './content/site'
import './App.css'

const STORAGE_KEY = 'portfolio-lang'

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    // storage unavailable; fall back to the default
  }
  return 'es'
}

/** Shows one region of a slide image, scaled to fill its box. */
function Crop({ crop, label, className = '' }: { crop: CropRegion; label: string; className?: string }) {
  const { src, x, y, w, h } = crop
  return (
    <div
      className={`crop ${className}`}
      role="img"
      aria-label={label}
      style={{
        aspectRatio: `${w} / ${h}`,
        backgroundImage: `url(${src})`,
        backgroundSize: `${(SLIDE.w / w) * 100}% ${(SLIDE.h / h) * 100}%`,
        backgroundPosition: `${(x / (SLIDE.w - w)) * 100}% ${(y / (SLIDE.h - h)) * 100}%`,
      }}
    />
  )
}

function SectionHeading({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string
  title: string
  note: string
}) {
  return (
    <div className="section-heading" data-reveal>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>
          {title}
          <span className="orange-dot">.</span>
        </h2>
      </div>
      <p className="section-note">{note}</p>
    </div>
  )
}

function PieceGrid({ items, lang, className = '' }: { items: Piece[]; lang: Lang; className?: string }) {
  return (
    <div className={`piece-grid ${className}`}>
      {items.map((piece, i) => (
        <figure className="piece" key={piece.id} data-reveal style={{ '--i': i % 4 } as CSSProperties}>
          <Crop crop={piece.crop} label={piece.title[lang]} />
          <figcaption>
            <strong>{piece.title[lang]}</strong>
            {piece.note && <span>{piece.note[lang]}</span>}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = (value: Record<Lang, string>) => value[lang]
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || copy.contact.email
  const { sections, about } = copy

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (!('IntersectionObserver' in window)) return
    document.documentElement.classList.add('js-reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore storage failures
    }
  }, [lang])

  return (
    <>
      <a className="skip-link" href="#main">
        {t(copy.skip)}
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={copy.brand}>
          <span className="wordmark__symbol" aria-hidden="true">
            L
          </span>
          <span>{copy.brand}</span>
        </a>
        <nav className="main-nav" aria-label={t(copy.navLabel)}>
          {copy.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {t(item.label)}
            </a>
          ))}
          <button
            type="button"
            className="lang-toggle"
            aria-label={t(copy.langLabel)}
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          >
            <span aria-current={lang === 'es'}>ES</span> / <span aria-current={lang === 'en'}>EN</span>
          </button>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero__copy">
            <p className="eyebrow">{t(copy.hero.eyebrow)}</p>
            <h1 id="hero-title">
              {t(copy.hero.title1)}
              <br />
              <span>{t(copy.hero.title2)}</span>
            </h1>
            <p className="hero__intro">{t(copy.hero.intro)}</p>
            <a className="text-link" href="#logos">
              {t(copy.hero.cta)} <span aria-hidden="true">↘</span>
            </a>
          </div>
          <Crop crop={coverCrop} label={t(copy.hero.art)} className="hero-art" />
          <a className="scroll-cue" href="#logos">
            {t(copy.hero.scroll)} <span aria-hidden="true">↓</span>
          </a>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((n) => (
              <ul key={n}>
                {marquee.map((word) => (
                  <li key={word.es}>
                    {t(word)} <span>✳</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <section className="work-section section-wrap" id="logos" aria-label={t(sections.logos.title)}>
          <SectionHeading
            eyebrow={t(sections.logos.eyebrow)}
            title={t(sections.logos.title)}
            note={t(sections.logos.note)}
          />
          <PieceGrid items={logos} lang={lang} className="piece-grid--logos" />
        </section>

        <section className="work-section section-wrap" id="branding" aria-label={t(sections.branding.title)}>
          <SectionHeading
            eyebrow={t(sections.branding.eyebrow)}
            title={t(sections.branding.title)}
            note={t(sections.branding.note)}
          />
          <div className="slide-scroll" data-reveal>
            <img className="slide" src={brandingSlide} alt={t(sections.branding.alt)} loading="lazy" />
          </div>
          <ul className="brand-list">
            {brands.map((brand, i) => (
              <li key={brand.id} data-reveal style={{ '--i': i } as CSSProperties}>
                <strong>{brand.name}</strong>
                <span>{t(brand.detail)}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="work-section section-wrap" id="editorial" aria-label={t(sections.editorial.title)}>
          <SectionHeading
            eyebrow={t(sections.editorial.eyebrow)}
            title={t(sections.editorial.title)}
            note={t(sections.editorial.note)}
          />
          <div className="slide-scroll" data-reveal>
            <img className="slide" src={agendasSlide} alt={t(sections.editorial.alt)} loading="lazy" />
          </div>
          <PieceGrid items={agendaPhotos} lang={lang} className="piece-grid--photos piece-grid--below" />
        </section>

        <section className="work-section section-wrap" id="ilustracion" aria-label={t(sections.illustration.title)}>
          <SectionHeading
            eyebrow={t(sections.illustration.eyebrow)}
            title={t(sections.illustration.title)}
            note={t(sections.illustration.note)}
          />
          <PieceGrid items={illustrations} lang={lang} className="piece-grid--two" />
        </section>

        <section className="work-section section-wrap" id="fotografia" aria-label={t(sections.photography.title)}>
          <SectionHeading
            eyebrow={t(sections.photography.eyebrow)}
            title={t(sections.photography.title)}
            note={t(sections.photography.note)}
          />
          <PieceGrid items={photos} lang={lang} className="piece-grid--photos" />
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-wrap about-section__inner">
            <div data-reveal className="about-portrait-wrap">
              <Crop crop={portraitCrop} label={t(about.portraitAlt)} className="about-portrait" />
            </div>
            <div className="about-section__copy" data-reveal style={{ '--i': 1 } as CSSProperties}>
              <p className="eyebrow">{t(about.eyebrow)}</p>
              <h2 id="about-title">
                {t(about.title1)}
                <br />
                {t(about.title2)}
              </h2>
              <p>{t(about.bio)}</p>
              <h3>{t(about.loveTitle)}</h3>
              <ul className="tags">
                {about.love.map((item) => (
                  <li key={item.es}>{t(item)}</li>
                ))}
              </ul>
            </div>
            <aside className="about-side" data-reveal style={{ '--i': 2 } as CSSProperties}>
              <h3>{t(about.educationTitle)}</h3>
              <dl className="education">
                {about.education.map((item) => (
                  <div key={item.year}>
                    <dt>{item.year}</dt>
                    <dd>{t(item.label)}</dd>
                  </div>
                ))}
              </dl>
              <h3>{t(about.skillsTitle)}</h3>
              <ul className="plain-list">
                {about.skills.map((item) => (
                  <li key={item.es}>{t(item)}</li>
                ))}
              </ul>
              <h3>{t(about.toolsTitle)}</h3>
              <ul className="tags tags--tools">
                {about.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">{t(copy.contact.eyebrow)}</p>
            <h2 id="contact-title">
              {t(copy.contact.title1)}
              <br />
              <span>{t(copy.contact.title2)}</span>
            </h2>
          </div>
          <div className="contact-section__action" data-reveal>
            <p>{t(copy.contact.text)}</p>
            <a className="contact-link" href={`mailto:${contactEmail}`}>
              {contactEmail} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home">
          <span className="wordmark__symbol" aria-hidden="true">
            L
          </span>
          <span>{copy.brand}</span>
        </a>
        <p>{t(copy.footer.tagline)}</p>
        <a href="#home" className="back-to-top">
          {t(copy.footer.top)}
        </a>
      </footer>
    </>
  )
}

export default App
