import type { ReactNode } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const actionLabels = ["Awesome", "Prepare"];

const actionButtonClass =
  "rounded bg-[#a63c1e] px-10 py-5 text-base text-[#9a9a9a]";

const SectionHeading = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2">
    <FiChevronUp size={22} className="text-[#e8e8e8]" aria-hidden />
    <h2 className="font-primary-bold text-2xl text-[#e8e8e8]">{children}</h2>
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-bold text-base text-[#d6d6d6]">
        {label}
      </label>
      <FiInfo size={16} className="text-[#c9c9c9]" aria-hidden />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 w-full rounded-sm border border-[#6f6f6f] bg-[#262626] px-4 py-4 text-base text-[#e0e0e0] outline-none placeholder:text-[#8c8c8c]"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1c1c] p-10 font-primary text-[#d6d6d6]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <button type="button" aria-label="Settings" className="text-[#d6d6d6]">
          <FiSettings size={22} aria-hidden />
        </button>
      </div>

      <button
        type="button"
        className="mt-6 flex w-full items-center gap-2 text-left text-base text-[#8c8c8c]"
      >
        <FiChevronUp size={16} aria-hidden />
        <span>From entire frame to a singl...</span>
      </button>

      <section className="mt-16">
        <SectionHeading>Add New Design</SectionHeading>
        <div className="mt-8 flex flex-col gap-6">
          <Field
            id="test-elem-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          />
          <Field
            id="test-elem-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>
        <div className="mt-8 flex gap-4">
          {actionLabels.map((label) => (
            <button key={label} type="button" className={actionButtonClass}>
              {label}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading>Recent Breakdowns</SectionHeading>
      </section>
    </div>
  );
};
