
import { cx } from "classix";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronUp } from "react-icons/bi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      className={cx(
        "w-full max-w-[440px]",
        "bg-[#1c1c1c]",
        "p-6",
        "flex flex-col gap-y-7"
      )}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h1 className="text-[#e8e8e8] text-2xl font-bold">UI magician Agent</h1>
        <IoSettingsOutline className="text-[#e8e8e8] text-2xl" />
      </div>

      {/* Hint Row */}
      <div className="flex items-center gap-x-2 text-[#9fa097]">
        <BiChevronUp className="text-xl" />
        <p className="text-base">From entire frame to a singl...</p>
      </div>

      {/* Spacer */}
      <div className="h-2" />

      {/* Add New Design Section */}
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-3 text-[#e8e8e8]">
          <BiChevronUp className="text-2xl" />
          <h2 className="text-xl font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token Input */}
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-2">
            <label htmlFor="pat" className="text-[#9fa097] text-lg">
              Personal Access Token
            </label>
            <AiOutlineInfoCircle className="text-[#9fa097] text-xl" />
          </div>
          <input
            type="text"
            id="pat"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className={cx(
              "bg-transparent",
              "border border-[#444]",
              "rounded-md",
              "p-4",
              "text-[#cccccc] placeholder-[#666]",
              "focus:outline-none focus:ring-1 focus:ring-[#b5451b]"
            )}
          />
        </div>

        {/* Design URL Input */}
        <div className="flex flex-col gap-y-3">
          <div className="flex items-center gap-x-2">
            <label htmlFor="design-url" className="text-[#9fa097] text-lg">
              Design URL
            </label>
            <AiOutlineInfoCircle className="text-[#9fa097] text-xl" />
          </div>
          <input
            type="text"
            id="design-url"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className={cx(
              "bg-transparent",
              "border border-[#444]",
              "rounded-md",
              "p-4",
              "text-[#cccccc] placeholder-[#666]",
              "focus:outline-none focus:ring-1 focus:ring-[#b5451b]"
            )}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-x-6 pt-4">
          <button
            type="button"
            className={cx(
              "flex-1",
              "bg-[#8b3d1b] hover:bg-[#a0451f] active:bg-[#70351a]",
              "text-[#9fa097] font-medium",
              "rounded-md",
              "px-6 py-4",
              "text-lg"
            )}
          >
            Awesome
          </button>
          <button
            type="button"
            className={cx(
              "flex-1",
              "bg-[#8b3d1b] hover:bg-[#a0451f] active:bg-[#70351a]",
              "text-[#9fa097] font-medium",
              "rounded-md",
              "px-6 py-4",
              "text-lg"
            )}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Recent Breakdowns Heading */}
      <h2 className="text-[#9fa097] text-xl font-bold">Recent Breakdowns</h2>
    </div>
  );
};
