import React from "react";
import { HiCog6Tooth, HiChevronUp, HiInformationCircle } from "react-icons/hi2";

/**
 * A self-contained Figma-like plugin panel component.
 * Used as a reference for visual testing and design verification.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm rounded-xl bg-[#2c2c2c] p-5 shadow-lg"
    >
      <HeaderSection />
      <SubtitleSection />
      <FormSection />
      <ActionSection />
      <RecentSection />
    </div>
  );
};

const HeaderSection = () => (
  <div className="mb-3 flex items-center justify-between">
    <span className="text-lg font-bold text-white">UI magician Agent</span>
    <HiCog6Tooth className="h-5 w-5 text-[#9ca3af]" />
  </div>
);

const SubtitleSection = () => (
  <div className="mb-6 flex items-center gap-1">
    <HiChevronUp className="h-4 w-4 text-[#b5541e]" />
    <span className="text-sm text-[#b5541e]">From entire frame to a singl...</span>
  </div>
);

const FormSection = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-2">
      <HiChevronUp className="h-4 w-4 text-white" />
      <span className="text-xl font-bold text-white">Add New Design</span>
    </div>

    <InputField
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <InputField
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />
  </div>
);

const InputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="mb-3">
    <div className="mb-1 flex items-center gap-1">
      <label className="text-sm font-medium text-[#d1d5db]">{label}</label>
      <HiInformationCircle className="h-4 w-4 text-[#6b7280]" />
    </div>
    <input
      placeholder={placeholder}
      className="w-full rounded-md border border-[#4b5563] bg-[#1a1a1a] px-3 py-3 text-sm text-[#9ca3af] outline-none placeholder:text-[#4b5563]"
    />
  </div>
);

const ActionSection = () => (
  <div className="mb-6 mt-6 flex justify-center gap-3">
    <Button>Awesome</Button>
    <Button>Prepare</Button>
  </div>
);

const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="rounded-lg bg-[#b5541e] px-8 py-2 font-semibold text-white transition-colors hover:bg-[#9e4718]">
    {children}
  </button>
);

const RecentSection = () => (
  <div>
    <span className="text-xl font-bold text-white">Recent Breakdowns</span>
  </div>
);
