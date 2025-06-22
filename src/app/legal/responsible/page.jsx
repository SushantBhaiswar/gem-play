import LandingHeader from "@/components/landing/Header";
import LandingFooter from "@/components/landing/Footer";

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      <LandingHeader />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-[var(--highlight)]">Responsible Gaming</h1>
        <section className="space-y-6 text-base">
          <p>At GemPlay, we are committed to promoting responsible gaming and providing a safe, enjoyable environment for all players. Real money gaming should be a form of entertainment, not a way to make money.</p>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">1. Play Responsibly</h2>
          <ul className="list-disc ml-6">
            <li>Set limits on your deposits, losses, and playing time.</li>
            <li>Never chase losses or play with money you cannot afford to lose.</li>
            <li>Take regular breaks and avoid gaming when upset or stressed.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">2. Warning Signs of Problem Gaming</h2>
          <ul className="list-disc ml-6">
            <li>Spending more money or time on gaming than intended.</li>
            <li>Neglecting work, studies, or relationships due to gaming.</li>
            <li>Borrowing money or selling possessions to play.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">3. Self-Exclusion & Support</h2>
          <ul className="list-disc ml-6">
            <li>If you feel you are losing control, you can request self-exclusion by contacting support@gemplay.com.</li>
            <li>We provide resources and support for users facing gaming-related issues.</li>
            <li>For professional help, contact organizations like <a href="https://www.gamblingtherapy.org/en" className="underline text-[var(--highlight)]" target="_blank" rel="noopener noreferrer">Gambling Therapy</a> or <a href="https://www.begambleaware.org/" className="underline text-[var(--highlight)]" target="_blank" rel="noopener noreferrer">BeGambleAware</a>.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">4. Underage Gaming</h2>
          <ul className="list-disc ml-6">
            <li>Players under 18 are strictly prohibited from participating in real money games on GemPlay.</li>
            <li>We use verification processes to prevent underage access.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">5. Legal Compliance</h2>
          <ul className="list-disc ml-6">
            <li>We comply with all applicable Indian laws and regulations regarding online real money gaming.</li>
            <li>Residents of restricted states are not permitted to play for prizes.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">6. Parental Controls</h2>
          <ul className="list-disc ml-6">
            <li>We recommend parents and guardians use parental control tools to prevent underage access to real money gaming.</li>
            <li>Educate minors about the risks of gambling and monitor their online activities.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">7. Financial Limits</h2>
          <ul className="list-disc ml-6">
            <li>Users can set daily, weekly, or monthly deposit and loss limits in their account settings.</li>
            <li>Contact support@gemplay.com for assistance in setting or adjusting limits.</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 text-[var(--accent)]">8. Grievance Redressal</h2>
          <ul className="list-disc ml-6">
            <li>If you have concerns about responsible gaming, contact our Grievance Officer at grievance@gemplay.com.</li>
            <li>We are committed to addressing your concerns promptly and confidentially.</li>
          </ul>
          <p className="mt-8 text-sm text-[var(--foreground)] opacity-70">Last updated: June 2024</p>
        </section>
      </main>
      <LandingFooter />
    </div>
  );
} 