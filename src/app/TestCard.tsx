import {
  IoSettingsOutline,
  IoInformationCircleOutline,
  IoChevronUp,
} from "react-icons/io5";

/**
 * Smoke-test panel matching the "UI magician Agent" Figma frame.
 * Self-contained — no props. Root must keep id="testElem".
 */
export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[254px] min-h-[508px] bg-[#1C1D17] px-5 py-6 text-[#D4D4D4] font-sans">
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-base font-medium tracking-wide">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#A8A8A8] hover:text-[#D4D4D4]"
          >
            <IoSettingsOutline className="h-5 w-5" />
          </button>
        </div>

        {/* Collapsed frame row */}
        <button
          type="button"
          className="mb-10 flex w-full items-center gap-2 text-left text-sm text-[#A8A8A8]"
        >
          <IoChevronUp className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <section className="mb-8">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-sm text-[#C8C8C8]"
          >
            <IoChevronUp className="h-3.5 w-3.5 shrink-0" />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-1.5">
              <label className="text-sm text-[#C8C8C8]">
                Personal Access Token
              </label>
              <IoInformationCircleOutline
                className="h-4 w-4 text-[#8A8A8A]"
                aria-label="Token info"
              />
            </div>
            <input
              type="text"
              readOnly
              defaultValue=""
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#6B6B6B] bg-[#25261F] px-3 py-2.5 text-sm text-[#D4D4D4] placeholder:text-[#8A8A8A] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-1.5">
              <label className="text-sm text-[#C8C8C8]">Design URL</label>
              <IoInformationCircleOutline
                className="h-4 w-4 text-[#8A8A8A]"
                aria-label="URL info"
              />
            </div>
            <input
              type="text"
              readOnly
              defaultValue=""
              placeholder="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8A8A8A] bg-[#25261F] px-3 py-2.5 text-sm text-[#D4D4D4] placeholder:text-[#8A8A8A] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="rounded-md bg-[#A85A32] px-6 py-2.5 text-sm font-medium text-[#D4D4D4]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#A85A32] px-6 py-2.5 text-sm font-medium text-[#D4D4D4]"
            >
              Prepare
            </button>
          </div>
        </section>

        {/* Recent Breakdowns */}
        <h2 className="mt-10 text-base font-medium text-[#C8C8C8]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
