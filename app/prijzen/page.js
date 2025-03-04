"use client"
import Navbar from '../components/Navbar';
import { ScrollAnimation } from '../components/ScrollAnimation';
import Link from 'next/link';

export default function Prijzen() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transparante prijzen voor jouw website
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                De kosten van een website zijn afhankelijk van verschillende factoren. Hieronder vind je een overzicht van wat je kunt verwachten.
              </p>
            </div>
          </ScrollAnimation>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Basic Package */}
            <ScrollAnimation delay={100}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Starter Website</h2>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
                    Vanaf €750
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Perfect voor kleine ondernemers die net beginnen.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">3-5 pagina's (Home, Over, Contact, etc.)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Responsive design voor alle apparaten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Contact formulier</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Basis SEO optimalisatie</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Professional Package */}
            <ScrollAnimation delay={200}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-5 right-5">
                  <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-sm font-medium px-3 py-1 rounded-full">
                    Populair
                  </span>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Professional Website</h2>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
                    Vanaf €1.500
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Voor bedrijven die willen groeien.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">5-8 pagina's met custom ontwerp</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Blog of nieuws sectie</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Uitgebreide SEO optimalisatie</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">CMS voor zelf content beheren</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Social media integratie</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Custom Package */}
            <ScrollAnimation delay={300}>
              <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Custom Website</h2>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">
                    Vanaf €2.500
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Voor complexe projecten op maat.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Onbeperkt aantal pagina's</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Custom functionaliteiten</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">E-commerce mogelijkheden</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">API integraties</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Premium support & onderhoud</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Central CTA */}
          <ScrollAnimation delay={400}>
            <div className="text-center mb-24">
              <Link 
                href="/contact"
                className="btn-primary text-center text-lg px-12 py-4"
              >
                Plan een vrijblijvend gesprek
              </Link>
            </div>
          </ScrollAnimation>

          {/* Additional Info */}
          <ScrollAnimation delay={500}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Wat bepaalt de prijs?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl h-full">
                  <div className="space-y-6">
                    <div className="h-[160px]">
                      <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Design Complexiteit</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Custom designs, animaties en interactieve elementen vragen meer ontwikkeltijd. Een uniek design onderscheidt je van de concurrentie.
                      </p>
                    </div>
                    <div className="h-[160px]">
                      <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Aantal Pagina's</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Meer pagina's betekent meer content structureren en optimaliseren. Elke pagina wordt zorgvuldig ontworpen voor de beste gebruikerservaring.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl h-full">
                  <div className="space-y-6">
                    <div className="h-[160px]">
                      <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Functionaliteiten</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Custom features zoals e-commerce of gebruikers accounts vereisen extra ontwikkeling. Deze maken je website krachtiger en veelzijdiger.
                      </p>
                    </div>
                    <div className="h-[160px]">
                      <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Content Management</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Een CMS systeem maakt het makkelijk om zelf content te beheren. De initiële setup zorgt voor langdurig gebruiksgemak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* FAQ Section */}
          <ScrollAnimation delay={600}>
            <div className="max-w-3xl mx-auto mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Zijn er verborgen kosten?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nee, we maken vooraf een duidelijke offerte met alle kosten. Hosting en domeinregistratie zijn aparte jaarlijkse of maandelijkse kosten die we transparant communiceren.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Hoe zit het met onderhoud?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We bieden optionele onderhoudscontracten aan voor updates, backups en technische ondersteuning. Dit bespreken we na oplevering van je website.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Kan ik mijn website later uitbreiden?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ja, we bouwen je website zo dat deze makkelijk uit te breiden is. We kunnen altijd nieuwe functionaliteiten toevoegen wanneer je bedrijf groeit.
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