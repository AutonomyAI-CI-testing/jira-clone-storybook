import { HiChevronUp } from "react-icons/hi";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const BUTTON_CLASS =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs leading-[14px] font-primary-bold text-[color:var(--DarkNeutral600)]";

const FIELD_CLASS =
  "flex w-full items-center bg-[var(--DarkNeutral200)] text-2xs leading-[14px] font-primary-bold text-[color:var(--DarkNeutral600)]";

const LABEL_CLASS =
  "text-2xs leading-[14px] font-primary-bold text-[color:var(--DarkNeutral800)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral100)] font-primary"
  >
    <div className="h-[9px] w-full bg-[var(--DarkNeutral0)]" />

    <div className="px-5">
      <div className="mt-[11px] flex items-center justify-between">
        <span className="font-primary-bold text-xs leading-4 text-[color:var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-[8px]">
        <HiChevronUp size={10} className="text-[color:var(--DarkNeutral700)]" />
        <span className="font-primary-bold text-2xs leading-[14px] text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[8px]">
        <HiChevronUp size={14} className="text-[color:var(--DarkNeutral900)]" />
        <span className="font-primary-bold text-xs leading-4 text-[color:var(--DarkNeutral900)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-4">
        <span className={LABEL_CLASS}>Personal Access Token</span>
        <IoInformationCircleOutline
          size={15}
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>

      <div
        className={`${FIELD_CLASS} mt-[12px] h-[36px] border border-[color:var(--DarkNeutral800)] px-[19px]`}
      >
        <span>figd_xxxxxxxxxxxxxxxxxx</span>
      </div>

      <div className="mt-[11px] flex items-center gap-4">
        <span className={LABEL_CLASS}>Design URL</span>
        <IoInformationCircleOutline
          size={15}
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>

      <div
        className={`${FIELD_CLASS} mt-[11px] h-[37px] border-2 border-[color:var(--DarkNeutral700)] px-[18px]`}
      >
        <span>https://www.figma.com/file/:</span>
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        {BUTTON_LABELS.map((label) => (
          <button key={label} type="button" className={BUTTON_CLASS}>
            {label}
          </button>
        ))}
      </div>

      <div className="mt-[46px] font-primary-bold text-xs leading-4 text-[color:var(--DarkNeutral900)]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
