import { mutation } from "./_generated/server";

// Seed projects from your existing JSON data
export const seedProjects = mutation({
  handler: async (ctx) => {
    // Check if projects already exist
    const existing = await ctx.db.query("projects").first();
    if (existing) {
      return { message: "Projects already seeded" };
    }

    const projects = [
      {
        id: "pickamenu",
        media: { type: "", url: "/projects/pickamenu-preview.webp", thumbnail: "/projects/pickamenu-preview.webp" },
        tags: ["Next.js", "React", "Tailwind CSS", "Clerk", "Convex"],
        date: "2025-10-01",
        url: "https://picka.menu/",
        translations: {
          en: {
            title: "Pick A Menu",
            description: "Random meal picker, a social food feed, and a way to organize your recipes",
            content: "<p>After too often struggling to decide what to eat, I created 'Pick a Menu'; a web app that decides for you what you're going to eat.</p><p>You can add your own recipes with photos, instructions, and ingredients, see what others are eating, and copy their recipes to your own menu. A kind of mix between a random meal picker, a social food feed, and a way to organize your recipes🍴</p><p>I started this as a one-day project, but it grew into something I want to share with the rest of the world!</p>"
          },
          nl: {
            title: "Pick A Menu",
            description: "Random meal picker, een sociale food-feed en een manier om overzicht te krijgen op je recepten",
            content: "<p>Na te vaak twijfelen over wat ik wilde eten heb ik 'Pick a Menu' gemaakt; een webapp die voor jou kiest wat je gaat eten.</p><p>Je kunt je eigen recepten toevoegen met foto's, instructies en ingrediënten, kijken wat anderen eten en hun recepten kopiëren naar je eigen menu. Een soort mix tussen een random meal picker, een sociale food-feed en een manier om overzicht te krijgen over je recepten🍴</p><p>Ik ben dit ooit als eendaags project begonnen, maar het groeide uit tot iets wat ik met de rest van de wereld wil delen!</p>"
          }
        }
      },
      {
        id: "pomofocus",
        media: { type: "", url: "/projects/pomofocus/pomofocus-1.webp", thumbnail: "/projects/pomofocus/pomofocus-1.webp" },
        tags: ["Swift", "SwiftUI", "SwiftData", "iOS", "macOS"],
        date: "2025-01-15",
        url: "https://apps.apple.com/app/id6738840344",
        translations: {
          en: {
            title: "PomoFocus",
            description: "A Pomodoro timer app for iOS and macOS",
            content: "<p>PomoFocus is a Pomodoro timer app for iOS and macOS that helps you stay focused and productive.</p><p>The app follows the Pomodoro Technique: work for 25 minutes, then take a 5-minute break. After four sessions, you get a longer 15-minute break. This method helps maintain focus and prevents burnout.</p><h2>Features</h2><ul><li><strong>Simple and Clean Interface</strong>: A minimalist design that doesn't distract you from your work</li><li><strong>Customizable Timers</strong>: Adjust work and break durations to fit your workflow</li><li><strong>Task Management</strong>: Keep track of what you're working on with built-in task lists</li><li><strong>Statistics</strong>: See your productivity over time with detailed statistics</li><li><strong>Notifications</strong>: Get notified when it's time to take a break or get back to work</li><li><strong>Cross-Platform</strong>: Seamless sync between iPhone, iPad, and Mac</li></ul><p>I built PomoFocus because I wanted a simple, distraction-free timer that works across all my devices. The app is built with SwiftUI and uses SwiftData for persistent storage and iCloud sync.</p><p>The development of this app taught me a lot about native iOS and macOS development, especially regarding state management, data persistence, and creating a consistent user experience across platforms.</p>"
          },
          nl: {
            title: "PomoFocus",
            description: "A Pomodoro timer app",
            content: "<p>PomoFocus is a simple Pomodoro timer designed to help you stay focused and work more consistently.</p><p>Create custom focus timers, start sessions in one tap, and let the app handle breaks for you. Whether you're studying, coding, or working, PomoFocus keeps distractions out of the way and helps you build a steady routine.</p><h2>Key features</h2><ul><li>Custom Pomodoro timers with focus, short breaks, and long breaks</li><li>Multiple sessions per timer</li><li>Start, pause, reset, or skip phases at any time</li><li>Works reliably in the background with notifications</li><li>Visualize user data allowing the them to view their stats</li></ul><h2>Track your progress</h2><ul><li>See how many minutes you focused today</li><li>Track total focus hours and completed sessions</li><li>Build daily streaks by staying consistent</li><li>Visualize your activity with a 90-day heatmap</li></ul><h2>Designed to stay out of your way</h2><ul><li>Clean, modern interface</li><li>Smooth animations and subtle feedback</li><li>Light and dark mode support</li></ul><p>PomoFocus is built to be fast, clear, and easy to use. Set a timer, focus, take a break, and repeat.</p>"
          }
        }
      },
      {
        id: "fotopol",
        media: { type: "", url: "/projects/fotopol-preview.webp", thumbnail: "/projects/fotopol-preview.webp" },
        tags: ["Next.js", "React", "Tailwind CSS"],
        date: "2025-05-10",
        url: "https://fotopol.nl/",
        translations: {
          en: {
            title: "Foto Pol",
            description: "A business website for Foto Pol",
            content: "<p>I am currently still developing this website</p>"
          },
          nl: {
            title: "Foto Pol",
            description: "Een bedrijfswebsite voor Foto Pol",
            content: "<p>Momenteel ben ik nog bezig met de ontwikkeling van deze website</p>"
          }
        }
      },
      {
        id: "leilikhodaei",
        media: { type: "", url: "/projects/leilikhodaei-preview.webp", thumbnail: "/projects/leilikhodaei-preview.webp" },
        tags: ["Next.js", "React", "Tailwind CSS", "Convex"],
        date: "2025-03-10",
        url: "https://www.leilikhodaei.com/",
        translations: {
          en: {
            title: "Leili Khodaei",
            description: "A portfolio website for Leili Khodaei",
            content: "<p>For Leili Khodaei, I created a multilingual website. She is a writer and film director with a large international fanbase that speaks multiple languages.</p><p>The website is available in Dutch, English, and Persian. In the top left corner of the navbar, there's a button that allows visitors to easily switch languages. This makes the site accessible to her entire audience.</p><p>Leili works on many different projects. To maintain overview, I organized these projects into clear categories. This makes the website more peaceful and easier to use.</p><p>Additionally, I built a CMS that allows Leili to manage the entire website herself. She can edit content, add new projects, and remove existing projects. All of this can be done in all three languages.</p><p>This project showed me how valuable it is to give the owner control over the content. This way, she doesn't need to contact me for small changes, and the website always stays up-to-date.</p>"
          },
          nl: {
            title: "Leili Khodaei",
            description: "Een portfolio website voor Leili Khodaei",
            content: "<p>Voor Leili Khodaei heb ik een meertalige website gemaakt. Zij is schrijfster en filmregisseur. Ze heeft een grote en internationale fanbase die meerdere talen spreekt.</p><p>De website is beschikbaar in het Nederlands, Engels en Perzisch. Links boven in de navbar zit een knop waarmee bezoekers eenvoudig van taal kunnen wisselen. Zo is de site toegankelijk voor haar hele publiek.</p><p>Leili werkt aan veel verschillende projecten. Om overzicht te houden heb ik deze projecten ingedeeld in duidelijke categorieën. Dat maakt de website rustiger en makkelijker te gebruiken.</p><p>Daarnaast heb ik een CMS gebouwd waarmee Leili zelf de volledige website kan beheren. Ze kan content aanpassen, nieuwe projecten toevoegen en bestaande projecten verwijderen. Dit kan allemaal in alle drie de talen.</p><p>Dit project liet mij zien hoe waardevol het is om de eigenaar zelf controle te geven over de content. Zo hoeft ze niet steeds bij mij aan te kloppen voor kleine wijzigingen, en blijft de website altijd up-to-date.</p>"
          }
        }
      },
      {
        id: "netflixclone",
        media: { type: "video", url: "/projects/netflixclone-preview.mp4", thumbnail: "/projects/netflixclone-preview.jpeg" },
        tags: ["Next.js", "React", "Tailwind CSS", "Prisma", "MongoDB"],
        date: "2024-08-15",
        url: "https://netflix-clone-demo.vercel.app",
        translations: {
          en: {
            title: "Netflix Clone",
            description: "A Netflix clone with authentication and video streaming",
            content: "<p>A fully functional Netflix clone that I built to practice my full-stack development skills.</p><h2>Features</h2><ul><li><strong>User Authentication</strong>: Secure login and registration system</li><li><strong>Browse Movies & Series</strong>: Browse through a large collection of content</li><li><strong>Video Player</strong>: Custom video player with play/pause and fullscreen controls</li><li><strong>Responsive Design</strong>: Works perfectly on mobile, tablet, and desktop</li><li><strong>Personal List</strong>: Save your favorite movies and series to watch later</li><li><strong>Search Functionality</strong>: Search through the entire catalog</li></ul><h2>Technical Implementation</h2><p>This project uses Next.js for server-side rendering and API routes, Prisma as the ORM with MongoDB for the database, and NextAuth for authentication. The video player is built with custom React components.</p><p>Building this clone helped me understand how to structure a complex full-stack application, handle authentication properly, and work with video streaming. It was a great learning experience for working with databases and creating a smooth user experience.</p>"
          },
          nl: {
            title: "Netflix Clone",
            description: "Een clone van de Netflix website",
            content: "<p>Dit was een van mijn eerste serieuze projecten waarin ik React leerde door een bekende website na te bouwen. Mijn doel was om de technische kant van webdevelopment goed onder de knie te krijgen.</p><p>Door later over te stappen op Next.js kon ik profiteren van automatische image optimization, wat cruciaal was voor een snelle laadtijd gezien het grote aantal afbeeldingen.</p>"
          }
        }
      },
      {
        id: "portfoliov1",
        media: { type: "video", url: "/projects/portfolio-preview.mp4", thumbnail: "/projects/portfolio-preview.webp" },
        tags: ["Next.js", "React", "Tailwind CSS"],
        date: "2024-12-01",
        url: "",
        translations: {
          en: {
            title: "Portfolio V1",
            description: "My first portfolio website",
            content: "<p>This was the first version of my portfolio website, where I experimented with modern web technologies and design principles.</p><h2>What I Learned</h2><p>Building my first portfolio taught me the importance of clean design, good typography, and creating a pleasant user experience. I focused on:</p><ul><li><strong>Performance</strong>: Optimizing images, using code splitting, and server-side rendering</li><li><strong>Animations</strong>: Subtle animations that enhance the user experience without being distracting</li><li><strong>Responsive Design</strong>: Making sure the site looks great on all devices</li><li><strong>SEO</strong>: Implementing proper meta tags and structured data</li></ul><p>This project was an important stepping stone in my development journey. While I've since created a new version of my portfolio, this first iteration taught me valuable lessons about web design and development that I still apply today.</p>"
          },
          nl: {
            title: "Portfolio V2",
            description: "Een website om mijn projecten op een mooie manier tentoon te stellen",
            content: "<p>Dit portfolio was mijn eerste serieuze poging om mijn werk op een aantrekkelijke en gestructureerde manier te presenteren. Hierin liet ik een breed scala aan projecten zien, van games tot schoolopdrachten, met als doel mijn veelzijdigheid te tonen.</p><p>Hoewel het project uiteindelijk complex werd door inconsistentie in de opbouw, was het een waardevolle les in projectorganisatie en schaalbaarheid.</p>"
          }
        }
      }
    ];

    for (const project of projects) {
      await ctx.db.insert("projects", project);
    }

    return { message: `Seeded ${projects.length} projects` };
  },
});
