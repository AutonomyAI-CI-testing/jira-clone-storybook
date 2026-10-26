import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface px-10 pb-24 pt-11 font-primary text-font"
  >
    <header className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-icon outline-none"
      >
        <LuSettings size={22} />
      </button>
    </header>

    <div className="mt-8 flex items-center gap-3 font-primary-light text-sm text-font-subtlest">
      <LuChevronUp size={16} />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <section className="mt-[120px]">
      <h2 className="flex items-center gap-3 font-primary-bold text-xl">
        <LuChevronUp size={18} />
        Add New Design
      </h2>

      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        className="mt-16"
      />

      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="mt-12"
      />

      <div className="ml-12 mt-16 flex gap-9">
        {BUTTON_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="w-[170px] rounded-lg bg-[#a0431e] py-5 font-primary text-base text-[#d9c7bd]"
          >
            {label}
          </button>
        ))}
      </div>
    </section>

    <section className="mt-[110px]">
      <h2 className="font-primary-bold text-xl">Recent Breakdowns</h2>
    </section>
  </div>
);

const Field = ({ id, label, placeholder, className }: FieldProps): JSX.Element => (
  <div className={className}>
    <label
      htmlFor={id}
      className="flex items-center gap-2 font-primary-light text-sm text-font-subtlest"
    >
      {label}
      <LuInfo size={16} role="img" aria-label={`About ${label}`} />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded border border-border-bold bg-background-input px-4 py-4 font-primary-light text-sm text-font outline-none placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
