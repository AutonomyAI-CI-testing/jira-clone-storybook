import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[300px] flex-col gap-6 bg-neutral-950 p-5 text-neutral-300"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-400">
          UI magician Agent
        </span>
        <FiSettings className="text-neutral-400" size={18} />
      </div>

      <div className="flex items-center gap-2">
        <FiChevronUp className="text-neutral-500" size={14} />
        <span className="text-xs text-neutral-500">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FiChevronUp className="text-neutral-400" size={14} />
          <span className="text-sm font-semibold text-neutral-400">
            Add New Design
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-neutral-400">
              Personal Access Token
            </span>
            <FiInfo className="text-neutral-500" size={12} />
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="rounded border-2 border-neutral-600 bg-neutral-800 p-3 text-xs text-neutral-500 placeholder:text-neutral-500"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-neutral-400">
              Design URL
            </span>
            <FiInfo className="text-neutral-500" size={12} />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="rounded border border-neutral-500 bg-neutral-800 p-3 text-xs text-neutral-500 placeholder:text-neutral-500"
          />
        </div>

        <div className="flex gap-2 pt-2">
          <button className="rounded bg-[#843a17] px-6 py-2.5 text-xs font-semibold text-[#c9ab9d]">
            Awesome
          </button>
          <button className="rounded bg-[#843a17] px-6 py-2.5 text-xs font-semibold text-[#c9ab9d]">
            Prepare
          </button>
        </div>
      </div>

      <span className="text-sm font-semibold text-neutral-400">
        Recent Breakdowns
      </span>
    </div>
  );
};
