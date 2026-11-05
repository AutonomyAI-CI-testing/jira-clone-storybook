import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const headingClass = "font-primary-bold text-[var(--DarkNeutral1100)]";

const fieldClass =
  "mt-4 h-[68px] w-full rounded border-none bg-elevation-surface-raised px-4 text-base text-font outline outline-2 outline-border-bold placeholder:text-font-subtle focus-visible:outline-border-brand";

const buttonClass =
  "h-[70px] w-[168px] rounded-md bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral1100)]";

const Field = ({ id, label, placeholder, className }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-base text-font">
        {label}
      </label>
      <HiOutlineInformationCircle size={20} className="shrink-0" aria-hidden />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={fieldClass} />
  </div>
);

const CardButton = ({ children }: { children: React.ReactNode }) => (
  <button type="button" className={buttonClass}>
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className={cx(headingClass, "text-xl")}>UI magician Agent</h1>
        <HiOutlineCog
          size={28}
          className="shrink-0 text-[var(--DarkNeutral1100)]"
          aria-hidden
        />
      </div>

      <div className="mt-5 flex items-center gap-3 text-font-subtle">
        <HiChevronUp size={20} className="shrink-0" aria-hidden />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-[150px]" />

      <div className="flex items-center gap-3">
        <HiChevronUp
          size={24}
          className="shrink-0 text-[var(--DarkNeutral1100)]"
          aria-hidden
        />
        <h2 className={cx(headingClass, "text-2xl")}>Add New Design</h2>
      </div>

      <Field
        className="mt-14"
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        className="mt-7"
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-12 flex justify-end gap-8">
        <CardButton>Awesome</CardButton>
        <CardButton>Prepare</CardButton>
      </div>

      <h2 className={cx(headingClass, "mt-16 text-2xl")}>Recent Breakdowns</h2>
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
