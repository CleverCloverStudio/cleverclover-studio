import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AnimatedReveal from "@/components/AnimatedReveal";
import WorkGrid from "@/components/WorkGrid";
import CTASection from "@/components/CTASection";
import { workProjects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects across video production, audio production, music, and website design from Clever Clover Studio.",
  openGraph: {
    title: "Our Work | Clever Clover Studio",
    description:
      "Selected projects across video production, audio production, music, and website design from Clever Clover Studio.",
    url: "/work",
    siteName: "Clever Clover Studio",
    images: [{ url: "/images/og-image.PNG" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work | Clever Clover Studio",
    description:
      "Selected projects across video production, audio production, music, and website design from Clever Clover Studio.",
    images: ["/images/og-image.PNG"],
  },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        headline="The work speaks."
        subheadline="Selected projects across video, audio, music, and web — each one built to make people feel something."
      />

      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <WorkGrid projects={workProjects} />
          </AnimatedReveal>
        </div>
      </section>

      <CTASection
        heading="Ready to add your project to this list?"
        subtext="Every project on this page started with a simple conversation. Let's have ours."
        buttonText="Start a project"
        buttonHref="/book"
        secondaryText="View packages"
        secondaryHref="/packages"
      />
    </>
  );
}
