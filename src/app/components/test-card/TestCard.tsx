import { useState } from "react";
import { IoSettingsOutline, IoChevronUpOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  const [isInfoOpen, setIsInfoOpen] = useState(true);
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);

  return (
    <div
      id="testElem"
      className="w-[320px] rounded bg-[#0d0d0b] p-5 font-sans text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <IoSettingsOutline className="h-4 w-4 text-[#b5b5b5]" />
      </div>

      <button
        type="button"
        onClick={() => setIsInfoOpen((prev) => !prev)}
        className="mt-3 flex items-center gap-2 text-[11.5px] font-semibold text-[#8b9291]"
      >
        <IoChevronUpOutline
          className={`h-3 w-3 transition-transform ${
            isInfoOpen ? "" : "rotate-180"
          }`}
        />
        From entire frame to a single...
      </button>

      <div className="mt-6">
        <button
          type="button"
          onClick={() => setIsAddDesignOpen((prev) => !prev)}
          className="flex items-center gap-2 text-[13.5px] font-semibold text-[#b2b2b1]"
        >
          <IoChevronUpOutline
            className={`h-3 w-3 transition-transform ${
              isAddDesignOpen ? "" : "rotate-180"
            }`}
          />
          Add New Design
        </button>

        {isAddDesignOpen && (
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
                Personal Access Token
              </label>
              <input
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="mt-2 w-full rounded border border-[#a5adad] bg-[#272822] p-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
              />
            </div>

            <div>
              <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
                Design URL
              </label>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="mt-2 w-full rounded border-2 border-[#929291] bg-[#272822] p-2 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] p-2 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Awesome
              </button>
              <button
                type="button"
                className="flex-1 rounded bg-[#843a17] p-2 text-[11.5px] font-semibold text-[#8c8078]"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      <h3 className="mt-8 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
