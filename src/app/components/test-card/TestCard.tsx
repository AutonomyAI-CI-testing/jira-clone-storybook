import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
        <FiSettings aria-hidden size={28} className="text-icon" />
      </div>

      <div className="mt-6 flex items-center gap-2 text-lg text-font-subtle">
        <FiChevronUp aria-hidden size={24} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-24">
        <h2 className="flex items-center gap-3 font-primary-bold text-2xl">
          <FiChevronUp aria-hidden size={26} />
          Add New Design
        </h2>

        <div className="mt-10 flex flex-col gap-6">
          {FIELDS.map(({ id, label, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="flex items-center gap-3 text-lg">
                {label}
                <FiInfo aria-hidden size={20} className="text-icon-subtle" />
              </label>
              <input
                id={id}
                readOnly
                placeholder={placeholder}
                className="mt-3 h-[60px] w-full rounded border-2 border-border-bold bg-elevation-surface-raised px-4 text-lg placeholder:text-font-subtle"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-8">
          {ACTIONS.map((label) => (
            <button
              key={label}
              type="button"
              className="h-[70px] flex-1 rounded bg-[var(--Orange800)] text-lg hover:bg-[var(--Orange900)]"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <h2 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
};
