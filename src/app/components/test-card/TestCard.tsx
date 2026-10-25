import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken px-10 py-7 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <FiSettings aria-hidden size={24} className="text-font-subtle" />
    </div>

    <div className="mt-6 flex min-w-0 items-center gap-2 text-font-subtlest">
      <FiChevronUp aria-hidden size={18} className="shrink-0" />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-2">
      <FiChevronUp aria-hidden size={22} className="shrink-0" />
      <Heading>Add New Design</Heading>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-10 flex gap-10">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <Heading className="mt-16">Recent Breakdowns</Heading>
  </div>
);

const Heading = ({
  children,
  className = "",
}: HeadingProps): JSX.Element => (
  <h2 className={cx("font-primary-bold text-2xl", className)}>{children}</h2>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-2">
    <span className="flex items-center gap-2 text-font-subtle">
      <span className="font-primary-light text-base">{label}</span>
      <FiInfo aria-hidden size={18} />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-border-bold bg-background-input px-4 py-3 font-primary-light text-base text-font placeholder:text-font-subtlest"
    />
  </label>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="w-[172px] rounded-lg bg-[var(--Orange800)] py-4 font-primary-bold text-lg text-[var(--Neutral1100)] hover:bg-[var(--Orange700)]"
  >
    {children}
  </button>
);

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: React.ReactNode;
}
