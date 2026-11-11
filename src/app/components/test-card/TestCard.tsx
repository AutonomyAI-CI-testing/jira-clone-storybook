import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const BUTTON_CLASS =
  "min-w-[150px] rounded-[6px] bg-[#a03d1c] px-7 py-4 font-primary text-[18px] text-[#a89a95] hover:bg-[#8c3317]";

interface CollapsibleRowProps {
  label: string;
  strong?: boolean;
}

const CollapsibleRow = ({ label, strong = false }: CollapsibleRowProps) => (
  <div className="flex items-center gap-3">
    <FiChevronUp aria-hidden className="shrink-0 text-[20px] text-[#c9c9c9]" />
    <span
      className={
        strong
          ? "font-primary-bold text-[20px] text-[#e8e8e8]"
          : "font-primary text-[16px] text-[#8f8f8f]"
      }
    >
      {label}
    </span>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-[17px] text-[#c9c9c9]">
        {label}
      </label>
      <FiInfo aria-hidden className="text-[17px] text-[#c9c9c9]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-[4px] border border-[#8a8a8a] bg-[#262626] px-4 py-4 font-primary text-[17px] text-[#c9c9c9] placeholder:text-[#7a7a7a] focus:outline-none"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 bg-[#1c1c1c] p-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[20px] text-[#e8e8e8]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center"
      >
        <FiSettings aria-hidden className="text-[24px] text-[#c9c9c9]" />
      </button>
    </div>

    <CollapsibleRow label="From entire frame to a singl..." />

    <div className="flex flex-col gap-6 pt-8">
      <CollapsibleRow label="Add New Design" strong />
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
      <div className="flex gap-8">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="pt-6 font-primary-bold text-[20px] text-[#e8e8e8]">
      Recent Breakdowns
    </h2>
  </div>
);
