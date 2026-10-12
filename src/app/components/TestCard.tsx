import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const inputClass =
  "w-full rounded-sm border border-[#5c5c5c] bg-[#2a2a2a] px-3 py-3 text-sm text-[#e6e6e6] placeholder:text-[#8a8a8a]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="flex items-center gap-2 text-sm">
      {label}
      <FiInfo aria-hidden size={16} className="text-[#c9c9c9]" />
    </label>
    <input id={id} type="text" placeholder={placeholder} className={inputClass} />
  </div>
);

const RustButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="flex-1 rounded bg-[#9a4a22] px-4 py-3 text-sm text-white"
  >
    {label}
  </button>
);

const SectionHeading = ({ children }: { children: string }): JSX.Element => (
  <div className="flex items-center gap-2">
    <FiChevronUp aria-hidden size={18} className="shrink-0 text-[#c9c9c9]" />
    <h2 className="font-primary-bold text-base">{children}</h2>
  </div>
);

/**
 * Static reproduction of the "UI magician Agent" settings frame.
 * Self-contained by design — no props, no state, no data — it exists only as a
 * smoke test for the design-to-component path.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[320px] flex-col gap-4 rounded bg-[#1b1b1b] p-5 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <FiSettings aria-hidden size={22} className="text-[#c9c9c9]" />
    </div>

    <div className="flex items-center gap-2">
      <FiChevronUp aria-hidden size={18} className="shrink-0 text-[#c9c9c9]" />
      <span className="truncate text-sm text-[#9a9a9a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-6">
      <SectionHeading>Add New Design</SectionHeading>
    </div>

    <Field
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
    />

    <Field
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file:"
    />

    <div className="flex gap-3">
      <RustButton label="Awesome" />
      <RustButton label="Prepare" />
    </div>

    <h2 className="mt-8 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
