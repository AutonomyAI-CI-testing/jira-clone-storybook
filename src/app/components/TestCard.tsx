/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" panel from the Figma
 * test frame. It is a smoke test: it takes no props, holds no state and is not
 * wired into any screen.
 *
 * The frame's colours are not part of this repo's semantic token vocabulary, so
 * they are applied as Tailwind arbitrary values with the frame's own hex values
 * rather than approximated onto the nearest token.
 */

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="5.2" stroke="currentColor" strokeDasharray="2.6 1.4" strokeWidth="1.2" />
    <circle cx="7" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
    <path
      d="M0.6 4.2 4 0.9l3.4 3.3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path
      d="M1 1.6 6 6.4l5-4.8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 6.6v4.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.3"
    />
    <circle cx="7.5" cy="4.3" r="0.8" fill="currentColor" />
  </svg>
);

interface FieldProps {
  className: string;
  label: string;
  placeholder: string;
}

const Field = ({ className, label, placeholder }: FieldProps) => (
  <div className={className}>
    <span className="flex items-center gap-[8px] text-[11.5px] leading-[14px] text-[#a4a4a3]">
      {label}
      <span className="text-white">
        <InfoIcon />
      </span>
    </span>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="mt-[12px] block h-[36px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-[19px] text-[11.5px] leading-[14px] text-[#e5e5e5] outline-none placeholder:text-[#737470]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-[20px] pt-[20px] pb-[62px] font-primary text-[13.5px] leading-[16px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span>UI magician Agent</span>
      <button type="button" aria-label="Settings" className="text-[#b5b5b5]">
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <span className="ml-[3px] text-[#8b9291]">
        <ChevronUpIcon />
      </span>
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <span className="ml-[6px] text-[#b2b2b1]">
        <ChevronDownIcon />
      </span>
      <span className="text-[#b2b2b1]">Add New Design</span>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-[47px] text-[#b0b0b0]">Recent Breakdowns</div>
  </div>
);
