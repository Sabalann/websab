"use client"
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function OverMij() {
  const t = useTranslations('About');
  const { locale } = useParams();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <ScrollAnimation>
              <h1 className="text-4xl md:text-5xl font-bold">
                {t('hero.title')} <span className="text-green-600">{t('hero.name')}</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={100}>
              <p className="text-xl text-gray-600">
                {t('hero.subtitle')}
              </p>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation delay={200}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-100 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-200 rounded-lg -z-10"></div>
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image 
                  src="/profile.jpeg" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  alt="Portrait photo" 
                  objectPosition="center 20%"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-6 bg-gray-50 transition-colors duration-300">
        <div className="max-w-3xl mx-auto space-y-12">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center">{t('journey.title')}</h2>
          </ScrollAnimation>
          
          <div className="space-y-8">
            <ScrollAnimation delay={100}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-28 shrink-0 text-green-600 font-bold">{t('journey.2023.year')}</div>
                <div className="w-full">
                  <h3 className="font-bold text-xl mb-2">{t('journey.2023.title')}</h3>
                  <p className="text-gray-600">{t('journey.2023.description')}</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-28 shrink-0 text-green-600 font-bold">{t('journey.2024.year')}</div>
                <div className="w-full">
                  <h3 className="font-bold text-xl mb-2">{t('journey.2024.title')}</h3>
                  <p className="text-gray-600">{t('journey.2024.description')}</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-28 shrink-0 text-green-600 font-bold">{t('journey.now.year')}</div>
                <div className="w-full">
                  <h3 className="font-bold text-xl mb-2">{t('journey.now.title')}</h3>
                  <p className="text-gray-600">{t('journey.now.description')}</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12">{t('values.title')}</h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-xl mb-4 text-green-600">{t('values.quality.title')}</h3>
                <p className="text-gray-600">{t('values.quality.description')}</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-xl mb-4 text-green-600">{t('values.attention.title')}</h3>
                <p className="text-gray-600">{t('values.attention.description')}</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-bold text-xl mb-4 text-green-600">{t('values.transparency.title')}</h3>
                <p className="text-gray-600">{t('values.transparency.description')}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold">{t('cta.title')}</h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <p className="text-xl text-gray-600">
              {t('cta.subtitle')}
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${locale}/contact`}
                className="btn-primary btn-lg"
              >
                {t('cta.startProject')}
              </Link>
              <Link 
                href={`/${locale}/kosten`}
                className="btn-secondary btn-lg"
              >
                {t('cta.viewPricing')}
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
