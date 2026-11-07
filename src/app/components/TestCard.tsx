import { HiChevronUp } from "react-icons/hi";
import { IoInformationCircleOutline, IoCogOutline } from "react-icons/io5";

// Repeated class strings are hoisted (the repo's own idiom — see header.tsx's
// iconBaseClass) so the two fields and the two buttons stay identical without
// copy-pasting the same utilities twice.
const labelClass =
  "text-[11.5px] leading-[14px] text-[color:var(--Neutral400)]";
const fieldClass =
  "w-full bg-[var(--DarkNeutral200)] px-[19px] text-[color:var(--Neutral600)] placeholder:text-[color:var(--Neutral600)]";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-[color:var(--Neutral600)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary text-[13.5px] leading-[16px] text-[color:var(--Neutral400)]"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold">UI magician Agent</span>
        <IoCogOutline
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp
          size={10}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--Neutral500)]"
        />
        <span className="text-[11.5px] leading-[14px] text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <HiChevronUp
          size={14}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--Neutral400)]"
        />
        <span className="font-primary-bold">Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-2">
        <span className={labelClass}>Personal Access Token</span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--Neutral400)]"
        />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`mt-3 h-[36px] border border-[color:var(--DarkNeutral800)] text-[11.5px] ${fieldClass}`}
      />

      <div className="mt-[11px] flex items-center gap-2">
        <span className={labelClass}>Design URL</span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--Neutral400)]"
        />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={`mt-[11px] h-[37px] border-2 border-[color:var(--Neutral500)] text-[10.5px] ${fieldClass}`}
      />

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] font-primary-bold text-[13.5px] text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
