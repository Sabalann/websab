"use client"
import Navbar from '../../components/Navbar';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Prijzen() {
  const t = useTranslations('Pricing');
  const { locale } = useParams();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('hero.subtitle')}
              </p>
            </div>
          </ScrollAnimation>

          {/* Pricing Cards */}
          <ScrollAnimation delay={300}>
            <div className="max-w-6xl mx-auto mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">{t('cards.title')}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Landingspagina */}
                <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-500 transition-colors">
                  <h3 className="text-2xl font-bold mb-4">{t('cards.landing.title')}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-green-600">{t('cards.landing.price')}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {t('cards.landing.description')}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {t.raw('cards.landing.features').map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bedrijfswebsite */}
                <div className="bg-white p-8 rounded-xl border-2 border-green-500 relative transform md:scale-105">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    {t('cards.business.badge')}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t('cards.business.title')}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-green-600">{t('cards.business.price')}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {t('cards.business.description')}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {t.raw('cards.business.features').map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Webshop */}
                <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-500 transition-colors">
                  <h3 className="text-2xl font-bold mb-4">{t('cards.shop.title')}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-green-600">{t('cards.shop.price')}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {t('cards.shop.description')}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {t.raw('cards.shop.features').map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 max-w-3xl mx-auto">
                  {t('cards.disclaimer')}
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Additional Info */}
          <ScrollAnimation delay={500}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">{t('factors.title')}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl h-full">
                  <div className="space-y-6">
                    <div className="h-[160px]">
                      <h3 className="text-xl font-bold mb-3 text-green-600">{t('factors.design.title')}</h3>
                      <p className="text-gray-600">
                        {t('factors.design.description')}
                      </p>
                    </div>
                    <div className="h-[160px]">
                      <h3 className="text-xl font-bold mb-3 text-green-600">{t('factors.pages.title')}</h3>
                      <p className="text-gray-600">
                        {t('factors.pages.description')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl h-full">
                  <div className="space-y-6">
                    <div className="h-[160px]">
                      <h3 className="text-xl font-bold mb-3 text-green-600">{t('factors.features.title')}</h3>
                      <p className="text-gray-600">
                        {t('factors.features.description')}
                      </p>
                    </div>
                    <div className="h-[160px]">
                      <h3 className="text-xl font-bold mb-3 text-green-600">{t('factors.cms.title')}</h3>
                      <p className="text-gray-600">
                        {t('factors.cms.description')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Central CTA */}
          <ScrollAnimation delay={400}>
            <div className="text-center mb-24">
              <Link 
                href={`/${locale}/contact`}
                className="btn-primary text-center text-lg px-12 py-4">
                {t('cta')}
              </Link>
            </div>
          </ScrollAnimation>

          {/* FAQ Section */}
          <ScrollAnimation delay={600}>
            <div className="max-w-3xl mx-auto mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{t('faq.title')}</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">{t('faq.hiddenCosts.question')}</h3>
                  <p className="text-gray-600">
                    {t('faq.hiddenCosts.answer')}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">{t('faq.maintenance.question')}</h3>
                  <p className="text-gray-600">
                    {t('faq.maintenance.answer')}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">{t('faq.expansion.question')}</h3>
                  <p className="text-gray-600">
                    {t('faq.expansion.answer')}
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
