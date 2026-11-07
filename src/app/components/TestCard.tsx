import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const fieldClass =
  "h-[36px] w-[211px] bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-[11.5px] text-[var(--Neutral700)] outline-none placeholder:text-[var(--Neutral700)]";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[var(--Neutral400)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[var(--DarkNeutral0)] px-5 py-5"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] text-[var(--Neutral400)]">
          UI magician Agent
        </span>
        <MdSettings
          size={16}
          className="text-[var(--Neutral400)]"
          aria-hidden
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <MdKeyboardArrowUp
          size={14}
          className="shrink-0 text-[var(--Neutral500)]"
          aria-hidden
        />
        <span className="font-primary-bold text-[11.5px] text-[var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-2">
        <MdKeyboardArrowUp
          size={16}
          className="shrink-0 text-[var(--Neutral400)]"
          aria-hidden
        />
        <span className="font-primary-bold text-[13.5px] text-[var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-11 flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[var(--Neutral400)]">
          Personal Access Token
        </span>
        <MdInfoOutline
          size={15}
          className="shrink-0 text-[var(--Neutral400)]"
          aria-hidden
        />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={`mt-3 border border-[color:var(--DarkNeutral700)] ${fieldClass}`}
      />

      <div className="mt-3 flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[var(--Neutral400)]">
          Design URL
        </span>
        <MdInfoOutline
          size={15}
          className="shrink-0 text-[var(--Neutral400)]"
          aria-hidden
        />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={`mt-3 border-2 border-[color:var(--DarkNeutral700)] text-[10.5px] ${fieldClass}`}
      />

      <div className="ml-6 mt-6 flex gap-4">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <span className="mt-11 font-primary-bold text-[13.5px] text-[var(--Neutral400)]">
        Recent Breakdowns
      </span>
    </div>
  );
};
