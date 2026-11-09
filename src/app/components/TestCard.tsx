import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    id: "testElem-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const FIELD_CLASS =
  "h-12 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-11 text-base text-[color:var(--DarkNeutral900)] outline-none placeholder:text-[color:var(--DarkNeutral700)]";

const BUTTON_CLASS =
  "h-14 w-[168px] rounded-md bg-[var(--Orange800)] text-base text-[color:var(--DarkNeutral1000)]";

const MUTED_TEXT_CLASS = "text-[color:var(--DarkNeutral700)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[var(--DarkNeutral0)] p-10 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl leading-6">UI magician Agent</h1>
      <FiSettings
        aria-hidden="true"
        className={`shrink-0 text-2xl ${MUTED_TEXT_CLASS}`}
      />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        className={`shrink-0 text-xl ${MUTED_TEXT_CLASS}`}
      />
      <span className={`truncate text-base ${MUTED_TEXT_CLASS}`}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp aria-hidden="true" className="shrink-0 text-xl" />
      <h2 className="font-primary-bold text-xl leading-7">Add New Design</h2>
    </div>

    {FIELDS.map(({ id, label, placeholder }) => (
      <div key={id} className="mt-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <label htmlFor={id} className="text-base">
            {label}
          </label>
          <FiInfo
            aria-hidden="true"
            className={`shrink-0 text-lg ${MUTED_TEXT_CLASS}`}
          />
        </div>
        <input id={id} readOnly placeholder={placeholder} className={FIELD_CLASS} />
      </div>
    ))}

    <div className="mt-10 flex justify-center gap-9">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={BUTTON_CLASS}>
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-20 font-primary-bold text-xl leading-7">
      Recent Breakdowns
    </h2>
  </div>
);
