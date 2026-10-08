import {
  MdKeyboardArrowUp,
  MdOutlineInfo,
  MdOutlineSettings,
} from "react-icons/md";

const fieldClass =
  "mt-4 h-[62px] w-full rounded-sm border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral100)] px-4 text-[20px] text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]";

const labelRowClass = "flex items-center gap-3";

const labelClass =
  "font-primary-bold text-[20px] text-[var(--DarkNeutral1000)]";

const iconClass = "shrink-0 text-[var(--DarkNeutral1000)]";

const actionButtonClass =
  "h-[72px] w-[170px] rounded-md bg-[var(--Red800)] font-primary-bold text-[20px] text-[var(--DarkNeutral900)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral0)] px-9 pb-32 pt-10 font-primary text-[var(--DarkNeutral1000)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[26px] leading-tight">
          UI magician Agent
        </h1>
        <span aria-hidden="true" className={iconClass}>
          <MdOutlineSettings size={26} />
        </span>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <MdKeyboardArrowUp
          size={22}
          aria-hidden="true"
          className="shrink-0 text-[var(--DarkNeutral600)]"
        />
        <span className="text-[20px] text-[var(--DarkNeutral600)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-28 flex items-center gap-2">
        <MdKeyboardArrowUp size={28} aria-hidden="true" className={iconClass} />
        <h2 className="font-primary-bold text-[28px]">Add New Design</h2>
      </div>

      <div className="mt-10">
        <div className={labelRowClass}>
          <label htmlFor="pat-input" className={labelClass}>
            Personal Access Token
          </label>
          <MdOutlineInfo size={22} aria-hidden="true" className={iconClass} />
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={fieldClass}
        />
      </div>

      <div className="mt-7">
        <div className={labelRowClass}>
          <label htmlFor="design-url-input" className={labelClass}>
            Design URL
          </label>
          <MdOutlineInfo size={22} aria-hidden="true" className={iconClass} />
        </div>
        <input
          id="design-url-input"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={fieldClass}
        />
      </div>

      <div className="mt-8 flex gap-6">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-28 font-primary-bold text-[28px]">Recent Breakdowns</h2>
    </div>
  );
};
