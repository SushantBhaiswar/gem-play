import LandingHeader from "@/components/landing/Header";
import LandingFooter from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <LandingHeader />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-[var(--highlight)]">Privacy Policy</h1>
        <section className="space-y-6 text-base">
          <p>GemPlay is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our real money gaming platform.</p>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">1. Information We Collect</h2>
          <ul className="list-disc ml-6">
            <li>Personal details such as name, email, phone number, and address during registration and KYC.</li>
            <li>Payment and transaction information for deposits and withdrawals.</li>
            <li>Device and usage data, including IP address, browser type, and game activity.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>To provide, maintain, and improve our gaming services.</li>
            <li>To process payments, verify identity, and comply with legal obligations.</li>
            <li>To communicate with you about updates, offers, and support.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">3. Sharing of Information</h2>
          <ul className="list-disc ml-6">
            <li>We do not sell your personal information to third parties.</li>
            <li>Information may be shared with payment processors, regulatory authorities, or as required by law.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">4. Cookies & Tracking</h2>
          <ul className="list-disc ml-6">
            <li>We use cookies and similar technologies to enhance your experience and analyze site usage.</li>
            <li>You can manage cookie preferences in your browser settings.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">5. Data Security</h2>
          <ul className="list-disc ml-6">
            <li>We implement industry-standard security measures to protect your data.</li>
            <li>Despite our efforts, no method of transmission over the Internet is 100% secure.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">6. Your Rights</h2>
          <ul className="list-disc ml-6">
            <li>You may access, update, or request deletion of your personal information by contacting support@gemplay.com.</li>
            <li>Users from restricted states or under 18 are not permitted to use our services.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">7. Changes to Policy</h2>
          <ul className="list-disc ml-6">
            <li>We may update this Privacy Policy from time to time. Continued use of GemPlay constitutes acceptance of the revised policy.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">8. Data Retention</h2>
          <ul className="list-disc ml-6">
            <li>We retain your personal data as long as your account is active or as required by law.</li>
            <li>Data may be retained for legal, regulatory, or legitimate business purposes.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">9. Third-Party Services</h2>
          <ul className="list-disc ml-6">
            <li>Our platform may contain links to third-party sites or services. We are not responsible for their privacy practices.</li>
            <li>We recommend reviewing the privacy policies of any third-party services you use.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">10. User Consent</h2>
          <ul className="list-disc ml-6">
            <li>By using GemPlay, you consent to the collection and use of your information as described in this policy.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">11. Grievance Redressal</h2>
          <ul className="list-disc ml-6">
            <li>If you have any concerns or complaints regarding your privacy, contact our Grievance Officer at grievance@gemplay.com.</li>
            <li>We will address your concerns in accordance with applicable Indian laws.</li>
          </ul>
          <p className="mt-8 text-sm text-[var(--foreground)] opacity-70">Last updated: June 2024</p>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
} 