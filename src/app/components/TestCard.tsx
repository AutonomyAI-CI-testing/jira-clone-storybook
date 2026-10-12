/**
 * TestCard — a self-contained smoke-test component.
 *
 * A single static recreation of the attached Figma frame: a dark "UI magician
 * Agent" settings panel with a header, a collapsed summary line, an
 * "Add New Design" section holding two labelled fields, a pair of action
 * buttons, and a "Recent Breakdowns" heading.
 *
 * It takes no props and holds no state — every value is baked in, so it can be
 * rendered on its own anywhere. The frame's near-black/rust palette has no
 * close match among the app's semantic colour tokens, so those values are used
 * as literal arbitrary Tailwind values here; no theme token is re-pointed.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#131313] px-10 pb-16 pt-12 font-primary text-[#d5d5d5]"
  >
    {/* Header */}
    <div className="flex items-center justify-between gap-6">
      <h1 className="font-primary-bold text-[26px] leading-none text-[#d5d5d5]">
        UI magician Agent
      </h1>
      <GearIcon className="h-[34px] w-[34px] shrink-0 text-[#d5d5d5]" />
    </div>

    {/* Collapsed summary line */}
    <div className="mt-7 flex items-center gap-2">
      <ChevronUpIcon className="h-[18px] w-[18px] shrink-0 text-[#a3a3a3]" />
      <p className="truncate text-[22px] text-[#a3a3a3]">
        From entire frame to a singl…
      </p>
    </div>

    {/* Section title */}
    <div className="mt-[150px] flex items-center gap-2">
      <ChevronUpIcon className="h-[22px] w-[22px] shrink-0 text-[#d5d5d5]" />
      <h2 className="font-primary-bold text-[26px] leading-none text-[#d5d5d5]">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-6">
      <div className="flex items-center justify-between gap-4">
        <label
          htmlFor="test-elem-token"
          className="text-[22px] text-[#a3a3a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon className="h-[30px] w-[30px] shrink-0 text-[#d5d5d5]" />
      </div>
      <input
        id="test-elem-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-6 h-[73px] w-full rounded-[2px] border border-[#8c8c8c] bg-[#1e1e1e] pl-10 text-[22px] text-[#7a7a7a] outline-none placeholder:text-[#7a7a7a]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-6">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor="test-elem-url" className="text-[22px] text-[#a3a3a3]">
          Design URL
        </label>
        <InfoIcon className="h-[30px] w-[30px] shrink-0 text-[#d5d5d5]" />
      </div>
      <input
        id="test-elem-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-6 h-[73px] w-full rounded-[2px] border border-[#8c8c8c] bg-[#1e1e1e] pl-10 text-[22px] text-[#7a7a7a] outline-none placeholder:text-[#7a7a7a]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[44px] flex justify-center gap-[37px]">
      <button
        type="button"
        className="h-[75px] w-[169px] rounded-md bg-[#a83f0d] text-[22px] text-[#d98d5e]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[75px] w-[169px] rounded-md bg-[#a83f0d] text-[22px] text-[#d98d5e]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-[96px] font-primary-bold text-[26px] leading-none text-[#d5d5d5]">
      Recent Breakdowns
    </h3>
  </div>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.11a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.11A1.7 1.7 0 0 0 4.6 8.86a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34H9a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.11a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87V9a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.11a1.7 1.7 0 0 0-1.56 1.03Z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

interface IconProps {
  className?: string;
}
