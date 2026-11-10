import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_LABEL_CLASS = "flex items-center gap-3 text-[#d4d4d4]";

const INPUT_CLASS =
  "mt-6 w-full rounded border border-[#4a4a4a] bg-[#232323] px-6 py-4 text-[#d4d4d4] placeholder:text-[#8a8a8a]";

const BUTTON_CLASS =
  "rounded-md bg-[#9c3a16] px-8 py-5 text-lg text-[#e7e5e4]";

const ACTIONS = ["Awesome", "Prepare"];

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className={FIELD_LABEL_CLASS}>
      <label htmlFor={id}>{label}</label>
      <FiInfo aria-hidden="true" size={18} />
    </div>
    <input id={id} type="text" placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[#1a1a1a] px-10 pt-10 pb-32 font-primary text-base text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between gap-4">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <FiSettings aria-hidden="true" size={22} className="mt-1 shrink-0" />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#a3a3a3]">
      <FiChevronUp aria-hidden="true" size={18} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" size={18} className="shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-16 space-y-10">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex justify-end gap-8">
      {ACTIONS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASS}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);

export default TestCard;
