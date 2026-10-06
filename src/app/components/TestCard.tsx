import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const FIELDS = [
  {
    id: "testElem-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] max-w-full flex-col bg-[var(--DarkNeutral-100)] px-10 py-10 font-primary text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] leading-none text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <FaCog aria-hidden="true" size={22} />
    </div>

    <div className="mt-8 flex items-center gap-2">
      <FaChevronUp aria-hidden="true" size={14} className="shrink-0" />
      <span className="truncate text-[15px] text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-36 flex items-center gap-2 font-primary-bold text-[19px] text-[var(--DarkNeutral1000)]">
      <FaChevronUp aria-hidden="true" size={18} className="shrink-0" />
      Add New Design
    </h2>

    <div className="mt-8 flex flex-col gap-6">
      {FIELDS.map(({ id, label, placeholder }) => (
        <div key={id} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <label
              htmlFor={id}
              className="font-primary-bold text-[15px] text-[var(--DarkNeutral900)]"
            >
              {label}
            </label>
            <FaInfoCircle aria-hidden="true" size={15} className="shrink-0" />
          </div>
          <input
            id={id}
            type="text"
            placeholder={placeholder}
            className="w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral250)] px-4 py-4 text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]"
          />
        </div>
      ))}
    </div>

    <div className="mt-10 flex gap-3">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="flex-1 rounded-md bg-[var(--Orange800)] py-4 font-primary-bold text-base text-[var(--Orange900)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-14 font-primary-bold text-[19px] text-[var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h2>
  </div>
);
