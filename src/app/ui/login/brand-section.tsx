import { PipelineTimeline } from "./pipeline-timeline";

export const BrandSection = () => {
  return (
    <div className="w-full max-w-md space-y-8">
      {/* Wordmark */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {/* Orange rounded square with logo glyph */}
          <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 text-white"
              fill="currentColor"
            >
              <path d="M12 2L15.09 8.26H22L17.27 12.5L19.36 18.74L12 14.49L4.64 18.74L6.73 12.5L2 8.26H8.91L12 2Z" />
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-lg">AutonomyAI</div>
            <div className="text-slate-400 text-sm font-medium">On-Call Agent</div>
          </div>
        </div>
      </div>

      {/* Main Headline with Gradient */}
      <div className="space-y-3">
        <h1 className="text-4xl font-black text-white leading-tight">
          Your on-call engineer that{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            never sleeps
          </span>
        </h1>
      </div>

      {/* Description */}
      <p className="text-slate-300 text-base leading-relaxed">
        Automatically triage incidents, generate summaries, and execute remediation—24/7. Reduce MTTR and free your team from repetitive on-call toil.
      </p>

      {/* Pipeline Timeline */}
      <div className="pt-4">
        <PipelineTimeline />
      </div>

      {/* Security Badge */}
      <div className="pt-6 border-t border-slate-700 flex items-center gap-2 text-sm">
        <svg
          className="w-4 h-4 text-orange-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-slate-300">
          Encrypted & SSO-ready
        </span>
      </div>

      {/* Additional Info */}
      <div className="pt-4 grid grid-cols-2 gap-4 text-sm text-slate-400">
        <div>
          <div className="text-slate-300 font-semibold">SOC 2 Compliant</div>
          <div className="text-xs text-slate-500">Enterprise security</div>
        </div>
        <div>
          <div className="text-slate-300 font-semibold">Runs in Your Infra</div>
          <div className="text-xs text-slate-500">Full data privacy</div>
        </div>
      </div>
    </div>
  );
};
