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
                De kosten van een website zijn moeilijk van te voren te bepalen, er kunnen altijd problemen of aanpassingen optreden die je niet van te voren verwacht. Wel kunnen we, nadat het project duidelijk is, een schatting maken waar we allebei vanuit kunnen gaan. Hieronder vind je een overzicht van wat je kunt verwachten.
              </p>
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
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Zijn er verborgen kosten?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nee, voordat ik jouw website bouw, bespreken we alle kosten. Als bepaalde aanpassingen niet meer in het budget passen, zullen we samen kijken wat mogelijk is zodat het project niet buiten budget valt. Hosting en domeinregistratie zijn aparte jaarlijkse of maandelijkse kosten die we transparant communiceren.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Hoe zit het met onderhoud?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ik bied optionele onderhoudscontracten aan voor updates, backups en technische ondersteuning. Dit bespreken we na oplevering van je website.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Kan ik mijn website later uitbreiden?</h3>
                  <p className="text-gray-600 dark:text-gray-300">
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