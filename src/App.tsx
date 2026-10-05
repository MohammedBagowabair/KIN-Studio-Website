import { useI18n } from './i18n'
import { phone, wa, maps, linkedin, behance, pitchWa, projects } from './content'

function LangSwitch() {
  const { lang, setLang, t } = useI18n()
  return (
    <div className="flex border border-ink text-[11px] font-semibold uppercase tracking-widest">
      {(['en', 'ms'] as const).map((l) => (
        <button key={l} type="button" onClick={() => setLang(l)}
          className={`px-2.5 py-1.5 ${lang === l ? 'bg-ink text-paper' : 'bg-paper text-ink hover:bg-oak-light/40'}`}>
          {t(l === 'en' ? 'lang_en' : 'lang_ms')}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const { t, lang } = useI18n()
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#top" className="font-display text-xl font-bold tracking-tight">K.IN</a>
          <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.15em] text-ink/70 md:flex">
            {(['about','services','work','process','contact'] as const).map((id) => (
              <a key={id} href={`#${id}`} className="hover:text-ink">{t(`nav_${id}`)}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LangSwitch />
            <a href={`https://wa.me/${wa}`} className="hidden border border-ink bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-wider text-paper hover:bg-transparent hover:text-ink sm:inline-flex transition">{t('nav_cta')}</a>
          </div>
        </div>
      </header>

      {/* Hero — large whitespace */}
      <section id="top" className="mx-auto max-w-6xl px-4 pt-32 pb-20 md:px-8 md:pt-40 md:pb-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-oak-dark">{t('hero_kicker')}</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          {t('hero_title')}
        </h1>
        <p className="mt-8 max-w-lg text-lg text-ink/60">{t('hero_sub')}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href={`https://wa.me/${wa}`} className="border border-ink bg-ink px-6 py-3 text-sm font-semibold text-paper hover:bg-transparent hover:text-ink transition">{t('hero_cta')}</a>
          <a href="#work" className="border border-ink px-6 py-3 text-sm font-semibold hover:bg-ink hover:text-paper transition">{t('hero_cta2')}</a>
        </div>
        <div className="mt-16 aspect-[21/9] overflow-hidden border border-ink/20">
          <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1600&q=80" alt="" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* About + founder */}
      <section id="about" className="border-y border-ink/10">
        <div className="mx-auto grid max-w-6xl md:grid-cols-12">
          <div className="border-b border-ink/10 px-4 py-16 md:col-span-7 md:border-b-0 md:border-r md:px-8 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oak-dark">{t('about_label')}</p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{t('about_title')}</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ink/70">{t('about_body')}</p>
          </div>
          <div className="flex flex-col justify-center bg-ink px-4 py-16 text-paper md:col-span-5 md:px-8 md:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oak">{t('founder_label')}</p>
            <p className="mt-4 font-display text-4xl font-bold">{t('founder_name')}</p>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">{t('founder_note')}</p>
            <div className="mt-8 flex gap-4 text-xs font-semibold uppercase tracking-wider">
              <a href={linkedin} target="_blank" rel="noreferrer" className="text-oak hover:underline">LinkedIn</a>
              <a href={behance} target="_blank" rel="noreferrer" className="text-oak hover:underline">Behance</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oak-dark">{t('services_label')}</p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{t('services_title')}</h2>
        <div className="mt-12 grid gap-0 border border-ink/20 sm:grid-cols-2">
          {[1,2,3,4].map((n) => (
            <article key={n} className="border border-ink/10 p-8 transition hover:bg-oak-light/20">
              <h3 className="font-display text-xl font-bold">{t(`svc${n}_t`)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{t(`svc${n}_b`)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Asymmetric work grid */}
      <section id="work" className="bg-ink py-20 text-paper md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oak">{t('work_label')}</p>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{t('work_title')}</h2>
            </div>
            <p className="max-w-sm text-sm text-paper/45">{t('work_note')}</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {projects.map((p, i) => (
              <figure key={p.titleEN} className={`overflow-hidden border border-paper/10 ${p.tall ? 'md:row-span-2' : ''} ${i === 0 ? 'md:col-span-1' : ''}`}>
                <img src={p.img} alt="" className={`w-full object-cover ${p.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`} loading="lazy" />
                <figcaption className="border-t border-paper/10 p-4">
                  <p className="font-display font-semibold">{lang === 'ms' ? p.titleMS : p.titleEN}</p>
                  <p className="text-xs uppercase tracking-wider text-oak">{lang === 'ms' ? p.typeMS : p.typeEN}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oak-dark">{t('process_label')}</p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{t('process_title')}</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-4">
          {[1,2,3,4].map((n) => (
            <li key={n} className="border-t-2 border-ink pt-6">
              <span className="font-display text-5xl font-bold text-oak-light">0{n}</span>
              <h3 className="mt-4 font-display text-lg font-bold">{t(`step${n}_t`)}</h3>
              <p className="mt-2 text-sm text-ink/60">{t(`step${n}_b`)}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Testimonial */}
      <section className="border-y border-ink/10 bg-oak-light/30 px-4 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oak-dark">{t('test_label')}</p>
          <blockquote className="mt-6 font-display text-2xl font-medium leading-snug md:text-3xl">
            “{t('test_quote')}”
          </blockquote>
          <p className="mt-6 text-sm text-ink/50">Google · 5.0 ★</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-oak-dark">{t('contact_label')}</p>
        <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">{t('contact_title')}</h2>
        <p className="mt-6 text-ink/60">{t('contact_hours')}</p>
        <p className="mt-2 max-w-md text-ink/70">{t('contact_address')}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`tel:${phone}`} className="border border-ink bg-ink px-5 py-2.5 text-sm font-semibold text-paper">{t('contact_phone')}</a>
          <a href={`https://wa.me/${wa}`} className="border border-ink px-5 py-2.5 text-sm font-semibold">{t('contact_wa')}</a>
          <a href={maps} target="_blank" rel="noreferrer" className="border border-ink px-5 py-2.5 text-sm font-semibold">{t('contact_map')}</a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="border border-ink px-5 py-2.5 text-sm font-semibold">{t('contact_li')}</a>
          <a href={behance} target="_blank" rel="noreferrer" className="border border-ink px-5 py-2.5 text-sm font-semibold">{t('contact_be')}</a>
        </div>
      </section>

      <footer className="border-t border-ink bg-ink px-4 py-10 text-center text-sm text-paper/60 md:px-8">
        <p>{t('footer_pitch')}</p>
        <a href={pitchWa} className="mt-3 inline-block font-semibold text-oak hover:underline">{t('footer_pitch_cta')} →</a>
        <p className="mt-6 text-xs text-paper/30">{t('footer_copy')}</p>
      </footer>
    </div>
  )
}
