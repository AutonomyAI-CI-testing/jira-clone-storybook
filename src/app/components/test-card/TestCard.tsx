import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const FIELD_CLASSES =
  "w-full rounded border border-border-bold bg-background-input p-3 font-primary-light text-base text-font outline-none placeholder:text-font-subtlest";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-full max-w-[508px] bg-elevation-surface px-8 py-6 text-font"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-font">UI magician Agent</h1>
      <FaCog aria-hidden className="h-6 w-6 text-icon" />
    </header>

    <div className="mt-4 flex items-center gap-3 border-b border-border pb-4">
      <FaChevronUp aria-hidden className="h-4 w-4 shrink-0 text-icon" />
      <p className="truncate font-primary-light text-lg text-font-subtle">
        From entire frame to a singl...
      </p>
    </div>

    <section className="mt-10 flex flex-col gap-6">
      <h2 className="flex items-center gap-3 font-primary-bold text-2xl text-font">
        <FaChevronUp aria-hidden className="h-5 w-5 shrink-0 text-icon" />
        Add New Design
      </h2>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label className="font-primary text-lg text-font-subtle" htmlFor="testcard-token">
            Personal Access Token
          </label>
          <FaInfoCircle aria-hidden className="h-5 w-5 text-icon" />
        </div>
        <input
          className={FIELD_CLASSES}
          id="testcard-token"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <label className="font-primary text-lg text-font-subtle" htmlFor="testcard-design-url">
            Design URL
          </label>
          <FaInfoCircle aria-hidden className="h-5 w-5 text-icon" />
        </div>
        <input
          className={FIELD_CLASSES}
          id="testcard-design-url"
          placeholder="https://www.figma.com/file/"
          type="text"
        />
      </div>

      <div className="flex justify-center gap-8">
        <button
          className="h-[72px] w-[170px] rounded-lg bg-[#a54a20] font-primary text-lg text-[#e3c3b0]"
          type="button"
        >
          Awesome
        </button>
        <button
          className="h-[72px] w-[170px] rounded-lg bg-[#a54a20] font-primary text-lg text-[#e3c3b0]"
          type="button"
        >
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-12 font-primary-bold text-2xl text-font">Recent Breakdowns</h2>
  </div>
);
