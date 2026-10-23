import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const Field = ({ id, label, placeholder, hint }: FieldProps) => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[19px] leading-none text-[#d5d5d5]">
        {label}
      </label>
      <button
        type="button"
        aria-label={hint}
        className="flex text-[#d5d5d5] hover:text-[#f2f2f2]"
      >
        <FiInfo size={24} />
      </button>
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className="mt-6 h-[55px] w-full rounded border border-[#6b6b6b] bg-[#2b2b2b] px-4 text-[19px] text-[#e6e6e6] placeholder:text-[#8a8a8a]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  hint: string;
}

const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    type="button"
    className="h-[56px] w-[170px] rounded bg-[#9c3f1e] text-[19px] text-[#e8d5c9] hover:bg-[#8a3719]"
  >
    {label}
  </button>
);

interface ActionButtonProps {
  label: string;
}

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-10 pb-28 pt-12 font-primary text-[#e6e6e6]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[26px] leading-none text-[#f2f2f2]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="flex text-[#f2f2f2] hover:text-white"
      >
        <FiSettings size={26} />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp size={26} className="shrink-0 text-[#d5d5d5]" />
      <span className="truncate text-[19px] text-[#c9c9c9]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FiChevronUp size={26} className="shrink-0 text-[#d5d5d5]" />
      <h2 className="font-primary-bold text-[26px] leading-none text-[#f2f2f2]">
        Add New Design
      </h2>
    </div>

    <div className="mt-12">
      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        hint="About the personal access token"
      />
    </div>

    <div className="mt-9">
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        hint="About the design URL"
      />
    </div>

    <div className="mt-14 flex gap-9 pl-12">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-24 text-[24px] text-[#b9b9b9]">Recent Breakdowns</h2>
  </div>
);
