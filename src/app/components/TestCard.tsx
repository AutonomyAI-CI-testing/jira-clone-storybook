import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";
import { Button } from "@app/components/button/button";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 * Smoke test only — no props, no state, no interaction.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col rounded bg-elevation-surface p-5 text-font"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary text-xs">UI magician Agent</span>
      <FiSettings aria-hidden className="shrink-0" size={16} />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp
        aria-hidden
        className="shrink-0 text-font-subtlest"
        size={12}
      />
      <span className="truncate font-primary-light text-2xs text-font-subtlest">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-12 flex items-center gap-1.5">
      <FiChevronUp aria-hidden className="shrink-0" size={14} />
      <span className="font-primary text-xs">Add New Design</span>
    </div>

    <div className="mt-5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-primary text-2xs text-font-subtle">
          Personal Access Token
        </span>
        <FiInfo aria-hidden className="shrink-0 text-font-subtle" size={15} />
      </div>
      <input
        aria-label="Personal Access Token"
        className="w-full rounded-md bg-background-input p-3 font-primary-light text-2xs outline outline-2 outline-border-input placeholder:text-font-subtlest"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />
    </div>

    <div className="mt-3 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="font-primary text-2xs text-font-subtle">Design URL</span>
        <FiInfo aria-hidden className="shrink-0 text-font-subtle" size={15} />
      </div>
      <input
        aria-label="Design URL"
        className="w-full rounded-md bg-background-input p-3 font-primary-light text-2xs outline outline-2 outline-border-input placeholder:text-font-subtlest"
        placeholder="https://www.figma.com/file/"
        readOnly
      />
    </div>

    <div className="mt-5 flex gap-3">
      <Button
        className="w-[85px] font-primary text-2xs"
        color="primary"
        variant="contained"
      >
        Awesome
      </Button>
      <Button
        className="w-[85px] font-primary text-2xs"
        color="neutral"
        variant="subtlest"
      >
        Prepare
      </Button>
    </div>

    <div className="mt-12">
      <span className="font-primary text-xs">Recent Breakdowns</span>
    </div>
  </div>
);
