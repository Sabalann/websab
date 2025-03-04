"use client"
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollAnimation } from '../components/ScrollAnimation';

export default function OverMij() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <ScrollAnimation>
              <h1 className="text-4xl md:text-5xl font-bold">
                Hey, ik ben <span className="text-green-600 dark:text-green-400">Sab</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={100}>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Als web developer help ik ondernemers hun online aanwezigheid naar het volgende niveau te tillen.
              </p>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation delay={200}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg -z-10"></div>
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image 
                  src="/profile.jpeg" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  alt="Portret foto" 
                  objectPosition="center 20%"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-3xl mx-auto space-y-12">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center">Mijn Reis</h2>
          </ScrollAnimation>
          
          <div className="space-y-8">
            <ScrollAnimation delay={100}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-28 shrink-0 text-green-600 dark:text-green-400 font-semibold">2023 - Heden</div>
                <div className="w-full">
                  <h3 className="font-semibold text-xl mb-2">Bachelor Computer Science</h3>
                  <p className="text-gray-600 dark:text-gray-300">In 2023 begon ik aan mijn bachelor Computer Science aan de Universiteit Utrecht. Hier ontwikkelde ik een sterke basis in software development, UX-design en AI — kennis die ik dagelijks toepas in mijn werk als webdeveloper.</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-28 shrink-0 text-green-600 dark:text-green-400 font-semibold">2024</div>
                <div className="w-full">
                  <h3 className="font-semibold text-xl mb-2">Eerste Grote Project</h3>
                  <p className="text-gray-600 dark:text-gray-300">In 2024 ben ik begonnen met het ontwikkelen van mijn eigen websites. Ik ben begonnen met HTML, CSS en JavaScript. Later heb ik geëxperimenteerd met veel frameworks, waarna ik mezelf specialiseerde in React. Momenteel werk ik vooral met Next.js, React en Tailwind CSS — tools waarmee ik snelle en schaalbare websites bouw.</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-28 shrink-0 text-green-600 dark:text-green-400 font-semibold">Nu</div>
                <div className="w-full">
                  <h3 className="font-semibold text-xl mb-2">Waar ik nu sta</h3>
                  <p className="text-gray-600 dark:text-gray-300">Als freelance webdeveloper richt ik me op het bouwen van op maat gemaakte websites die bedrijven helpen groeien. Ik combineer technische expertise met een scherp oog voor design en gebruikerservaring.</p>
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
            <h2 className="text-3xl font-bold text-center mb-12">Waar ik in geloof</h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-xl mb-4 text-green-600 dark:text-green-400">Kwaliteit Boven Alles</h3>
                <p className="text-gray-600 dark:text-gray-300">Ik geloof in het leveren van hoogwaardige websites die niet alleen mooi zijn, maar ook perfect functioneren.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-xl mb-4 text-green-600 dark:text-green-400">Persoonlijke Aandacht</h3>
                <p className="text-gray-600 dark:text-gray-300">Elk project krijgt mijn volledige aandacht. Door nauw samen te werken en regelmatig af te stemmen, zorg ik ervoor dat het eindresultaat perfect aansluit bij de wensen en behoeften van mijn klanten.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-semibold text-xl mb-4 text-green-600 dark:text-green-400">Transparantie</h3>
                <p className="text-gray-600 dark:text-gray-300">Ik geloof in open communicatie en transparantie. Ik geef je een helder overzicht van het werk dat ik voor je uitvoer en ik geef je constant updates over het progressie van je project. Ook zullen we altijd de kosten van te voren afspreken.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section - Fixed contrast issues */}
      <section className="py-20 px-6 bg-green-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold">Klaar om samen te werken?</h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Laten we samen jouw ideale website bouwen.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/build" 
                className="btn-primary btn-lg"
              >
                Start jouw project
              </Link>
              <Link 
                href="/aanpak" 
                className="btn-secondary btn-lg"
              >
                Bekijk mijn aanpak
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
