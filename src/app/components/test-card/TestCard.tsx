import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test card: a static reproduction of the "UI magician Agent" panel from
 * the supplied design frame. Deliberately self-contained — no props, no state,
 * no data — and it exists only to prove a design frame can be turned into a
 * rendered component.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[color:var(--DarkNeutral-100)] px-[40px] pb-[110px] pt-[36px]"
  >
    {/*
     * The frame is an unrelated dark tool panel rather than this app's own
     * design system, so the colours here are pulled from the raw palette
     * variables rather than the semantic surface/text tokens — the semantic
     * ones follow the active theme and would render this card light.
     */}

    {/* Title row */}
    <div className="flex items-start justify-between">
      <h1 className="font-primary text-[26px] leading-none text-[color:var(--DarkNeutral1000)]">
        UI magician Agent
      </h1>
      <HiOutlineCog
        size={28}
        className="shrink-0 text-[color:var(--DarkNeutral1000)]"
      />
    </div>

    {/* Collapsed section row */}
    <div className="mt-[36px] flex min-w-0 items-center gap-[16px]">
      <HiOutlineChevronUp
        size={20}
        className="shrink-0 text-[color:var(--DarkNeutral700)]"
      />
      <span className="truncate text-[18px] text-[color:var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[150px] flex items-center gap-[16px]">
      <HiOutlineChevronUp
        size={24}
        className="shrink-0 text-[color:var(--DarkNeutral1000)]"
      />
      <h2 className="font-primary text-[22px] leading-none text-[color:var(--DarkNeutral1000)]">
        Add New Design
      </h2>
    </div>

    {/* Fields */}
    <div className="mt-[40px] flex flex-col gap-[20px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    {/* Actions */}
    <div className="mt-[48px] flex justify-center gap-[34px]">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    {/* Footer heading */}
    <h2 className="mt-[110px] font-primary text-[22px] leading-none text-[color:var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-[16px]">
    <div className="flex items-center gap-[14px]">
      <span className="text-[19px] text-[color:var(--DarkNeutral800)]">
        {label}
      </span>
      <HiOutlineInformationCircle
        size={19}
        className="shrink-0 text-[color:var(--DarkNeutral700)]"
      />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="h-[56px] w-full rounded-none border border-[color:var(--DarkNeutral500)] bg-[color:var(--DarkNeutral100)] px-[16px] text-[17px] text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)]"
    />
  </div>
);

const CardButton = ({ children }: CardButtonProps): JSX.Element => (
  <button
    type="button"
    className="w-[168px] rounded-[10px] bg-[color:var(--Orange800)] py-[18px] text-[20px] text-[color:var(--Orange200)]"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface CardButtonProps {
  children: string;
}
