import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="flex cursor-pointer items-center justify-center rounded text-icon"
        >
          <FaCog size={26} />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-font-subtle">
        <FaChevronUp size={16} aria-hidden />
        <span className="truncate text-lg">From entire frame to a singl...</span>
      </div>

      <h2 className="mt-[72px] flex items-center gap-2 font-primary-bold text-2xl">
        <FaChevronUp size={18} aria-hidden />
        Add New Design
      </h2>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-access-token"
            className="text-lg text-font-subtle"
          >
            Personal Access Token
          </label>
          <FaInfoCircle size={20} className="text-icon-subtle" aria-hidden />
        </div>
        <input
          id="test-card-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded-md border-2 border-border-bold bg-background-input px-8 py-5 font-primary-light text-lg tracking-wide text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label
            htmlFor="test-card-design-url"
            className="text-lg text-font-subtle"
          >
            Design URL
          </label>
          <FaInfoCircle size={20} className="text-icon-subtle" aria-hidden />
        </div>
        <input
          id="test-card-design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 w-full rounded-md border-2 border-border-bold bg-background-input px-8 py-5 font-primary-light text-lg tracking-wide text-font placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-10 flex justify-end gap-4">
        <button
          type="button"
          className="w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] px-8 py-5 text-lg text-[var(--Orange200)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] px-8 py-5 text-lg text-[var(--Orange200)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
    </div>
  );
};
