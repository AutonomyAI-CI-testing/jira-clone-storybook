import type { ReactNode } from "react";
import cx from "classix";

/**
 * Static rendering of the "UI magician Agent" panel from the supplied Figma
 * frame. Self-contained on purpose: it takes no props, holds no state and is
 * not wired into any route.
 *
 * The frame's palette (dark panel, muted greys, rust buttons) has no close
 * match among this app's semantic tokens, so its colours go in as Tailwind
 * arbitrary values — a deliberate exception to the Semantic-Only Rule, with the
 * design's own style guide as the source. Type uses the app's existing
 * families rather than the frame's Inter, which this app never loads.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between gap-4">
      <span className="text-[13.5px] font-primary-bold leading-[16.34px]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <ChevronUpIcon />
      <span className="truncate text-[11.5px] font-primary-bold leading-[13.92px]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px] text-[#b2b2b1]">
      <CollapseIcon />
      <span className="text-[13.5px] font-primary-bold leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <CardField
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      placeholderClassName="text-[11.5px]"
      fieldClassName="h-9 border border-[#a5adad]"
    />

    <CardField
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      placeholderClassName="text-[10.5px]"
      fieldClassName="h-[37px] border-2 border-[#929291]"
    />

    <div className="mt-[22px] flex gap-[17px]">
      <CardButton className="ml-6">Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <span className="mt-[46px] text-[13.5px] font-primary-bold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

const CardField = ({
  label,
  placeholder,
  className,
  fieldClassName,
  placeholderClassName,
}: CardFieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2 text-[#a4a4a3]">
      <span className="text-[11.5px] font-primary-bold leading-[13.92px]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <div
      className={cx(
        "mt-3 flex items-center bg-[#272822] px-[19px]",
        fieldClassName
      )}
    >
      <span
        className={cx(
          "truncate font-primary-bold text-[#737470]",
          placeholderClassName
        )}
      >
        {placeholder}
      </span>
    </div>
  </div>
);

const CardButton = ({ children, className }: CardButtonProps): JSX.Element => (
  <button
    type="button"
    className={cx(
      "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-primary-bold leading-[13.92px] text-[#8c8078]",
      className
    )}
  >
    {children}
  </button>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-[14px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 8 5"
    className="h-[5px] w-2 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 4 4 1l3 3" />
  </svg>
);

const CollapseIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    className="h-2 w-3 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 3.5 6 1l5 2.5" />
    <path d="M1 7h10" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

interface CardFieldProps {
  label: string;
  placeholder: string;
  className?: string;
  fieldClassName?: string;
  placeholderClassName?: string;
}

interface CardButtonProps {
  children: ReactNode;
  className?: string;
}
