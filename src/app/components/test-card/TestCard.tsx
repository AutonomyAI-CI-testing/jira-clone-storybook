import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" settings
 * panel from the attached Figma frame.
 *
 * Smoke test only: no props, no state, no interactivity. The panel's colours
 * are written out here rather than taken from the semantic tokens, because the
 * tokens resolve per theme (light by default) and would not resemble this dark
 * editor panel. Nothing outside this file depends on them.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-9 pb-16 pt-8 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[#f0f0f0]">
        UI magician Agent
      </h1>
      <IoSettingsOutline size={24} aria-hidden className={MUTED_ICON_CLASS} />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <IoChevronUp size={20} aria-hidden className={MUTED_ICON_CLASS} />
      <span className="truncate font-primary-light text-base text-[#8c8c8c]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <IoChevronUp size={22} aria-hidden className={MUTED_ICON_CLASS} />
      <h2 className="font-primary-bold text-xl text-[#c8c8c8]">
        Add New Design
      </h2>
    </div>

    <div className="mt-8 flex flex-col gap-5">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-9 flex items-center gap-9">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-20 font-primary-bold text-xl text-[#c8c8c8]">
      Recent Breakdowns
    </h2>
  </div>
);

const MUTED_ICON_CLASS = "shrink-0 text-[#c8c8c8]";

const FIELD_LABEL_CLASS = "font-primary-light text-[15px] text-[#8c8c8c]";

const FIELD_INPUT_CLASS =
  "mt-3 w-full rounded border-2 border-[#5a5a5a] bg-[#2b2b2b] px-4 py-3 " +
  "font-primary-light text-[15px] text-[#f0f0f0] outline-none " +
  "placeholder:text-[#6a6a6a]";

const ACTION_BUTTON_CLASS =
  "w-[170px] rounded bg-[#a8430f] px-4 py-3 font-primary text-[15px] " +
  "text-[#c9beb8]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <span className={FIELD_LABEL_CLASS}>{label}</span>
      <IoInformationCircleOutline
        size={20}
        aria-hidden
        className={MUTED_ICON_CLASS}
      />
    </div>
    <input
      type="text"
      aria-label={label}
      placeholder={placeholder}
      className={FIELD_INPUT_CLASS}
    />
  </div>
);

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button type="button" className={ACTION_BUTTON_CLASS}>
    {label}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  label: string;
}
