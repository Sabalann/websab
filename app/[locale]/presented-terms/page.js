"use client"
import Navbar from '../../components/Navbar';
import { ScrollAnimation } from '../../components/ScrollAnimation';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function PresentedTerms() {
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
                Terms of Use
              </h1>
              <p className="text-lg text-gray-600">
                Effective Date: March 28, 2026
              </p>
            </div>
          </ScrollAnimation>

          {/* Introduction */}
          <ScrollAnimation delay={100}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <p className="text-gray-600">
                These Terms of Use (&ldquo;Terms&rdquo;) govern your use of the Presented mobile application (&ldquo;the App&rdquo;), operated by WebSab (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, please do not use the App.
              </p>
            </div>
          </ScrollAnimation>

          {/* Description of Service */}
          <ScrollAnimation delay={200}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Presented is a birthday reminder and gift planning app for iOS. The App allows you to:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Store names, birthdates, and photos of people whose birthdays you want to remember</li>
                <li>Receive local notification reminders before upcoming birthdays</li>
                <li>Create and manage gift notes with text and photos</li>
                <li>Import birthday information from your device contacts</li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Eligibility */}
          <ScrollAnimation delay={300}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
              <p className="text-gray-600">
                The App is available to users of all ages. If you are under 16 years of age, we recommend that a parent or guardian reviews these Terms and supervises your use of the App.
              </p>
            </div>
          </ScrollAnimation>

          {/* User Accounts */}
          <ScrollAnimation delay={400}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <p className="text-gray-600">
                Presented does not require you to create an account, provide an email address, or sign in. If iCloud is enabled on your device, your App data may sync across your Apple devices using your Apple ID. Your Apple ID is managed by Apple and is not accessed or controlled by us.
              </p>
            </div>
          </ScrollAnimation>

          {/* Purchases */}
          <ScrollAnimation delay={500}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Purchases</h2>

              <h3 className="text-xl font-bold mb-3">Presented Pro</h3>
              <p className="text-gray-600 mb-4">
                The App offers a free tier with core functionality. A one-time lifetime purchase, &ldquo;Presented Pro,&rdquo; unlocks additional features including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">
                <li>Unlimited contacts (free tier is limited to 5)</li>
                <li>Custom reminder schedules</li>
                <li>Custom notification times</li>
                <li>Per-person notification preferences</li>
              </ul>

              <h3 className="text-xl font-bold mb-3">Payment and Billing</h3>
              <p className="text-gray-600 mb-4">
                All purchases are processed through the Apple App Store. By making a purchase, you agree to Apple&apos;s{' '}
                <a href="https://www.apple.com/legal/internet-services/itunes/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">App Store Terms of Service</a>.
                Payment is charged to your Apple ID account at the time of purchase.
              </p>

              <h3 className="text-xl font-bold mb-3">Refunds</h3>
              <p className="text-gray-600">
                Since Presented Pro is a one-time purchase, refund requests must be directed to Apple through their standard refund process. We do not process payments or refunds directly.
              </p>
            </div>
          </ScrollAnimation>

          {/* User Content */}
          <ScrollAnimation delay={600}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">5. User Content</h2>

              <h3 className="text-xl font-bold mb-3">Ownership</h3>
              <p className="text-gray-600 mb-4">
                You retain full ownership of all content you create or import into the App, including names, photos, and gift notes (&ldquo;User Content&rdquo;).
              </p>

              <h3 className="text-xl font-bold mb-3">License</h3>
              <p className="text-gray-600 mb-4">
                By using the App, you grant us a limited, non-exclusive license to store and display your User Content solely within the App on your device and your personal iCloud account, as necessary to provide the App&apos;s functionality.
              </p>

              <h3 className="text-xl font-bold mb-3">Responsibility</h3>
              <p className="text-gray-600">
                You are solely responsible for the accuracy and appropriateness of your User Content. We do not monitor, review, or moderate User Content.
              </p>
            </div>
          </ScrollAnimation>

          {/* Acceptable Use */}
          <ScrollAnimation delay={700}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
                <li>Modify, adapt, or create derivative works based on the App</li>
                <li>Remove or alter any proprietary notices, labels, or marks on the App</li>
                <li>Use the App to infringe on the rights of others</li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Notifications */}
          <ScrollAnimation delay={800}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Notifications</h2>
              <p className="text-gray-600">
                The App uses local notifications to remind you of upcoming birthdays. Notification delivery depends on your device settings, iOS system limitations, and device state (e.g., battery, Do Not Disturb mode). We do not guarantee that notifications will be delivered at a specific time or at all. <strong>We are not liable for any missed, delayed, or undelivered notifications.</strong>
              </p>
            </div>
          </ScrollAnimation>

          {/* Intellectual Property */}
          <ScrollAnimation delay={900}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
              <p className="text-gray-600">
                The App, including its design, code, graphics, icons, and branding, is the intellectual property of WebSab and is protected by applicable copyright and trademark laws. These Terms do not grant you any rights to our intellectual property beyond the limited right to use the App as intended.
              </p>
            </div>
          </ScrollAnimation>

          {/* Disclaimer of Warranties */}
          <ScrollAnimation delay={1000}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Disclaimer of Warranties</h2>
              <p className="text-gray-600 mb-4">
                The App is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis, without warranties of any kind, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="text-gray-600 mb-4">We do not warrant that:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>The App will be uninterrupted, error-free, or secure</li>
                <li>Any defects will be corrected</li>
                <li>The App will meet your specific requirements</li>
                <li>Notification reminders will be delivered reliably</li>
              </ul>
            </div>
          </ScrollAnimation>

          {/* Limitation of Liability */}
          <ScrollAnimation delay={1100}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by applicable law, WebSab shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App.
              </p>
              <p className="text-gray-600">
                Our total liability for any claim arising from or relating to these Terms or the App shall not exceed the amount you paid for Presented Pro, or &euro;10, whichever is greater.
              </p>
            </div>
          </ScrollAnimation>

          {/* Indemnification */}
          <ScrollAnimation delay={1200}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify and hold harmless WebSab from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of the App or your violation of these Terms.
              </p>
            </div>
          </ScrollAnimation>

          {/* Termination */}
          <ScrollAnimation delay={1300}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
              <p className="text-gray-600">
                You may stop using the App at any time by uninstalling it from your device. We reserve the right to discontinue the App or modify its features at any time without prior notice. In the event of discontinuation, your locally stored data remains on your device.
              </p>
            </div>
          </ScrollAnimation>

          {/* Governing Law */}
          <ScrollAnimation delay={1400}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">13. Governing Law and Disputes</h2>
              <p className="text-gray-600">
                These Terms are governed by and construed in accordance with the laws of the Netherlands, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the App shall be resolved exclusively by the competent courts in the Netherlands.
              </p>
            </div>
          </ScrollAnimation>

          {/* Changes to Terms */}
          <ScrollAnimation delay={1500}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">14. Changes to These Terms</h2>
              <p className="text-gray-600">
                We may update these Terms from time to time. When we do, we will update the &ldquo;Effective Date&rdquo; at the top of this page. Continued use of the App after changes constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
              </p>
            </div>
          </ScrollAnimation>

          {/* Severability */}
          <ScrollAnimation delay={1600}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">15. Severability</h2>
              <p className="text-gray-600">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>
          </ScrollAnimation>

          {/* Contact Us */}
          <ScrollAnimation delay={1700}>
            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <h2 className="text-2xl font-bold mb-4">16. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about these Terms, please contact us:
              </p>
              <p className="text-gray-600">
                <strong>WebSab</strong><br />
                Email: <a href="mailto:hello@websab.nl" className="text-green-600 hover:underline">hello@websab.nl</a><br />
                Website: <a href="https://websab.nl" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">websab.nl</a>
              </p>
            </div>
          </ScrollAnimation>

          {/* Back Links */}
          <ScrollAnimation delay={1800}>
            <div className="flex justify-between items-center mt-12">
              <Link
                href={`/${locale}/presented-privacy`}
                className="text-green-600 hover:underline"
              >
                ← Privacy Policy
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
