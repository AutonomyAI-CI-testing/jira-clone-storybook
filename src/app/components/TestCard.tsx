import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

const inputClass =
  "w-full rounded-md border border-[color:var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-3 py-3 text-base text-[color:var(--DarkNeutral900)] outline-none placeholder:text-[color:var(--DarkNeutral600)]";

const buttonClass =
  "flex-1 rounded-md bg-[var(--Orange800)] px-4 py-3 text-base text-[color:var(--DarkNeutral1100)]";

const sectionTitleClass =
  "font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col gap-8 rounded-md bg-[var(--DarkNeutral0)] p-5 font-primary text-base text-[color:var(--DarkNeutral900)]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-primary-bold text-lg text-[color:var(--DarkNeutral1100)]">
            UI magician Agent
          </span>
          <AiOutlineSetting
            size={20}
            className="shrink-0 text-[color:var(--DarkNeutral1100)]"
            aria-hidden="true"
          />
        </div>

        <div className="flex items-center gap-2">
          <HiChevronUp size={20} className="shrink-0" aria-hidden="true" />
          <span className="truncate">From entire frame to a singl...</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <HiChevronUp
            size={22}
            className="shrink-0 text-[color:var(--DarkNeutral1100)]"
            aria-hidden="true"
          />
          <span className={sectionTitleClass}>Add New Design</span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>Personal Access Token</span>
            <AiOutlineInfoCircle
              size={16}
              className="shrink-0"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span>Design URL</span>
            <AiOutlineInfoCircle
              size={16}
              className="shrink-0"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/"
            className={inputClass}
          />
        </div>

        <div className="flex gap-4">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className={sectionTitleClass}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
