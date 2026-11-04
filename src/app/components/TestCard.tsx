import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface px-9 py-9 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-2xl text-font">
          UI magician Agent
        </h2>
        <FaCog size={28} className="text-font-subtle" />
      </div>

      <div className="mt-8 flex items-center gap-3">
        <FaChevronUp size={18} className="text-font-subtle" />
        <span className="text-lg text-font-subtle">
          From entire frame to a singl...
        </span>
      </div>

      <section className="mt-[150px]">
        <div className="flex items-center gap-3">
          <FaChevronUp size={22} className="text-font" />
          <h3 className="font-primary-bold text-2xl text-font">
            Add New Design
          </h3>
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-2">
            <label htmlFor="access-token" className="text-lg text-font-subtle">
              Personal Access Token
            </label>
            <FaInfoCircle size={20} className="text-font" />
          </div>
          <input
            id="access-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
            className="mt-5 w-full rounded border border-border-bold bg-transparent px-4 py-5 text-lg text-font placeholder:text-font-subtlest"
          />
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2">
            <label htmlFor="design-url" className="text-lg text-font-subtle">
              Design URL
            </label>
            <FaInfoCircle size={20} className="text-font" />
          </div>
          <input
            id="design-url"
            type="text"
            placeholder="https://www.figma.com/file/"
            className="mt-5 w-full rounded border border-border-bold bg-transparent px-4 py-5 text-lg text-font placeholder:text-font-subtlest"
          />
        </div>

        <div className="mt-12 flex gap-9">
          <button
            type="button"
            className="w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] py-6 text-lg text-[var(--DarkNeutral900)] hover:bg-[var(--Orange900)] active:bg-[var(--Orange1000)]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] py-6 text-lg text-[var(--DarkNeutral900)] hover:bg-[var(--Orange900)] active:bg-[var(--Orange1000)]"
          >
            Prepare
          </button>
        </div>
      </section>

      <h3 className="mt-24 font-primary-bold text-2xl text-font">
        Recent Breakdowns
      </h3>
    </div>
  );
};
