import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const PANEL_CLASS =
  "flex w-[508px] flex-col gap-6 rounded-lg bg-[#1b1b1b] p-6 font-primary-light text-[#e8e8e8]";
const MUTED_TEXT_CLASS = "text-[#9a9a9a]";
const SECTION_TITLE_CLASS = "font-primary-bold text-lg";
const LABEL_CLASS = "flex items-center gap-2 text-sm text-[#c9c9c9]";
const INPUT_CLASS =
  "w-full rounded border border-[#6a6a6a] bg-[#141414] px-3 py-2.5 text-sm text-[#e8e8e8] placeholder:text-[#9a9a9a]";
const ACTION_BUTTON_CLASS =
  "flex-1 cursor-pointer rounded-lg bg-[#a8441d] px-6 py-3 font-primary-bold text-[#f6eae4]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <label className="flex flex-col gap-2">
    <span className={LABEL_CLASS}>
      {label}
      <FiInfo size={14} className="shrink-0" />
    </span>
    <input type="text" placeholder={placeholder} className={INPUT_CLASS} />
  </label>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button type="button" className={ACTION_BUTTON_CLASS}>
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL_CLASS}>
    <div className="flex items-center justify-between">
      <h2 className={SECTION_TITLE_CLASS}>UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex cursor-pointer items-center justify-center rounded-full p-1 text-[#c9c9c9] hover:text-[#e8e8e8]"
      >
        <FiSettings size={20} />
      </button>
    </div>

    <div className={`flex items-center gap-2 ${MUTED_TEXT_CLASS}`}>
      <FiChevronUp size={16} className="shrink-0" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <div className="mt-2 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FiChevronUp size={18} className="shrink-0" />
        <h3 className={SECTION_TITLE_CLASS}>Add New Design</h3>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="mt-2 flex gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </div>

    <h3 className={`mt-6 ${SECTION_TITLE_CLASS} text-[#c9c9c9]`}>
      Recent Breakdowns
    </h3>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: React.ReactNode;
}
