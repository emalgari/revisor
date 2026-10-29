import {getTranslations} from 'next-intl/server';
import {Link} from '../../i18n/navigation.js';

const features = ['bookkeeping', 'invoicing', 'vat', 'payroll'];

export default async function HomePage() {
  const t = await getTranslations('Home');

  return (
    <div className="hero-background min-h-screen">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        {t('skip')}
      </a>
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-8 md:px-12">
        <div className="flex items-center gap-3" aria-label="Revisor">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-[#1d372e] text-2xl font-semibold text-white" aria-hidden="true">r.</span>
          <span className="text-2xl font-semibold tracking-tight">revisor</span>
        </div>
        <nav className="flex flex-wrap items-center gap-1 rounded-full border border-[#dfe7df] bg-white/80 p-1 text-sm font-medium" aria-label={t('languageLabel')}>
          <Link href="/" locale="sv" lang="sv" className="rounded-full px-3 py-2 hover:bg-[#eef4ef]">SV</Link>
          <Link href="/" locale="en" lang="en" className="rounded-full px-3 py-2 hover:bg-[#eef4ef]">EN</Link>
          <Link href="/" locale="ar" lang="ar" className="rounded-full px-3 py-2 hover:bg-[#eef4ef]">العربية</Link>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-7xl px-6 pb-24 md:px-12">
        <section className="grid items-center gap-12 pb-20 pt-12 md:min-h-[650px] md:grid-cols-[1.14fr_0.86fr] md:pt-20">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#dfe7df] bg-white/90 px-4 py-2 text-sm font-medium text-[#5d6f65]">
              <span className="size-2 rounded-full bg-amber-500" aria-hidden="true" />
              {t('status')}
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{t('headline')}</h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-[#5d6f65] md:text-xl">{t('intro')}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#features" className="rounded-full bg-[#1d372e] px-7 py-3.5 font-semibold text-white transition hover:bg-[#2d6a52]">{t('explore')}</a>
              <a href="https://github.com/emalgari/revisor" className="rounded-full border border-[#dfe7df] bg-white px-7 py-3.5 font-semibold transition hover:bg-[#eef4ef]" rel="noreferrer">{t('github')}</a>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-6 text-[#5d6f65]">{t('notice')}</p>
          </div>

          <div className="relative isolate">
            <div className="absolute inset-6 -z-10 rotate-6 rounded-[2.5rem] bg-[#dfece2]" aria-hidden="true" />
            <div className="card-shadow rounded-[2rem] border border-[#dfe7df] bg-white p-6 md:p-9">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#dfe7df] pb-6">
                <h2 className="text-lg font-semibold">{t('previewTitle')}</h2>
                <span className="rounded-full bg-[#f7f1e5] px-3 py-1 text-xs font-medium text-[#775f25]">{t('concept')}</span>
              </div>
              <p className="mt-7 text-sm text-[#5d6f65]">{t('previewSubtitle')}</p>
              <div className="mt-5 space-y-3">
                {features.map((key, i) => (
                  <div key={key} className="flex items-center gap-4 rounded-2xl border border-[#dfe7df] p-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#eff5ef] font-semibold text-[#2d6a52]">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-medium">{t(`features.${key}`)}</span>
                    <span className="ms-auto text-[#5d6f65]" aria-hidden="true">↗</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-6 text-[#5d6f65]">{t('mockupNote')}</p>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-[#dfe7df] pt-16">
          <p className="text-sm font-semibold uppercase tracking-[.18em] text-[#2d6a52]">{t('sectionEyebrow')}</p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">{t('sectionHeadline')}</h2>
          <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(key => (
              <article key={key} className="rounded-3xl border border-[#dfe7df] bg-white p-7">
                <h3 className="text-xl font-semibold">{t(`features.${key}`)}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5d6f65]">{t(`featureDescriptions.${key}`)}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#dfe7df] px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 text-sm text-[#5d6f65]">
          <span>© {new Date().getUTCFullYear()} revisor · {t('footer')}</span>
          <span>revisor.cloud</span>
        </div>
      </footer>
    </div>
  );
}
