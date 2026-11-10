import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSES =
  "mt-4 h-[74px] w-full rounded border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-[44px] font-primary text-lg text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]";

const BUTTON_CLASSES =
  "h-[78px] w-[175px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[color:var(--DarkNeutral700)]";

const HEADING_CLASSES = "font-primary-bold text-xl text-[color:var(--DarkNeutral1000)]";

const SECTION_ROW_CLASSES = "flex min-w-0 items-center gap-3";

const LABEL_CLASSES = "font-primary text-base text-[color:var(--DarkNeutral900)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-[40px] py-[24px]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl text-[color:var(--DarkNeutral1000)]">
          UI magician Agent
        </h1>
        <FiSettings
          size={26}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--DarkNeutral1000)]"
        />
      </div>

      <div className={`mt-6 ${SECTION_ROW_CLASSES}`}>
        <FiChevronUp
          size={22}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
        />
        <span className="min-w-0 truncate font-primary text-lg text-[color:var(--DarkNeutral800)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-[100px]" aria-hidden="true" />

      <div className={SECTION_ROW_CLASSES}>
        <FiChevronUp
          size={22}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--DarkNeutral1000)]"
        />
        <h2 className={HEADING_CLASSES}>Add New Design</h2>
      </div>

      <div className="mt-8 flex items-center gap-14">
        <span className={LABEL_CLASSES}>Personal Access Token</span>
        <FiInfo
          size={26}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--DarkNeutral900)]"
        />
      </div>
      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASSES}
      />

      <div className="mt-6 flex items-center gap-14">
        <span className={LABEL_CLASSES}>Design URL</span>
        <FiInfo
          size={26}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--DarkNeutral900)]"
        />
      </div>
      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASSES}
      />

      <div className="mt-12 flex items-center gap-9 pl-[44px]">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      <h2 className={`mt-14 ${HEADING_CLASSES}`}>Recent Breakdowns</h2>
    </div>
  );
};
