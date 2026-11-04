import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const INPUT_CLASS =
  "w-full rounded border border-[var(--DarkNeutral400)] bg-transparent px-5 py-4 font-primary text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

const BUTTON_CLASS =
  "flex-1 rounded-md bg-[var(--Orange800)] px-6 py-4 font-primary text-lg text-[var(--DarkNeutral900)]";

const SECTION_TITLE_CLASS =
  "font-primary-bold text-2xl text-[var(--DarkNeutral1100)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] max-w-full bg-[var(--DarkNeutral0)] px-8 pb-10 pt-8 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h1 className={SECTION_TITLE_CLASS}>UI magician Agent</h1>
      <button
        type="button"
        aria-label="Agent settings"
        className="rounded p-1 text-[var(--DarkNeutral900)]"
      >
        <HiOutlineCog size={26} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-lg text-[var(--DarkNeutral800)]">
      <HiChevronUp size={20} className="shrink-0" aria-hidden />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <HiChevronUp size={22} className="shrink-0" aria-hidden />
      <h2 className={SECTION_TITLE_CLASS}>Add New Design</h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-4">
        <label
          htmlFor="test-card-token"
          className="text-lg text-[var(--DarkNeutral1000)]"
        >
          Personal Access Token
        </label>
        <span role="img" aria-label="More information about the access token">
          <HiOutlineInformationCircle size={22} />
        </span>
      </div>
      <input
        id="test-card-token"
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={`mt-3 ${INPUT_CLASS}`}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-4">
        <label
          htmlFor="test-card-url"
          className="text-lg text-[var(--DarkNeutral1000)]"
        >
          Design URL
        </label>
        <span role="img" aria-label="More information about the design URL">
          <HiOutlineInformationCircle size={22} />
        </span>
      </div>
      <input
        id="test-card-url"
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={`mt-3 ${INPUT_CLASS}`}
      />
    </div>

    <div className="mt-8 flex gap-9">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-16 ${SECTION_TITLE_CLASS}`}>Recent Breakdowns</h2>
  </div>
);
