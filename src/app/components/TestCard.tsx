import { IoSettingsOutline } from "react-icons/io5";
import { LuChevronUp } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard component - A UI control panel for a Figma design importer agent.
 * Displays agent status, configuration inputs for design URL and access token,
 * and action buttons for initiating design processing.
 *
 * Uses a dark theme with custom colors to match the design system shown in the reference.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="mx-auto flex max-w-md flex-col space-y-4 rounded-lg bg-[#2b2b2b] p-4 text-white shadow-lg"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <IoSettingsOutline className="text-xl text-[#b5b5b5]" />
      </div>
      <div className="flex items-center space-x-2">
        <LuChevronUp className="text-[#8b9291]" />
        <p className="text-sm text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>
      <div className="my-4 border-t border-[#444]" />
      <div className="flex items-center space-x-2">
        <LuChevronUp className="text-[#b0b0b0]" />
        <h3 className="text-lg font-semibold text-[#b0b0b0]">Add New Design</h3>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="token"
          className="flex items-center space-x-1 text-sm text-[#a4a4a3]"
        >
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" />
        </label>
        <input
          type="text"
          id="token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded-md border border-[#444] bg-[#1e1e1e] p-2 text-sm text-[#737470] focus:border-[#b5571e] focus:outline-none"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="design-url"
          className="flex items-center space-x-1 text-sm text-[#a4a4a3]"
        >
          <span>Design URL</span>
          <AiOutlineInfoCircle className="text-[#a4a4a3]" />
        </label>
        <input
          type="text"
          id="design-url"
          placeholder="https://www.figma.com/file/"
          className="w-full rounded-md border border-[#444] bg-[#1e1e1e] p-2 text-sm text-[#737470] focus:border-[#b5571e] focus:outline-none"
        />
      </div>
      <div className="mt-4 flex justify-between space-x-3">
        <button className="flex-1 rounded-lg bg-[#b5571e] p-2 text-sm font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b5571e] p-2 text-sm font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
}
