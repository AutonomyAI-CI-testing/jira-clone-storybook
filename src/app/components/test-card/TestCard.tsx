import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSES =
  "w-full border border-[#8a8a8a] bg-[#232323] px-5 py-4 text-lg text-[#8a8a8a] placeholder:text-[#8a8a8a] focus:outline-none";

const ACTION_CLASSES =
  "flex-1 rounded-[10px] bg-[#96421a] py-5 text-lg text-[#b3a49b] hover:bg-[#a84a1f]";

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[468px] flex-col bg-[#1a1a1a] px-5 py-7 font-primary text-white"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex cursor-pointer text-[#d0d0d0]"
      >
        <FiSettings size={22} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-2 text-[#8a8a8a]">
      <FiChevronUp size={20} className="shrink-0" />
      <span className="truncate font-primary-light text-base">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp size={26} className="shrink-0 text-[#d0d0d0]" />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

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

    <div className="mt-12 flex gap-4">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={ACTION_CLASSES}>
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-20 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8 flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary text-lg text-[#d0d0d0]">
        {label}
      </label>
      <FiInfo
        size={20}
        className="text-[#d0d0d0]"
        aria-label="More information"
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={FIELD_CLASSES}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
