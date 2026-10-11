import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ACTION_LABELS = ["Awesome", "Prepare"];

export const TestCard = () => {
  const [isFrameRowOpen, setIsFrameRowOpen] = useState(true);
  const [isDesignRowOpen, setIsDesignRowOpen] = useState(true);

  return (
    <div
      id="testElem"
      className="w-full max-w-[420px] rounded-lg bg-[#1a1a1a] p-8 font-primary text-[#d5d9de]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[20px] text-[#e8eaed]">
          UI magician Agent
        </h1>
        <FiSettings size={22} className="shrink-0 text-[#c8ccd0]" aria-hidden />
      </div>

      <div className="mt-5">
        <SectionHeader
          label="From entire frame to a single component"
          open={isFrameRowOpen}
          onToggle={() => setIsFrameRowOpen((open) => !open)}
          labelClassName="truncate font-primary text-[15px] text-[#c8ccd0]"
        />

        {isFrameRowOpen && (
          <p className="mt-3 pl-6 font-primary-light text-[13px] leading-5 text-[#9aa0a6]">
            Paste a Figma frame URL to turn the whole frame into one component.
          </p>
        )}
      </div>

      <div className="mt-14">
        <SectionHeader
          label="Add New Design"
          open={isDesignRowOpen}
          onToggle={() => setIsDesignRowOpen((open) => !open)}
          labelClassName="font-primary-bold text-[17px] text-[#e8eaed]"
        />

        {isDesignRowOpen && (
          <div className="mt-6 space-y-5">
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

            <div className="flex gap-3 pt-3">
              {ACTION_LABELS.map((label) => (
                <button
                  key={label}
                  type="button"
                  className="flex-1 cursor-pointer rounded-md bg-[#b4522a] px-6 py-3 font-primary-bold text-[16px] text-[#f0d4c2] transition-colors duration-200 hover:bg-[#c25c32]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <h2 className="mt-14 font-primary-bold text-[18px] text-[#d5d9de]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface SectionHeaderProps {
  label: string;
  open: boolean;
  onToggle: () => void;
  labelClassName: string;
}

const SectionHeader = ({
  label,
  open,
  onToggle,
  labelClassName,
}: SectionHeaderProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-expanded={open}
    className="flex w-full cursor-pointer items-center gap-3 text-left"
  >
    {open ? (
      <FiChevronUp size={18} className="shrink-0 text-[#c8ccd0]" aria-hidden />
    ) : (
      <FiChevronDown size={18} className="shrink-0 text-[#c8ccd0]" aria-hidden />
    )}
    <span className={`min-w-0 ${labelClassName}`}>{label}</span>
  </button>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-[15px] text-[#c8ccd0]">
        {label}
      </label>
      <FiInfo size={16} className="shrink-0 text-[#9aa0a6]" aria-hidden />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#4a4a4a] bg-[#1f1f1f] px-4 py-3 font-primary text-[15px] text-[#d5d9de] placeholder:text-[#8a8f94]"
    />
  </div>
);
