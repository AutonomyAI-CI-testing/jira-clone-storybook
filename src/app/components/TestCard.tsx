import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-64 flex-col gap-4 p-5"
      style={{ backgroundColor: "#1a1a18", minHeight: 508 }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        <HiOutlineCog size={16} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <HiOutlineChevronUp size={14} style={{ color: "#8b9291" }} />
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mt-4 flex items-center gap-2">
        <HiOutlineChevronUp size={16} style={{ color: "#b2b2b1" }} />
        <span
          className="font-semibold"
          style={{ color: "#b2b2b1", fontSize: "13.5px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <span
            className="font-semibold"
            style={{ color: "#a4a4a3", fontSize: "11.5px" }}
          >
            Personal Access Token
          </span>
          <HiOutlineInformationCircle size={15} style={{ color: "#a4a4a3" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 font-semibold outline-none"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
            fontSize: "11.5px",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <span
            className="font-semibold"
            style={{ color: "#a3a3a2", fontSize: "11.5px" }}
          >
            Design URL
          </span>
          <HiOutlineInformationCircle size={15} style={{ color: "#a3a3a2" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 font-semibold outline-none"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
            fontSize: "10.5px",
          }}
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-md py-2 font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md py-2 font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-4">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
