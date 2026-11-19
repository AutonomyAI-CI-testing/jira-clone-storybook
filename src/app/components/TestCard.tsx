/**
 * TestCard — a self-contained, static reproduction of the supplied Figma frame
 * ("Test Page - Simple (FOR TESTING)", node 2-2).
 *
 * Deliberately minimal: no props, no state, no handlers, no data. This is a
 * smoke test for the design-to-component path, so values are read off the frame
 * image and are approximate. Colours are written as literals because the mock
 * uses a palette this app's semantic token layer does not define.
 */

const ICON_COLOR = "#d0d0d0";

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#1b1b1b] px-[38px] pb-[150px] pt-[38px] font-sans"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold leading-none text-[#f0f0f0]">
          UI magician Agent
        </h2>
        <GearIcon />
      </div>

      {/* Collapsed section line */}
      <div className="mt-[30px] flex items-center gap-2">
        <ChevronUpIcon />
        <p className="truncate text-[16px] text-[#d0d0d0]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design */}
      <div className="mt-[90px] flex items-center gap-2">
        <ChevronUpIcon />
        <h3 className="text-[19px] font-bold leading-none text-[#f0f0f0]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[40px]">
        <div className="flex items-center gap-3">
          <span className="text-[17px] text-[#d6d6d6]">
            Personal Access Token
          </span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[14px] h-[70px] w-full border border-[#6b6b6b] bg-[#262626] px-5 text-[17px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-[28px]">
        <div className="flex items-center gap-3">
          <span className="text-[17px] text-[#d6d6d6]">Design URL</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-[14px] h-[70px] w-full border border-[#6b6b6b] bg-[#262626] px-5 text-[17px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
        />
      </div>

      {/* Actions */}
      <div className="mt-[45px] flex gap-[34px]">
        <button
          type="button"
          className="h-[75px] w-[173px] rounded-[10px] bg-[#9c3d15] text-[18px] font-bold text-[#b9b2ad]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[75px] w-[173px] rounded-[10px] bg-[#9c3d15] text-[18px] font-bold text-[#b9b2ad]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="mt-[75px] text-[19px] font-bold leading-none text-[#f0f0f0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
