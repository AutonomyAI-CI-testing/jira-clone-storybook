// Standalone smoke-test component reproducing a Figma panel (254x508 at 1x).
// Self-contained: no props, nothing imported from the app, nothing imports it.
// Colours and type sizes are the design's own values, which have no match in the
// repo's semantic tokens, so they are written as Tailwind arbitrary values.

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="12"
    height="8"
    viewBox="0 0 24 16"
    fill="none"
    stroke={color}
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m4 13 8-9 8 9" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#a4a4a3"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({
  label,
  labelClassName,
  value,
  valueClassName,
  boxClassName,
}: {
  label: string;
  labelClassName: string;
  value: string;
  valueClassName: string;
  boxClassName: string;
}): JSX.Element => (
  <div>
    <div className="flex items-center gap-4">
      <span className={`text-[11.5px] leading-[13.92px] ${labelClassName}`}>
        {label}
      </span>
      <InfoIcon />
    </div>
    <div className={`mt-3 flex items-center px-3 ${boxClassName}`}>
      <span className={`truncate ${valueClassName}`}>{value}</span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1C1D17] px-5 pt-5 font-primary"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <h2 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    {/* Collapsed sub-row */}
    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon color="#8b9291" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUpIcon color="#b2b2b1" />
      <h3 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px]">
      <Field
        label="Personal Access Token"
        labelClassName="text-[#a4a4a3]"
        value="figd_xxxxxxxxxxxxxxxxxx"
        valueClassName="text-[11.5px] leading-[13.92px] text-[#737470]"
        boxClassName="h-[36px] border border-[#A5ADAD] bg-[#272822]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[11px]">
      <Field
        label="Design URL"
        labelClassName="text-[#a3a3a2]"
        value="https://www.figma.com/file/:"
        valueClassName="text-[10.5px] leading-[12.71px] text-[#71726e]"
        boxClassName="h-[37px] border-2 border-[#929291] bg-[#272822]"
      />
    </div>

    {/* Button pair */}
    <div className="mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843A17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843A17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Section header */}
    <h3 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
