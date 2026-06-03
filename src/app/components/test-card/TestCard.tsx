// Button styling shared between "Awesome" and "Prepare" buttons
const BUTTON_CLASS =
  "flex-1 rounded bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078] transition-colors hover:opacity-90 active:opacity-80";

const BUTTON_HEIGHT = "37px";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen flex-col bg-black p-0"
      style={{ maxWidth: "254px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <div className="bg-gray-600 h-4 w-4 rounded" />
      </div>

      {/* Subtitle Section */}
      <div className="flex items-center gap-2 px-5 py-2">
        <div className="bg-gray-600 h-2 w-2 rounded-sm" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 px-5 py-4">
        <div className="bg-gray-600 h-2 w-2 rounded-sm" />
        <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Input */}
      <div className="px-5 py-2">
        <label className="mb-2 block text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL Input */}
      <div className="px-5 py-2">
        <label className="mb-2 block text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 px-5 py-6">
        <button className={BUTTON_CLASS} style={{ height: BUTTON_HEIGHT }}>
          Awesome
        </button>
        <button className={BUTTON_CLASS} style={{ height: BUTTON_HEIGHT }}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="px-5 py-4">
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
