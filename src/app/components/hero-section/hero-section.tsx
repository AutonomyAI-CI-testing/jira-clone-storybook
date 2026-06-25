import { Button } from "@app/components/button";

interface Props {
  /** Main heading text displayed at the top of the hero section */
  heading: string;
  /** Subtitle text displayed below the heading */
  subtitle: string;
  /** Label for the CTA button. When empty string, button is hidden. @default "Get Started" */
  ctaLabel?: string;
  /** Click handler for the CTA button. Only called when ctaHref is not provided */
  onCtaClick?: () => void;
  /** Optional URL to navigate to when CTA is clicked. When provided, renders button inside an anchor tag */
  ctaHref?: string;
}

export const HeroSection = ({
  heading,
  subtitle,
  ctaLabel = "Get Started",
  onCtaClick,
  ctaHref,
}: Props) => {
  const renderCTA = () => {
    if (!ctaLabel) {
      return null;
    }

    const button = (
      <Button color="danger" size="lg" onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    );

    // Wrap in anchor tag when href is provided for proper link navigation
    return (
      <div className="mt-8 flex justify-center">
        {ctaHref ? <a href={ctaHref}>{button}</a> : button}
      </div>
    );
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[var(--Neutral0)] px-6 py-12">
      <div className="max-w-[900px] text-center">
        <h1 className="mb-6 font-primary-black text-6xl leading-tight text-[color:var(--Red700)]">
          {heading}
        </h1>
        <p className="font-primary text-2xl leading-relaxed text-[color:var(--Red600)]">
          {subtitle}
        </p>
        {renderCTA()}
      </div>
    </section>
  );
}
