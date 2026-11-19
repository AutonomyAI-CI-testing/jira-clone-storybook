import cx from "classix";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const FIELD_CLASSES =
  "mt-4 w-full rounded-md border border-border-bold bg-elevation-surface-raised px-8 py-5 text-base text-font placeholder:text-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand";

const LABEL_ROW_CLASSES = "flex items-center justify-between gap-4 text-base";

const ACTION_LABELS = ["Awesome", "Prepare"];

/**
 * Static smoke-test component built from a Figma frame. It takes no props and
 * holds no state: the fields and buttons are inert.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-elevation-surface-sunken px-[42px] py-10 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <IoSettingsOutline
        aria-hidden
        size={24}
        className="shrink-0 text-icon-subtle"
      />
    </div>

    <div className="mt-10 flex items-center gap-3 text-font-subtle">
      <IoChevronUpOutline aria-hidden size={20} className="shrink-0" />
      <span className="truncate text-base">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <IoChevronUpOutline aria-hidden size={20} className="shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className={cx("mt-16", LABEL_ROW_CLASSES)}>
      <span>Personal Access Token</span>
      <IoInformationCircleOutline
        aria-hidden
        size={20}
        className="shrink-0 text-icon-subtle"
      />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={FIELD_CLASSES}
    />

    <div className={cx("mt-8", LABEL_ROW_CLASSES)}>
      <span>Design URL</span>
      <IoInformationCircleOutline
        aria-hidden
        size={20}
        className="shrink-0 text-icon-subtle"
      />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={FIELD_CLASSES}
    />

    <div className="mt-14 flex justify-end gap-8">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="w-[172px] rounded-md bg-[#a94a22] px-4 py-4 font-primary-bold text-base text-font-inverse"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-20 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
