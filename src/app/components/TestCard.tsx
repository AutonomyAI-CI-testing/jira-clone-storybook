import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const INPUT_CLASS =
  "mt-2.5 w-full rounded-[3px] border border-[#6b6b6b] bg-[#2b2b2b] px-4 py-3 text-[13px] text-[#c9c9c9] outline-none placeholder:text-[#8a8a8a] focus:border-[#9a9a9a]";

const BUTTON_CLASS =
  "cursor-pointer rounded-[6px] bg-[#9c3f1b] px-6 py-2.5 text-[15px] text-[#d0d0d0] transition-colors duration-100 hover:bg-[#8a3717]";

const FIELD_LABEL_CLASS = "flex items-center gap-2 text-[15px]";

function Field({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <div className={FIELD_LABEL_CLASS}>
        <label htmlFor={id}>{label}</label>
        <IoInformationCircleOutline
          size={17}
          className="shrink-0"
          aria-hidden="true"
        />
      </div>
      <input id={id} placeholder={placeholder} className={INPUT_CLASS} />
    </div>
  );
}

/**
 * Static reproduction of the "UI magician Agent" Figma panel.
 * Deliberately self-contained: no props, no state, no interactivity.
 */
export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[380px] bg-[#1e1e1e] p-5 font-primary text-[#c9c9c9]"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-[17px] leading-tight text-[#d7d7d7]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Open settings"
          className="shrink-0 cursor-pointer text-[#d7d7d7] transition-colors duration-100 hover:text-white"
        >
          <IoSettingsOutline size={20} />
        </button>
      </div>

      <div className="mt-4 flex min-w-0 items-center gap-1.5 text-[#9a9a9a]">
        <IoChevronUpOutline size={16} className="shrink-0" aria-hidden="true" />
        <span className="truncate text-[13px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-14 flex items-center gap-1.5 text-[#d7d7d7]">
        <IoChevronUpOutline size={20} className="shrink-0" aria-hidden="true" />
        <h2 className="font-primary-bold text-[19px] leading-tight">
          Add New Design
        </h2>
      </div>

      <div className="mt-7 space-y-6">
        <Field
          id="testElem-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testElem-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-7 flex gap-4">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h3 className="mt-14 text-[16px] text-[#8a8a8a]">Recent Breakdowns</h3>
    </div>
  );
}

export default TestCard;
