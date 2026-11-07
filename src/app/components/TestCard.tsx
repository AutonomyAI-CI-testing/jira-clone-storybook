import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * Smoke-test card reproduced from a Figma frame.
 *
 * Self-contained: no props, no data, no app imports. The frame is a fixed
 * black surface, so its colours are taken from the repo's raw palette steps
 * (`--Neutral*` / `--DarkNeutral*` / `--Orange*`) through arbitrary values —
 * those are declared once in `:root` and never re-resolve per theme, unlike
 * the semantic `--color-*` roles.
 */
export default function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-[20px] py-[20px] font-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] text-[color:var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <MdOutlineSettings
          size={16}
          className="text-[color:var(--DarkNeutral900)]"
          aria-hidden
        />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[8px]">
        <RiArrowUpSLine
          size={14}
          className="text-[color:var(--DarkNeutral700)]"
          aria-hidden
        />
        <span className="font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-[10px]">
        <RiArrowUpSLine
          size={18}
          className="text-[color:var(--DarkNeutral900)]"
          aria-hidden
        />
        <span className="font-primary-bold text-[13.5px] text-[color:var(--DarkNeutral900)]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center justify-between">
        <span className="font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral800)]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[color:var(--DarkNeutral800)]"
          aria-hidden
        />
      </div>
      <div className="mt-[12px] flex h-[36px] items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] pl-[18px]">
        <span className="font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral600)]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center justify-between">
        <span className="font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral800)]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[color:var(--DarkNeutral800)]"
          aria-hidden
        />
      </div>
      <div className="mt-[11px] flex h-[37px] items-center border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] pl-[18px]">
        <span className="font-primary-bold text-[10.5px] text-[color:var(--DarkNeutral600)]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[23px] flex gap-[17px] pl-[24px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral700)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[color:var(--DarkNeutral700)]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-[46px] font-primary-bold text-[13.5px] text-[color:var(--DarkNeutral900)]">
        Recent Breakdowns
      </div>
    </div>
  );
}
