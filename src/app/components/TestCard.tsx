import { AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";
import { MdSettings } from "react-icons/md";

const labelClass = "flex items-center gap-2 text-base";
const inputClass =
  "mt-3 w-full rounded border border-[color:var(--DarkNeutral600)] bg-transparent px-4 py-4 text-base placeholder:text-[var(--DarkNeutral700)]";
const buttonClass =
  "w-[170px] rounded-lg bg-[var(--Orange800)] py-5 text-base text-[var(--Neutral0)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-10 font-primary text-[var(--Neutral0)]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-black text-xl">UI magician Agent</h2>
        <MdSettings
          size={24}
          aria-hidden="true"
          className="shrink-0 text-[var(--DarkNeutral800)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <HiChevronUp size={20} aria-hidden="true" className="shrink-0" />
        <span className="truncate text-base text-[var(--DarkNeutral800)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-32 flex items-center gap-3">
        <HiChevronUp size={24} aria-hidden="true" className="shrink-0" />
        <h2 className="font-primary-black text-2xl">Add New Design</h2>
      </div>

      <div className="mt-10">
        <label className={labelClass} htmlFor="access-token">
          Personal Access Token
          <AiOutlineInfoCircle
            size={20}
            aria-hidden="true"
            className="shrink-0 text-[var(--DarkNeutral900)]"
          />
        </label>
        <input
          id="access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div className="mt-6">
        <label className={labelClass} htmlFor="design-url">
          Design URL
          <AiOutlineInfoCircle
            size={20}
            aria-hidden="true"
            className="shrink-0 text-[var(--DarkNeutral900)]"
          />
        </label>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </div>

      <div className="mt-10 flex justify-end gap-8">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  );
};
