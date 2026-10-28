import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

const inputClass =
  "h-[58px] w-full rounded border-none bg-background-input px-4 text-[17px] outline outline-2 outline-border-input placeholder:text-font-subtlest";

const buttonClass =
  "h-[66px] w-[168px] rounded-lg bg-[var(--Orange700)] text-[19px]";

const Field = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className: string;
}): JSX.Element => (
  <label className={`block ${className}`}>
    <span className="flex items-center gap-3 text-[17px]">
      {label}
      <HiInformationCircle
        size={20}
        className="shrink-0 text-font-subtle"
        aria-hidden
      />
    </span>
    <input
      readOnly
      type="text"
      placeholder={placeholder}
      className={`mt-4 ${inputClass}`}
    />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex min-h-[1016px] w-[508px] flex-col bg-elevation-surface px-10 pt-10 pb-32 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <HiCog size={28} className="text-font-subtle" aria-hidden />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[17px] text-font-subtle">
      <HiChevronUp size={18} className="shrink-0" aria-hidden />
      <span className="min-w-0 truncate">From entire frame to a singl...</span>
    </div>

    <h2 className="mt-44 flex items-center gap-3 font-primary-bold text-[20px]">
      <HiChevronUp size={20} className="shrink-0" aria-hidden />
      Add New Design
    </h2>

    <Field
      className="mt-14"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-10"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-16 flex justify-end gap-9">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-auto font-primary-bold text-[20px]">Recent Breakdowns</h2>
  </div>
);
