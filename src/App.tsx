import { useState } from 'react'
import { useI18n } from './i18n'
import { Reveal } from './Reveal'
import { phone, wa, maps, linkedin, behance, pitchWa, projects, asset } from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex border border-ink text-[11px] font-semibold uppercase tracking-[0.14em]">
      {(['en', 'ms'] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)}
          className={`min-h-9 min-w-9 px-2.5 py-1.5 transition-colors duration-300 ${lang === l ? 'bg-ink text-paper' : 'bg-paper/80 text-ink hover:bg-oak-light/30'}`}>
          {t(l === 'en' ? 'lang_en' : 'lang_ms')}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const { t, lang } = useI18n()
  const [open, setOpen] = useState(false)
  const links = (['about','services','work','process','contact'] as const)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <header className="glass-header hairline fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3.5 md:px-8">
          <a href="#top" className="font-display text-xl font-bold tracking-[-0.04em]">K.IN</a>
          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/55 lg:flex">
            {links.map((id) => (
              <a key={id} href={`#${id}`} className="transition hover:text-ink">{t(`nav_${id}`)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <LangSwitch />
            <a href={`https://wa.me/${wa}`} className="hidden min-h-11 items-center border border-ink bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-paper transition hover:bg-transparent hover:text-ink sm:inline-flex">{t('nav_cta')}</a>
            <button type="button" className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink lg:hidden"
              aria-label={open ? t('menu_close') : t('menu_open')} onClick={() => setOpen((v) => !v)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-ink/10 bg-paper/95 px-4 py-3 lg:hidden">
            {links.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block min-h-11 px-2 py-3 text-sm font-semibold uppercase tracking-wider">{t(`nav_${id}`)}</a>
            ))}
          </div>
        )}
      </header>

      <section id="top" className="mx-auto max-w-6xl px-4 pt-28 pb-14 sm:pt-32 sm:pb-20 md:px-8 md:pt-40 md:pb-24">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-oak-dark">{t('hero_kicker')}</p>
          <h1 className="mt-6 max-w-4xl font-display text-[2.4rem] font-bold leading-[0.98] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {t('hero_title')}
          </h1>
          <p className="mt-7 max-w-md text-base text-ink/55 sm:text-lg">{t('hero_sub')}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href={`https://wa.me/${wa}`} className="inline-flex min-h-12 items-center justify-center border border-ink bg-ink px-7 py-3 text-sm font-semibold text-paper transition hover:bg-transparent hover:text-ink">{t('hero_cta')}</a>
            <a href="#work" className="inline-flex min-h-12 items-center justify-center border border-ink px-7 py-3 text-sm font-semibold transition hover:bg-ink hover:text-paper">{t('hero_cta2')}</a>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="img-zoom mt-12 aspect-[16/10] border border-ink/15 sm:mt-16 sm:aspect-[21/9]">
            <img src={asset('images/hero.jpg')} alt="" className="h-full w-full object-cover" width={1600} height={700} />
          </div>
        </Reveal>
      </section>

      <section id="about" className="border-y border-ink/10">
        <div className="mx-auto grid max-w-6xl md:grid-cols-12">
          <Reveal className="border-b border-ink/10 px-4 py-14 sm:py-16 md:col-span-7 md:border-b-0 md:border-r md:px-8 md:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-oak-dark">{t('about_label')}</p>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('about_title')}</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ink/65">{t('about_body')}</p>
          </Reveal>
          <Reveal className="flex flex-col justify-center bg-ink px-4 py-14 text-paper sm:py-16 md:col-span-5 md:px-8 md:py-24" delay={80}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-oak">{t('founder_label')}</p>
            <p className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">{t('founder_name')}</p>
            <p className="mt-5 text-sm leading-relaxed text-paper/65">{t('founder_note')}</p>
            <div className="mt-10 flex flex-wrap gap-6 text-[11px] font-semibold uppercase tracking-[0.16em]">
              <a href={linkedin} target="_blank" rel="noreferrer" className="min-h-11 inline-flex items-center text-oak transition hover:text-paper">LinkedIn</a>
              <a href={behance} target="_blank" rel="noreferrer" className="min-h-11 inline-flex items-center text-oak transition hover:text-paper">Behance</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-oak-dark">{t('services_label')}</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('services_title')}</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 border border-ink/20 sm:grid-cols-2">
          {[1,2,3,4].map((n) => (
            <Reveal key={n} delay={n * 40}>
              <article className="h-full border border-ink/10 p-7 transition hover:bg-oak-light/15 sm:p-8">
                <h3 className="font-display text-xl font-bold tracking-tight">{t(`svc${n}_t`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{t(`svc${n}_b`)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="work" className="bg-ink py-16 text-paper sm:py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <Reveal>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-oak">{t('work_label')}</p>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('work_title')}</h2>
              </div>
              <p className="max-w-sm text-sm text-paper/40">{t('work_note')}</p>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Reveal key={p.titleEN} delay={(i % 3) * 60}>
                <figure className="img-zoom group border border-paper/10">
                  <div className="relative">
                    <img src={asset(p.img)} alt="" className={`w-full object-cover ${p.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`} loading="lazy" width={800} height={p.tall ? 1000 : 600} />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/80 to-transparent p-4 opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                      <div>
                        <p className="font-display font-semibold">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-oak">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
                      </div>
                    </div>
                  </div>
                  <figcaption className="border-t border-paper/10 p-4 sm:hidden">
                    <p className="font-display font-semibold">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                    <p className="text-[11px] uppercase tracking-wider text-oak">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-oak-dark">{t('process_label')}</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('process_title')}</h2>
        </Reveal>
        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {[1,2,3,4].map((n) => (
            <Reveal key={n} delay={n * 50}>
              <li className="border-t-2 border-ink pt-6">
                <span className="font-display text-6xl font-bold leading-none text-oak-light">0{n}</span>
                <h3 className="mt-5 font-display text-lg font-bold">{t(`step${n}_t`)}</h3>
                <p className="mt-2 text-sm text-ink/55">{t(`step${n}_b`)}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-y border-ink/10 bg-oak-light/25 px-4 py-16 sm:py-20 md:px-8 md:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-oak-dark">{t('test_label')}</p>
            <blockquote className="mt-6 font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              “{t('test_quote')}”
            </blockquote>
            <p className="mt-6 text-sm text-ink/45">Google · 5.0 ★</p>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-oak-dark">{t('contact_label')}</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">{t('contact_title')}</h2>
          <p className="mt-6 text-sm text-ink/55 sm:text-base">{t('contact_hours')}</p>
          <p className="mt-2 max-w-md text-ink/65">{t('contact_address')}</p>
          <div className="mt-10 flex flex-wrap gap-2.5">
            <a href={`tel:${phone}`} className="inline-flex min-h-11 items-center border border-ink bg-ink px-5 py-2.5 text-sm font-semibold text-paper">{t('contact_phone')}</a>
            <a href={`https://wa.me/${wa}`} className="inline-flex min-h-11 items-center border border-ink px-5 py-2.5 text-sm font-semibold">{t('contact_wa')}</a>
            <a href={maps} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-ink px-5 py-2.5 text-sm font-semibold">{t('contact_map')}</a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-ink px-5 py-2.5 text-sm font-semibold">{t('contact_li')}</a>
            <a href={behance} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center border border-ink px-5 py-2.5 text-sm font-semibold">{t('contact_be')}</a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-ink bg-ink px-4 py-10 text-center text-sm text-paper/55 md:px-8">
        <p className="mx-auto max-w-xl">{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-flex min-h-11 items-center font-semibold text-oak hover:underline">{t('footer_pitch_cta')} →</a>
        <p className="mt-6 text-xs text-paper/25">{t('footer_copy')}</p>
      </footer>
    </div>
  )
}
