"use client"
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Contact() {
  const t = useTranslations('Contact');
  const { locale } = useParams();
  
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
      newErrors.name = t('form.name.required');
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t('form.email.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('form.email.invalid');
    }
    
    if (!formData.projectType) {
      newErrors.projectType = t('form.projectType.required');
    }
    
    if (!formData.budget) {
      newErrors.budget = t('form.budget.required');
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t('form.message.required');
    } else if (formData.message.trim().length < 20) {
      newErrors.message = t('form.message.minLength');
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
      submitData.append("phone", formData.phone || "Not provided");
      submitData.append("company", formData.company || "Not provided");
      submitData.append("website", formData.website || "Not provided");
      submitData.append("subject", `New project request (${locale}): ${formData.projectType}`);
      
      // Create formatted message
      const message = `
Project Type: ${formData.projectType}
Budget: ${formData.budget}

Project Description:
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
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600">
                {t('hero.subtitle')}
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation delay={100}>
            <div className="max-w-4xl mx-auto mb-24">
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm">
                <h2 className="text-3xl font-bold mb-8">{t('form.title')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Row 1: Name and Email */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('form.name.label')} <span className="text-red-500">*</span>
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
                            : 'border-gray-300 focus:ring-green-500'
                        } bg-white focus:ring-2 focus:border-transparent transition-all outline-none`}
                        placeholder={t('form.name.placeholder')}
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('form.email.label')} <span className="text-red-500">*</span>
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
                            : 'border-gray-300 focus:ring-green-500'
                        } bg-white focus:ring-2 focus:border-transparent transition-all outline-none`}
                        placeholder={t('form.email.placeholder')}
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
                        {t('form.phone.label')} <span className="text-gray-400 text-xs">{t('form.phone.optional')}</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                        placeholder={t('form.phone.placeholder')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        {t('form.company.label')} <span className="text-gray-400 text-xs">{t('form.company.optional')}</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                        placeholder={t('form.company.placeholder')}
                      />
                    </div>
                  </div>

                  {/* Row 3: Website */}
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium mb-2">
                      {t('form.website.label')} <span className="text-gray-400 text-xs">{t('form.website.optional')}</span>
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all outline-none"
                      placeholder={t('form.website.placeholder')}
                    />
                  </div>

                  {/* Row 4: Project Type and Budget */}
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                        {t('form.projectType.label')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.projectType 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 focus:ring-green-500'
                        } bg-white focus:ring-2 focus:border-transparent transition-all outline-none`}
                      >
                        <option value="">{t('form.projectType.placeholder')}</option>
                        <option value={t('form.projectType.options.new')}>{t('form.projectType.options.new')}</option>
                        <option value={t('form.projectType.options.redesign')}>{t('form.projectType.options.redesign')}</option>
                        <option value={t('form.projectType.options.shop')}>{t('form.projectType.options.shop')}</option>
                        <option value={t('form.projectType.options.landing')}>{t('form.projectType.options.landing')}</option>
                        <option value={t('form.projectType.options.app')}>{t('form.projectType.options.app')}</option>
                        <option value={t('form.projectType.options.portfolio')}>{t('form.projectType.options.portfolio')}</option>
                        <option value={t('form.projectType.options.other')}>{t('form.projectType.options.other')}</option>
                      </select>
                      {errors.projectType && (
                        <p className="mt-2 text-sm text-red-500">{errors.projectType}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2">
                        {t('form.budget.label')} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.budget 
                            ? 'border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 focus:ring-green-500'
                        } bg-white focus:ring-2 focus:border-transparent transition-all outline-none`}
                      >
                        <option value="">{t('form.budget.placeholder')}</option>
                        <option value={t('form.budget.options.low')}>{t('form.budget.options.low')}</option>
                        <option value={t('form.budget.options.medium')}>{t('form.budget.options.medium')}</option>
                        <option value={t('form.budget.options.high')}>{t('form.budget.options.high')}</option>
                        <option value={t('form.budget.options.veryHigh')}>{t('form.budget.options.veryHigh')}</option>
                      </select>
                      {errors.budget && (
                        <p className="mt-2 text-sm text-red-500">{errors.budget}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {t('form.message.label')} <span className="text-red-500">*</span>
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
                          : 'border-gray-300 focus:ring-green-500'
                      } bg-white focus:ring-2 focus:border-transparent transition-all outline-none resize-none`}
                      placeholder={t('form.message.placeholder')}
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
                      {isSubmitting ? t('form.submitting') : t('form.submit')}
                    </button>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 text-green-800 rounded-lg flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium mb-1">{t('form.success.title')}</p>
                        <p className="text-sm">{t('form.success.message')}</p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 text-red-800 rounded-lg flex items-start gap-3">
                      <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-medium mb-1">{t('form.error.title')}</p>
                        <p className="text-sm">{t('form.error.message')}</p>
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
              <h2 className="text-2xl font-bold mb-8 text-center">{t('info.title')}</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Email Card */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t('info.email')}</h3>
                  <a 
                    href="mailto:contact@sabvandenhout.nl" 
                    className="text-green-600 text-sm hover:text-green-700 transition-colors"
                  >
                    {t('info.emailValue')}
                  </a>
                </div>

                {/* Response Time Card */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t('info.response')}</h3>
                  <p className="text-green-600 text-sm">
                    {t('info.responseValue')}
                  </p>
                </div>

                {/* Availability Card */}
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t('info.availability')}</h3>
                  <p className="text-green-600 text-sm">
                    {t('info.availabilityValue')}
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
