import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const ACTION_LABELS = ["Awesome", "Prepare"];

function Field({ label, placeholder }: FieldProps) {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-3">
        <span className="text-sm">{label}</span>
        <HiOutlineInformationCircle
          aria-hidden="true"
          className="text-xl text-font-subtle"
        />
      </div>
      <input
        readOnly
        aria-label={label}
        placeholder={placeholder}
        className="mt-6 h-14 w-full rounded bg-elevation-surface-raised px-4 text-lg outline outline-1 outline-border-bold placeholder:text-font-subtlest"
      />
    </div>
  );
}

interface FieldProps {
  label: string;
  placeholder: string;
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-black text-xl">UI magician Agent</h1>
        <HiOutlineCog aria-hidden="true" className="text-2xl text-font-subtle" />
      </div>

      <div className="mt-6 flex items-center gap-2 font-primary-light text-sm text-font-subtle">
        <HiOutlineChevronUp aria-hidden="true" className="shrink-0 text-lg" />
        <span className="truncate">From entire frame to a single design</span>
      </div>

      <div className="h-44" />

      <div className="mb-3 flex items-center gap-2">
        <HiOutlineChevronUp aria-hidden="true" className="shrink-0 text-2xl" />
        <h2 className="font-primary-black text-2xl">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-14 flex gap-9">
        {ACTION_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="w-[170px] rounded-lg bg-[var(--Orange800)] py-5 font-primary-bold text-lg text-[var(--DarkNeutral1100)]"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="h-28" />

      <h2 className="font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  );
}
