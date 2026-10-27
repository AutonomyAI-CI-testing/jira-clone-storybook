/**
 * Replica of the attached Figma frame: a dark "UI magician Agent" panel.
 * Self-contained smoke test - no props, no state, no event handlers.
 * Sizes and colours are the Figma style guide's values for the 254x508 frame.
 */

const SettingsIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="7"
      cy="8"
      r="5.4"
      stroke="#b5b5b5"
      strokeWidth="1.2"
      strokeDasharray="2.2 1.6"
    />
    <circle cx="7" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.2" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
    <path
      d="M7.5 6.8v4.2"
      stroke="#a4a4a3"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.75" fill="#a4a4a3" />
  </svg>
);

const ChevronUp = ({
  width,
  height,
  stroke,
}: {
  width: number;
  height: number;
  stroke: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
  >
    <path
      d={`M1 ${height - 1.5}L${width / 2} 1.5L${width - 1} ${height - 1.5}`}
      stroke={stroke}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />
  </div>
);

const PanelButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#000000] px-5 pb-[62px] pt-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <SettingsIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUp width={8} height={5} stroke="#8b9291" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUp width={12} height={8} stroke="#b2b2b1" />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>
    <div className="mt-3">
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h3 className="mt-[46px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
