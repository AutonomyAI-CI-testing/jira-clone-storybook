/**
 * Smoke-test component: a static rendering of the "UI magician Agent" Figma frame.
 * Prop-less, stateless and handler-free by design — it exists to prove the frame can
 * be built and rendered here, not to ship.
 */

const GearIcon = () => (
  <svg
    aria-hidden="true"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#c9c9c9"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3.4" />
    <path d="M19.1 14.6a1.6 1.6 0 0 0 .32 1.77l.06.06a1.9 1.9 0 1 1-2.69 2.69l-.06-.06a1.6 1.6 0 0 0-1.77-.32 1.6 1.6 0 0 0-.97 1.47v.17a1.9 1.9 0 1 1-3.8 0v-.09a1.6 1.6 0 0 0-1.05-1.47 1.6 1.6 0 0 0-1.77.32l-.06.06a1.9 1.9 0 1 1-2.69-2.69l.06-.06a1.6 1.6 0 0 0 .32-1.77 1.6 1.6 0 0 0-1.47-.97H3.3a1.9 1.9 0 1 1 0-3.8h.09A1.6 1.6 0 0 0 4.86 8.9a1.6 1.6 0 0 0-.32-1.77l-.06-.06A1.9 1.9 0 1 1 7.17 4.38l.06.06a1.6 1.6 0 0 0 1.77.32h.08a1.6 1.6 0 0 0 .97-1.47V3.2a1.9 1.9 0 1 1 3.8 0v.09a1.6 1.6 0 0 0 .97 1.47 1.6 1.6 0 0 0 1.77-.32l.06-.06a1.9 1.9 0 1 1 2.69 2.69l-.06.06a1.6 1.6 0 0 0-.32 1.77v.08a1.6 1.6 0 0 0 1.47.97h.17a1.9 1.9 0 1 1 0 3.8h-.09a1.6 1.6 0 0 0-1.47.97Z" />
  </svg>
);

const ChevronUpIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className="shrink-0"
  >
    <circle cx="9" cy="9" r="7.6" stroke="#b0b0b0" strokeWidth="1.2" />
    <path
      d="M9 8.2v4.6"
      stroke="#b0b0b0"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="9" cy="5.7" r="0.95" fill="#b0b0b0" />
  </svg>
);

const Field = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className="text-[15px] text-[#b0b0b0]">{label}</span>
      <InfoIcon />
    </div>
    <input
      aria-label={label}
      placeholder={placeholder}
      readOnly
      className="mt-[10px] w-full rounded border border-[#6b6b6b] bg-[#2b2b2b] px-[14px] py-[16px] font-primary text-[15px] text-[#c9c9c9] placeholder:text-[#8a8a8a]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-[44px] pt-[40px] pb-[80px] font-primary text-[#c9c9c9]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[22px] leading-none">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-[36px] flex items-center gap-3 text-[#9e9e9e]">
      <ChevronUpIcon />
      <span className="text-[17px]">From entire frame to a singl…</span>
    </div>

    <div className="mt-[120px] flex items-center gap-3 text-[#d0d0d0]">
      <ChevronUpIcon size={22} />
      <h2 className="font-primary-bold text-[20px]">Add New Design</h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-[56px]"
    />

    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file:"
      className="mt-[28px]"
    />

    <div className="mt-[52px] flex justify-end gap-[34px]">
      <button
        type="button"
        className="h-[68px] w-[169px] rounded-md bg-[#9c3f1f] font-primary text-[20px] text-[#c4a99f]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[68px] w-[169px] rounded-md bg-[#9c3f1f] font-primary text-[20px] text-[#c4a99f]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[88px] font-primary-bold text-[20px] text-[#d0d0d0]">
      Recent Breakdowns
    </h2>
  </div>
);
