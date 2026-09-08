export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="bg-[#272822] font-['Inter'] p-5 w-[254px]"
    >
      {/* Header row */}
      <div className="flex justify-between items-center">
        <span className="text-[#b5b5b5] text-[13.5px] font-semibold">
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b5b5b5] fill-current"
        >
          <path d="M7 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.6 0h2.8l.5 1.8a5.5 5.5 0 0 1 1.3.76l1.8-.6 1.4 2.42-1.38 1.16c.06.29.08.58.08.46s-.02.17-.08.46L13.4 7.62l-1.4 2.42-1.8-.6a5.5 5.5 0 0 1-1.3.76l-.5 1.8H5.6l-.5-1.8a5.5 5.5 0 0 1-1.3-.76l-1.8.6L.6 10.04l1.38-1.16A5.14 5.14 0 0 1 1.9 8c0-.29.03-.57.08-.46L.6 6.38 2 3.96l1.8.6A5.5 5.5 0 0 1 5.1 3.8L5.6 0ZM7 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mt-2">
        {/* Chevron-up small */}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 4L4 1L7 4"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-8" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        {/* Chevron-up larger */}
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 7L6 2L11 7"
            stroke="#b2b2b1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[#b2b2b1] text-[13.5px] font-semibold">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a4a4a3] text-[11.5px] font-semibold">
            Personal Access Token
          </span>
          {/* Info circle icon */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <path
              d="M7.5 6.5V11"
              stroke="#a4a4a3"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="7.5" cy="4.5" r="0.75" fill="#a4a4a3" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] text-[11.5px] font-semibold px-3 py-2 outline-none placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#a3a3a2] text-[11.5px] font-semibold">
            Design URL
          </span>
          {/* Info circle icon */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <path
              d="M7.5 6.5V11"
              stroke="#a3a3a2"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="7.5" cy="4.5" r="0.75" fill="#a3a3a2" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] text-[#71726e] text-[10.5px] font-semibold px-3 py-2 outline-none placeholder:text-[#71726e]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5 justify-center">
        <button
          type="button"
          className="bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold px-6 py-2"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#843a17] rounded text-[#8c8078] text-[11.5px] font-semibold px-6 py-2"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-[#b0b0b0] text-[13.5px] font-semibold">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
