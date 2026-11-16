import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldInputClass =
  "mt-2 h-11 w-full rounded-sm border border-[#4a4a4a] bg-[#2b2b2b] px-3 text-sm text-[#d6d6d6] placeholder:text-[#8a8a8a]";

const actionButtonClass =
  "h-11 w-[130px] rounded-md bg-[#a8451f] text-sm text-[#d9c9c0] hover:bg-[#933a1a]";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center gap-2">
      <label className="text-base text-[#cfcfcf]" htmlFor={id}>
        {label}
      </label>
      <FiInfo aria-hidden className="text-[15px] text-[#a8a8a8]" />
    </div>
    <input id={id} className={fieldInputClass} placeholder={placeholder} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[420px] bg-[#1e1e1e] px-6 py-8 font-primary text-[#d6d6d6]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-lg font-primary-bold text-[#e4e4e4]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-[22px] text-[#c9c9c9]"
      >
        <FiSettings aria-hidden />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp aria-hidden className="shrink-0 text-[18px] text-[#b0b0b0]" />
      <span className="truncate text-sm text-[#8a8a8a]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <FiChevronUp aria-hidden className="shrink-0 text-[20px] text-[#d0d0d0]" />
      <h2 className="text-lg font-primary-bold text-[#dcdcdc]">
        Add New Design
      </h2>
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

    <div className="mt-6 flex justify-center gap-6">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-10 text-base text-[#9a9a9a]">Recent Breakdowns</h2>
  </div>
);
