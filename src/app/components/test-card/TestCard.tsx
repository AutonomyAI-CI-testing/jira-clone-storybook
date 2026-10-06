import { ReactNode } from "react";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-14 pt-5 font-primary text-[13.5px] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[11.5px] text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span className="min-w-0 truncate font-primary-bold">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2 text-[13.5px] text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <span className="font-primary-bold">Add New Design</span>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      labelClassName="mt-7"
      inputClassName="border border-[#a5adad]"
    />
    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      labelClassName="mt-3"
      inputClassName="border-2 border-[#929291]"
    />

    <div className="mt-6 flex justify-center gap-4">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <div className="mt-12 font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const Field = ({
  label,
  placeholder,
  labelClassName,
  inputClassName,
}: FieldProps): JSX.Element => (
  <>
    <div
      className={`flex items-center gap-1.5 text-[11.5px] text-[#a4a4a3] ${labelClassName}`}
    >
      <span className="font-primary-bold">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`mt-2 h-[36px] w-full bg-[#272822] px-3 text-[11.5px] text-[#a5adad] placeholder:text-[#737470] ${inputClassName}`}
    />
  </>
);

const PanelButton = ({ children }: { children: ReactNode }): JSX.Element => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
  >
    {children}
  </button>
);

const ChevronUp = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 7 6 2l5 5" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  labelClassName?: string;
  inputClassName?: string;
}
