import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[320px] flex-col rounded-lg bg-[#1b1b1b] p-5 font-primary text-[#f2f2f2]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <FiSettings
        aria-hidden="true"
        size={18}
        className="shrink-0 text-[#9e9e9e]"
      />
    </div>

    <div className="mt-3 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        size={16}
        className="shrink-0 text-[#d4d4d4]"
      />
      <span className="min-w-0 truncate font-primary-light text-sm text-[#9e9e9e]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <FiChevronUp
        aria-hidden="true"
        size={18}
        className="shrink-0 text-[#f2f2f2]"
      />
      <h3 className="font-primary-bold text-base">Add New Design</h3>
    </div>

    <Field
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-6 flex gap-3">
      <button
        type="button"
        className="rounded bg-[#8f4a24] px-5 py-2.5 font-primary text-sm text-[#f2f2f2]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[#8f4a24] px-5 py-2.5 font-primary text-sm text-[#f2f2f2]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-10 font-primary-bold text-base">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-4">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-sm text-[#9e9e9e]">
        {label}
      </label>
      <FiInfo aria-hidden="true" size={16} className="shrink-0 text-[#9e9e9e]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded border border-[#3a3a3a] bg-[#262626] px-3 py-2.5 font-primary-light text-sm text-[#f2f2f2] placeholder:text-[#8a8a8a]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
