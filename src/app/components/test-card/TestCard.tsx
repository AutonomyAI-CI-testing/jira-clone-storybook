import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    id: "test-card-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const FIELD_CLASS =
  "mt-3 h-[73px] w-full border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral100)] px-6 text-xl text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

const ACTION_CLASS =
  "h-[71px] w-[168px] rounded-md bg-[var(--Red800)] font-primary-bold text-xl text-[var(--Neutral300)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-10 py-10 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-black text-[28px] leading-tight">
        UI magician Agent
      </h2>
      <button type="button" aria-label="Open settings">
        <FiSettings size={30} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-[var(--DarkNeutral700)]">
      <FiChevronUp size={22} />
      <span className="text-xl">From entire frame to a singl...</span>
    </div>

    <div className="mt-36">
      <div className="flex items-center gap-3">
        <FiChevronUp size={26} />
        <h3 className="font-primary-bold text-2xl">Add New Design</h3>
      </div>

      {FIELDS.map((field, index) => (
        <div key={field.id} className={index === 0 ? "mt-10" : "mt-8"}>
          <div className="flex items-center gap-4">
            <label htmlFor={field.id} className="text-xl">
              {field.label}
            </label>
            <FiInfo
              role="img"
              aria-label={`More information about ${field.label}`}
              size={24}
            />
          </div>
          <input
            id={field.id}
            type="text"
            placeholder={field.placeholder}
            className={FIELD_CLASS}
          />
        </div>
      ))}
    </div>

    <div className="mt-12 flex justify-center gap-9">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={ACTION_CLASS}>
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-28 font-primary-bold text-2xl">Recent Breakdowns</h3>
  </div>
);
