"use client"
import Navbar from '../../components/Navbar';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PresentedPrivacy() {
  const params = useParams();
  const locale = params.locale || 'en';

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
              <p className="text-lg text-gray-600">
                Effective Date: March 28, 2026
              </p>
            </div>
          </ScrollAnimation>

          {/* Introduction */}
          <ScrollAnimation delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                WebSab (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Presented mobile application (&ldquo;the App&rdquo;). This Privacy Policy explains how we collect, use, store, and protect your information when you use the App.
              </p>
              <p className="text-gray-600">
                By using Presented, you agree to the practices described in this policy. If you do not agree, please discontinue use of the App.
              </p>
            </div>
          </ScrollAnimation>

          {/* Information We Collect */}
          <ScrollAnimation delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>

              <h3 className="text-xl font-bold mb-3">Information You Provide</h3>
              <p className="text-gray-600 mb-4">
                When you use Presented, you may choose to enter:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li><strong>Names</strong> of people whose birthdays you want to remember</li>
                <li><strong>Birthdates</strong> (month, day, and optionally birth year)</li>
                <li><strong>Photos</strong> for profiles or gift notes (taken with your camera or selected from your photo library)</li>
                <li><strong>Gift notes</strong> — text and images describing gift ideas</li>
              </ul>
              <p className="text-gray-600 mb-6">
                All of this information is provided voluntarily by you. We do not require you to create an account or provide any personal identification to use the App.
              </p>

              <h3 className="text-xl font-bold mb-3">Information Accessed With Your Permission</h3>
              <p className="text-gray-600 mb-4">
                The App may request access to the following device features. Each permission is optional and requested only when you use the related feature:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li><strong>Contacts</strong> — to import names, birthdates, and photos from your device contacts</li>
                <li><strong>Camera</strong> — to take photos for gift notes</li>
                <li><strong>Photo Library</strong> — to select existing photos for profiles or gift notes</li>
                <li><strong>Notifications</strong> — to send you local birthday reminders on your device</li>
              </ul>
              <p className="text-gray-600 mb-6">
                You can revoke any of these permissions at any time through your device&apos;s Settings.
              </p>

              <h3 className="text-xl font-bold mb-3">Information We Do Not Collect</h3>
              <p className="text-gray-600 mb-4">
                We do <strong>not</strong> collect:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Location data</li>
                <li>Device identifiers or advertising IDs</li>
                <li>Analytics or usage data</li>
                <li>Browsing or search history</li>
                <li>Health, financial, or biometric data</li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* How We Use Your Information */}
          <ScrollAnimation delay={300}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information you provide solely to deliver the App&apos;s core functionality:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Displaying and organizing birthday reminders</li>
                <li>Sending local notification reminders to your device</li>
                <li>Storing and displaying your gift notes and photos</li>
                <li>Importing contact information when you choose to do so</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We do not use your data for advertising, profiling, marketing, or any purpose beyond operating the App.
              </p>
            </div>
          </ScrollAnimation>

          {/* Data Storage and Security */}
          <ScrollAnimation delay={400}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Data Storage and Security</h2>

              <h3 className="text-xl font-bold mb-3">Local Storage</h3>
              <p className="text-gray-600 mb-6">
                Your data is stored locally on your device using Apple&apos;s SwiftData framework. Photos are stored as separate files on your device&apos;s local storage.
              </p>

              <h3 className="text-xl font-bold mb-3">iCloud Sync</h3>
              <p className="text-gray-600 mb-6">
                If you are signed into iCloud on your device, your data may be synced across your Apple devices using Apple&apos;s CloudKit service. This sync is managed by Apple&apos;s infrastructure and is subject to{' '}
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Apple&apos;s Privacy Policy</a>.
                You can disable iCloud sync for Presented in your device&apos;s iCloud settings.
              </p>

              <h3 className="text-xl font-bold mb-3">No WebSab Servers</h3>
              <p className="text-gray-600">
                We do not operate servers that receive, store, or process your data. Your information stays on your device and, if enabled, within your personal iCloud account.
              </p>
            </div>
          </ScrollAnimation>

          {/* Third-Party Services */}
          <ScrollAnimation delay={500}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>

              <h3 className="text-xl font-bold mb-3">RevenueCat</h3>
              <p className="text-gray-600 mb-6">
                We use RevenueCat to manage in-app purchases. When you make a purchase, RevenueCat processes transaction data through Apple&apos;s App Store. RevenueCat may collect anonymized purchase and device information as described in their{' '}
                <a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Privacy Policy</a>.
              </p>

              <h3 className="text-xl font-bold mb-3">Apple</h3>
              <p className="text-gray-600">
                The App relies on Apple&apos;s platform services including the App Store (purchases), iCloud/CloudKit (data sync), and the iOS notification system. Apple&apos;s use of your data is governed by{' '}
                <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Apple&apos;s Privacy Policy</a>.
              </p>
            </div>
          </ScrollAnimation>

          {/* Children's Privacy */}
          <ScrollAnimation delay={600}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Children&apos;s Privacy</h2>
              <p className="text-gray-600 mb-4">
                Presented is rated for all ages and is suitable for use by children. The App does not knowingly collect personal data from children under 16 years of age without parental consent, in accordance with the EU General Data Protection Regulation (GDPR).
              </p>
              <p className="text-gray-600">
                We encourage parents and guardians to supervise their children&apos;s use of the App.
              </p>
            </div>
          </ScrollAnimation>

          {/* Your Rights Under the GDPR */}
          <ScrollAnimation delay={700}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights Under the GDPR</h2>
              <p className="text-gray-600 mb-4">
                As a user in the European Economic Area (or regardless of location), you have the following rights regarding your data:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li><strong>Access</strong> — request a copy of your data</li>
                <li><strong>Rectification</strong> — correct inaccurate data</li>
                <li><strong>Erasure</strong> — request deletion of your data</li>
                <li><strong>Portability</strong> — receive your data in a portable format</li>
                <li><strong>Restriction</strong> — request limited processing of your data</li>
                <li><strong>Objection</strong> — object to processing of your data</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Since all data is stored locally on your device and in your personal iCloud account, you can exercise all of these rights directly:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li><strong>Delete individual entries</strong> within the App</li>
                <li><strong>Delete all App data</strong> by uninstalling Presented</li>
                <li><strong>Manage iCloud data</strong> through your device&apos;s iCloud storage settings</li>
              </ul>
              <p className="text-gray-600">
                For any requests you cannot fulfill yourself, or for any questions, contact us at{' '}
                <a href="mailto:hello@websab.nl" className="text-green-600 hover:underline">hello@websab.nl</a>.
                We will respond within 30 days.
              </p>
            </div>
          </ScrollAnimation>

          {/* Data Retention */}
          <ScrollAnimation delay={800}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
              <p className="text-gray-600">
                Your data is retained on your device and in your iCloud account for as long as you choose to keep it. There is no automatic expiration. When you delete data within the App or uninstall the App, your local data is removed. iCloud data can be managed through your Apple ID settings.
              </p>
            </div>
          </ScrollAnimation>

          {/* International Data Transfers */}
          <ScrollAnimation delay={900}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">8. International Data Transfers</h2>
              <p className="text-gray-600">
                Your data is stored locally on your device. If iCloud sync is enabled, Apple may store your data on servers located outside your country of residence, in accordance with Apple&apos;s data handling practices. RevenueCat may process purchase-related data on servers in the United States. Both Apple and RevenueCat maintain appropriate safeguards for international data transfers.
              </p>
            </div>
          </ScrollAnimation>

          {/* Changes to This Privacy Policy */}
          <ScrollAnimation delay={1000}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Effective Date&rdquo; at the top of this page. We encourage you to review this policy periodically. Continued use of the App after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact Us */}
          <ScrollAnimation delay={1100}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions or concerns about this Privacy Policy or your data, please contact us:
              </p>
              <p className="text-gray-600">
                <strong>WebSab</strong><br />
                Email: <a href="mailto:hello@websab.nl" className="text-green-600 hover:underline">hello@websab.nl</a><br />
                Website: <a href="https://websab.nl" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">websab.nl</a>
              </p>
            </div>
          </ScrollAnimation>

          {/* Back Links */}
          <ScrollAnimation delay={1200}>
            <div className="flex justify-between items-center mt-12">
              <Link
                href={`/${locale}/presented-terms`}
                className="text-green-600 hover:underline"
              >
                ← Terms of Use
              </Link>
              <Link
                href={`/${locale}/portfolio/presented`}
                className="text-green-600 hover:underline"
              >
                Back to Presented Project →
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
