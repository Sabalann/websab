"use client"
import NavbarDark from '../../components/NavbarDark';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function TestHome() {
  const t = useTranslations('Home');
  const { locale } = useParams();
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const scrollRafRef = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = '#0a0a0a';

    // Parallax: throttle with RAF (no setState)
    const onScroll = () => {
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = requestAnimationFrame(() => {
        const scrollPos = window.scrollY;
        if (heroRef.current) {
          heroRef.current.style.transform = `translateY(${scrollPos * 0.2}px)`;
        }
        if (profileRef.current) {
          profileRef.current.style.transform = `translateY(${-Math.min(scrollPos * 0.15, 80)}px)`;
        }
        scrollRafRef.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.body.style.backgroundColor = '';
      window.removeEventListener('scroll', onScroll);
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <NavbarDark/>

      {/* Hero Section with Parallax */}
      <section className="pt-48 pb-12 px-6 min-h-[50vh] flex items-center relative overflow-hidden">
        {/* Subtle gradient orbs - no filter blur for performance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.12)_0%,transparent_70%)]"></div>
        
        <div ref={heroRef} className="max-w-6xl mx-auto text-center relative z-10">
          <ScrollAnimation className="mb-8">
            <div className="inline-block mb-8">
              <span className="px-4 py-2 bg-white/[0.08] border border-white/10 rounded-full text-sm text-zinc-400">
                Available for work
              </span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation className="mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-8 leading-tight">
              {t('hero.title')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation className="mb-16 max-w-3xl mx-auto" delay={100}>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${locale}/portfolio`} 
                className="animated-btn group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:scale-105"
              >
                <span className="btn-text-wrapper relative z-10">
                  <span className="btn-text-current">{t('hero.viewPortfolio')}</span>
                  <span className="btn-text-hover">Let&apos;s Go →</span>
                </span>
              </Link>
              <Link 
                href={`/${locale}/kosten`} 
                className="animated-btn px-8 py-4 glass-card rounded-full font-medium text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                <span className="btn-text-wrapper">
                  <span className="btn-text-current">{t('hero.viewPricing')}</span>
                  <span className="btn-text-hover">See Pricing →</span>
                </span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Profile Photo Section with Parallax */}
      <section className="pt-40 pb-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div ref={profileRef} className="relative mx-auto max-w-md md:max-w-lg">
              {/* Decorative elements - gradients only, no blur or animation */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.2)_0%,transparent_70%)]"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.2)_0%,transparent_70%)]"></div>
              
              {/* Glass container with profile photo */}
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
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-navbar px-6 py-3 rounded-full">
                <p className="text-white font-medium text-sm">Sab — Apple Developer</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section with Enhanced Cards */}
      <section className="py-48 px-6 relative" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-24 text-center">
              {t('about.title')}
            </h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Purple gradient */}
            <ScrollAnimation delay={100} className="stagger-1">
              <div className="card-image-container group relative glass-card rounded-3xl h-full card-hover-glow">
                <div className="card-image-wrapper absolute inset-0 card-gradient-purple opacity-50 rounded-3xl"></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {t('about.personalApproach.title')}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed flex-grow">
                    {t('about.personalApproach.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Card 2 - Pink gradient */}
            <ScrollAnimation delay={200} className="stagger-2">
              <div className="card-image-container group relative glass-card rounded-3xl h-full card-hover-glow">
                <div className="card-image-wrapper absolute inset-0 card-gradient-pink opacity-50 rounded-3xl"></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors">
                    {t('about.focusResults.title')}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed flex-grow">
                    {t('about.focusResults.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Card 3 - Purple gradient */}
            <ScrollAnimation delay={300} className="stagger-3">
              <div className="card-image-container group relative glass-card rounded-3xl h-full card-hover-glow">
                <div className="card-image-wrapper absolute inset-0 card-gradient-purple opacity-50 rounded-3xl"></div>
                <div className="relative z-10 p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {t('about.technicalExpertise.title')}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed flex-grow">
                    {t('about.technicalExpertise.description')}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
              <Link 
                href={`/${locale}/kosten`}
                className="animated-btn px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-all text-center"
              >
                <span className="btn-text-wrapper">
                  <span className="btn-text-current">{t('about.viewPricing')}</span>
                  <span className="btn-text-hover">See Pricing →</span>
                </span>
              </Link>
              <Link 
                href={`/${locale}/test-about`}
                className="animated-btn px-8 py-4 glass-card rounded-full font-medium text-white hover:bg-white/10 transition-all hover:scale-105 text-center"
              >
                <span className="btn-text-wrapper">
                  <span className="btn-text-current">{t('about.moreAbout')}</span>
                  <span className="btn-text-hover">About Me →</span>
                </span>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-48 px-6 relative" style={{ contentVisibility: 'auto' }}>
        {/* Gradient orb - no filter blur for performance */}
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
            <Link 
              href={`/${locale}/contact`} 
              className="animated-btn inline-block px-12 py-5 bg-white text-black rounded-full font-medium text-lg hover:scale-105 transition-all"
            >
              <span className="btn-text-wrapper">
                <span className="btn-text-current">{t('cta.contact')}</span>
                <span className="btn-text-hover">Start Project →</span>
              </span>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer notice */}
      <div className="py-8 text-center border-t border-white/10">
        <p className="text-zinc-600 text-sm">
          Test Design — Dark Liquidglass Theme with Micro-interactions
        </p>
      </div>
    </div>
  );
}
