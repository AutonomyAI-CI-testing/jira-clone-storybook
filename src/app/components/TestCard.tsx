import { FiSettings, FiInfo } from "react-icons/fi";
import { IoChevronUp } from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex max-w-sm flex-col gap-4 rounded-md bg-black p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-font-inverse">
          UI magician Agent
        </span>
        <FiSettings className="h-4 w-4 text-icon-inverse" />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2">
        <IoChevronUp className="h-3 w-3 text-icon-inverse" />
        <span className="text-xs font-semibold text-icon-inverse">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <IoChevronUp className="h-3 w-3 text-icon-inverse" />
          <span className="text-sm font-semibold text-font-inverse">
            Add New Design
          </span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-font-inverse">
              Personal Access Token
            </span>
            <FiInfo className="h-3 w-3 text-icon-inverse" />
          </div>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="rounded border border-border-bold bg-transparent px-2 py-2 text-xs text-font-inverse outline-none placeholder:text-font-inverse"
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-font-inverse">
              Design URL
            </span>
            <FiInfo className="h-3 w-3 text-icon-inverse" />
          </div>
          <input
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="rounded border-2 border-border-bold bg-transparent px-2 py-2 text-xs text-font-inverse outline-none placeholder:text-font-inverse"
          />
        </div>

        <div className="flex gap-3 pt-1">
          <button
            type="button"
            className="flex-1 rounded bg-background-danger-bold px-4 py-2 text-xs font-semibold text-font-inverse"
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded bg-background-danger-bold px-4 py-2 text-xs font-semibold text-font-inverse"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns section */}
      <div className="flex flex-col gap-1 pt-2">
        <span className="text-sm font-semibold text-font-inverse">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
