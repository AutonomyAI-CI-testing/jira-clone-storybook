import cx from "classix";

/**
 * TestCard — a static, self-contained reproduction of the "UI magician Agent"
 * panel in the attached Figma frame (254 x 508 at 1x).
 *
 * Two deliberate departures from this repo's design system, both recorded in
 * task/PLAN.md:
 *  - The panel belongs to another product, so no semantic token in
 *    tailwind.config.js describes it. The frame's own hex values are used
 *    directly, through Tailwind arbitrary values.
 *  - The frame is set in Inter, which this project does not ship (public/fonts
 *    holds only the CircularStd cuts), so the project's own families are used
 *    at the frame's sizes.
 *
 * The frame's exported icons are raster images wrapped in SVG rather than
 * vector paths, and the exported files are not reachable from this repo, so the
 * three marks are drawn here as small vector shapes at the same sizes and
 * colours. See task/PLAN.md step 3.
 */

interface PanelIconProps {
  className?: string;
}

const ChevronUpIcon = ({ className }: PanelIconProps) => (
  <svg
    width={12}
    height={8}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className }: PanelIconProps) => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 14 16"
    fill="none"
    role="img"
    aria-label="Settings"
    className={cx("shrink-0", className)}
  >
    <circle
      cx="7"
      cy="8"
      r="4.2"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeDasharray="2.1 1.7"
    />
    <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);

const InfoIcon = ({ className }: PanelIconProps) => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    role="img"
    aria-label="More information"
    className={cx("shrink-0", className)}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.7" r="0.85" fill="currentColor" />
    <path
      d="M7.5 6.9v3.9"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

interface PanelFieldProps {
  className: string;
  label: string;
  value: string;
  inputClassName: string;
  valueClassName: string;
}

const PanelField = ({
  className,
  label,
  value,
  inputClassName,
  valueClassName,
}: PanelFieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-5">
      <span className="font-primary text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <div
      className={cx(
        "mt-3 flex w-full items-center bg-[#272822] px-5",
        inputClassName
      )}
    >
      <span className={cx("font-primary", valueClassName)}>{value}</span>
    </div>
  </div>
);

const PanelButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 pt-5 text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUpIcon className="h-[5px] w-2" />
      <span className="font-primary text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3 text-[#b2b2b1]">
      <ChevronUpIcon className="h-2 w-3" />
      <span className="font-primary text-[13.5px] leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <PanelField
      className="mt-7"
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="h-9 border border-[#a5adad]"
      valueClassName="text-[11.5px] leading-[13.92px] text-[#737470]"
    />

    <PanelField
      className="mt-3"
      label="Design URL"
      value="https://www.figma.com/file/:"
      inputClassName="h-[37px] border-2 border-[#929291]"
      valueClassName="text-[10.5px] leading-[12.71px] text-[#71726e]"
    />

    <div className="mt-6 flex justify-end gap-4">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <span className="mt-12 font-primary text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
