import { useState } from "react";
import { FiSettings, FiChevronUp, FiChevronDown } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);

  return (
    <div
      id="testElem"
      className="w-[254px] rounded-md bg-[#161a1d] p-5 font-primary text-font-inverse"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-sm text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={18} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible info row */}
      <button
        type="button"
        onClick={() => setIsInfoOpen((prev) => !prev)}
        className="mt-4 flex w-full items-center gap-2 text-left"
      >
        {isInfoOpen ? (
          <FiChevronUp size={14} className="text-[#8b9291]" />
        ) : (
          <FiChevronDown size={14} className="text-[#8b9291]" />
        )}
        <span className="text-xs text-[#8b9291]">
          From entire frame to a single...
        </span>
      </button>
      {isInfoOpen && (
        <p className="mt-2 pl-5 text-xs text-[#8b9291]">
          Break down a whole frame into a single, ready-to-build component.
        </p>
      )}

      {/* Add New Design section */}
      <button
        type="button"
        onClick={() => setIsAddDesignOpen((prev) => !prev)}
        className="mt-6 flex w-full items-center gap-2 text-left"
      >
        {isAddDesignOpen ? (
          <FiChevronUp size={16} className="text-[#b2b2b1]" />
        ) : (
          <FiChevronDown size={16} className="text-[#b2b2b1]" />
        )}
        <span className="font-primary-bold text-sm text-[#b2b2b1]">
          Add New Design
        </span>
      </button>

      {isAddDesignOpen && (
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#a4a4a3]">
              Personal Access Token
            </label>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              readOnly
              className="h-10 rounded border border-[#929291] bg-[#272822] px-3 text-xs text-[#737470] placeholder:text-[#737470]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#a3a3a2]">Design URL</label>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              readOnly
              className="h-10 rounded border-2 border-[#a5adad] bg-[#272822] px-3 text-xs text-[#71726e] placeholder:text-[#71726e]"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="h-9 flex-1 rounded bg-[#843a17] text-xs font-primary-bold text-[#8c8078]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="h-9 flex-1 rounded bg-[#843a17] text-xs font-primary-bold text-[#8c8078]"
            >
              Prepare
            </button>
          </div>
        </div>
      )}

      {/* Recent Breakdowns heading */}
      <div className="mt-8">
        <span className="font-primary-bold text-sm text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
