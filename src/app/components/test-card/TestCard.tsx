import { useState } from "react";
import cx from "classix";
import {
  FiChevronDown,
  FiChevronUp,
  FiInfo,
  FiSettings,
} from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  const [isTokenSectionOpen, setIsTokenSectionOpen] = useState(true);
  const [isDesignSectionOpen, setIsDesignSectionOpen] = useState(true);

  return (
    <div
      id="testElem"
      className="w-[508px] rounded-lg bg-[#1b1c1e] px-10 py-8 font-primary text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="cursor-pointer text-[#b3b3b3] hover:text-[#e6e6e6]"
        >
          <FiSettings aria-hidden size={26} />
        </button>
      </div>

      <CollapsibleHeader
        isOpen={isTokenSectionOpen}
        label="From entire frame to a singl..."
        onToggle={() => setIsTokenSectionOpen((isOpen) => !isOpen)}
        className="mt-12 text-[15px] text-[#b3b3b3]"
      />

      <CollapsibleHeader
        isOpen={isDesignSectionOpen}
        label="Add New Design"
        onToggle={() => setIsDesignSectionOpen((isOpen) => !isOpen)}
        className="mt-20 font-primary-bold text-xl"
      />

      {isDesignSectionOpen && (
        <div className="mt-8">
          <Field
            id="personal-access-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
          />
          <Field
            id="design-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
          <div className="mt-10 flex justify-center gap-8">
            <Button>Awesome</Button>
            <Button>Prepare</Button>
          </div>
        </div>
      )}

      <h2 className="mt-20 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const CollapsibleHeader = ({
  isOpen,
  label,
  onToggle,
  className,
}: CollapsibleHeaderProps): JSX.Element => (
  <button
    type="button"
    aria-expanded={isOpen}
    onClick={onToggle}
    className={cx("flex w-full cursor-pointer items-center gap-3", className)}
  >
    {isOpen ? (
      <FiChevronUp aria-hidden size={22} />
    ) : (
      <FiChevronDown aria-hidden size={22} />
    )}
    <span className="truncate">{label}</span>
  </button>
);

interface CollapsibleHeaderProps {
  isOpen: boolean;
  label: string;
  onToggle: () => void;
  className?: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mb-6">
    <div className="mb-3 flex items-center gap-2">
      <label htmlFor={id} className="text-[15px] text-[#b3b3b3]">
        {label}
      </label>
      <FiInfo aria-hidden size={18} className="text-[#b3b3b3]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#4a4b4f] bg-[#26272b] px-4 py-3 text-[15px] text-[#e6e6e6] placeholder:text-[#8a8f96]"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Button = ({ children }: ButtonProps): JSX.Element => (
  <button
    type="button"
    className="w-[170px] cursor-pointer rounded-md bg-[#a04a1f] py-4 font-primary-bold text-[#eae0d8] hover:bg-[#8f4119]"
  >
    {children}
  </button>
);

interface ButtonProps {
  children: string;
}
