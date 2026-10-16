import type { ReactNode } from "react";
import cx from "classix";

/**
 * TestCard — a standalone recreation of the "UI magician Agent" panel from the
 * attached Figma frame (254x508 at 1x).
 *
 * This is a self-contained smoke-test component: no props, no state, no
 * behaviour. Its colours, type and spacing are the frame's own values written
 * as Tailwind arbitrary utilities rather than repo design tokens, because no
 * token in this repo is close to them and the file is meant to stay on its own.
 */

const TITLE_TEXT = "font-[600] text-[13.5px] leading-[16.34px]";
const LABEL_TEXT = "font-[600] text-[11.5px] leading-[13.92px]";
const URL_PLACEHOLDER_TEXT = "font-[600] text-[10.5px] leading-[12.71px]";

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1e1e1e] px-5 pt-5 font-[family-name:Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <h1 className={cx(TITLE_TEXT, "text-[#b5b5b5]")}>UI magician Agent</h1>
      <GearIcon className="shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0" />
      <span className={LABEL_TEXT}>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUpIcon className="h-2 w-3 shrink-0" />
      <span className={TITLE_TEXT}>Add New Design</span>
    </div>

    <div className="mt-7 flex items-center gap-[15px] text-[#a4a4a3]">
      <span className={LABEL_TEXT}>Personal Access Token</span>
      <InfoIcon />
    </div>

    <PanelField className="mt-3 h-9 border border-[#a5adad]">
      <span className={cx(LABEL_TEXT, "text-[#737470]")}>
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </PanelField>

    <div className="mt-[11px] flex items-center gap-5 text-[#a3a3a2]">
      <span className={LABEL_TEXT}>Design URL</span>
      <InfoIcon />
    </div>

    <PanelField className="mt-[11px] h-[37px] border-2 border-[#929291]">
      <span className={cx(URL_PLACEHOLDER_TEXT, "text-[#71726e]")}>
        https://www.figma.com/file/:
      </span>
    </PanelField>

    <div className="mt-[22px] flex w-[211px] justify-end gap-[17px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className={cx(TITLE_TEXT, "mt-[46px] text-[#b0b0b0]")}>
      Recent Breakdowns
    </h2>
  </div>
);

const PanelField = ({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) => (
  <div
    className={cx(
      "flex w-[211px] items-center bg-[#272822] px-5",
      className
    )}
  >
    {children}
  </div>
);

const PanelButton = ({ children }: { children: string }) => (
  <div
    className={cx(
      LABEL_TEXT,
      "flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[#8c8078]"
    )}
  >
    {children}
  </div>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7" cy="8" r="5.2" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.1" />
    <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M12.2 8h1.6" />
      <path d="M1.8 8H.2" />
      <path d="M7 13.2v1.6" />
      <path d="M7 2.8V1.2" />
      <path d="M10.68 11.68l1.13 1.13" />
      <path d="M3.32 11.68l-1.13 1.13" />
      <path d="M10.68 4.32l1.13-1.13" />
      <path d="M3.32 4.32L2.19 3.19" />
    </g>
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1.5 6.5L6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.9" r="0.85" fill="currentColor" />
    <path
      d="M7.5 7v3.6"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);
