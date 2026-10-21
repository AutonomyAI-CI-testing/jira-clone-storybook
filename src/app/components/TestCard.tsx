/**
 * TestCard
 *
 * A display-only reproduction of the "UI magician Agent" panel from the Figma
 * frame attached to this task. Every position, size, colour and string below
 * comes from that frame's extracted style guide; the layout is Tailwind.
 *
 * Smoke-test component: no props, no state, no data, no interactivity.
 */
import cx from "classix";

/** The eight tooth positions of the settings cog, in degrees. */
const GEAR_TOOTH_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

const ChevronUpIcon = ({ width, height }: ChevronUpIconProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 6.6 6 1.6l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#c4c4c4]"
  >
    <circle cx="7" cy="8" r="4.6" stroke="currentColor" strokeWidth="1.3" />
    {GEAR_TOOTH_ANGLES.map((angle) => (
      <line
        key={angle}
        x1="7"
        y1="3.4"
        x2="7"
        y2="1.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        transform={`rotate(${angle} 7 8)`}
      />
    ))}
    <circle cx="7" cy="8" r="1.9" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.7" r="0.85" fill="currentColor" />
    <path
      d="M7.5 6.9v3.5"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

const Field = ({
  label,
  value,
  valueClassName,
  fieldClassName,
}: FieldProps): JSX.Element => (
  <>
    <div className="mt-3 flex items-center gap-6 text-[#a4a4a3]">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <div className={cx("mt-3 flex h-9 items-center pl-[18px]", fieldClassName)}>
      <span className={cx("font-primary-bold", valueClassName)}>{value}</span>
    </div>
  </>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] overflow-hidden bg-[#111111] px-5 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <SettingsIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[#8b9291]">
      <ChevronUpIcon width={8} height={5} />
      <span className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pb-4 pl-[6px] text-[#b2b2b1]">
      <ChevronUpIcon width={12} height={8} />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px]">
        Add New Design
      </h2>
    </div>

    <Field
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxx"
      valueClassName="text-[11.5px] leading-[13.92px] text-[#737470]"
      fieldClassName="border border-[#a5adad] bg-[#272822]"
    />

    <Field
      label="Design URL"
      value="https://www.figma.com/file/:"
      valueClassName="text-[10.5px] leading-[12.71px] text-[#71726e]"
      fieldClassName="border-2 border-[#929291] bg-[#272822]"
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      {["Awesome", "Prepare"].map((label) => (
        <div
          key={label}
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]"
        >
          <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]">
            {label}
          </span>
        </div>
      ))}
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface ChevronUpIconProps {
  width: number;
  height: number;
}

interface FieldProps {
  label: string;
  value: string;
  valueClassName: string;
  fieldClassName: string;
}
