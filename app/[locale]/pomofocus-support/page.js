"use client"
import Navbar from '../../components/Navbar';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function PomoFocusSupport() {
  const params = useParams();
  const locale = params.locale || 'en';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show a success message
    // This can be enhanced later with actual backend submission
    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset status after 5 seconds
    setTimeout(() => setFormStatus(''), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                PomoFocus Support
              </h1>
              <p className="text-xl text-gray-600">
                A simple Pomodoro timer to help you stay focused and productive.
              </p>
            </div>
          </ScrollAnimation>

          {/* Screenshots Gallery */}
          <ScrollAnimation delay={50}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">App Screenshots</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div 
                    key={num}
                    className="flex justify-center"
                  >
                    <div className="relative w-full max-w-[200px] aspect-[9/19.5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100">
                      <Image
                        src={`/projects/pomofocus/pomofocus-${num}.webp`}
                        alt={`PomoFocus App Screenshot ${num}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
              <h2 className="text-3xl font-bold mb-6">Contact Support</h2>
              <p className="text-gray-600 mb-6">
                Have a question or need help? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you for your message! We'll get back to you soon at {formData.email || 'your email'}.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
              
              <p className="mt-6 text-sm text-gray-600">
                You can also reach us directly at: <a href="mailto:s.alaeiyeh@gmail.com" className="text-green-600 hover:underline">s.alaeiyeh@gmail.com</a>
              </p>
            </div>
          </ScrollAnimation>

          {/* How to Use Section */}
          <ScrollAnimation delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
              <h2 className="text-3xl font-bold mb-6">How to Use PomoFocus</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Creating Custom Timers</h3>
                  <p className="text-gray-600">
                    Navigate to the timers section and tap the "+" button to create a new Pomodoro timer. 
                    Set your preferred focus duration, short break, and long break lengths.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Starting, Pausing & Resetting Sessions</h3>
                  <p className="text-gray-600">
                    Tap the play button to start your focus session. You can pause at any time by tapping 
                    the pause button. To reset a session, use the reset button to return to the beginning 
                    of the current phase. You can also skip to the next phase (break or focus) using the 
                    skip button.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Viewing Your Statistics</h3>
                  <p className="text-gray-600">
                    Access your stats from the main screen. Here you'll find your daily focus minutes, 
                    total hours focused, completed sessions, current streak, and a 90-day heatmap showing 
                    your activity patterns. Your stats help you track your productivity journey over time.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* FAQ Section */}
          <ScrollAnimation delay={300}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Where are my stats?</h3>
                  <p className="text-gray-600">
                    Your statistics are displayed on the 'Profile' tab. You'll see stats like 
                    today's focus minutes, total hours, your best streak, and a 
                    90-day activity heatmap.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">How do I reset a session?</h3>
                  <p className="text-gray-600">
                    While a timer is running or paused, tap the reset button (circular arrow icon) to 
                    restart the current phase from the beginning.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">How do I customize my timer?</h3>
                  <p className="text-gray-600">
                    Go to the timers section and either create a new timer or edit an existing one. You can 
                    customize the focus duration, short break length and long break length.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Does it work in the background?</h3>
                  <p className="text-gray-600">
                    Yes! PomoFocus continues tracking your time even when the app is in the background. 
                    You'll receive notifications when it's time to take a break or start a new focus session. 
                    Make sure notifications are enabled for the best experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">How do streaks work?</h3>
                  <p className="text-gray-600">
                    Your streak increases by one each day you focus for at least 30 minutes. If you 
                    miss a day, your streak resets to zero. Streaks help you build consistency and maintain 
                    a regular focus habit.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Troubleshooting Section */}
          <ScrollAnimation delay={400}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
              <h2 className="text-3xl font-bold mb-6">Troubleshooting</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Notifications not working</h3>
                  <p className="text-gray-600 mb-2">
                    If you're not receiving notifications:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Check that notifications are enabled in your device Settings → PomoFocus</li>
                    <li>Make sure "Do Not Disturb" mode is not blocking app notifications</li>
                    <li>Try restarting the app</li>
                    <li>Ensure the app has permission to send notifications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">App not tracking progress</h3>
                  <p className="text-gray-600 mb-2">
                    If your progress isn't being saved:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Make sure you're completing full focus sessions (not just starting them)</li>
                    <li>Check your device storage - the app needs space to save data</li>
                    <li>Try force-closing and reopening the app</li>
                    <li>Update to the latest version if available</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Timer stopping in background</h3>
                  <p className="text-gray-600 mb-2">
                    If your timer stops when the app is in the background:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Check your device's battery optimization settings and disable optimization for PomoFocus</li>
                    <li>On iOS, ensure Background App Refresh is enabled for PomoFocus</li>
                    <li>Make sure the app isn't being force-closed by system memory management</li>
                    <li>Keep the app updated to the latest version</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Privacy Policy Link */}
          <ScrollAnimation delay={500}>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <h2 className="text-2xl font-bold mb-4">Privacy & Data</h2>
              <p className="text-gray-600 mb-6">
                We take your privacy seriously. Learn more about how we handle your data.
              </p>
              <Link 
                href={`/${locale}/pomofocus-privacy`}
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Read Privacy Policy
              </Link>
            </div>
          </ScrollAnimation>

          {/* Back Link */}
          <ScrollAnimation delay={600}>
            <div className="mt-12 text-center">
              <Link 
                href={`/${locale}/portfolio/pomofocus`}
                className="text-green-600 hover:underline"
              >
                ← Back to PomoFocus Project
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
