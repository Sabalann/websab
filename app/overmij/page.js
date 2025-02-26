"use client"
import Navbar from '../../components/Navbar';
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
                Hey, ik ben <span className="text-green-600">Sab</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation delay={100}>
              <p className="text-xl text-gray-600">
                Als web developer help ik ondernemers hun online aanwezigheid naar het volgende niveau te tillen. Met meer dan [X] jaar ervaring weet ik precies wat werkt en wat niet.
              </p>
            </ScrollAnimation>
          </div>
          
          <ScrollAnimation delay={200}>
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <Image 
                src="/about-hero.jpg" 
                fill
                className="object-cover rounded-2xl shadow-lg"
                alt="Portret foto" 
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-12">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center">Mijn Reis</h2>
          </ScrollAnimation>
          
          <div className="space-y-8">
            <ScrollAnimation delay={100}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-28 shrink-0 text-green-600 font-semibold">2023 - Heden</div>
                <div className="w-full">
                  <h3 className="font-semibold text-xl mb-2">Bachelor Computer Science</h3>
                  <p className="text-gray-600">In 2024 ben ik begonnen aan mijn bacheloropleiding Computer Science aan de Universiteit Utrecht. Hier leer ik van alles over software development, waaronder web development. Ook hebben we het vaak over UX design en AI, wat mij enorm heef geholpn in mijn journey als web developer.</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-28 shrink-0 text-green-600 font-semibold">2024</div>
                <div className="w-full">
                  <h3 className="font-semibold text-xl mb-2">Eerste Grote Project</h3>
                  <p className="text-gray-600">In 2024 ben ik begonnen met het ontwikkelen van mijn eigen websites. Ik ben begonnen met HTML, CSS en JavaScript. Later heb ik geëxperimenteed met veel frameworks, waarna ik mezelf specialiseerde in React. Momenteel gebruik ik Next.js, React, en Tailwind voor mijn projecten.</p>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-full sm:w-28 shrink-0 text-green-600 font-semibold">Nu</div>
                <div className="w-full">
                  <h3 className="font-semibold text-xl mb-2">Waar ik nu sta</h3>
                  <p className="text-gray-600">Vertel over je huidige focus en expertise.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-12">Waar ik in geloof</h2>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-xl mb-4 text-green-600">Kwaliteit Boven Alles</h3>
                <p className="text-gray-600">Ik geloof in het leveren van hoogwaardige websites die niet alleen mooi zijn, maar ook perfect functioneren.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-xl mb-4 text-green-600">Persoonlijke Aandacht</h3>
                <p className="text-gray-600">Elk project krijgt mijn volledige aandacht. Ik geloof in nauwe samenwerking met mijn klanten.</p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-xl mb-4 text-green-600">Continu Leren</h3>
                <p className="text-gray-600">De technologie staat niet stil, en ik ook niet. Ik blijf mezelf constant ontwikkelen.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-green-50">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold">Klaar om samen te werken?</h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <p className="text-xl text-gray-600">
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
