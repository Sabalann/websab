"use client";

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation } from '../components/ScrollAnimation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

const HeroParticles = dynamic(() => import('../components/HeroParticles'), { ssr: false });

export default function Home() {
  const t = useTranslations('Home');
  const { locale } = useParams();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section with particles */}
      <section className="pt-32 pb-20 px-6 min-h-screen relative flex items-center overflow-hidden">
        <HeroParticles />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollAnimation className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text inline-block" data-text={t('hero.title')}>
              {t('hero.title')}
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation className="mb-12 max-w-3xl mx-auto" delay={100}>
            <p className="text-xl md:text-2xl text-gray-600">
              {t('hero.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href={`/${locale}/portfolio`} className="btn-primary btn-lg btn-shine">
                {t('hero.viewPortfolio')}
              </Link>
              <Link href={`/${locale}/kosten`} className="btn-secondary btn-lg">
                {t('hero.viewPricing')}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section with diagonal top */}
      <section className="py-20 px-6 bg-neutral min-h-screen flex items-center transition-colors duration-300 diagonal-top">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg -z-10 float bg-green-100"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-200 rounded-lg -z-10 float-delayed"></div>
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image 
                  src="/profile.jpeg" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  alt="Profile photo"
                  objectPosition="center 20%"
                />
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="max-w-lg">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-1/3 after:h-1 after:bg-green-500">
                  {t('about.title')}
                </span>
              </h2>
            </ScrollAnimation>
            
            <div className="space-y-6">
              <ScrollAnimation delay={100}>
                <div className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300 card-3d">
                  <h3 className="text-xl font-bold mb-2 text-green-600">{t('about.personalApproach.title')}</h3>
                  <p className="text-gray-600">
                    {t('about.personalApproach.description')}
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={200}>
                <div className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300 card-3d">
                  <h3 className="text-xl font-bold mb-2 text-green-600">{t('about.focusResults.title')}</h3>
                  <p className="text-gray-600">
                    {t('about.focusResults.description')}
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={300}>
                <div className="bg-white p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300 card-3d">
                  <h3 className="text-xl font-bold mb-2 text-green-600">{t('about.technicalExpertise.title')}</h3>
                  <p className="text-gray-600">
                    {t('about.technicalExpertise.description')}
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={400}>
                <div className="flex gap-4 mt-8">
                  <Link 
                    href={`/${locale}/kosten`}
                    className="btn-primary btn-shine"
                  >
                    {t('about.viewPricing')}
                  </Link>
                  <Link 
                    href={`/${locale}/overmij`}
                    className="btn-secondary"
                  >
                    {t('about.moreAbout')}
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with diagonal top and custom styling */}
      <section className="py-32 px-6 relative diagonal-top bg-green-50">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold gradient-text mb-8" data-text={t('cta.title')}>
              {t('cta.title')}
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <p className="text-xl text-gray-700 mb-12">
              {t('cta.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <Link href={`/${locale}/contact`} className="blob-btn btn-primary btn-lg px-12 py-5 text-lg">
              {t('cta.contact')}
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
