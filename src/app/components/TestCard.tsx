import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const fieldClassName =
  "h-[60px] w-full border-2 border-[var(--DarkNeutral900)] bg-elevation-surface-overlay px-5 font-primary text-base text-font outline-none placeholder:text-font-subtlest";

const buttonClassName =
  "h-[60px] w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral1000)]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="mb-4 flex items-center gap-3">
      <label
        htmlFor={id}
        className="font-primary-light text-base text-font-subtle"
      >
        {label}
      </label>
      <HiOutlineInformationCircle size={20} className="text-icon" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={fieldClassName}
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-icon"
      >
        <HiOutlineCog size={28} />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <HiOutlineChevronUp size={20} className="shrink-0 text-icon" />
      <span className="truncate font-primary-light text-base text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <HiOutlineChevronUp size={24} className="shrink-0 text-icon" />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <div className="mt-10">
      <Field
        id="figma-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-8">
      <Field
        id="figma-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex gap-6">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
