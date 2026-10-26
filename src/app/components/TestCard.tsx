/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame
 * (see task/PLAN.md). Smoke test: no props, no state, nothing interactive.
 *
 * The frame's own palette is used literally below, because the app's semantic
 * tokens describe the Jira workspace and define no role for this dark plugin
 * chrome: panel #1b1b1b · field #272822 · field border #a5adad / #929291 ·
 * action #843a17 · action label #8c8078 · text #b5b5b5 / #a4a4a3 / #8b9291 /
 * #737470. The four glyphs in the frame are exported as embedded bitmaps, so
 * they are drawn here as small vectors instead.
 */

interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 14 16"
    width={14}
    height={16}
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7" cy="8" r="2.1" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 1.4v1.6M7 13v1.6M2.2 8h1.6M10.2 8h1.6M3.6 4.6 4.7 5.7M9.3 10.3l1.1 1.1M10.4 4.6 9.3 5.7M4.7 10.3 3.6 11.4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpIcon = ({
  className,
  width = 12,
  height = 8,
}: IconProps & { width?: number; height?: number }): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    width={width}
    height={height}
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 15 15"
    width={15}
    height={15}
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7.5" cy="4.8" r="0.85" fill="currentColor" />
    <path
      d="M7.5 6.9v3.7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1b1b1b] p-5 font-primary text-[11.5px] leading-[14px] text-[#a4a4a3]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="text-[#b5b5b5]" />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <ChevronUpIcon className="shrink-0 text-[#8b9291]" width={8} height={5} />
      <span className="truncate text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon className="shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <label className="mt-7 block">
      <span className="flex items-center gap-2 text-[#a4a4a3]">
        Personal Access Token
        <InfoIcon className="shrink-0 text-[#a4a4a3]" />
      </span>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full border border-[#a5adad] bg-[#272822] px-3 py-[10px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />
    </label>

    <label className="mt-3 block">
      <span className="flex items-center gap-2 text-[#a3a3a2]">
        Design URL
        <InfoIcon className="shrink-0 text-[#a3a3a2]" />
      </span>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 w-full border-2 border-[#929291] bg-[#272822] px-3 py-[9px] text-[10.5px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />
    </label>

    <div className="mt-6 flex gap-4 pl-6">
      <button
        type="button"
        className="w-[85px] rounded bg-[#843a17] py-[11px] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[85px] rounded bg-[#843a17] py-[11px] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <p className="mt-12 text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);
