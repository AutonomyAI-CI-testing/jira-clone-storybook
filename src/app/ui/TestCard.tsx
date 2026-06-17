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
      style={{ backgroundColor: "#252525", width: "320px" }}
      className="text-white px-6 pt-6 pb-10 rounded-md shadow-xl"
    >
      <Header />
      <SubHeader />

      {/* Spacer between subtitle and Add New Design section */}
      <div style={{ height: "100px" }} />

      <SectionTitle title="Add New Design" />

      <div style={{ height: "20px" }} />

      <InputGroup
        label="Personal Access Token"
        id="pat-input"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <div style={{ height: "16px" }} />

      <InputGroup
        label="Design URL"
        id="design-url-input"
        placeholder="https://www.figma.com/file/:"
      />

      <div style={{ height: "48px" }} />

      <ActionButtons />

      <div style={{ height: "72px" }} />

      <footer>
        <h3 className="text-xl font-bold text-white">Recent Breakdowns</h3>
      </footer>
    </div>
  );
};

const Header = () => (
  <header className="flex justify-between items-center" style={{ marginBottom: "16px" }}>
    <h2 style={{ fontSize: "22px", fontWeight: 700 }} className="text-white">
      UI magician Agent
    </h2>
    <IoSettingsOutline
      style={{ fontSize: "26px" }}
      className="text-gray-300 cursor-pointer hover:text-white transition-colors"
    />
  </header>
);

const SubHeader = () => (
  <div className="flex items-center" style={{ color: "#888888", fontSize: "14px", gap: "8px" }}>
    <HiChevronUp style={{ fontSize: "18px", flexShrink: 0 }} />
    <span>From entire frame to a singl...</span>
  </div>
);

const SectionTitle = ({ title }: { title: string }) => (
  <div
    className="flex items-center text-white font-bold"
    style={{ fontSize: "20px", gap: "10px" }}
  >
    <HiChevronUp style={{ fontSize: "20px", flexShrink: 0 }} />
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
  <div>
    <div
      className="flex items-center gap-2"
      style={{ color: "#cccccc", fontSize: "14px", marginBottom: "12px" }}
    >
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
      <AiOutlineInfoCircle
        className="cursor-help"
        style={{ fontSize: "18px", color: "#aaaaaa" }}
        title={`Information about ${label}`}
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      style={{
        backgroundColor: "transparent",
        border: "1.5px solid #666666",
        borderRadius: "6px",
        color: "#cccccc",
        padding: "14px",
        width: "100%",
        fontSize: "14px",
        boxSizing: "border-box",
      }}
      className="placeholder-gray-600 focus:outline-none focus:border-gray-400 transition-colors"
    />
  </div>
);

const ActionButtons = () => (
  <div className="flex" style={{ gap: "20px" }}>
    <button
      style={{
        backgroundColor: "#b5451b",
        borderRadius: "10px",
        padding: "14px 20px",
        fontWeight: 600,
        fontSize: "16px",
        flex: 1,
        color: "#ffffff",
      }}
      className="hover:opacity-90 transition-opacity"
    >
      Awesome
    </button>
    <button
      style={{
        backgroundColor: "#b5451b",
        borderRadius: "10px",
        padding: "14px 20px",
        fontWeight: 600,
        fontSize: "16px",
        flex: 1,
        color: "#ffffff",
      }}
      className="hover:opacity-90 transition-opacity"
    >
      Prepare
    </button>
  </div>
);
