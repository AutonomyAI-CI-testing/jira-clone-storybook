import { BiChevronUp } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * Smoke-test component reproducing the "UI magician Agent" settings panel from
 * the Figma frame. Self-contained: no props, no state, no handlers.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-20 rounded-lg bg-[#1c1a19] px-10 py-10 font-primary text-[#d4d4d4]"
  >
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-lg text-[#e3e0dd]">
          UI magician Agent
        </h2>
        <button
          type="button"
          aria-label="Open settings"
          className="text-[#d4d4d4]"
        >
          <IoSettingsOutline size={22} />
        </button>
      </div>

      <div className="flex items-center gap-2 text-[#a3a3a3]">
        <BiChevronUp size={24} className="shrink-0" />
        <span className="truncate text-sm">
          From entire frame to a singl...
        </span>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <BiChevronUp size={24} className="shrink-0 text-[#e3e0dd]" />
        <h3 className="font-primary-black text-base text-[#e3e0dd]">
          Add New Design
        </h3>
      </div>

      <label className="flex flex-col gap-3">
        <span className="flex items-center gap-2 text-sm">
          Personal Access Token
          <HiInformationCircle
            size={18}
            aria-hidden="true"
            className="text-[#a3a3a3]"
          />
        </span>
        <input
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="w-full rounded-lg border border-[#6b6b6b] bg-[#2a2725] px-4 py-5 text-sm text-[#d4d4d4] placeholder:text-[#a3a3a3]"
        />
      </label>

      <label className="flex flex-col gap-3">
        <span className="flex items-center gap-2 text-sm">
          Design URL
          <HiInformationCircle
            size={18}
            aria-hidden="true"
            className="text-[#a3a3a3]"
          />
        </span>
        <input
          placeholder="https://www.figma.com/file/"
          className="w-full rounded-lg border border-[#6b6b6b] bg-[#2a2725] px-4 py-5 text-sm text-[#d4d4d4] placeholder:text-[#a3a3a3]"
        />
      </label>

      <div className="flex gap-8">
        <button
          type="button"
          className="rounded-lg bg-[#a63d16] px-10 py-5 text-base text-[#d4d4d4]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[#a63d16] px-10 py-5 text-base text-[#d4d4d4]"
        >
          Prepare
        </button>
      </div>
    </div>

    <h3 className="font-primary-black text-base text-[#e3e0dd]">
      Recent Breakdowns
    </h3>
  </div>
);
