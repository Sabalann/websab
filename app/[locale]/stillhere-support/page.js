"use client"
import Navbar from '../../components/Navbar';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import Link from 'next/link';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function StillHereSupport() {
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
    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

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
                Still Here? Support
              </h1>
              <p className="text-xl text-gray-600">
                Set recurring reminders to check on the things that matter.
              </p>
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
                You can also reach us directly at: <a href="mailto:hello@websab.nl" className="text-green-600 hover:underline">hello@websab.nl</a>
              </p>
            </div>
          </ScrollAnimation>

          {/* How to Use Section */}
          <ScrollAnimation delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-16">
              <h2 className="text-3xl font-bold mb-6">How to Use Still Here?</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Setting Up a Reminder</h3>
                  <p className="text-gray-600">
                    Open the app,
                    choose your preferred reminder interval and tap the timer.
                    The app will send you a notification at every interval until you stop it.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Stopping the Reminder</h3>
                  <p className="text-gray-600">
                    To stop receiving notifications, open the app and tap the timer again.
                    The reminder will be cancelled immediately and no further notifications will be sent.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Changing the App Icon</h3>
                  <p className="text-gray-600">
                    Go to the app settings to choose from 3 different app icons. Your selection is
                    saved automatically and the icon on your home screen will update right away.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Tip Jar</h3>
                  <p className="text-gray-600">
                    If you enjoy using Still Here?, you can leave a tip to support development.
                    The Tip Jar is completely optional and all features are available for free.
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
                  <h3 className="text-xl font-bold mb-2">Do notifications work when the app is closed?</h3>
                  <p className="text-gray-600">
                    Yes! Once you start a reminder, notifications will keep coming at your chosen interval
                    even if the app is in the background or closed. Make sure notifications are enabled
                    for Still Here? in your device settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">How do I change the reminder interval?</h3>
                  <p className="text-gray-600">
                    Open the app settings and select a different duration. You can choose from
                    5, 10, 15, 20 minutes, and more. If a reminder is currently active, stop it first,
                    change the interval, then start it again.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Is the app free to use?</h3>
                  <p className="text-gray-600">
                    Yes, all features of Still Here? are completely free. The Tip Jar is an optional way
                    to support the developer, but it is never required.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">How do I change the app icon?</h3>
                  <p className="text-gray-600">
                    Go to the app settings and select one of the 3 available app icons. Your choice is
                    saved on your device and the home screen icon updates automatically.


                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Does the app collect my data?</h3>
                  <p className="text-gray-600">
                    No. All your settings and preferences are stored locally on your device. We do not
                    have access to your data and nothing is sent to external servers.
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
                  <h3 className="text-xl font-bold mb-2">Notifications not showing up</h3>
                  <p className="text-gray-600 mb-2">
                    If you're not receiving notifications:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Check that notifications are enabled in your device Settings for Still Here?</li>
                    <li>Make sure "Do Not Disturb" or Focus mode is not blocking notifications</li>
                    <li>Try stopping and restarting the reminder</li>
                    <li>Restart the app and try again</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Notifications stop after a while</h3>
                  <p className="text-gray-600 mb-2">
                    If notifications stop coming after some time:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Check your device's battery optimization settings and disable optimization for Still Here?</li>
                    <li>On iOS, ensure Background App Refresh is enabled for Still Here?</li>
                    <li>Make sure the app isn't being force-closed by system memory management</li>
                    <li>Keep the app updated to the latest version</li>
                    <li>Reopen the app to sync the timer again. The app can only schedule a set amount of notifications at a time.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">App icon not changing</h3>
                  <p className="text-gray-600 mb-2">
                    If the app icon doesn't update after selecting a new one:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>Wait a few seconds — the system may take a moment to update</li>
                    <li>Try closing and reopening the app</li>
                    <li>Restart your device if the issue persists</li>
                    <li>We are aware that some users may not be able to switch the app icon on the latest iOS version. 
                    Unfortunately, this is a limitation of the iOS operating system, and we are dependening 
                    on Apple to fix this issue.</li>
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
                href={`/${locale}/stillhere-privacy`}
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
                href={`/${locale}/portfolio/stillhere`}
                className="text-green-600 hover:underline"
              >
                ← Back to Still Here? Project
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
