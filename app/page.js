"use client"
import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ScrollAnimation } from './components/ScrollAnimation';
import { useTheme } from './context/ThemeContext';

export default function Home() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 4; // Bigger size for leaves
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 + 0.5; // Falling motion
        this.color = theme === 'dark' ? '#22c55e' : '#16a34a';
        this.alpha = Math.random() * 0.6 + 0.2;
        this.rotation = Math.random() * Math.PI; // Random rotation
        this.rotationSpeed = (Math.random() - 0.5) * 0.02; // Rotation animation
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed; // Rotate the leaf
        
        // Reset position when leaf falls below screen
        if (this.y > canvas.height) {
          this.y = -10;
          this.x = Math.random() * canvas.width;
        }
        
        // Wrap around sides
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;
        
        // Draw leaf shape
        ctx.beginPath();
        ctx.moveTo(0, -this.size/2);
        ctx.bezierCurveTo(
          this.size/2, -this.size/2,
          this.size/2, this.size/2,
          0, this.size/2
        );
        ctx.bezierCurveTo(
          -this.size/2, this.size/2,
          -this.size/2, -this.size/2,
          0, -this.size/2
        );
        
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }
    
    // Create particles
    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 40), 25); // Fewer leaves
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    
    createParticles();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    }
  }, [theme]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section with morphing background and floating elements */}
      <section className="pt-32 pb-20 px-6 min-h-screen relative flex items-center overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="absolute top-0 left-0 w-full h-full"
        />
        
        {/* Tree Illustration */}
        <div className="absolute inset-0 z-0 opacity-15">
          <svg viewBox="0 0 1000 1000" className="w-full h-full">
            {/* Main trunk */}
            <path
              d="M480,900 Q500,700 500,600 Q490,500 510,400 Q520,300 500,200"
              stroke="currentColor"
              strokeWidth="40"
              fill="none"
              className="text-green-900 dark:text-green-800"
            />
            
            {/* Main branches */}
            <path
              d="M510,400 Q600,380 650,320 Q700,260 720,200"
              stroke="currentColor"
              strokeWidth="20"
              fill="none"
              className="text-green-900 dark:text-green-800"
            />
            <path
              d="M490,400 Q400,380 350,320 Q300,260 280,200"
              stroke="currentColor"
              strokeWidth="20"
              fill="none"
              className="text-green-900 dark:text-green-800"
            />
            <path
              d="M510,500 Q580,480 620,440 Q660,400 680,360"
              stroke="currentColor"
              strokeWidth="15"
              fill="none"
              className="text-green-900 dark:text-green-800"
            />
            <path
              d="M490,500 Q420,480 380,440 Q340,400 320,360"
              stroke="currentColor"
              strokeWidth="15"
              fill="none"
              className="text-green-900 dark:text-green-800"
            />
            
            {/* Smaller branches */}
            <path
              d="M720,200 Q740,180 760,170 M720,200 Q730,220 750,230"
              stroke="currentColor"
              strokeWidth="10"
              fill="none"
              className="text-green-900 dark:text-green-800"
            />
            <path
              d="M280,200 Q260,180 240,170 M280,200 Q270,220 250,230"
              stroke="currentColor"
              strokeWidth="10"
              fill="none"
              className="text-green-900 dark:text-green-800"
            />
            
            {/* Foliage */}
            <path
              d="M500,50 Q650,50 750,150 Q850,250 800,400 Q750,550 650,600 Q550,650 500,650 Q450,650 350,600 Q250,550 200,400 Q150,250 250,150 Q350,50 500,50"
              className="fill-green-600 dark:fill-green-500 opacity-90"
            />
            <path
              d="M500,100 Q620,100 700,180 Q780,260 740,380 Q700,500 620,540 Q540,580 500,580 Q460,580 380,540 Q300,500 260,380 Q220,260 300,180 Q380,100 500,100"
              className="fill-green-500 dark:fill-green-400 opacity-80"
            />
            
            {/* Roots */}
            <path
              d="M480,900 Q400,920 320,900 Q250,880 200,920"
              stroke="currentColor"
              strokeWidth="15"
              fill="none"
              className="text-green-900 dark:text-green-800"
            />
            <path
              d="M520,900 Q600,920 680,900 Q750,880 800,920"
              stroke="currentColor"
              strokeWidth="15"
              fill="none"
              className="text-green-900 dark:text-green-800"
            />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollAnimation className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text inline-block" data-text="Heb je een website nodig?">
              Heb je een website nodig?
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation className="mb-12 max-w-3xl mx-auto" delay={100}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Ik bouw websites die niet alleen jou, maar ook jouw klanten aanspreken.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link href="/prijzen" className="btn-primary btn-lg btn-shine">
                Bekijk prijzen
              </Link>
              <Link href="/portfolio" className="btn-secondary btn-lg">
                Bekijk portfolio
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
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-lg -z-10 float bg-green-100 dark:bg-green-900/30"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-lg -z-10 float-delayed"></div>
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image 
                  src="/profile.jpeg" 
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  alt="Jouw foto"
                  objectPosition="center 20%"
                />
              </div>
            </div>
          </ScrollAnimation>
          
          <div className="max-w-lg">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                <span className="relative inline-block after:absolute after:bottom-0 after:left-0 after:w-1/3 after:h-1 after:bg-green-500 dark:after:bg-green-400">
                  Waarom voor mij kiezen?
                </span>
              </h2>
            </ScrollAnimation>
            
            <div className="space-y-6">
              <ScrollAnimation delay={100}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300 card-3d">
                  <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">Persoonlijke aanpak</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ik werk nauw samen met jou om precies te begrijpen wat jij, en belangrijker nog, jouw klanten nodig hebben. Geen standaard templates, maar een website die perfect past bij jouw bedrijf.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={200}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300 card-3d">
                  <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">Focus op resultaat</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Je krijgt niet zomaar een mooie website, maar een effectief instrument dat klanten aantrekt.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={300}>
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform duration-300 card-3d">
                  <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">Technische expertise</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Met jarenlange ervaring in webdevelopment zorg ik voor een snelle, veilige en gebruiksvriendelijke website die perfect werkt op alle apparaten.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={400}>
                <div className="flex gap-4 mt-8">
                  <Link 
                    href="/prijzen" 
                    className="btn-primary btn-shine"
                  >
                    Bekijk prijzen
                  </Link>
                  <Link 
                    href="/aanpak" 
                    className="btn-secondary"
                  >
                    Leer meer over mijn aanpak
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section with diagonal top and custom styling */}
      <section className="py-32 px-6 relative diagonal-top bg-green-50 dark:bg-green-900/20">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold gradient-text mb-8" data-text="Klaar voor de volgende stap?">
              Klaar voor de volgende stap?
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation delay={100}>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-12">
              Laten we samen jouw digitale visie werkelijkheid maken.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation delay={200}>
            <Link href="/contact" className="blob-btn btn-primary btn-lg px-12 py-5 text-lg">
              Neem contact op
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
