import cx from "classix";
import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const fieldBoxClass = "flex w-[211px] items-center bg-background-input px-5";

const iconRowClass = "flex items-center gap-2";

function FieldLabel({ children }: { children: string }) {
  return (
    <span className="flex items-center gap-3 text-2xs text-font-subtle">
      {children}
      <MdInfoOutline size={15} className="text-icon" aria-hidden="true" />
    </span>
  );
}

function CardButton({ children }: { children: string }) {
  return (
    <button
      type="button"
      className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-font-subtle"
    >
      {children}
    </button>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="dark w-[254px] bg-elevation-surface pb-[50px] font-primary-bold text-font"
    >
      <div className="h-[9px] w-full bg-black" />

      <div className="px-5 pt-5">
        <div className="flex items-start justify-between">
          <h1 className="text-xs">UI magician Agent</h1>
          <MdSettings size={16} className="text-icon" aria-hidden="true" />
        </div>

        <div className={cx(iconRowClass, "mt-[18px]")}>
          <MdKeyboardArrowUp
            size={12}
            className="text-icon"
            aria-hidden="true"
          />
          <p className="text-2xs text-font-subtlest">
            From entire frame to a singl...
          </p>
        </div>

        <h2 className={cx(iconRowClass, "mt-[77px] text-xs")}>
          <MdKeyboardArrowUp
            size={12}
            className="text-icon"
            aria-hidden="true"
          />
          Add New Design
        </h2>

        <div className="mt-7">
          <FieldLabel>Personal Access Token</FieldLabel>
          <div
            className={cx(
              fieldBoxClass,
              "mt-3 h-[36px] border border-border-bold"
            )}
          >
            <p className="text-2xs text-font-subtlest">
              figd_xxxxxxxxxxxxxxxxxx
            </p>
          </div>
        </div>

        <div className="mt-3">
          <FieldLabel>Design URL</FieldLabel>
          <div
            className={cx(
              fieldBoxClass,
              "mt-3 h-[37px] border-2 border-border-bold"
            )}
          >
            <p className="text-2xs text-font-subtlest">
              https://www.figma.com/file/:
            </p>
          </div>
        </div>

        <div className="ml-6 mt-[22px] flex gap-[17px]">
          <CardButton>Awesome</CardButton>
          <CardButton>Prepare</CardButton>
        </div>

        <h2 className="mt-[46px] text-xs">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
