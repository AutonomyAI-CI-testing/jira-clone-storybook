/**
 * TestCard — a self-contained reproduction of the attached Figma frame, built
 * as a smoke test of the design-to-component flow. Static furniture only: no
 * props, no state, no handlers.
 *
 * The frame carries its own dark palette, which is not one of the app's six
 * themes, so this component deliberately uses literal colours instead of the
 * semantic tokens. Typography still comes from the shared CircularStd
 * utilities, and spacing/radii stay on the Tailwind scale.
 */

type IconProps = {
  className?: string;
};

const GearIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const fieldLabelClass = "font-primary-bold text-sm text-[#e8e8e8]";
const fieldInputClass =
  "mt-3 block w-full rounded-[2px] border border-[#6b6b6b] bg-[#232323] px-4 py-2.5 font-primary text-sm text-[#f2f2f2] placeholder:text-[#7a7a7a]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[360px] bg-[#1a1a1a] px-5 pb-12 pt-6 font-primary text-[#f2f2f2]"
    >
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-lg leading-6">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Open settings"
          className="mt-0.5 shrink-0 text-[#f2f2f2]"
        >
          <GearIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm">
        <ChevronUpIcon className="h-4 w-4 shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-16 flex items-center gap-2 font-primary-bold text-lg">
        <ChevronUpIcon className="h-5 w-5 shrink-0" />
        <span>Add New Design</span>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-token" className={fieldLabelClass}>
            Personal Access Token
          </label>
          <InfoIcon className="h-4 w-4 shrink-0 text-[#e8e8e8]" />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={fieldInputClass}
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-url" className={fieldLabelClass}>
            Design URL
          </label>
          <InfoIcon className="h-4 w-4 shrink-0 text-[#e8e8e8]" />
        </div>
        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={fieldInputClass}
        />
      </div>

      <div className="mt-10 flex justify-end gap-4">
        <button
          type="button"
          className="rounded-[3px] bg-[#a3451f] px-5 py-2.5 font-primary-bold text-sm text-[#b98d80]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-[3px] bg-[#a3451f] px-5 py-2.5 font-primary-bold text-sm text-[#b98d80]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-14 font-primary-bold text-lg text-[#9a9a9a]">Recent Breakdowns</div>
    </div>
  );
};
