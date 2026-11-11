import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldInputClass =
  "mt-2 w-full rounded-sm border border-[#6f6f6f] bg-[#252525] px-4 py-3 text-[14px] leading-5 text-[#8a8a8a] outline-none placeholder:text-[#8a8a8a]";

const actionButtonClass =
  "w-[150px] rounded-lg bg-[#9e3f1e] py-3 font-primary-bold text-[15px] leading-5 text-[#a8a8a8]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-bold text-[14px] leading-5 text-[#a3a3a3]"
      >
        {label}
      </label>
      <FiInfo size={15} aria-hidden className="shrink-0 text-[#d4d4d4]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={fieldInputClass}
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
    className="w-[480px] bg-[#1c1c1c] px-6 pt-8 pb-10 font-primary text-[#d4d4d4]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[17px] leading-6">
        UI magician Agent
      </h2>
      <FiSettings
        size={20}
        aria-hidden
        className="mt-px shrink-0 text-[#d4d4d4]"
      />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <FiChevronUp size={16} aria-hidden className="shrink-0 text-[#a3a3a3]" />
      <span className="truncate text-[15px] leading-6 text-[#a3a3a3]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16">
      <div className="flex items-center gap-2">
        <FiChevronUp size={18} aria-hidden className="shrink-0" />
        <h3 className="font-primary-bold text-[17px] leading-6">
          Add New Design
        </h3>
      </div>

      <div className="mt-6 flex flex-col gap-4">
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

      <div className="mt-6 flex gap-4">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className="mt-16 font-primary-bold text-[17px] leading-6">
      Recent Breakdowns
    </h3>
  </div>
);

export default TestCard;
