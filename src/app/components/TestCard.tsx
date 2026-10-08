import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a self-contained reproduction of the attached Figma
 * panel. No props, no state, no behaviour — inputs and buttons are
 * presentational only. Colors are approximated (this repo's Tailwind config
 * replaces the default palette, so arbitrary values are used deliberately).
 */
export default function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col bg-[#1b1b1b] px-6 py-8 font-primary text-[#c9c9c9]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-lg text-[#e6e6e6]">
          UI magician Agent
        </span>
        <FiSettings aria-hidden className="h-6 w-6 text-[#e6e6e6]" />
      </div>

      <div className="mt-8 flex items-center gap-3">
        <FiChevronUp aria-hidden className="h-5 w-5 shrink-0" />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-20" />

      <div className="flex items-center gap-3">
        <FiChevronUp aria-hidden className="h-6 w-6 shrink-0" />
        <h2 className="font-primary-black text-2xl text-[#e6e6e6]">
          Add New Design
        </h2>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2">
          <label htmlFor="personal-access-token" className="text-base">
            Personal Access Token
          </label>
          <FiInfo aria-hidden className="h-4 w-4" />
        </div>
        <input
          id="personal-access-token"
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded border border-[#4d4d4d] bg-[#262626] px-3 py-3 text-base text-[#8c8c8c] outline-none placeholder:text-[#8c8c8c]"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-2">
          <label htmlFor="design-url" className="text-base">
            Design URL
          </label>
          <FiInfo aria-hidden className="h-4 w-4" />
        </div>
        <input
          id="design-url"
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="mt-2 w-full rounded border border-[#4d4d4d] bg-[#262626] px-3 py-3 text-base text-[#8c8c8c] outline-none placeholder:text-[#8c8c8c]"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="flex-1 rounded bg-[#a2451e] px-4 py-3 font-primary-bold text-base text-[#e6ded9]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#a2451e] px-4 py-3 font-primary-bold text-base text-[#e6ded9]"
        >
          Prepare
        </button>
      </div>

      <div className="h-16" />

      <h2 className="font-primary-black text-2xl text-[#e6e6e6]">
        Recent Breakdowns
      </h2>
    </div>
  );
}

export { TestCard };
