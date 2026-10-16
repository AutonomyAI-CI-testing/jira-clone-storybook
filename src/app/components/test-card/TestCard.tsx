import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static recreation of the "UI magician Agent" panel from a Figma design.
 * Self-contained: it takes no props and holds no state.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[color:var(--DarkNeutral0)] px-10 py-9 font-primary text-[color:var(--DarkNeutral1000)]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[22px] leading-tight text-white">
          UI magician Agent
        </h1>
        <FiSettings
          aria-hidden
          className="mt-0.5 h-[26px] w-[26px] shrink-0 text-[color:var(--DarkNeutral800)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2 font-primary-light text-[15px] text-[color:var(--DarkNeutral800)]">
        <FiChevronUp aria-hidden className="h-5 w-5 shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <FiChevronUp aria-hidden className="h-6 w-6 shrink-0 text-white" />
        <h2 className="font-primary-bold text-[22px] text-white">
          Add New Design
        </h2>
      </div>

      <div className="mt-7 flex flex-col gap-6">
        <DesignField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        />
        <DesignField
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-8">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <h2 className="mt-14 font-primary-bold text-[20px] text-white">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const DesignField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <span className="font-primary-light text-[16px]">{label}</span>
      <FiInfo
        aria-hidden
        className="h-[22px] w-[22px] shrink-0 text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="h-[72px] w-full border border-[color:var(--DarkNeutral600)] bg-[color:var(--DarkNeutral100)] px-6 font-primary-light text-[16px] text-[color:var(--DarkNeutral900)] outline-none placeholder:text-[color:var(--DarkNeutral700)]"
    />
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-[58px] flex-1 rounded-md bg-[color:var(--Orange800)] font-primary text-[17px] text-[color:var(--DarkNeutral900)] transition-colors hover:bg-[color:var(--Orange900)]"
  >
    {children}
  </button>
);
