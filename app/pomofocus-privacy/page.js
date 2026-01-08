"use client"
import Navbar from '../components/Navbar';
import { ScrollAnimation } from '../components/ScrollAnimation';
import Link from 'next/link';

export default function PomoFocusPrivacy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <ScrollAnimation>
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Last updated: January 8, 2026
              </p>
            </div>
          </ScrollAnimation>

          {/* Introduction */}
          <ScrollAnimation delay={100}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                PomoFocus is committed to protecting your privacy. This Privacy 
                Policy explains how we collect, use, and safeguard your information when you use our 
                mobile application.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                By using PomoFocus, you agree to the collection and use of information in accordance 
                with this policy.
              </p>
            </div>
          </ScrollAnimation>

          {/* Data Collection */}
          <ScrollAnimation delay={200}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3">Data Stored Locally</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                PomoFocus stores the following data locally on your device:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6 ml-4">
                <li>Your custom timer configurations (focus duration, break lengths, session counts)</li>
                <li>Timer session history and completed sessions</li>
                <li>Focus statistics (total focus time, daily minutes, streak data)</li>
                <li>App preferences and settings</li>
                <li>Activity heatmap data (last 90 days)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">All data is stored locally on your device, we can not access it from our servers.</h3>
            </div>
          </ScrollAnimation>

          {/* Data Usage */}
          <ScrollAnimation delay={300}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                All data collected by PomoFocus is stored exclusively on your device and is used solely to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Provide core app functionality (running timers, tracking sessions)</li>
                <li>Display your focus statistics and progress</li>
                <li>Maintain your timer configurations and preferences</li>
                <li>Calculate and display your activity streaks</li>
                <li>Send local notifications for timer events</li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Data Storage */}
          <ScrollAnimation delay={400}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Storage and Security</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Your data is stored locally on your device using secure storage mechanisms provided by 
                your operating system. We do not store your data on external servers or in the cloud.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <strong>Important:</strong> If you delete the app or clear its data, all your statistics 
                and configurations will be permanently lost. We recommend taking note of your important 
                timer settings before performing these actions.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Your data is protected by your device's security features, including device encryption 
                and access controls.
              </p>
            </div>
          </ScrollAnimation>

          {/* Third-Party Services */}
          <ScrollAnimation delay={500}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                PomoFocus does not currently integrate with any third-party services, analytics platforms, 
                or advertising networks. Your data remains entirely on your device.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                If we integrate third-party services in the future, this Privacy Policy will be updated 
                accordingly, and you will be notified through the app.
              </p>
            </div>
          </ScrollAnimation>

          {/* Children's Privacy */}
          <ScrollAnimation delay={600}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                PomoFocus does not knowingly collect any personal information from children under the age 
                of 13. The app does not require any personal information to function and can be used safely 
                by users of all ages.
              </p>
            </div>
          </ScrollAnimation>

          {/* Your Rights */}
          <ScrollAnimation delay={700}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Since all your data is stored locally on your device, you have complete control:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li><strong>Access:</strong> You can view all your data within the app at any time</li>
                <li><strong>Deletion:</strong> You can delete all app data by uninstalling the app or clearing app data in your device settings</li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Changes to Policy */}
          <ScrollAnimation delay={800}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy from time to time. Any changes will be posted on this 
                page with an updated "Last updated" date. We encourage you to review this Privacy Policy 
                periodically for any changes. Continued use of the app after changes constitutes acceptance 
                of the updated policy.
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact */}
          <ScrollAnimation delay={900}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                If you have any questions or concerns about this Privacy Policy or how your data is handled, 
                please contact us:
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Email: <a href="mailto:s.alaeiyeh@gmail.com" className="text-green-600 dark:text-green-400 hover:underline">s.alaeiyeh@gmail.com</a>
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Or use our <Link href="/pomofocus-support" className="text-green-600 dark:text-green-400 hover:underline">support page contact form</Link>.
              </p>
            </div>
          </ScrollAnimation>

          {/* Back Links */}
          <ScrollAnimation delay={1000}>
            <div className="flex justify-between items-center mt-12">
              <Link 
                href="/pomofocus-support"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                ← Back to Support
              </Link>
              <Link 
                href="/portfolio/pomofocus"
                className="text-green-600 dark:text-green-400 hover:underline"
              >
                Back to PomoFocus Project →
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

