/**
 * TestCard
 *
 * A standalone, self-contained panel built from a Figma frame ("UI magician Agent").
 * It takes no props, holds no state and is not wired into any route: it exists to
 * render the frame as a single component.
 *
 * The values below are the literals from that frame's style guide. They are
 * deliberately not the app's semantic tokens, which describe this app's own
 * palette and would paint the frame the wrong colour.
 */

const FRAME_WIDTH = "254px";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ width: FRAME_WIDTH }}
      className="bg-[#000000] px-5 pb-[62px] pt-5 font-primary"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
      </div>

      {/* Collapsible summary row */}
      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <p className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section: Add New Design */}
      <div className="mt-[77px] flex items-center gap-2">
        <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Field: Personal Access Token */}
      <FieldLabel label="Personal Access Token" />
      <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Field: Design URL */}
      <FieldLabel label="Design URL" />
      <div className="mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] pl-5">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Section: Recent Breakdowns */}
      <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const FieldLabel = ({ label }: { label: string }): JSX.Element => {
  return (
    <div className="mt-[28px] flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">{label}</span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
  );
};

const ActionButton = ({ label }: { label: string }): JSX.Element => {
  return (
    <button
      type="button"
      className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
    >
      {label}
    </button>
  );
};

const SettingsIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
    <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <path d="M8 7.2v4.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
  </svg>
);
