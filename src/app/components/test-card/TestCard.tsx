import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained smoke test: no props, no state, no side effects.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-elevation-surface px-11 py-10 font-primary text-font"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <IoSettingsOutline aria-hidden="true" className="text-[28px]" />
      </div>

      {/* Collapsed description row */}
      <div className="mt-10 flex items-center gap-3 text-base text-font-subtle">
        <IoChevronUp aria-hidden="true" className="text-xl" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mt-[160px] flex items-center gap-3">
        <IoChevronUp aria-hidden="true" className="text-2xl" />
        <h2 className="font-primary-bold text-[22px]">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-14">
        <div className="flex items-center gap-3 text-base">
          <span>Personal Access Token</span>
          <IoInformationCircleOutline aria-hidden="true" className="text-xl" />
        </div>
        <input
          aria-label="Personal Access Token"
          className="mt-5 h-16 w-full rounded-none border border-border-bold bg-background-input px-4 font-primary text-lg text-font placeholder:text-font-subtlest"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mt-9">
        <div className="flex items-center gap-3 text-base">
          <span>Design URL</span>
          <IoInformationCircleOutline aria-hidden="true" className="text-xl" />
        </div>
        <input
          aria-label="Design URL"
          className="mt-5 h-16 w-full rounded-none border border-border-bold bg-background-input px-4 font-primary text-lg text-font placeholder:text-font-subtlest"
          placeholder="https://www.figma.com/file/"
          readOnly
        />
      </div>

      {/* Actions */}
      <div className="mt-14 flex gap-7">
        <button
          className="flex h-16 flex-1 items-center justify-center rounded-lg bg-[#a8471a] font-primary text-lg text-white"
          type="button"
        >
          Awesome
        </button>
        <button
          className="flex h-16 flex-1 items-center justify-center rounded-lg bg-[#a8471a] font-primary text-lg text-white"
          type="button"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[72px] font-primary-bold text-[22px]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
