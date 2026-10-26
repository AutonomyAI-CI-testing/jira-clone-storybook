import cx from "classix";

const FIELD_INPUT_CLASS =
  "mt-2 w-full bg-[#272822] px-[21px] font-primary text-2xs";

const PANEL_BUTTON_CLASS =
  "h-[40px] w-[87px] rounded bg-[#843a17] font-primary text-2xs text-[#8c8078]";

const SettingsIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
  >
    <path
      d="M1 7L6 2L11 7"
      stroke="#c0c0c0"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="#a4a4a3" strokeWidth="1.5" />
    <path
      d="M7.5 6.8v3.4"
      stroke="#a4a4a3"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.9" fill="#a4a4a3" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  labelClassName,
  inputClassName,
}: FieldProps): JSX.Element => (
  <>
    <div className={cx("flex items-center gap-2", labelClassName)}>
      <label htmlFor={id} className="font-primary text-2xs text-[#a4a4a3]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className={cx(FIELD_INPUT_CLASS, inputClassName)}
    />
  </>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="min-h-[508px] w-[254px] bg-[#1e1e1e] px-5 py-5">
    <div className="flex items-start justify-between">
      <span className="font-primary text-xs text-[#b5b5b5]">
        UI magician Agent
      </span>
      <SettingsIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-3">
      <ChevronUp width={8} height={5} />
      <span className="truncate font-primary text-2xs text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-3">
      <ChevronUp width={12} height={8} />
      <span className="font-primary text-xs text-[#b2b2b1]">Add New Design</span>
    </div>

    <Field
      id="test-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      labelClassName="mt-7"
      inputClassName="h-[39px] border border-[#a5adad] text-[#737470] placeholder:text-[#737470]"
    />
    <Field
      id="test-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      labelClassName="mt-[10px]"
      inputClassName="h-[41px] border-2 border-[#929291] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[18px] flex gap-[15px] pl-[23px]">
      <button type="button" className={PANEL_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={PANEL_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[45px] font-primary text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  labelClassName: string;
  inputClassName: string;
}
