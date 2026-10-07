export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[420px] bg-[#1c1c1c] p-5 font-primary text-[#d6d6d6]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-primary-bold text-[18px] text-[#e8e8e8]">
          UI magician Agent
        </h2>
        <span
          aria-hidden="true"
          className="text-[18px] leading-none text-[#e8e8e8]"
        >
          &#9881;
        </span>
      </div>

      {/* Collapsed row */}
      <div className="mb-10 flex items-center gap-2 text-[15px] text-[#c9c9c9]">
        <span aria-hidden="true">&#8963;</span>
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-4 flex items-center gap-2">
        <span aria-hidden="true">&#8963;</span>
        <h3 className="font-primary-bold text-[17px] text-[#e8e8e8]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token */}
      <label
        className="mb-1 flex items-center gap-2 text-[15px] text-[#c9c9c9]"
        htmlFor="testElem-pat"
      >
        Personal Access Token
        <span
          aria-hidden="true"
          className="flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px]"
        >
          i
        </span>
      </label>
      <input
        id="testElem-pat"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mb-4 w-full border border-[#6f6f6f] bg-[#2a2a2a] px-3 py-2 text-[15px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
      />

      {/* Design URL */}
      <label
        className="mb-1 flex items-center gap-2 text-[15px] text-[#c9c9c9]"
        htmlFor="testElem-url"
      >
        Design URL
        <span
          aria-hidden="true"
          className="flex h-4 w-4 items-center justify-center rounded-full border border-[#8a8a8a] text-[10px]"
        >
          i
        </span>
      </label>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mb-4 w-full border border-[#6f6f6f] bg-[#2a2a2a] px-3 py-2 text-[15px] text-[#d6d6d6] placeholder:text-[#8a8a8a]"
      />

      {/* Buttons */}
      <div className="mb-10 mt-2 flex gap-4">
        <button
          type="button"
          className="h-[38px] flex-1 bg-[#a1491f] text-[15px] text-[#e8e8e8]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[38px] flex-1 bg-[#a1491f] text-[15px] text-[#e8e8e8]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="font-primary-bold text-[17px] text-[#e8e8e8]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

export default TestCard;
