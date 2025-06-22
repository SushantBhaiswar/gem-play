import LandingHeader from "@/components/landing/Header";
import LandingFooter from "@/components/landing/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <LandingHeader />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-[var(--highlight)]">Terms of Service</h1>
        <section className="space-y-6 text-base">
          <p>Welcome to GemPlay. By accessing or using our platform, you agree to comply with and be bound by the following Terms of Service. Please read them carefully before participating in any real money games on our site.</p>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">1. Eligibility</h2>
          <ul className="list-disc ml-6">
            <li>You must be at least 18 years old to register and play real money games on GemPlay.</li>
            <li>Residents of Andhra Pradesh, Assam, Odisha, Telangana, Sikkim, and Nagaland are not permitted to participate in real money games or tournaments.</li>
            <li>By using our services, you confirm that you are not a resident of these restricted states and meet the age requirement.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">2. Responsible Play</h2>
          <ul className="list-disc ml-6">
            <li>Real money gaming involves financial risk and may be addictive. Please play responsibly and within your limits.</li>
            <li>We encourage users to set deposit limits and take breaks as needed.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">3. Deposits & Withdrawals</h2>
          <ul className="list-disc ml-6">
            <li>All deposits and withdrawals must be made through legitimate banking channels in India.</li>
            <li>Users are responsible for providing accurate payment information. GemPlay is not liable for failed transactions due to incorrect details.</li>
            <li>Withdrawals may be subject to verification and KYC requirements as per Indian law.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">4. Fair Play & User Conduct</h2>
          <ul className="list-disc ml-6">
            <li>Users must not use unfair means, cheats, or bots to gain an advantage.</li>
            <li>Any suspicious activity may result in suspension or permanent ban of the account.</li>
            <li>Respectful behavior towards other players and staff is mandatory.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">5. Liability & Disclaimers</h2>
          <ul className="list-disc ml-6">
            <li>GemPlay is not responsible for losses incurred while playing real money games.</li>
            <li>We do not guarantee continuous, error-free access to our services.</li>
            <li>Users are responsible for complying with local laws regarding online gaming.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">6. Changes to Terms</h2>
          <ul className="list-disc ml-6">
            <li>GemPlay reserves the right to update these Terms of Service at any time. Continued use of the platform constitutes acceptance of the revised terms.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">7. Dispute Resolution</h2>
          <ul className="list-disc ml-6">
            <li>Any disputes arising from the use of GemPlay will be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.</li>
            <li>The place of arbitration shall be Mumbai, India, and the language shall be English.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">8. Intellectual Property</h2>
          <ul className="list-disc ml-6">
            <li>All content, trademarks, and software on GemPlay are the property of GemPlay or its licensors.</li>
            <li>Unauthorized use, reproduction, or distribution is strictly prohibited.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">9. Account Termination</h2>
          <ul className="list-disc ml-6">
            <li>GemPlay reserves the right to suspend or terminate accounts for violation of these terms or applicable laws.</li>
            <li>Users may terminate their account at any time by contacting support@gemplay.com.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">10. Governing Law</h2>
          <ul className="list-disc ml-6">
            <li>These Terms of Service are governed by the laws of India.</li>
            <li>Courts in Mumbai, India, shall have exclusive jurisdiction over any disputes.</li>
          </ul>
          <p className="mt-8 text-sm text-[var(--foreground)] opacity-70">Last updated: June 2024</p>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
} 