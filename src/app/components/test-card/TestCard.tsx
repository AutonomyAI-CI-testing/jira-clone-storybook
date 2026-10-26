import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  hint: string;
}

const Field = ({ id, label, placeholder, hint }: FieldProps) => (
  <div>
    <div className="flex items-center gap-4">
      <label
        htmlFor={id}
        className="font-primary-bold text-lg text-[#c9c9c9]"
      >
        {label}
      </label>
      <button
        type="button"
        aria-label={hint}
        className="flex cursor-pointer items-center justify-center rounded-full text-[#c9c9c9]"
      >
        <FiInfo size={24} />
      </button>
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-5 h-16 w-full rounded-[2px] border border-[#6e6e6e] bg-[#2b2b2b] px-8 text-lg text-[#c9c9c9] placeholder:text-[#7d7d7d]"
    />
  </div>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#141414] px-10 pt-11 pb-14 font-primary-light"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl leading-none text-[#cfcfcf]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center rounded-full text-[#cfcfcf]"
      >
        <FiSettings size={24} />
      </button>
    </div>

    <div className="mt-12 flex items-center gap-3">
      <FiChevronUp
        size={20}
        aria-hidden="true"
        className="shrink-0 text-[#cfcfcf]"
      />
      <span className="truncate text-lg text-[#b0b0b0]">
        From entire frame to a singl...
      </span>
    </div>

    <h2 className="mt-40 flex items-center gap-[10px] font-primary-bold text-2xl leading-none text-[#d0d0d0]">
      <FiChevronUp size={20} aria-hidden="true" className="shrink-0" />
      Add New Design
    </h2>

    <div className="mt-16">
      <Field
        id="testCardToken"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        hint="About personal access token"
      />
    </div>

    <div className="mt-7">
      <Field
        id="testCardUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        hint="About design URL"
      />
    </div>

    <div className="mt-14 flex justify-center gap-8">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-16 w-44 cursor-pointer rounded-lg bg-[#9d4520] text-xl text-[#8f8b88]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-28 font-primary-bold text-2xl leading-none text-[#cfcfcf]">
      Recent Breakdowns
    </h2>
  </div>
);
