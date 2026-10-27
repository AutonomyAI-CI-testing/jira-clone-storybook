import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// Smoke-test component: a static reproduction of the attached Figma frame.
// Self-contained — no props, no state, nothing interactive.
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-8 bg-[#1e1e1e] p-6 font-primary text-[#c9c9c9]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button type="button" aria-label="Settings">
        <FiSettings size={24} />
      </button>
    </div>

    <div className="flex items-center gap-3 text-[#8b8b8b]">
      <FiChevronUp size={20} className="shrink-0" aria-hidden />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="flex flex-col gap-6">
      <SectionHeader>Add New Design</SectionHeader>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-8">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="rounded bg-[#a9431a] px-10 py-3 font-primary text-[#f5ece7] transition-colors hover:bg-[#bd4c1e]"
          >
            {label}
          </button>
        ))}
      </div>
    </div>

    <SectionHeader>Recent Breakdowns</SectionHeader>
  </div>
);

const SectionHeader = ({ children }: { children: string }): JSX.Element => (
  <div className="flex items-center gap-3">
    <FiChevronUp size={20} className="shrink-0" aria-hidden />
    <h3 className="font-primary-bold text-lg">{children}</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <label htmlFor={id}>{label}</label>
      <FiInfo size={20} aria-label={`More information about ${label}`} />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className="w-full rounded border border-[#5c5c5c] bg-[#232323] px-4 py-3 text-[#8b8b8b] outline-none placeholder:text-[#8b8b8b]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
