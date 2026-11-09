import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldClassName =
  "w-full rounded border border-border-bold bg-background-input p-4 text-sm placeholder:text-font-subtle";
const buttonClassName =
  "rounded-md bg-[var(--Orange800)] px-8 py-3 text-white hover:bg-[var(--Orange700)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-8 bg-elevation-surface p-10 font-primary text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <FiSettings aria-hidden="true" className="text-font-subtle" size={22} />
    </header>

    <div className="flex items-center gap-3 text-font-subtle">
      <FiChevronUp aria-hidden="true" size={20} />
      <span className="text-sm">From entire frame to a singl...</span>
    </div>

    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <FiChevronUp aria-hidden="true" size={22} />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label className="text-sm" htmlFor="personal-access-token">
            Personal Access Token
          </label>
          <FiInfo aria-hidden="true" className="text-font-subtle" size={18} />
        </div>
        <input
          className={fieldClassName}
          id="personal-access-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label className="text-sm" htmlFor="design-url">
            Design URL
          </label>
          <FiInfo aria-hidden="true" className="text-font-subtle" size={18} />
        </div>
        <input
          className={fieldClassName}
          id="design-url"
          placeholder="https://www.figma.com/file/"
          type="text"
        />
      </div>

      <div className="flex gap-4 pt-2">
        <button className={buttonClassName} type="button">
          Awesome
        </button>
        <button className={buttonClassName} type="button">
          Prepare
        </button>
      </div>
    </section>

    <h2 className="font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
