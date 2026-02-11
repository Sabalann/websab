/**
 * StructuredData Component - Adds Schema.org JSON-LD markup for SEO
 * 
 * This component tells Google exactly what your business is about:
 * - LocalBusiness: Your freelance web development business info
 * - Person: You as a professional developer
 * - WebPage: Marks each page for better understanding
 * 
 * Why this helps SEO:
 * - Enables rich snippets in Google search results
 * - Better understanding of your business for search engines
 * - Can appear in local search results
 * - Builds trust and authority
 * 
 * Usage: Add this component to your main layout or specific pages
 */

export default function StructuredData({ type = 'website', locale = 'nl', pageTitle, pageDescription, pageUrl }) {
  const baseUrl = 'https://websab.nl';
  
  // LocalBusiness Schema - Your freelance web development business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${baseUrl}/#business`,
    "name": "Sab - Web Developer",
    "alternateName": "Websab",
    "description": locale === 'nl' 
      ? "Freelance webdeveloper in Apeldoorn. Betaalbare websites voor lokale ondernemers: restaurants, kappers, coaches. Vanaf €500."
      : "Freelance web developer in Apeldoorn. Affordable websites for local businesses: restaurants, barbers, coaches. From €500.",
    "url": baseUrl,
    "logo": `${baseUrl}/logo-transparent-black.png`,
    "image": `${baseUrl}/profile.jpeg`,
    "telephone": "+31686072388", // Update with your actual phone number
    "email": "s.alaeiyeh@gmail.com",
    "address": {
      "@type": "Place",
      "addressCountry": "NL",
      "addressLocality": "Apeldoorn"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 52.2112,
      "longitude": 5.9690
    },
    "areaServed": {
      "@type": "Country",
      "name": "Netherlands"
    },
    "priceRange": "€",
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      "https://www.linkedin.com/in/sabalan-alaeiyeh/",
      "https://github.com/Sabalann"
    ],
    "founder": {
      "@id": `${baseUrl}/#person`
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 52.2112,
        "longitude": 5.9690
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": locale === 'nl' ? "Webdevelopment Diensten" : "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'nl' ? "Landingspagina" : "Landing Page",
            "description": locale === 'nl' 
              ? "Perfect voor het promoten van een product, dienst of evenement"
              : "Perfect for promoting a product, service or event",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "lowPrice": "500",
              "highPrice": "700"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": locale === 'nl' ? "Bedrijfswebsite" : "Business Website",
            "description": locale === 'nl' 
              ? "Een professionele website voor jouw bedrijf of portfolio"
              : "A professional website for your business or portfolio",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "lowPrice": "700",
              "highPrice": "1200"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Webshop",
            "description": locale === 'nl' 
              ? "Online verkopen met een professionele e-commerce oplossing"
              : "Sell online with a professional e-commerce solution",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "lowPrice": "2000",
              "highPrice": "3500"
            }
          }
        }
      ]
    }
  };

  // Person Schema - You as a professional developer
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    "name": "Sab Alaeiyeh",
    "givenName": "Sabalan",
    "familyName": "Alaeiyeh",
    "alternateName": "Sab",
    "jobTitle": locale === 'nl' ? "Freelance Webdeveloper" : "Freelance Web Developer",
    "description": locale === 'nl'
      ? "Webdeveloper gespecialiseerd in Next.js, React en moderne web technologieën. Student Computer Science aan de Universiteit Utrecht."
      : "Web developer specialized in Next.js, React and modern web technologies. Computer Science student at Utrecht University.",
    "url": baseUrl,
    "image": `${baseUrl}/profile.jpeg`,
    "email": "s.alaeiyeh@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/sabalan-alaeiyeh/",
      "https://github.com/Sabalann"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Utrecht University",
      "sameAs": "https://www.uu.nl"
    },
    "knowsAbout": [
      "Web Development",
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "UI/UX Design",
      "Responsive Design",
      "SEO"
    ],
    "memberOf": {
      "@id": `${baseUrl}/#business`
    },
    "worksFor": {
      "@id": `${baseUrl}/#business`
    }
  };

  // WebPage Schema - The current page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl || `${baseUrl}/${locale}`,
    "url": pageUrl || `${baseUrl}/${locale}`,
    "name": pageTitle || "Sab - Web Developer",
    "description": pageDescription || (locale === 'nl' 
      ? "Freelance webdeveloper in Apeldoorn. Betaalbare websites voor restaurants, kappers, coaches. Vanaf €500."
      : "Freelance web developer in Apeldoorn. Affordable websites for restaurants, barbers, coaches. From €500."),
    "inLanguage": locale,
    "isPartOf": {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      "url": baseUrl,
      "name": "Websab",
      "publisher": {
        "@id": `${baseUrl}/#business`
      }
    },
    "about": {
      "@id": `${baseUrl}/#business`
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": `${baseUrl}/profile.jpeg`
    }
  };

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
    </>
  );
}
