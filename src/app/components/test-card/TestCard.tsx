import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mt-6 space-y-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-[15px]">
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden
        className="h-5 w-5 text-[var(--DarkNeutral1000)]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="h-[44px] w-full rounded-[3px] border border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-3 text-[14px] text-[var(--DarkNeutral1100)] outline-none placeholder:text-[var(--DarkNeutral600)]"
    />
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="w-[172px] rounded-md bg-[var(--Orange800)] py-4 text-[17px] hover:bg-[var(--Orange700)]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="mx-auto flex min-h-screen w-full max-w-[508px] flex-col bg-[var(--DarkNeutral100)] px-6 py-8 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px]">UI magician Agent</h1>
      <HiOutlineCog
        aria-hidden
        className="h-6 w-6 text-[var(--DarkNeutral600)]"
      />
    </div>

    <div className="mt-3 flex items-center gap-2">
      <HiChevronUp
        aria-hidden
        className="h-4 w-4 shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <span className="truncate text-[13px] text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <hr className="mt-4 border-t border-[var(--DarkNeutral350)]" />

    <section className="mt-20">
      <div className="flex items-center gap-2">
        <HiChevronUp
          aria-hidden
          className="h-5 w-5 shrink-0 text-[var(--DarkNeutral1000)]"
        />
        <h2 className="font-primary-bold text-[20px]">Add New Design</h2>
      </div>

      <Field
        id="test-card-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-8 flex justify-center gap-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </section>

    <h2 className="mt-20 font-primary-bold text-[19px]">Recent Breakdowns</h2>
  </div>
);
