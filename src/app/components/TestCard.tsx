import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const PANEL_BG = "bg-[#1c1c1c]";
const TEXT_BRIGHT = "text-[#e8e8e8]";
const TEXT_DEFAULT = "text-[#dcdcdc]";
const TEXT_MUTED = "text-[#9a9a9a]";

const FIELD_LABEL_CLASS = `text-[21px] text-[#cfcfcf]`;
const FIELD_INPUT_CLASS = `mt-4 h-[68px] w-full rounded-[4px] border border-[#6b6b6b] bg-[#242424] px-6 text-[15px] ${TEXT_DEFAULT} placeholder:text-[#8a8a8a]`;
const ACTION_BUTTON_CLASS = `h-[75px] w-[170px] rounded-[10px] bg-[#a63c1b] text-[21px] ${TEXT_MUTED}`;

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className={FIELD_LABEL_CLASS}>
        {label}
      </label>
      <FaInfoCircle size={22} className="text-[#cfcfcf]" aria-hidden="true" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={FIELD_INPUT_CLASS}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={`w-[508px] ${PANEL_BG} px-10 py-10 font-primary ${TEXT_DEFAULT}`}
  >
    <div className="flex items-center justify-between">
      <h1 className={`text-[26px] font-primary-bold ${TEXT_BRIGHT}`}>
        UI magician Agent
      </h1>
      <FaCog size={26} className={TEXT_DEFAULT} aria-hidden="true" />
    </div>

    <div className={`mt-6 flex items-center gap-3 text-[19px] ${TEXT_MUTED}`}>
      <FaChevronUp size={18} className="shrink-0" aria-hidden="true" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className={`mt-16 flex items-center gap-2 text-[26px] ${TEXT_DEFAULT}`}>
      <FaChevronUp size={22} className="shrink-0" aria-hidden="true" />
      <h2 className="font-primary-bold">Add New Design</h2>
    </div>

    <div className="mt-10">
      <Field
        id="figma-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-8">
      <Field
        id="figma-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-9">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-28 text-[24px] font-primary-bold ${TEXT_MUTED}`}>
      Recent Breakdowns
    </h2>
  </div>
);
