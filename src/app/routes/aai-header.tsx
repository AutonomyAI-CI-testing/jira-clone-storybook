import type { MetaFunction } from "react-router";

// The supplied design's companion colour stylesheet was not part of the upload, so
// this page carries the design's own palette as fixed literals: the one colour the
// design file states outright (#f25730, its brand orange) and an approximation of
// its warm ink ramp around it. Fixed literals, not semantic tokens, because this
// page must look the same in every theme.
const GRAIN_TEXTURE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export const meta: MetaFunction = () => {
  const title = "On-Call Agent";
  return [{ title }];
};

export default function AaiHeaderRoute() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#131211]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay"
        style={{ backgroundImage: GRAIN_TEXTURE }}
      />
      <header className="relative flex items-center gap-[11px] p-[clamp(36px,4.5vw,64px)]">
        <span
          aria-hidden="true"
          className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-[8px] bg-[linear-gradient(150deg,#f25730,#ff9a6b)] shadow-[0_0_0_1px_rgba(242,87,48,0.35),0_6px_18px_rgba(242,87,48,0.25)]"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="#ffffff"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19" />
            <circle cx="12" cy="12" r="3.4" />
          </svg>
        </span>
        <span className="font-primary-black text-[19px] leading-none tracking-[-0.01em] text-[#f6f3f0]">
          Autonomy<span className="text-[#f25730]">AI</span>
        </span>
        <span aria-hidden="true" className="mx-[3px] h-[18px] w-px bg-[#37342f]" />
        <span className="font-primary text-[14px] leading-none text-[#b4ada6]">On-Call Agent</span>
      </header>
    </div>
  );
}
