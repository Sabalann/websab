"use client"
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { ScrollAnimation } from '../components/ScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    projectType: '',
    budget: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Naam is verplicht';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is verplicht';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Voer een geldig emailadres in';
    }
    
    if (!formData.projectType) {
      newErrors.projectType = 'Selecteer een projecttype';
    }
    
    if (!formData.budget) {
      newErrors.budget = 'Selecteer een budget range';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Vertel iets over je project';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Beschrijf je project iets uitgebreider (minimaal 20 karakters)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Prepare form data for Web3Forms
      const submitData = new FormData();
      submitData.append("access_key", "e315ddef-ba16-4b50-ae0b-5764020cdec2");
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone || "Niet opgegeven");
      submitData.append("company", formData.company || "Niet opgegeven");
      submitData.append("website", formData.website || "Niet opgegeven");
      submitData.append("subject", `Nieuwe projectaanvraag: ${formData.projectType}`);
      
      // Create formatted message
      const message = `
Type project: ${formData.projectType}
Budget: ${formData.budget}

Projectbeschrijving:
${formData.message}
      `.trim();
      
      submitData.append("message", message);
      
      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          website: '',
          projectType: '',
          budget: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Laten we samen iets moois bouwen
              </h1>
              <p className="text-xl text-gray-600 dark:text-dark-text">
                Klaar om jouw project naar het volgende niveau te tillen? Vul het formulier in en ik neem binnen 24 uur contact met je op.
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation delay={100}>
            <div className="max-w-4xl mx-auto mb-24">
              <div className="bg-white dark:bg-dark-elevated p-8 md:p-12 rounded-xl shadow-sm">
                <h2 className="text-3xl font-bold mb-8">Start jouw project</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1: Name and Email */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Naam <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-dark-surface focus:ring-green-500'
                        } bg-white dark:bg-dark-surface focus:ring-2 focus:border-transparent transition-all outline-none`}
                        placeholder="Je volledige naam"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-dark-surface focus:ring-green-500'
                        } bg-white dark:bg-dark-surface focus:ring-2 focus:border-transparent transition-all outline-none`}
                        placeholder="je@email.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone and Company */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefoonnummer <span className="text-gray-400 text-xs">(optioneel)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-surface bg-white dark:bg-dark-surface focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                        placeholder="06 12345678"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Bedrijf <span className="text-gray-400 text-xs">(optioneel)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-surface bg-white dark:bg-dark-surface focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                        placeholder="Je bedrijfsnaam"
                      />
                    </div>
                  </div>

                  {/* Row 3: Website */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-2">
                      Huidige website <span className="text-gray-400 text-xs">(optioneel)</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-surface bg-white dark:bg-dark-surface focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                      placeholder="https://jewebsite.nl"
                    />
                  </div>

                  {/* Row 4: Project Type and Budget */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                        Type project <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.projectType 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-dark-surface focus:ring-green-500'
                        } bg-white dark:bg-dark-surface focus:ring-2 focus:border-transparent transition-all outline-none`}
                      >
                        <option value="">Selecteer een optie</option>
                        <option value="Nieuwe website">Nieuwe website</option>
                        <option value="Website redesign">Website redesign</option>
                        <option value="Webshop">Webshop</option>
                        <option value="Landingspagina">Landingspagina</option>
                        <option value="Web applicatie">Web applicatie</option>
                        <option value="Portfolio website">Portfolio website</option>
                        <option value="Anders">Anders</option>
                      </select>
                      {errors.projectType && (
                        <p className="mt-2 text-sm text-red-500">{errors.projectType}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        Budget <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.budget 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 dark:border-dark-surface focus:ring-green-500'
                        } bg-white dark:bg-dark-surface focus:ring-2 focus:border-transparent transition-all outline-none`}
                      >
                        <option value="">Selecteer een range</option>
                        <option value="< €1.000">Minder dan €1.000</option>
                        <option value="€1.000 - €2.500">€1.000 - €2.500</option>
                        <option value="€2.500 - €5.000">€2.500 - €5.000</option>
                        <option value="€5.000 - €10.000">€5.000 - €10.000</option>
                        <option value="> €10.000">Meer dan €10.000</option>
                        <option value="Nog niet zeker">Nog niet zeker</option>
                      </select>
                      {errors.budget && (
                        <p className="mt-2 text-sm text-red-500">{errors.budget}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Vertel over je project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 dark:border-dark-surface focus:ring-green-500'
                      } bg-white dark:bg-dark-surface focus:ring-2 focus:border-transparent transition-all outline-none resize-none`}
                      placeholder="Beschrijf je project, doelgroep, belangrijkste doelen en eventuele specifieke wensen..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                    >
                      {isSubmitting ? 'Verzenden...' : 'Verstuur aanvraag →'}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium mb-1">Bedankt voor je bericht!</p>
                        <p className="text-sm">Je aanvraag is succesvol verzonden. Ik neem binnen 24 uur contact met je op.</p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium mb-1">Er ging iets mis</p>
                        <p className="text-sm">Probeer het opnieuw of stuur direct een email naar <a href="mailto:s.alaeiyeh@gmail.com" className="underline">s.alaeiyeh@gmail.com</a></p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </ScrollAnimation>

          {/* Alternative Contact Methods */}
          <ScrollAnimation delay={200}>
            <div className="max-w-4xl mx-auto mb-24">
              <h2 className="text-2xl font-bold mb-8 text-center">Of neem direct contact op via</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Email Card */}
                <div className="bg-white dark:bg-dark-elevated p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <a 
                    href="mailto:s.alaeiyeh@gmail.com" 
                    className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 transition-colors"
                  >
                    s.alaeiyeh@gmail.com
                  </a>
                </div>

                {/* LinkedIn Card */}
                <div className="bg-white dark:bg-dark-elevated p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/in/sabalan-alaeiyeh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 transition-colors"
                  >
                    Bekijk profiel →
                  </a>
                </div>

                {/* GitHub Card */}
                <div className="bg-white dark:bg-dark-elevated p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">GitHub</h3>
                  <a 
                    href="https://github.com/Sabalann" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 text-sm hover:text-green-700 dark:hover:text-green-300 transition-colors"
                  >
                    Bekijk projecten →
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* FAQ Section */}
          <ScrollAnimation delay={300}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Veelgestelde vragen</h2>
              <div className="space-y-4">
                <div className="bg-white dark:bg-dark-elevated p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Wat zijn de kosten voor een website?</h3>
                  <p className="text-gray-600 dark:text-dark-text">
                    De kosten zijn afhankelijk van je wensen en de complexiteit van het project. Ik werk met transparante prijzen en maak vooraf een duidelijke offerte.
                  </p>
                </div>
                <div className="bg-white dark:bg-dark-elevated p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Hoe lang duurt het ontwikkelen van een website?</h3>
                  <p className="text-gray-600 dark:text-dark-text">
                    Een gemiddeld project duurt 2-6 weken. Dit is inclusief design, development en revisierondes. Complexere projecten kunnen meer tijd in beslag nemen.
                  </p>
                </div>
                <div className="bg-white dark:bg-dark-elevated p-8 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Wat heb ik nodig om te starten?</h3>
                  <p className="text-gray-600 dark:text-dark-text">
                    Een duidelijk idee van je doelen en doelgroep is een goed begin. We bespreken samen je wensen en ik help je met het uitwerken van een plan.
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