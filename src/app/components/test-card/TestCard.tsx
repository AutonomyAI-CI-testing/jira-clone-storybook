import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

// Fixed dark panel: the design is a dark surface, so the root pins the `dark`
// theme and declares its own surface and text colours.
const rootClass =
  "dark flex w-[508px] flex-col gap-8 bg-elevation-surface px-10 py-8 text-font";

const labelRowClass = "mb-2 flex items-center gap-2";

const labelClass = "font-primary-bold text-base";

const inputClass =
  "w-full rounded border border-border-bold bg-elevation-surface-raised p-3 font-primary text-base text-font placeholder:text-font-subtlest";

// No semantic role exists for the design's rust fill, so the raw palette is
// used through an arbitrary value.
const buttonClass =
  "flex-1 cursor-pointer rounded bg-[var(--Orange800)] px-6 py-4 font-primary-bold text-lg text-[color:var(--Orange1000)]";

const sectionTitleClass = "flex items-center gap-3 font-primary-bold text-xl";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={rootClass}>
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <HiOutlineCog aria-hidden="true" className="text-icon" size={24} />
    </div>

    <div className="flex items-center gap-3 text-font-subtle">
      <HiChevronUp aria-hidden="true" size={18} />
      <span className="font-primary text-base">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-8 flex flex-col gap-6">
      <h2 className={sectionTitleClass}>
        <HiChevronUp aria-hidden="true" size={20} />
        Add New Design
      </h2>

      <div>
        <div className={labelRowClass}>
          <label htmlFor="test-card-token" className={labelClass}>
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            aria-hidden="true"
            className="text-icon-subtle"
            size={18}
          />
        </div>
        <input
          id="test-card-token"
          name="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      <div>
        <div className={labelRowClass}>
          <label htmlFor="test-card-design-url" className={labelClass}>
            Design URL
          </label>
          <HiOutlineInformationCircle
            aria-hidden="true"
            className="text-icon-subtle"
            size={18}
          />
        </div>
        <input
          id="test-card-design-url"
          name="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </div>

      <div className="flex gap-8">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-8 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);
