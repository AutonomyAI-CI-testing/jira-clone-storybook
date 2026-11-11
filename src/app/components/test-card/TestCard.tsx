import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static, self-contained card used as a rendering smoke test.
 *
 * It is a standalone panel: it takes no props, holds no state and is not wired
 * to any data. Its colours and sizes are approximations of the supplied design
 * reference rather than design-system tokens, because the reference sits
 * outside this product's palette.
 */

const FIELD_LABEL_CLASS = "flex items-center gap-3 text-[16px] text-[#d5d5d5]";

const FIELD_INPUT_CLASS =
  "mt-6 w-full rounded-[4px] border border-[#9e9e9e] bg-[#232323] px-[18px] py-[14px] text-[16px] text-[#d5d5d5] outline-none placeholder:text-[#7a7a7a]";

const BUTTON_CLASS =
  "rounded-[6px] bg-[#a0431f] px-12 py-4 text-[17px] text-[#8f8f8f]";

const SECTION_HEADING_CLASS = "font-primary-bold text-[20px] text-[#e3e3e3]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <label htmlFor={id} className={FIELD_LABEL_CLASS}>
      {label}
      <FiInfo size={22} aria-hidden className="shrink-0" />
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={FIELD_INPUT_CLASS}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-10 py-10 font-primary text-[#d5d5d5]"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-[24px] leading-none text-[#e3e3e3]">
        UI magician Agent
      </h2>
      <FiSettings
        size={26}
        aria-hidden
        className="mt-0.5 shrink-0 text-[#d0d0d0]"
      />
    </div>

    <div className="mt-9 flex items-center gap-3 text-[17px] text-[#9a9a9a]">
      <FiChevronUp size={20} aria-hidden className="shrink-0" />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <FiChevronUp size={22} aria-hidden className="shrink-0 text-[#e3e3e3]" />
      <h3 className={SECTION_HEADING_CLASS}>Add New Design</h3>
    </div>

    <div className="mt-16 flex flex-col gap-8">
      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-9">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-28 font-primary-bold text-[20px] text-[#e3e3e3]">
      Recent Breakdowns
    </h3>
  </div>
);
