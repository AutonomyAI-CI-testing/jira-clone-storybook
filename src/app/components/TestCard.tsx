import cx from "classix";

const buttonClassName =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";

const Gear = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoCircle = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5M12 8h.01" />
  </svg>
);

const Field = ({ id, label, placeholder, inputClassName }: FieldProps) => (
  <div className="mt-[22px]">
    <div className="flex items-center gap-2 text-[#a4a4a3]">
      <label htmlFor={id} className="text-[11.5px]">
        {label}
      </label>
      <InfoCircle />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        "mt-2 h-[36px] w-[211px] rounded-[2px] bg-[#272822] px-2.5 text-[11.5px] text-[#d0d0d0] placeholder:text-[#737470]",
        inputClassName
      )}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  inputClassName: string;
}

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter,system-ui,sans-serif] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold">UI magician Agent</span>
        <Gear />
      </div>

      <div className="mt-[18px] flex items-center gap-2.5 text-[#8b9291]">
        <ChevronUp />
        <span className="truncate text-[11.5px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[52px] flex items-center gap-2.5 text-[#b2b2b1]">
        <ChevronUp />
        <span className="text-[13.5px] font-semibold">Add New Design</span>
      </div>

      <Field
        id="testElem-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        inputClassName="border border-[#a5adad]"
      />
      <Field
        id="testElem-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        inputClassName="border-2 border-[#929291]"
      />

      <div className="mt-[30px] flex gap-[17px]">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <div className="mt-[46px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
