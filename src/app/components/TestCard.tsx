import { HiOutlineCog, HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[280px] flex-col gap-y-5 rounded-lg bg-neutral-900 p-5 text-neutral-300"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-neutral-300">
          UI magician Agent
        </span>
        <HiOutlineCog className="h-4 w-4 text-neutral-400" />
      </div>

      <div className="flex items-center gap-2">
        <HiChevronUp className="h-3 w-3 text-neutral-500" />
        <span className="text-xs text-neutral-500">
          From entire frame to a single...
        </span>
      </div>

      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-2">
          <HiChevronUp className="h-3 w-3 text-neutral-300" />
          <span className="text-sm font-semibold text-neutral-300">
            Add New Design
          </span>
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-neutral-400">
              Personal Access Token
            </span>
            <HiOutlineInformationCircle className="h-3 w-3 text-neutral-500" />
          </div>
          <input
            disabled
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="rounded border border-neutral-600 bg-neutral-800 px-3 py-2 text-xs text-neutral-500"
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-neutral-400">
              Design URL
            </span>
            <HiOutlineInformationCircle className="h-3 w-3 text-neutral-500" />
          </div>
          <input
            disabled
            placeholder="https://www.figma.com/file/:"
            className="rounded border border-neutral-600 bg-neutral-800 px-3 py-2 text-xs text-neutral-500"
          />
        </div>

        <div className="flex gap-3">
          <button
            disabled
            className="flex-1 rounded bg-orange-800 px-4 py-2 text-xs font-semibold text-orange-200"
          >
            Awesome
          </button>
          <button
            disabled
            className="flex-1 rounded bg-orange-800 px-4 py-2 text-xs font-semibold text-orange-200"
          >
            Prepare
          </button>
        </div>
      </div>

      <span className="text-sm font-semibold text-neutral-300">
        Recent Breakdowns
      </span>
    </div>
  );
};
