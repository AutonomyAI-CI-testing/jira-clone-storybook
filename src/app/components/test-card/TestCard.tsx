import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

/**
 * TestCard is a static smoke test component used to verify the component pipeline.
 * It replicates a Figma design for a "UI magician Agent" panel.
 * All values are hardcoded as per requirements for this isolated test.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-80 flex-col gap-4 rounded-xl bg-[#2a2a2a] p-5 text-white"
    >
      <Header />
      <Subtitle />
      <SectionHeader title="Add New Design" />

      <div className="flex flex-col gap-4">
        <InputField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <InputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <div className="flex gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      <h3 className="mt-2 font-primary-bold text-base">Recent Breakdowns</h3>
    </div>
  );
};

const Header = () => (
  <div className="flex items-center justify-between">
    <span className="font-primary-bold text-lg">UI magician Agent</span>
    <AiOutlineSetting size={22} className="text-white opacity-70" />
  </div>
);

const Subtitle = () => (
  <div className="flex items-center gap-1">
    <HiChevronUp className="text-orange-400" />
    <span className="text-orange-400 text-sm opacity-80">
      From entire frame to a singl...
    </span>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <div className="mt-2 flex items-center gap-2">
    <HiChevronUp />
    <span className="font-primary-bold text-base">{title}</span>
  </div>
);

const InputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="text-sm">{label}</span>
      <AiOutlineInfoCircle className="text-gray-400" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="border-gray-600 text-gray-300 placeholder-gray-600 w-full rounded border bg-[#1e1e1e] px-3 py-2 text-sm outline-none"
    />
  </div>
);

const ActionButton = ({ label }: { label: string }) => (
  <button className="flex-1 rounded-lg bg-[#b5541c] px-4 py-2 font-primary-bold text-white transition-colors hover:bg-[#c4612e]">
    {label}
  </button>
);
