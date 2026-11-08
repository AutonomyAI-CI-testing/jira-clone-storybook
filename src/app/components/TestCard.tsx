import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark flex min-h-[508px] w-[254px] flex-col bg-elevation-surface px-5 py-5 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs">UI magician Agent</span>
        <IoSettingsOutline size={16} aria-hidden="true" />
      </div>

      <div className="mt-[18px] flex items-center gap-1">
        <IoChevronUp size={12} aria-hidden="true" />
        <span className="text-2xs text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <IoChevronUp size={14} aria-hidden="true" />
        <span className="font-primary-bold text-xs">Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-2">
        <span className="text-2xs text-font-subtle">Personal Access Token</span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="text-font-subtle"
        />
      </div>
      <div className="mt-[10px] flex h-9 items-center border border-border-bold bg-elevation-surface-raised px-2">
        <span className="text-2xs text-font-subtlest">
          figd_xxxxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-2">
        <span className="text-2xs text-font-subtle">Design URL</span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="text-font-subtle"
        />
      </div>
      <div className="mt-[9px] flex h-[37px] items-center border border-border-bold bg-elevation-surface-raised px-2">
        <span className="text-2xs text-font-subtlest">
          https://www.figma.com/file/
        </span>
      </div>

      <div className="mt-[21px] flex justify-center gap-4">
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)]">
          <span className="text-2xs text-[var(--Neutral0)]">Awesome</span>
        </div>
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)]">
          <span className="text-2xs text-[var(--Neutral0)]">Prepare</span>
        </div>
      </div>

      <div className="mt-[48px] font-primary-bold text-xs">
        Recent Breakdowns
      </div>
    </div>
  );
};
