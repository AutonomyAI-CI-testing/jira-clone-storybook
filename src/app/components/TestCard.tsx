import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken p-10 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl text-font">UI magician Agent</h1>
      <FiSettings aria-hidden="true" size={24} className="text-icon" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <FiChevronUp
        aria-hidden="true"
        size={20}
        className="shrink-0 text-icon-subtle"
      />
      <span className="truncate text-lg">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-32">
      <div className="flex items-center gap-3">
        <FiChevronUp
          aria-hidden="true"
          size={20}
          className="shrink-0 text-icon-subtle"
        />
        <h2 className="font-primary-bold text-xl text-font">Add New Design</h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-10 flex justify-center gap-9">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-14 w-[172px] rounded-md bg-background-danger-bold font-primary-bold text-lg text-font-inverse"
          >
            {label}
          </button>
        ))}
      </div>
    </section>

    <h2 className="mt-28 font-primary-bold text-xl text-font">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <span className="text-base text-font-subtle">{label}</span>
      <FiInfo
        aria-hidden="true"
        size={20}
        className="shrink-0 text-icon-subtle"
      />
    </div>
    <input
      placeholder={placeholder}
      className="mt-3 h-14 w-full rounded border-2 border-border-bold bg-background-input px-5 text-base text-font outline-none placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
