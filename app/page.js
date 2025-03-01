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
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = theme === 'dark' ? '#22c55e' : '#16a34a'; // Adjust color based on theme
        this.alpha = Math.random() * 0.4 + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }
        
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }
    
    // Create particles
    const createParticles = () => {
      particles = []; // Clear existing particles when recreating
      const particleCount = Math.min(Math.floor(window.innerWidth / 20), 50);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }
    
    createParticles();
    
    // Connect particles with lines if they are close enough
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = theme === 'dark' ? '#22c55e' : '#16a34a'; // Adjust color based on theme
            ctx.globalAlpha = 0.15 * (1 - distance / 120);
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Mouse interaction
    let mouse = {
      x: null,
      y: null,
      radius: 150
    }
    
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    }
  }, [theme]); // Re-run when theme changes

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 min-h-screen relative flex items-center">
        <canvas 
          ref={canvasRef} 
          className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-900 transition-colors duration-300"
        />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollAnimation className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold">
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
              <Link href="/prijzen" className="btn-primary btn-lg">
                Bekijk prijzen
              </Link>
              <Link href="/portfolio" className="btn-secondary btn-lg">
                Bekijk portfolio
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 min-h-screen flex items-center transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimation>
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <Image 
                src="/placeholder-profile.jpg" 
                fill
                className="object-cover rounded-2xl shadow-lg"
                alt="Jouw foto"
              />
            </div>
          </ScrollAnimation>
          
          <div className="max-w-lg">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Waarom voor mij kiezen?
              </h2>
            </ScrollAnimation>
            
            <div className="space-y-6">
              <ScrollAnimation delay={100}>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">Persoonlijke aanpak</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ik werk nauw samen met jou om precies te begrijpen wat jij, en belangrijker nog, jouw klanten nodig hebben. Geen standaard templates, maar een website die perfect past bij jouw bedrijf.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={200}>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">Focus op resultaat</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Je krijgt niet zomaar een mooie website, maar een effectief instrument dat klanten aantrekt.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation delay={300}>
                <div>
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
                    className="btn-primary"
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
    </div>
  );
}
