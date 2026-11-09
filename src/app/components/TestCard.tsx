import { AiOutlineUp } from "react-icons/ai";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = () => {
  const inkClass = "text-[color:var(--DarkNeutral1000)]";
  const headingClass = "font-primary-bold text-[color:var(--DarkNeutral1100)]";
  const fieldLabelClass = "flex items-center gap-6 text-[15px]";
  const inputClass =
    "mt-3 w-full rounded border border-[color:var(--Neutral500)] bg-[var(--DarkNeutral250)] px-4 py-3 text-center text-[15px] outline-none placeholder:text-[color:var(--DarkNeutral700)]";
  const buttonClass =
    "rounded-lg bg-[var(--Orange800)] px-8 py-3 text-[17px] text-[color:var(--Orange300)]";

  return (
    <div
      id="testElem"
      className={`flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 pb-24 pt-10 font-primary text-[15px] ${inkClass}`}
    >
      <div className="flex items-center justify-between">
        <h1 className={`text-xl ${headingClass}`}>UI magician Agent</h1>
        <IoSettingsOutline size={26} aria-hidden="true" />
      </div>

      <div className="mt-7 flex items-center gap-4">
        <AiOutlineUp size={20} className="shrink-0" aria-hidden="true" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-28 flex items-center gap-3">
        <AiOutlineUp size={26} className="shrink-0" aria-hidden="true" />
        <h2 className={`text-[22px] ${headingClass}`}>Add New Design</h2>
      </div>

      <div className="mt-10">
        <div className={fieldLabelClass}>
          <span>Personal Access Token</span>
          <HiOutlineInformationCircle
            size={19}
            className="shrink-0"
            aria-hidden="true"
          />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div className="mt-6">
        <div className={fieldLabelClass}>
          <span>Design URL</span>
          <HiOutlineInformationCircle
            size={19}
            className="shrink-0"
            aria-hidden="true"
          />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </div>

      <div className="mt-7 flex gap-4 pl-12">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className={`mt-28 text-[22px] ${headingClass}`}>Recent Breakdowns</h2>
    </div>
  );
};
