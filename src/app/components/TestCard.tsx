import { useId } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASS =
  "mt-4 h-[70px] w-full rounded-sm border border-border-bold bg-background-input px-6 font-primary text-xl text-font-subtlest placeholder:text-font-subtlest";

const BUTTON_CLASS =
  "h-[62px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral1000)]";

export const TestCard = () => {
  const tokenFieldId = useId();
  const urlFieldId = useId();

  return (
    <div
      id="testElem"
      className="flex w-[508px] max-w-full flex-col bg-elevation-surface px-10 py-12"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-3xl text-font">
          UI magician Agent
        </h1>
        <FiSettings size={28} aria-hidden className="shrink-0 text-font" />
      </div>

      <div className="mt-6 flex items-center gap-3">
        <FiChevronUp
          size={22}
          aria-hidden
          className="shrink-0 text-font-subtlest"
        />
        <span className="truncate font-primary text-lg text-font-subtlest">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-44 flex items-center gap-3">
        <FiChevronUp size={24} aria-hidden className="shrink-0 text-font" />
        <h2 className="font-primary-bold text-2xl text-font">Add New Design</h2>
      </div>

      <div className="mt-12 flex items-center gap-3">
        <label
          htmlFor={tokenFieldId}
          className="font-primary-bold text-xl text-font"
        >
          Personal Access Token
        </label>
        <FiInfo size={22} aria-hidden className="shrink-0 text-font" />
      </div>
      <input
        id={tokenFieldId}
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASS}
      />

      <div className="mt-6 flex items-center gap-3">
        <label htmlFor={urlFieldId} className="font-primary-bold text-xl text-font">
          Design URL
        </label>
        <FiInfo size={22} aria-hidden className="shrink-0 text-font" />
      </div>
      <input
        id={urlFieldId}
        readOnly
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASS}
      />

      <div className="mt-12 flex gap-9 pl-12">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h2 className="mt-20 font-primary-bold text-3xl text-font">
        Recent Breakdowns
      </h2>
    </div>
  );
};
