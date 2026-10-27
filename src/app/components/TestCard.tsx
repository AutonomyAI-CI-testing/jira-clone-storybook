import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fields = [
  {
    id: "testElem-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
  },
];

const actions = ["Awesome", "Prepare"];

/**
 * Static reproduction of the "UI magician Agent" panel. Display only: no props,
 * no state and no handlers.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-screen w-full flex-col bg-[var(--DarkNeutral-100)] px-10 pt-10 pb-8 font-primary text-[color:var(--DarkNeutral1100)]"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer text-[color:var(--DarkNeutral1000)]"
      >
        <FiSettings aria-hidden className="h-7 w-7" />
      </button>
    </header>

    <div className="mt-6 flex items-center gap-5">
      <FiChevronUp
        aria-hidden
        className="h-5 w-5 shrink-0 text-[color:var(--DarkNeutral800)]"
      />
      <span className="min-w-0 flex-1 truncate text-lg text-[color:var(--DarkNeutral800)]">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-28">
      <div className="flex items-center gap-4">
        <FiChevronUp aria-hidden className="h-6 w-6 shrink-0" />
        <h2 className="font-primary-bold text-2xl">Add New Design</h2>
      </div>

      <div className="mt-10 space-y-6">
        {fields.map(({ id, label, placeholder }) => (
          <div key={id}>
            <div className="flex items-center gap-6">
              <label
                htmlFor={id}
                className="text-lg text-[color:var(--DarkNeutral1000)]"
              >
                {label}
              </label>
              <FiInfo
                aria-hidden
                className="h-6 w-6 shrink-0 text-[color:var(--DarkNeutral1000)]"
              />
            </div>
            <input
              id={id}
              readOnly
              placeholder={placeholder}
              className="mt-4 h-[72px] w-full border-2 border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-10 text-lg text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral700)]"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-8">
        {actions.map((action) => (
          <button
            key={action}
            type="button"
            className="h-[72px] w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] text-lg text-[color:var(--DarkNeutral900)]"
          >
            {action}
          </button>
        ))}
      </div>
    </section>

    <h2 className="mt-28 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
