"use client"
import NavbarDark from '../../components/NavbarDark';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function TestAbout() {
  const t = useTranslations('About');
  const { locale } = useParams();

  useEffect(() => {
    document.body.style.backgroundColor = '#0a0a0a';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <NavbarDark />

      {/* Hero */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.12)_0%,transparent_70%)]"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <ScrollAnimation>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                  {t('hero.title')} <span className="text-white">{t('hero.name')}</span>
                </h1>
              </ScrollAnimation>
              <ScrollAnimation delay={100}>
                <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={200}>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.2)_0%,transparent_70%)]"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.2)_0%,transparent_70%)]"></div>
                <div className="relative glass-card rounded-[3rem] p-4 hover:scale-105 transition-transform duration-700">
                  <div className="relative aspect-square rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="/profile.jpeg"
                      fill
                      className="object-cover"
                      alt="Profile photo - Sab"
                      objectPosition="center 20%"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-navbar px-6 py-3 rounded-full">
                  <p className="text-white font-medium text-sm">Sab — Apple Developer</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-48 px-6 relative" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-24 text-center">
              {t('journey.title')}
            </h2>
          </ScrollAnimation>

          <div className="space-y-8">
            <ScrollAnimation delay={100}>
              <div className="card-image-container group relative glass-card rounded-3xl overflow-hidden card-hover-glow">
                <div className="card-image-wrapper absolute inset-0 card-gradient-purple opacity-50 rounded-3xl"></div>
                <div className="relative z-10 p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <span className="inline-block px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white">
                      {t('journey.2023.year')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {t('journey.2023.title')}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{t('journey.2023.description')}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="card-image-container group relative glass-card rounded-3xl overflow-hidden card-hover-glow">
                <div className="card-image-wrapper absolute inset-0 card-gradient-pink opacity-50 rounded-3xl"></div>
                <div className="relative z-10 p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <span className="inline-block px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white">
                      {t('journey.2024.year')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                      {t('journey.2024.title')}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{t('journey.2024.description')}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="card-image-container group relative glass-card rounded-3xl overflow-hidden card-hover-glow">
                <div className="card-image-wrapper absolute inset-0 card-gradient-purple opacity-50 rounded-3xl"></div>
                <div className="relative z-10 p-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="shrink-0">
                    <span className="inline-block px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white">
                      {t('journey.now.year')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {t('journey.now.title')}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{t('journey.now.description')}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-48 px-6 relative" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-24 text-center">
              {t('values.title')}
            </h2>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="card-image-container group relative glass-card rounded-3xl h-full card-hover-glow">
                <div className="card-image-wrapper absolute inset-0 card-gradient-purple opacity-50 rounded-3xl"></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {t('values.quality.title')}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed flex-grow">
                    {t('values.quality.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="card-image-container group relative glass-card rounded-3xl h-full card-hover-glow">
                <div className="card-image-wrapper absolute inset-0 card-gradient-pink opacity-50 rounded-3xl"></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                    {t('values.attention.title')}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed flex-grow">
                    {t('values.attention.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="card-image-container group relative glass-card rounded-3xl h-full card-hover-glow">
                <div className="card-image-wrapper absolute inset-0 card-gradient-purple opacity-50 rounded-3xl"></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {t('values.transparency.title')}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed flex-grow">
                    {t('values.transparency.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_60%)]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollAnimation>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              {t('cta.title')}
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="text-xl md:text-2xl text-zinc-400 mb-16 leading-relaxed">
              {t('cta.subtitle')}
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="animated-btn inline-block px-12 py-5 bg-white text-black rounded-full font-medium text-lg hover:scale-105 transition-all"
              >
                <span className="btn-text-wrapper">
                  <span className="btn-text-current">{t('cta.startProject')}</span>
                  <span className="btn-text-hover">Start Project →</span>
                </span>
              </Link>
              <Link
                href={`/${locale}/kosten`}
                className="animated-btn px-8 py-5 glass-card rounded-full font-medium text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                <span className="btn-text-wrapper">
                  <span className="btn-text-current">{t('cta.viewPricing')}</span>
                  <span className="btn-text-hover">See Pricing →</span>
                </span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <div className="py-8 text-center border-t border-white/10">
        <p className="text-zinc-600 text-sm mb-2">
          Test Design — Dark Liquidglass Theme
        </p>
        <Link
          href={`/${locale}/test-home`}
          className="text-zinc-500 hover:text-white text-sm transition-colors"
        >
          Back to test home
        </Link>
      </div>
    </div>
  );
}
