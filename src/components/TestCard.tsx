import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" style={{ backgroundColor: "#282420", color: "#f0ebe5" }}
      className="w-full max-w-xs rounded-lg p-4 font-sans space-y-4">
      {/* header row */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <HiCog className="h-6 w-6" />
      </div>

      {/* chevron row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="h-5 w-5" style={{ color: "#b07050" }} />
        <span className="text-sm" style={{ color: "#b07050" }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="space-y-3 pt-4">
        <div className="flex items-center gap-2">
          <HiChevronUp className="h-5 w-5" />
          <h3 className="text-lg font-bold">Add New Design</h3>
        </div>

        {/* Personal Access Token input */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <label htmlFor="token" className="text-sm">Personal Access Token</label>
            <HiInformationCircle className="h-4 w-4" style={{ color: "#b07050" }} />
          </div>
          <input
            type="text"
            id="token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded-md text-sm"
            style={{ backgroundColor: "#1e1b18", borderColor: "#4a3f35", borderWidth: "1px" }}
          />
        </div>

        {/* Design URL input */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <label htmlFor="url" className="text-sm">Design URL</label>
            <HiInformationCircle className="h-4 w-4" style={{ color: "#b07050" }} />
          </div>
          <input
            type="text"
            id="url"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded-md text-sm"
            style={{ backgroundColor: "#1e1b18", borderColor: "#4a3f35", borderWidth: "1px" }}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-4 pt-2">
          <button
            className="w-1/2 px-6 py-3 rounded-lg text-white font-semibold"
            style={{ backgroundColor: "#b05a28" }}
          >
            Awesome
          </button>
          <button
            className="w-1/2 px-6 py-3 rounded-lg text-white font-semibold"
            style={{ backgroundColor: "#b05a28" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
