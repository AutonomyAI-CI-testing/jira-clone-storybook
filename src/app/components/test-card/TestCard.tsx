import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static replica of the "UI magician Agent" panel from the attached Figma frame.
 * Self-contained smoke-test card: no props, no state, no behaviour.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 pb-28 pt-10 font-primary-light text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <HiOutlineCog
          aria-hidden
          className="size-6 shrink-0 text-[var(--DarkNeutral1000)]"
        />
      </div>

      <div className="mt-10 flex items-center gap-2 text-[var(--DarkNeutral800)]">
        <HiChevronUp aria-hidden className="size-4 shrink-0" />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <h2 className="mt-44 flex items-center gap-2 font-primary-bold text-xl">
        <HiChevronUp aria-hidden className="size-5 shrink-0" />
        Add New Design
      </h2>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-14"
      />

      <div className="mt-12 flex justify-center gap-9">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-32 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const Field = ({
  label,
  placeholder,
  className,
}: {
  label: string;
  placeholder: string;
  className?: string;
}) => (
  <div className={className ? `mt-11 ${className}` : "mt-11"}>
    <div className="flex items-center gap-2.5">
      <span className="text-base text-[var(--DarkNeutral1000)]">{label}</span>
      <HiOutlineInformationCircle
        aria-hidden
        className="size-[18px] shrink-0 text-[var(--DarkNeutral1000)]"
      />
    </div>
    <div className="mt-7 flex h-[52px] items-center rounded-sm border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral250)] px-4 text-base text-[var(--DarkNeutral700)]">
      {placeholder}
    </div>
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-14 w-[168px] items-center justify-center rounded-md bg-[var(--Orange800)] font-primary text-base text-[var(--Neutral300)]">
    {children}
  </div>
);
