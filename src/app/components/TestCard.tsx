import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const TOKEN_FIELD_ID = "testCardToken";
const DESIGN_URL_FIELD_ID = "testCardDesignUrl";

const FIELD_CLASSES =
  "w-full rounded bg-background-input p-3 font-primary text-sm text-font outline outline-2 outline-border-input placeholder:text-font-subtlest focus-visible:outline-border-brand";

const BUTTON_CLASSES =
  "flex-1 rounded bg-[#9b3d16] px-4 py-3 font-primary text-sm text-white hover:bg-[#8a3613] active:bg-[#7a2f10]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex max-w-[508px] flex-col gap-6 rounded-md bg-elevation-surface p-6"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-lg text-font">UI magician Agent</h2>
      <span aria-hidden="true" className="text-icon">
        <RiSettings3Line size={20} />
      </span>
    </div>

    <div className="flex items-center gap-2">
      <RiArrowUpSLine
        aria-hidden="true"
        size={20}
        className="shrink-0 text-icon"
      />
      <p className="min-w-0 truncate font-primary text-sm text-font-subtle">
        From entire frame to a single frame
      </p>
    </div>

    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <RiArrowUpSLine
          aria-hidden="true"
          size={20}
          className="shrink-0 text-icon"
        />
        <h3 className="font-primary-bold text-base text-font">
          Add New Design
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={TOKEN_FIELD_ID}
          className="flex items-center gap-2 font-primary text-sm text-font"
        >
          Personal Access Token
          <RiInformationLine
            aria-hidden="true"
            size={16}
            className="text-icon-subtle"
          />
        </label>
        <input
          id={TOKEN_FIELD_ID}
          name="token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={DESIGN_URL_FIELD_ID}
          className="flex items-center gap-2 font-primary text-sm text-font"
        >
          Design URL
          <RiInformationLine
            aria-hidden="true"
            size={16}
            className="text-icon-subtle"
          />
        </label>
        <input
          id={DESIGN_URL_FIELD_ID}
          name="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={FIELD_CLASSES}
        />
      </div>

      <div className="flex gap-4">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>
    </section>

    <h3 className="font-primary-bold text-base text-font">
      Recent Breakdowns
    </h3>
  </div>
);
