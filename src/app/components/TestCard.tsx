import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component built from a Figma frame.
 *
 * Self-contained: no props, no state, no event handlers. Visual values are
 * approximate by instruction, so the colours are painted directly rather than
 * through the app's semantic theme tokens.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="mx-auto min-h-[1016px] w-full max-w-[508px] bg-[#141414] px-10 py-10 font-primary text-[#D9D9D9]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#E0E0E0]">
          UI magician Agent
        </h1>
        <FiSettings className="text-2xl text-[#E0E0E0]" aria-hidden />
      </div>

      <div className="mt-6 flex items-center gap-3 text-[#8C8C8C]">
        <FiChevronUp className="text-xl shrink-0" aria-hidden />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <FiChevronUp className="text-2xl shrink-0 text-[#E0E0E0]" aria-hidden />
        <h2 className="font-primary-bold text-xl text-[#E0E0E0]">
          Add New Design
        </h2>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-3">
          <label className="font-primary-bold text-base text-[#D9D9D9]">
            Personal Access Token
          </label>
          <FiInfo className="text-lg shrink-0 text-[#D9D9D9]" aria-hidden />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[52px] w-full rounded-sm border border-[#7A7A7A] bg-transparent px-4 text-base text-[#D9D9D9] outline-none placeholder:text-[#8C8C8C]"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label className="font-primary-bold text-base text-[#D9D9D9]">
            Design URL
          </label>
          <FiInfo className="text-lg shrink-0 text-[#D9D9D9]" aria-hidden />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 h-[52px] w-full rounded-sm border border-[#7A7A7A] bg-transparent px-4 text-base text-[#D9D9D9] outline-none placeholder:text-[#8C8C8C]"
        />
      </div>

      <div className="mt-10 flex gap-8 px-12">
        <button
          type="button"
          className="h-[56px] flex-1 rounded bg-[#A5432A] font-primary-bold text-base text-white/80"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[56px] flex-1 rounded bg-[#A5432A] font-primary-bold text-base text-white/80"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-xl text-[#E0E0E0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
