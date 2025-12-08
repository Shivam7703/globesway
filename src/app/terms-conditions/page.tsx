import React from "react";

export async function generateMetadata() {
  const pageUrl = "https://globeswayimmigration.com/terms-and-conditions";

  return {
    title: "Terms & Conditions | Globesway Immigration Services",
    description:
      "Review the Terms and Conditions of Globesway Immigration Services. Understand the rules, client responsibilities, and service agreements governing our immigration consultancy.",
    keywords: [
      "Terms and Conditions",
      "Globesway Immigration",
      "Immigration Services Agreement",
      "Client Policy",
      "Legal Terms",
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
      title: "Terms & Conditions | Globesway Immigration Services",
      description:
        "Review the Terms and Conditions of Globesway Immigration Services. Understand the rules, client responsibilities, and service agreements governing our immigration consultancy.",
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
      title: "Terms & Conditions | Globesway Immigration Services",
      description:
        "Review the Terms and Conditions of Globesway Immigration Services. Understand the rules, client responsibilities, and service agreements governing our immigration consultancy.",
      images: ["https://globeswayimmigration.com/default.webp"],
    },
    authors: [{ name: "Globesway Immigration Team" }],
    viewport:
      "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  };
}

export default function TermsConditions() {
  return (
    <main className="min-h-screen bg-white text-slate-800 px-4 sm:px-6 md:p-20 lg:p-28 py-10 max-w-4xl mx-auto">
      {/* ✅ Inject Schema into page */}

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Terms & Conditions
      </h1>

      <Section title="1. Acceptance of Terms">
        <p className="text-sm leading-relaxed">
          By using our website or services, you agree to these Terms &
          Conditions. We reserve the right to update these terms at any time
          without prior notice.
        </p>
      </Section>

      <Section title="2. Services Provided">
        <p className="text-sm leading-relaxed">
          We provide immigration consultancy services, including guidance for
          study, work, and permanent residency visas. All services are advisory;
          the final decision on visa applications lies with the relevant
          immigration authorities.
        </p>
      </Section>

      <Section title="3. Client Responsibility">
        <p className="text-sm leading-relaxed">
          Clients must provide accurate and complete information. Failure to do
          so may result in delays or denial of services.
        </p>
      </Section>

      <Section title="4. Payment Terms">
        <p className="text-sm leading-relaxed">
          All fees for services must be paid as specified in the agreement.
          Payments are non-refundable once services have commenced unless stated
          otherwise.
        </p>
      </Section>

      <Section title="5. Confidentiality">
        <p className="text-sm leading-relaxed">
          We maintain strict confidentiality of client information, except where
          disclosure is required by law.
        </p>
      </Section>

      <Section title="6. Limitation of Liability">
        <p className="text-sm leading-relaxed">
          We are not liable for any loss, delay, or rejection of applications by
          immigration authorities. Our liability is limited to the fees paid for
          the services.
        </p>
      </Section>

      <Section title="7. Governing Law">
        <p className="text-sm leading-relaxed">
          These Terms & Conditions are governed by the laws of [Your
          Country/State]. Any disputes will be resolved in the appropriate
          courts of jurisdiction.
        </p>
      </Section>

      <Section title="8. Contact">
        <p className="text-sm leading-relaxed">
          For questions regarding these Terms & Conditions, please contact us at
          [Your Email/Phone].
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
