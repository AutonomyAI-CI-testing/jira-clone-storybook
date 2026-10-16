import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ICON_CLASSES = "shrink-0 text-[#c9c9c9]";
const INPUT_CLASSES =
  "h-16 w-full rounded-md border border-[#9a9a9a] bg-[#242424] px-4 text-lg text-[#e6e6e6] placeholder:text-[#8f8f8f]";
const BUTTON_CLASSES = "h-16 flex-1 rounded-lg bg-[#a83d12] text-lg text-[#e8c4b4]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col bg-[#1b1b1b] p-10 text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
        <FiSettings aria-hidden="true" className={`h-7 w-7 ${ICON_CLASSES}`} />
      </div>

      <div className="mt-10 flex items-center gap-3 pl-3 text-lg text-[#a0a0a0]">
        <FiChevronUp aria-hidden="true" className={`h-5 w-5 ${ICON_CLASSES}`} />
        <span className="min-w-0 truncate">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-20 flex items-center gap-3 pl-3">
        <FiChevronUp aria-hidden="true" className={`h-5 w-5 ${ICON_CLASSES}`} />
        <h3 className="font-primary-bold text-2xl">Add New Design</h3>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        <Field
          id="testElem-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testElem-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      <h3 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h3>
    </div>
  );
};

const Field = ({ id, label, placeholder }: FieldProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-8 text-lg" htmlFor={id}>
        <span>{label}</span>
        <FiInfo aria-hidden="true" className={`h-6 w-6 ${ICON_CLASSES}`} />
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className={INPUT_CLASSES}
      />
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
