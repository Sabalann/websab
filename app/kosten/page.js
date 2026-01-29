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
              <p className="text-xl text-gray-600 dark:text-zinc-300">
                De kosten van een website zijn moeilijk van te voren te bepalen, er kunnen altijd problemen of aanpassingen optreden die je niet van te voren verwacht. Wel kunnen we, nadat het project duidelijk is, een schatting maken waar we allebei vanuit kunnen gaan. Hieronder vind je een overzicht van wat je kunt verwachten.
              </p>
            </div>
          </ScrollAnimation>



          {/* Pricing Cards */}
          <ScrollAnimation delay={300}>
            <div className="max-w-6xl mx-auto mb-24">
              <h2 className="text-3xl font-bold mb-12 text-center">Prijsindicaties</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Landingspagina */}
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl border-2 border-gray-200 dark:border-zinc-700 hover:border-green-500 dark:hover:border-green-400 transition-colors">
                  <h3 className="text-2xl font-bold mb-4">Landingspagina</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-green-600 dark:text-green-400">€750</span>
                    <span className="text-gray-600 dark:text-zinc-300"> - €1.200</span>
                  </div>
                  <p className="text-gray-600 dark:text-zinc-300 mb-6">
                    Perfect voor het promoten van een product, dienst of evenement.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">1 pagina met focus op conversie</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Responsive design</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Contactformulier</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Basis SEO optimalisatie</span>
                    </li>
                  </ul>
                </div>

                {/* Bedrijfswebsite */}
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl border-2 border-green-500 dark:border-green-400 relative transform md:scale-105">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-600 dark:bg-green-400 text-white dark:text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                    Populair
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Bedrijfswebsite</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-green-600 dark:text-green-400">€1.500</span>
                    <span className="text-gray-600 dark:text-zinc-300"> - €2.500</span>
                  </div>
                  <p className="text-gray-600 dark:text-zinc-300 mb-6">
                    Een professionele website voor jouw bedrijf of portfolio.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">5-10 pagina's</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Custom design</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">CMS voor zelf aanpassen</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Uitgebreide SEO</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Animaties & interacties</span>
                    </li>
                  </ul>
                </div>

                {/* Webshop */}
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl border-2 border-gray-200 dark:border-zinc-700 hover:border-green-500 dark:hover:border-green-400 transition-colors">
                  <h3 className="text-2xl font-bold mb-4">Webshop</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-green-600 dark:text-green-400">€2.500</span>
                    <span className="text-gray-600 dark:text-zinc-300"> - €5.000</span>
                  </div>
                  <p className="text-gray-600 dark:text-zinc-300 mb-6">
                    Online verkopen met een professionele e-commerce oplossing.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Productcatalogus</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Winkelwagen & checkout</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Payment integratie</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Voorraadbeheer</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600 dark:text-zinc-300">Klantaccounts</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <p className="text-gray-600 dark:text-zinc-300 max-w-3xl mx-auto">
                  Dit zijn indicatieve prijzen. De exacte kosten hangen af van jouw specifieke wensen en eisen. 
                  Neem contact op voor een vrijblijvende offerte op maat.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* Additional Info */}
          <ScrollAnimation delay={500}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Wat bepaalt de prijs?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl h-full">
                  <div className="space-y-6">
                    <div className="h-[160px]">
                      <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Design Complexiteit</h3>
                      <p className="text-gray-600 dark:text-zinc-300">
                        Custom designs, animaties en interactieve elementen vragen meer ontwikkeltijd. Een uniek design onderscheidt je van de concurrentie.
                      </p>
                    </div>
                    <div className="h-[160px]">
                      <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Aantal Pagina's</h3>
                      <p className="text-gray-600 dark:text-zinc-300">
                        Meer pagina's betekent meer content structureren en optimaliseren. Elke pagina wordt zorgvuldig ontworpen voor de beste gebruikerservaring.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl h-full">
                  <div className="space-y-6">
                    <div className="h-[160px]">
                      <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Functionaliteiten</h3>
                      <p className="text-gray-600 dark:text-zinc-300">
                        Custom features zoals e-commerce of gebruikers accounts vereisen extra ontwikkeling. Deze maken je website krachtiger en veelzijdiger.
                      </p>
                    </div>
                    <div className="h-[160px]">
                      <h3 className="text-xl font-bold mb-3 text-green-600 dark:text-green-400">Content Management</h3>
                      <p className="text-gray-600 dark:text-zinc-300">
                        Een CMS systeem maakt het makkelijk om zelf content te beheren. De initiële setup zorgt voor langdurig gebruiksgemak.
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
                href="/contact"
                className="btn-primary text-center text-lg px-12 py-4">
                Plan een vrijblijvend gesprek
              </Link>
            </div>
          </ScrollAnimation>

          {/* FAQ Section */}
          <ScrollAnimation delay={600}>
            <div className="max-w-3xl mx-auto mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Zijn er verborgen kosten?</h3>
                  <p className="text-gray-600 dark:text-zinc-300">
                    Nee, voordat ik jouw website bouw, bespreken we alle kosten. Als bepaalde aanpassingen niet meer in het budget passen, zullen we samen kijken wat mogelijk is zodat het project niet buiten budget valt. Hosting en domeinregistratie zijn aparte jaarlijkse of maandelijkse kosten die we transparant communiceren.
                  </p>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Hoe zit het met onderhoud?</h3>
                  <p className="text-gray-600 dark:text-zinc-300">
                    Ik bied optionele onderhoudscontracten aan voor updates, backups en technische ondersteuning. Dit bespreken we na oplevering van je website.
                  </p>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Kan ik mijn website later uitbreiden?</h3>
                  <p className="text-gray-600 dark:text-zinc-300">
                    Ja, ik bouw je website zo dat deze makkelijk uit te breiden is. We kunnen altijd nieuwe functionaliteiten toevoegen wanneer je bedrijf groeit.
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