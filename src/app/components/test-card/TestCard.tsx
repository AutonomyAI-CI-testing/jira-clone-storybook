import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#1e1e1c] p-5 font-primary text-font-inverse"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[13.5px] font-bold text-font-inverse">
          UI magician Agent
        </h2>
        <FiSettings size={20} className="text-font-subtlest" />
      </div>

      {/* Section 1 */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={14} className="text-font-subtlest" />
        <span className="truncate text-[11.5px] font-semibold text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section 2 */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <FiChevronUp size={14} className="text-font-subtlest" />
          <span className="text-[13.5px] font-bold text-font-inverse">
            Add New Design
          </span>
        </div>

        {/* Personal Access Token field */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <label className="text-[11.5px] font-semibold text-font-subtlest">
              Personal Access Token
            </label>
            <FiInfo size={13} className="text-font-subtlest" />
          </div>
          <div className="mt-2 rounded border border-border-bold bg-transparent px-3 py-2.5 text-[11.5px] font-semibold text-font-disabled">
            figd_xxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL field */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5">
            <label className="text-[11.5px] font-semibold text-font-subtlest">
              Design URL
            </label>
            <FiInfo size={13} className="text-font-subtlest" />
          </div>
          <div className="mt-2 rounded border border-border-bold bg-transparent px-3 py-2.5 text-[10.5px] font-semibold text-font-disabled">
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-end gap-3">
          <button
            type="button"
            className="cursor-not-allowed rounded bg-[#8a3f1c] px-4 py-2.5 text-[11.5px] font-semibold text-font-inverse"
          >
            Awesome
          </button>
          <button
            type="button"
            className="cursor-not-allowed rounded bg-[#8a3f1c] px-4 py-2.5 text-[11.5px] font-semibold text-font-inverse"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <h3 className="mt-8 text-[13.5px] font-bold text-font-inverse">
        Recent Breakdowns
      </h3>
    </div>
  );
};
