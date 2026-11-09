import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldClass =
  "w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral100)] px-6 py-5 font-primary text-base text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]";

const buttonClass =
  "flex h-[68px] w-[168px] items-center justify-center rounded-lg bg-[var(--Orange800)] font-primary text-base text-[color:var(--DarkNeutral1000)]";

const fields = [
  {
    id: "test-card-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-10 pb-16 pt-12 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h2>
      <FiSettings
        aria-hidden="true"
        className="shrink-0 text-[color:var(--DarkNeutral900)]"
        size={26}
      />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[color:var(--DarkNeutral800)]">
      <FiChevronUp aria-hidden="true" className="shrink-0" size={22} />
      <span className="min-w-0 truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-36 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-[color:var(--DarkNeutral900)]"
        size={26}
      />
      <h3 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h3>
    </div>

    <div className="mt-16 flex flex-col gap-6">
      {fields.map((field) => (
        <div key={field.id}>
          <div className="flex items-center gap-3">
            <label
              className="font-primary text-base text-[color:var(--DarkNeutral800)]"
              htmlFor={field.id}
            >
              {field.label}
            </label>
            <FiInfo
              aria-hidden="true"
              className="shrink-0 text-[color:var(--DarkNeutral800)]"
              size={20}
            />
          </div>
          <input
            className={`${fieldClass} mt-6`}
            id={field.id}
            placeholder={field.placeholder}
            type="text"
          />
        </div>
      ))}
    </div>

    <div className="mt-10 flex justify-center gap-8">
      <button className={buttonClass} type="button">
        Awesome
      </button>
      <button className={buttonClass} type="button">
        Prepare
      </button>
    </div>

    <h3 className="mt-28 font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h3>
  </div>
);
