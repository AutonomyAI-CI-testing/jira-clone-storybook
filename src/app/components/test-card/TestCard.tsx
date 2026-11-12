import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test card: a static replica of the "UI magician Agent" Figma panel.
 * Self-contained on purpose — no props, no state, no data. Nothing in the app
 * imports it; it exists to prove a Figma frame can be turned into a component
 * that renders.
 *
 * The colours below are off-system (the Figma panel is a dark surface with
 * rust-orange buttons) and are written as Tailwind arbitrary values because the
 * theme replaces the default palettes rather than extending them. See
 * task/PLAN.md.
 */
const labelClass = "flex items-center gap-2 font-primary text-base text-[#d6d6d6]";

const inputClass =
  "h-14 w-full rounded-[2px] border-2 border-[#6f6f6f] bg-transparent px-4 font-primary text-base text-[#d6d6d6] placeholder:text-[#8a8a8a]";

const buttonClass = "h-16 w-[170px] rounded-[2px] bg-[#a34a1c] font-primary text-lg text-[#cfcfcf]";

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[508px] bg-[#1e1e1e] px-11 py-10 font-primary text-[#d6d6d6]">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <FiSettings aria-hidden className="h-6 w-6 text-[#9a9a9a]" />
      </div>

      <div className="mt-10 flex items-center gap-3">
        <FiChevronUp aria-hidden className="h-5 w-5 text-[#9a9a9a]" />
        <span className="truncate font-primary-light text-sm text-[#9a9a9a]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-24 flex items-center gap-3">
        <FiChevronUp aria-hidden className="h-5 w-5 text-[#d6d6d6]" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-16 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <label htmlFor="personal-access-token" className={labelClass}>
            Personal Access Token
            <FiInfo aria-hidden className="h-5 w-5 text-[#d6d6d6]" />
          </label>
          <input
            id="personal-access-token"
            className={inputClass}
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="design-url" className={labelClass}>
            Design URL
            <FiInfo aria-hidden className="h-5 w-5 text-[#d6d6d6]" />
          </label>
          <input id="design-url" className={inputClass} placeholder="https://www.figma.com/file/" />
        </div>
      </div>

      <div className="mt-14 flex gap-8 pl-11">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
