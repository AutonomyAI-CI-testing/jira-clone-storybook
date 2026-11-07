import cx from "classix";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";

const fieldBaseClass =
  "w-full rounded-none border-border-bold bg-elevation-surface-raised px-[19px] text-font-subtlest placeholder:text-font-subtlest";

const actionButtonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-font-subtle";

const FieldLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-[11.5px] text-font-subtle">{children}</span>
    <IoInformationCircleOutline
      size={15}
      aria-hidden="true"
      className="shrink-0 text-font-subtlest"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface font-primary text-font"
  >
    <div className="h-[9px] w-full bg-black/40" />

    <div className="px-5 pb-[62px]">
      <div className="mt-[11px] flex items-start justify-between">
        <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
        <IoSettingsOutline
          size={16}
          aria-hidden="true"
          className="shrink-0 text-font-subtle"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <RiArrowUpSLine
          size={14}
          aria-hidden="true"
          className="shrink-0 text-font-subtlest"
        />
        <span className="text-[11.5px] text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <RiArrowUpSLine
          size={16}
          aria-hidden="true"
          className="shrink-0 text-font"
        />
        <h3 className="font-primary-bold text-xs">Add New Design</h3>
      </div>

      <div className="mt-[28px]">
        <FieldLabel>Personal Access Token</FieldLabel>
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          fieldBaseClass,
          "mt-[12px] h-[36px] border text-[11.5px]"
        )}
      />

      <div className="mt-[11px]">
        <FieldLabel>Design URL</FieldLabel>
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={cx(
          fieldBaseClass,
          "mt-[11px] h-[37px] border-2 text-[10.5px]"
        )}
      />

      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <h3 className="mt-[47px] font-primary-bold text-xs">Recent Breakdowns</h3>
    </div>
  </div>
);
