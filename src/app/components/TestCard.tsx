import cx from "classix";
import { HiChevronUp, HiOutlineCog, HiOutlineInformationCircle } from "react-icons/hi";

const iconButtonClass =
  "flex shrink-0 cursor-pointer items-center justify-center rounded-full text-icon hover:bg-background-neutral";

const inputClass =
  "mt-3 h-[60px] w-full rounded border border-border-bold bg-transparent px-4 font-primary-light text-sm text-font placeholder:text-font-subtlest";

const buttonClass =
  "h-[60px] flex-1 cursor-pointer rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral800)] hover:bg-[var(--Orange900)]";

const Field = ({
  id,
  label,
  placeholder,
  className,
}: {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={cx(className)}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <button type="button" aria-label={`About ${label}`} className={iconButtonClass}>
        <HiOutlineInformationCircle size={18} />
      </button>
    </div>
    <input id={id} type="text" placeholder={placeholder} className={inputClass} />
  </div>
);

export const TestCard = () => (
  <div id="testElem" className="dark w-[508px] bg-elevation-surface p-8 font-primary text-font">
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button type="button" aria-label="Settings" className={iconButtonClass}>
        <HiOutlineCog size={24} />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-3 text-font-subtle">
      <HiChevronUp size={18} className="shrink-0" />
      <span className="min-w-0 truncate font-primary-light text-sm">
        From entire frame to a single component
      </span>
    </div>

    <div className="h-[180px]" />

    <div className="flex items-center gap-3">
      <HiChevronUp size={24} className="shrink-0" />
      <h3 className="font-primary-bold text-2xl">Add New Design</h3>
    </div>

    <Field
      className="mt-7"
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-6"
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-9 flex gap-7">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);
