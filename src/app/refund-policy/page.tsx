import React from "react";

export async function generateMetadata() {
  const pageUrl = "https://globeswayimmigration.com/refund-policy";

  return {
    title: "Refund Policy | Globesway Immigration Services",
    description:
      "Read Globesway Immigration’s Refund Policy. Understand our guidelines on payments, refund eligibility, non-refundable fees, and refund processing timelines.",
    keywords: [
      "Refund Policy",
      "Globesway Immigration",
      "Immigration Services Refund",
      "Payment Terms",
      "Visa Consultancy Refund Policy",
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
      title: "Refund Policy | Globesway Immigration Services",
      description:
        "Read Globesway Immigration’s Refund Policy. Understand our guidelines on payments, refund eligibility, non-refundable fees, and refund processing timelines.",
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
      title: "Refund Policy | Globesway Immigration Services",
      description:
        "Read Globesway Immigration’s Refund Policy. Understand our guidelines on payments, refund eligibility, non-refundable fees, and refund processing timelines.",
      images: ["https://globeswayimmigration.com/default.webp"],
    },
    authors: [{ name: "Globesway Immigration Team" }],
    viewport:
      "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
  };
}

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-white text-slate-800 px-4 sm:px-6 md:p-20 lg:p-28 py-10 max-w-4xl mx-auto">
      {/* ✅ Inject Schema into page */}

      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Refund Policy
      </h1>

      <Section title="1. Payment Terms">
        <p className="text-sm leading-relaxed">
          All fees for our immigration services must be paid as per the agreed
          schedule. Payments can be made via online transfer, card, or any
          authorized payment method.
        </p>
      </Section>

      <Section title="2. Refund Eligibility">
        <p className="text-sm leading-relaxed">
          Refunds are only applicable under specific circumstances, such as
          cancellation of services before the process has started or if the
          service was not provided as agreed.
        </p>
      </Section>

      <Section title="3. Non-Refundable Fees">
        <p className="text-sm leading-relaxed">
          Consultation fees are non-refundable once the consultation has been
          delivered.
        </p>
        <p className="text-sm leading-relaxed mt-2">
          Any fees paid to immigration authorities, government bodies, or
          third-party services are non-refundable.
        </p>
      </Section>

      <Section title="4. Partial Refunds">
        <p className="text-sm leading-relaxed">
          If a refund is approved after the process has started, only the
          unutilized portion of the service fees will be refunded.
          Administrative or processing charges may apply.
        </p>
      </Section>

      <Section title="5. Requesting a Refund">
        <p className="text-sm leading-relaxed">
          Clients must submit a written refund request via email to [Your Email
          Address]. Refund requests will be reviewed within 7–10 business days.
        </p>
      </Section>

      <Section title="6. Refund Method">
        <p className="text-sm leading-relaxed">
          Approved refunds will be processed using the original payment method
          unless otherwise agreed.
        </p>
      </Section>

      <Section title="7. No Guarantee of Visa Approval">
        <p className="text-sm leading-relaxed">
          Our refund policy does not cover visa rejection or delays caused by
          immigration authorities, as all applications are subject to official
          approval.
        </p>
      </Section>

      <Section title="8. Policy Updates">
        <p className="text-sm leading-relaxed">
          We reserve the right to modify this Refund Policy at any time. Changes
          will be updated on our website with the effective date.
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
