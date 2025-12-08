import React from "react";

export async function generateMetadata() {
  const pageUrl = "https://globeswayimmigration.com/privacy-policy";

  return {
    title: "Privacy Policy | Globesway Immigration Services",
    description:
      "Read Globesway Immigration’s privacy policy. Learn how we protect your personal data with secure, transparent, and client-focused practices.",
    keywords: [
      "Privacy Policy",
      "Data Protection",
      "Immigration Services Privacy",
      "Globesway Immigration",
    ],
    alternates: {
      canonical: pageUrl, // ✅ Canonical Tag
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      title: "Privacy Policy | Globesway Immigration Services",
      description:
        "Read Globesway Immigration’s privacy policy. Learn how we protect your personal data with secure, transparent, and client-focused practices.",
      url: pageUrl,
      siteName: "Globesway Immigration",
      images: [
        {
          url: "https://globeswayimmigration.com/default.webp",
          width: 1200,
          height: 630,
          alt: "Globesway Immigration",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Privacy Policy | Globesway Immigration Services",
      description:
        "Read Globesway Immigration’s privacy policy. Learn how we protect your personal data with secure, transparent, and client-focused practices.",
      images: ["https://globeswayimmigration.com/default.webp"],
    },
    authors: [{ name: "Globesway Immigration Team" }],
    viewport:
      "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  };
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-slate-800 px-4 sm:px-6 md:p-20 lg:p-28 py-10 max-w-4xl mx-auto">
      {/* ✅ Inject Schema into page */}

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Privacy Policy
      </h1>
      <p className="mb-6 text-sm leading-relaxed">
        At Globesway Immigration, we respect your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, store, and safeguard your data when you use our website
        or services. By engaging with us, you agree to the practices outlined
        below.
      </p>

      <Section title="1. Information We Collect">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            <b>Personal Information</b> — Name, contact details, date of birth,
            nationality, education, and employment history.
          </li>
          <li>
            <b>Sensitive Documents</b> — Passports, ID proofs, financial
            statements, and other immigration-related papers.
          </li>
          <li>
            <b>Website Data</b> — Cookies, IP addresses, and browsing details to
            improve user experience.
          </li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>To assess your visa eligibility and process applications.</li>
          <li>To communicate updates and services related to your case.</li>
          <li>To comply with legal and regulatory requirements.</li>
          <li>To enhance user experience on our website.</li>
        </ul>
      </Section>

      <Section title="3. Sharing of Information">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            With government authorities or embassies for visa applications.
          </li>
          <li>
            With authorized third-party service providers (e.g., language tests,
            medical exams).
          </li>
          <li>When required by law or legal authorities.</li>
          <li>Never shared with unauthorized or irrelevant parties.</li>
        </ul>
      </Section>

      <Section title="4. Data Security">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>
            Data is stored securely in our systems with restricted access.
          </li>
          <li>Regular monitoring and security checks are conducted.</li>
          <li>Only authorized staff can access sensitive information.</li>
          <li>We use encryption and secure servers to protect your data.</li>
        </ul>
      </Section>

      <Section title="5. Your Rights">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>You can request a copy of your data stored with us.</li>
          <li>You can update or correct your details at any time.</li>
          <li>You may withdraw your consent to data usage by contacting us.</li>
          <li>
            You can request deletion of your personal information (where legally
            possible).
          </li>
        </ul>
      </Section>

      <Section title="6. Cookies and Website Usage">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Cookies track website traffic and performance.</li>
          <li>They do not collect personal or sensitive information.</li>
          <li>
            You can disable cookies through your browser settings if you prefer.
          </li>
        </ul>
      </Section>

      <Section title="7. Changes to Privacy Policy">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Updates will always be posted on our website.</li>
          <li>Clients will be informed of significant changes.</li>
          <li>We encourage you to review the policy periodically.</li>
        </ul>
      </Section>

      <Section title="8. Contact Us">
        <p className="text-sm mb-3">
          If you have any questions about our Privacy Policy or how we handle
          your data, feel free to reach out:
        </p>
        <p className="text-sm">
          <b>Email:</b> info@globeswayimmigration.com
        </p>
        <p className="text-sm">
          <b>Phone:</b> +91 92202 92921
        </p>
        <p className="text-sm">
          <b>Office Address:</b> Office no. 886-887, 8th Floor, AGGARWAL MILLENNIUM TOWER 2, Netaji Subhash Place, Pitampura, New Delhi, Delhi, 110034
        </p>
      </Section>
    </main>
  );
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold text-slate-900 mb-3">{title}</h2>
      {children}
    </section>
  );
}
