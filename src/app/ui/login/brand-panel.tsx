import { IncidentTimeline } from "./incident-timeline";

export const BrandPanel = () => {
  return (
    <div className="flex flex-col justify-between bg-elevation-surface-sunken p-12">
      {/* Header */}
      <div>
        <div className="mb-8 space-y-4">
          {/* Wordmark / Logo (text-based for now) */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-background-brand-bold flex items-center justify-center text-font-inverse font-primary-bold">
              A
            </div>
            <span className="font-primary-bold text-lg text-font">
              AutonomyAI
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className="font-primary-black text-4xl leading-tight text-font">
            Where on-call meets clarity
          </h1>

          {/* Description */}
          <p className="text-base text-font-subtle leading-relaxed">
            Intelligently route incidents, cut through noise, and resolve faster.
          </p>
        </div>
      </div>

      {/* Timeline - positioned in the middle */}
      <div className="my-12">
        <IncidentTimeline />
      </div>

      {/* Footer (spacer to push timeline up) */}
      <div />
    </div>
  );
};
