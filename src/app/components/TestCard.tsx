import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
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

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral100)] px-10 pt-11 pb-40 font-primary text-base text-[color:var(--DarkNeutral900)]"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="cursor-pointer">
          <FiSettings aria-hidden="true" size={22} />
        </button>
      </div>

      <div className="mt-8 flex items-center gap-3">
        <FiChevronUp
          aria-hidden="true"
          size={18}
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
        />
        <p className="min-w-0 truncate text-[color:var(--DarkNeutral800)]">
          From entire frame to a singl…
        </p>
      </div>

      <h2 className="mt-40 flex items-center gap-3 font-primary-bold text-xl">
        <FiChevronUp aria-hidden="true" size={20} className="shrink-0" />
        Add New Design
      </h2>

      {FIELDS.map((field, index) => (
        <div key={field.id} className={index === 0 ? "mt-16" : "mt-11"}>
          <div className="flex items-center gap-8">
            <label htmlFor={field.id}>{field.label}</label>
            <FiInfo aria-hidden="true" size={20} />
          </div>
          <input
            id={field.id}
            type="text"
            placeholder={field.placeholder}
            className="mt-4 h-[50px] w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-5 placeholder:text-[color:var(--DarkNeutral800)]"
          />
        </div>
      ))}

      <div className="mt-11 flex justify-center gap-8">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="h-14 w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] text-base"
          >
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

export default TestCard;
