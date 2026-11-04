import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-8 bg-[var(--DarkNeutral0)] px-10 py-12 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <button type="button" aria-label="Settings">
        <FiSettings aria-hidden className="h-6 w-6" />
      </button>
    </header>

    <button
      type="button"
      className="flex items-center gap-3 text-left text-sm text-[color:var(--DarkNeutral700)]"
    >
      <FiChevronUp aria-hidden className="h-5 w-5 shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </button>

    <section className="flex flex-col gap-6">
      <button type="button" className="flex items-center gap-3 text-left">
        <FiChevronUp aria-hidden className="h-6 w-6 shrink-0" />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </button>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-5 pt-2">
        <button
          type="button"
          className="rounded-lg bg-[var(--Orange800)] px-8 py-4"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[var(--Orange800)] px-8 py-4"
        >
          Prepare
        </button>
      </div>
    </section>

    <h2 className="font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <span className="text-sm">{label}</span>
      <button type="button" aria-label={`About ${label}`}>
        <FiInfo aria-hidden className="h-5 w-5" />
      </button>
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className="h-14 w-full rounded-md border border-[color:var(--DarkNeutral400)] bg-transparent px-4 placeholder:text-[color:var(--DarkNeutral700)]"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
