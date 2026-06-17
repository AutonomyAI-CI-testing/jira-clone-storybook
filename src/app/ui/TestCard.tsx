
import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard component replicates a Figma design panel UI.
 * It is a standalone visual artifact for development and design validation.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white p-4 max-w-sm mx-auto rounded-lg shadow-xl"
    >
      <Header />
      <SubHeader />

      <div className="border-b border-gray-600 pb-4 mb-4" />

      <SectionTitle title="Add New Design" />

      <InputGroup
        label="Personal Access Token"
        id="pat-input"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <InputGroup
        label="Design URL"
        id="design-url-input"
        placeholder="https://www.figma.com/file/:"
      />

      <ActionButtons />

      <footer className="mt-2">
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};

const Header = () => (
  <header className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-bold">UI magician Agent</h2>
    <IoSettingsOutline className="text-xl cursor-pointer hover:text-gray-300 transition-colors" />
  </header>
);

const SubHeader = () => (
  <div className="flex items-center text-gray-400 text-sm mb-6">
    <HiChevronUp className="mr-1" />
    <span>From entire frame to a singl...</span>
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <div className="flex items-center font-bold mb-4">
    <HiChevronUp className="mr-1" />
    <span>{title}</span>
  </div>
);

const InputGroup = ({
  label,
  id,
  placeholder,
}: {
  label: string;
  id: string;
  placeholder: string;
}) => (
  <div className="mb-4 last-of-type:mb-6">
    <div className="flex items-center text-sm mb-1 text-gray-300">
      <label htmlFor={id} className="mr-1 cursor-pointer">
        {label}
      </label>
      <AiOutlineInfoCircle className="cursor-help" title={`Information about ${label}`} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-all"
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex justify-between space-x-4 mb-6">
    {/* bg-[#b5451b] matches the orange/brown branding from the original requirement */}
    <button className="flex-1 p-2 rounded bg-[#b5451b] hover:bg-[#a03d18] text-white font-semibold transition-colors">
      Awesome
    </button>
    <button className="flex-1 p-2 rounded bg-[#b5451b] hover:bg-[#a03d18] text-white font-semibold transition-colors">
      Prepare
    </button>
  </div>
);
