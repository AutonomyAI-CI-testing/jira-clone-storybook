// TestCard — a self-contained reproduction of the attached Figma panel.
//
// The panel is a fixed-look dark surface, so the raw palette variables are used
// directly through arbitrary values: they are declared once and never flip with
// the active theme. The `dark` class is pinned on the root for anything that
// does resolve a semantic token, and the root declares its own ink because an
// inherited colour does not re-resolve inside a pinned subtree.
//
// Spacing, colour and type are approximations of the frame (its style guide
// works in 1x coordinates: a 254px panel, 214px fields, 85x37 buttons).

import { MdInfoOutline, MdOutlineSettings } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";

const panelClass =
  "dark w-[254px] min-h-[508px] bg-[var(--DarkNeutral-100)] px-5 py-5 font-primary text-[13.5px] leading-[16.34px] text-[color:var(--DarkNeutral900)]";
const iconClass = "shrink-0 text-[color:var(--DarkNeutral700)]";
const labelClass =
  "font-primary-bold text-[11.5px] leading-[13.92px] text-[color:var(--DarkNeutral800)]";
const fieldClass =
  "mt-2 h-[39px] w-full border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-2 text-[11.5px] leading-[13.92px] text-[color:var(--DarkNeutral800)] placeholder:text-[color:var(--DarkNeutral600)]";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[13.92px] text-[color:var(--DarkNeutral700)]";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={panelClass}>
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <MdOutlineSettings size={16} className={iconClass} aria-hidden="true" />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-3 flex items-center gap-2 text-[11.5px] leading-[13.92px] text-[color:var(--DarkNeutral700)]">
      <RiArrowUpSFill size={14} className={iconClass} aria-hidden="true" />
      <span>From entire frame to a singl...</span>
    </div>

    {/* Section heading */}
    <div className="mt-20 flex items-center gap-2">
      <RiArrowUpSFill size={16} className={iconClass} aria-hidden="true" />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <span className={labelClass}>Personal Access Token</span>
        <MdInfoOutline size={15} className={iconClass} aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={fieldClass}
      />
    </div>

    {/* Design URL */}
    <div className="mt-2">
      <div className="flex items-center gap-2">
        <span className={labelClass}>Design URL</span>
        <MdInfoOutline size={15} className={iconClass} aria-hidden="true" />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={fieldClass}
      />
    </div>

    {/* Actions */}
    <div className="mt-5 flex justify-center gap-4">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <p className="mt-11 font-primary-bold">Recent Breakdowns</p>
  </div>
);
