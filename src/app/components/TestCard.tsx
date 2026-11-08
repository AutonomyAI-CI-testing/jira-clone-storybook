import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const fieldClass =
  "mt-3 flex w-[211px] items-center bg-[var(--DarkNeutral200)] px-4 text-2xs text-[color:var(--Neutral700)]";
const actionClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[color:var(--Neutral600)]";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black pb-[52px] font-primary">
    <div className="flex items-center justify-between px-5 pt-5">
      <span className="text-xs text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <HiOutlineCog size={16} className="text-[color:var(--Neutral400)]" />
    </div>

    <div className="mt-4 flex items-center gap-2 px-5">
      <HiChevronUp
        size={12}
        className="shrink-0 text-[color:var(--Neutral500)]"
      />
      <span className="text-2xs text-[color:var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[84px] flex items-center gap-2 px-5">
      <HiChevronUp
        size={14}
        className="shrink-0 text-[color:var(--Neutral400)]"
      />
      <span className="text-xs text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 px-5">
      <div className="flex items-center gap-2">
        <span className="text-2xs text-[color:var(--DarkNeutral800)]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <div
        className={`${fieldClass} h-[36px] border border-[color:var(--DarkNeutral800)]`}
      >
        <span>figd_xxxxxxxxxxxxxxxxxx</span>
      </div>
    </div>

    <div className="mt-3 px-5">
      <div className="flex items-center gap-2">
        <span className="text-2xs text-[color:var(--DarkNeutral800)]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <div
        className={`${fieldClass} h-[37px] border-2 border-[color:var(--Neutral500)]`}
      >
        <span>https://www.figma.com/file/:</span>
      </div>
    </div>

    <div className="mt-6 flex justify-end gap-4 px-5">
      <div className={actionClass}>Awesome</div>
      <div className={actionClass}>Prepare</div>
    </div>

    <div className="mt-12 px-5 text-xs text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </div>
  </div>
);
