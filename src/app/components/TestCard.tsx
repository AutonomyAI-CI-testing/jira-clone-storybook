import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_CLASS =
  "flex items-center border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] px-[19px] text-2xs font-primary-bold text-[color:var(--DarkNeutral600)]";

const BUTTON_CLASS =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--DarkNeutral700)]";

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
        UI magician Agent
      </span>
      <IoSettingsOutline
        size={16}
        className="text-[color:var(--DarkNeutral900)]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <IoChevronUp
        size={10}
        className="shrink-0 text-[color:var(--DarkNeutral700)]"
      />
      <span className="min-w-0 truncate font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-3">
      <IoChevronUp
        size={12}
        className="shrink-0 text-[color:var(--DarkNeutral900)]"
      />
      <span className="font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        Personal Access Token
      </span>
      <IoInformationCircleOutline
        size={15}
        className="text-[color:var(--DarkNeutral800)]"
      />
    </div>

    <div className={cx(FIELD_CLASS, "mt-3 h-[36px] border")}>
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    <div className="mt-3 flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        Design URL
      </span>
      <IoInformationCircleOutline
        size={15}
        className="text-[color:var(--DarkNeutral800)]"
      />
    </div>

    <div className={cx(FIELD_CLASS, "mt-3 h-[37px] border-2")}>
      https://www.figma.com/file/:
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      {BUTTON_LABELS.map((label) => (
        <div key={label} className={BUTTON_CLASS}>
          {label}
        </div>
      ))}
    </div>

    <div className="mt-[47px] font-primary-bold text-xs text-[color:var(--DarkNeutral900)]">
      Recent Breakdowns
    </div>
  </div>
);
