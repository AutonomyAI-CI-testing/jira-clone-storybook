import { IoIosArrowUp } from "react-icons/io";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";

/**
 * Smoke test: a self-contained card reproducing the supplied Figma frame.
 * Approximate by design — spacing, colours and type follow the frame closely,
 * not exactly. Takes no props and holds no state.
 *
 * Colours come from the raw palette steps declared in `src/app/styles/app.css`
 * (theme-independent, so the panel keeps one look under every theme), because
 * the frame's own values have no semantic role here.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[var(--DarkNeutral100)] px-[20px] pb-[62px] pt-[20px] font-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          className="text-[color:var(--Neutral400)]"
          aria-hidden="true"
        />
      </div>

      {/* Collapsed summary line */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <IoIosArrowUp
          size={10}
          className="shrink-0 text-[color:var(--Neutral500)]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-[9px]">
        <IoIosArrowUp
          size={12}
          className="shrink-0 text-[color:var(--Neutral400)]"
          aria-hidden="true"
        />
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[8px]">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral800)]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={15}
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
          aria-hidden="true"
        />
      </div>
      <div className="mt-[12px] flex h-[36px] w-full items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px]">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--Neutral700)]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[8px]">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral800)]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={15}
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
          aria-hidden="true"
        />
      </div>
      <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] px-[19px]">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--Neutral700)]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[23px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--Neutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[14px] text-[color:var(--Neutral600)]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[46px] font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--DarkNeutral800)]">
        Recent Breakdowns
      </div>
    </div>
  );
};
