import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ICON_CLASS = "shrink-0 text-[#c8c8c8]";
const SECTION_HEADING_CLASS =
  "flex items-center gap-3 text-[24px] text-[#d4d4d4]";
const FIELD_LABEL_CLASS = "text-[19px]";
const INPUT_CLASS =
  "h-[68px] w-full rounded-sm border border-[#4d4d4d] bg-[#242424] px-5 text-[19px] text-[#8a8a8a] outline-none placeholder:text-[#8a8a8a]";
const BUTTON_CLASS =
  "h-[66px] w-[170px] rounded-lg bg-[#9e3d1c] text-[19px] text-[#8f8f8f]";

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-6">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className={FIELD_LABEL_CLASS}>
        {label}
      </label>
      <FiInfo size={26} className={ICON_CLASS} aria-hidden="true" />
    </div>
    <input id={id} className={INPUT_CLASS} placeholder={placeholder} />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1e1e1e] px-11 pt-11 pb-28 font-primary text-[#a8a8a8]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[28px] text-[#d4d4d4]">UI magician Agent</h1>
      <button type="button" aria-label="Settings" className={ICON_CLASS}>
        <FiSettings size={28} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-3">
      <FiChevronUp size={22} className={ICON_CLASS} aria-hidden="true" />
      <span className={FIELD_LABEL_CLASS}>From entire frame to a singl...</span>
    </div>

    <h2 className={`mt-[150px] ${SECTION_HEADING_CLASS}`}>
      <FiChevronUp size={26} className={ICON_CLASS} aria-hidden="true" />
      Add New Design
    </h2>

    <div className="mt-16 flex flex-col gap-6">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />
    </div>

    <div className="mt-12 flex gap-[35px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-[100px] ${SECTION_HEADING_CLASS}`}>
      Recent Breakdowns
    </h2>
  </div>
);
