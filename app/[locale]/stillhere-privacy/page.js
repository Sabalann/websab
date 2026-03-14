"use client"
import Navbar from '../../components/Navbar';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function StillHerePrivacy() {
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
                Last updated: March 14, 2026
              </p>
            </div>
          </ScrollAnimation>

          {/* Introduction */}
          <ScrollAnimation delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-600 mb-4">
                Still Here? is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, and safeguard your information when you use our
                mobile application.
              </p>
              <p className="text-gray-600">
                By using Still Here?, you agree to the collection and use of information in accordance
                with this policy.
              </p>
            </div>
          </ScrollAnimation>

          {/* Data Collection */}
          <ScrollAnimation delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>

              <h3 className="text-xl font-bold mb-3">Data Stored Locally</h3>
              <p className="text-gray-600 mb-4">
                Still Here? stores the following data locally on your device:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>Your selected reminder interval</li>
                <li>Your custom reminder message</li>
                <li>Your chosen app icon preference</li>
                <li>Timer state (active or inactive)</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">All data is stored locally on your device, we can not access it from our servers.</h3>
            </div>
          </ScrollAnimation>

          {/* Data Usage */}
          <ScrollAnimation delay={300}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
              <p className="text-gray-600 mb-4">
                All data collected by Still Here? is stored exclusively on your device and is used solely to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Send recurring reminder notifications at your chosen interval</li>
                <li>Display your custom reminder message in notifications</li>
                <li>Remember your preferred app icon</li>
                <li>Maintain your timer settings between app sessions</li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Data Storage */}
          <ScrollAnimation delay={400}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Data Storage and Security</h2>
              <p className="text-gray-600 mb-4">
                Your data is stored locally on your device using secure storage mechanisms provided by
                your operating system. We do not store your data on external servers or in the cloud.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Important:</strong> If you delete the app or clear its data, all your settings
                and preferences will be reset to their defaults.
              </p>
              <p className="text-gray-600">
                Your data is protected by your device's security features, including device encryption
                and access controls.
              </p>
            </div>
          </ScrollAnimation>

          {/* In-App Purchases */}
          <ScrollAnimation delay={450}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">In-App Purchases (Tip Jar)</h2>
              <p className="text-gray-600 mb-4">
                Still Here? offers an optional Tip Jar where you can leave a tip to support development.
                These purchases are processed entirely through Apple's App Store and are subject to Apple's
                privacy policy and terms of service.
              </p>
              <p className="text-gray-600">
                We do not collect, store, or have access to any payment information. No purchase is
                required to use any feature of the app.
              </p>
            </div>
          </ScrollAnimation>

          {/* Third-Party Services */}
          <ScrollAnimation delay={500}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                Still Here? does not integrate with any third-party analytics platforms
                or advertising networks. Your data remains entirely on your device.
              </p>
              <p className="text-gray-600">
                Tip Jar purchases are processed through Apple's App Store infrastructure.
                Please refer to Apple's privacy policy for details on how they handle transaction data.
              </p>
            </div>
          </ScrollAnimation>

          {/* Children's Privacy */}
          <ScrollAnimation delay={600}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-gray-600">
                Still Here? does not collect any personal information from children under the age
                of 13. The app does not require any personal information to function and can be used safely
                by users of all ages.
              </p>
            </div>
          </ScrollAnimation>

          {/* Your Rights */}
          <ScrollAnimation delay={700}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">
                Since all your data is stored locally on your device, you have complete control:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li><strong>Access:</strong> You can view all your settings within the app at any time</li>
                <li><strong>Deletion:</strong> You can delete all app data by uninstalling the app or clearing app data in your device settings</li>
                <li><strong>Notifications:</strong> You can disable notifications at any time through your device settings</li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Changes to Policy */}
          <ScrollAnimation delay={800}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. Any changes will be posted on this
                page with an updated "Last updated" date. We encourage you to review this Privacy Policy
                periodically for any changes. Continued use of the app after changes constitutes acceptance
                of the updated policy.
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact */}
          <ScrollAnimation delay={900}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions or concerns about this Privacy Policy or how your data is handled,
                please contact us:
              </p>
              <p className="text-gray-600">
                Email: <a href="mailto:hello@websab.nl" className="text-green-600 hover:underline">hello@websab.nl</a>
              </p>
              <p className="text-gray-600 mt-4">
                Or use our <Link href={`/${locale}/stillhere-support`} className="text-green-600 hover:underline">support page contact form</Link>.
              </p>
            </div>
          </ScrollAnimation>

          {/* Back Links */}
          <ScrollAnimation delay={1000}>
            <div className="flex justify-between items-center mt-12">
              <Link
                href={`/${locale}/stillhere-support`}
                className="text-green-600 hover:underline"
              >
                ← Back to Support
              </Link>
              <Link
                href={`/${locale}/portfolio/stillhere`}
                className="text-green-600 hover:underline"
              >
                Back to Still Here? Project →
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
