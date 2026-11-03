import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Smoke-test card: a static reproduction of the "UI magician Agent" Figma
 * frame. Deliberately self-contained — no props, no state, no interaction —
 * and intentionally off the design-system token set, because the frame's dark
 * palette has no role in this repo's themes.
 */
const fieldInputClass =
  "mt-3 w-full rounded border border-[#5A5A5A] bg-transparent px-3 py-5 text-sm text-[#8A8A8A] placeholder:text-[#8A8A8A]";

const fieldLabelClass = "flex items-center gap-2 text-sm text-[#C9C9C9]";

const actionButtonClass =
  "flex-1 cursor-pointer rounded-lg bg-[#A0431E] px-6 py-5 text-sm text-[#B9B9B9]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1B1B1B] p-10 font-primary text-[#F5F5F5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
        <RiSettings3Line aria-hidden size={20} />
      </div>

      <div className="mt-6 flex items-center gap-2 text-[#9E9E9E]">
        <RiArrowUpSLine aria-hidden size={20} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      <section className="mt-36">
        <div className="flex items-center gap-2">
          <RiArrowUpSLine aria-hidden size={20} />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <div className="mt-10">
          <div className={fieldLabelClass}>
            <label htmlFor="personal-access-token">
              Personal Access Token
            </label>
            <RiInformationLine aria-hidden size={16} />
          </div>
          <input
            id="personal-access-token"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxxx"
            className={fieldInputClass}
          />
        </div>

        <div className="mt-10">
          <div className={fieldLabelClass}>
            <label htmlFor="design-url">Design URL</label>
            <RiInformationLine aria-hidden size={16} />
          </div>
          <input
            id="design-url"
            readOnly
            placeholder="https://www.figma.com/file/"
            className={fieldInputClass}
          />
        </div>

        <div className="mt-12 flex gap-6">
          <button type="button" className={actionButtonClass}>
            Awesome
          </button>
          <button type="button" className={actionButtonClass}>
            Prepare
          </button>
        </div>
      </section>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
