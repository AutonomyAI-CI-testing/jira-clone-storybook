const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="w-[254px] bg-[#1e1e1e] p-4 font-['Inter']">
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</h1>
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b5b5b5]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.69231 0H4.30769L0 4V12L4.30769 16H9.69231L14 12V4L9.69231 0ZM4.70014 1.25L1.25 4.38133V11.6187L4.70014 14.75H9.29986L12.75 11.6187V4.38133L9.29986 1.25H4.70014Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 4.25C6.03358 4.25 5.25 5.03358 5.25 6C5.25 6.96642 6.03358 7.75 7 7.75C7.96642 7.75 8.75 6.96642 8.75 6C8.75 5.03358 7.96642 4.25 7 4.25ZM6 6C6 5.58579 6.33579 5.25 6.75 5.25H7.25C7.66421 5.25 8 5.58579 8 6V8C8 8.41421 7.66421 8.75 7.25 8.75H6.75C6.33579 8.75 6 8.41421 6 8V6Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 10.25C6.03358 10.25 5.25 11.0336 5.25 12C5.25 12.9664 6.03358 13.75 7 13.75C7.96642 13.75 8.75 12.9664 8.75 12C8.75 11.0336 7.96642 10.25 7 10.25ZM6 12C6 11.5858 6.33579 11.25 6.75 11.25H7.25C7.66421 11.25 8 11.5858 8 12V14C8 14.4142 7.66421 14.75 7.25 14.75H6.75C6.33579 14.75 6 14.4142 6 14V12Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 7.75C6.03358 7.75 5.25 8.53358 5.25 9.5C5.25 10.4664 6.03358 11.25 7 11.25C7.96642 11.25 8.75 10.4664 8.75 9.5C8.75 8.53358 7.96642 7.75 7 7.75ZM6 9.5C6 9.08579 6.33579 8.75 6.75 8.75H7.25C7.66421 8.75 8 9.08579 8 9.5V11.5C8 11.9142 7.66421 12.25 7.25 12.25H6.75C6.33579 12.25 6 11.9142 6 11.5V9.5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-6">
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8b9291]"
        >
          <path
            d="M5 0.666664L9.33333 7.33333H0.666667L5 0.666664Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-[#8b9291] text-[11.5px]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section heading */}
      <div className="flex items-center gap-2 mb-4 mt-6">
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b2b2b1]"
        >
          <path
            d="M5 0.666664L9.33333 7.33333H0.666667L5 0.666664Z"
            fill="currentColor"
          />
        </svg>
        <h2 className="text-[#b2b2b1] font-semibold text-[13.5px]">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="pat" className="text-[#a4a4a3] text-[11.5px]">Personal Access Token</label>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#a4a4a3]"
          >
            <path
              d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM7.5 2C8.05228 2 8.5 2.44772 8.5 3C8.5 3.55228 8.05228 4 7.5 4C6.94772 4 6.5 3.55228 6.5 3C6.5 2.44772 6.94772 2 7.5 2ZM6.5 6C6.5 5.44772 6.94772 5 7.5 5C8.05228 5 8.5 5.44772 8.5 6V10C8.5 10.5523 8.05228 11 7.5 11C6.94772 11 6.5 10.5523 6.5 10V6Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 bg-[#272822] border border-[#a5adad] rounded-[4px] text-white placeholder-[#737470] text-[11.5px] h-[36px]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="designUrl" className="text-[#a3a3a2] text-[11.5px]">Design URL</label>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#a3a3a2]"
          >
            <path
              d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0ZM7.5 2C8.05228 2 8.5 2.44772 8.5 3C8.5 3.55228 8.05228 4 7.5 4C6.94772 4 6.5 3.55228 6.5 3C6.5 2.44772 6.94772 2 7.5 2ZM6.5 6C6.5 5.44772 6.94772 5 7.5 5C8.05228 5 8.5 5.44772 8.5 6V10C8.5 10.5523 8.05228 11 7.5 11C6.94772 11 6.5 10.5523 6.5 10V6Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 bg-[#272822] border-2 border-[#929291] rounded-[4px] text-white placeholder-[#71726e] text-[11.5px] h-[37px]"
        />
      </div>

      {/* Button row */}
      <div className="flex justify-center gap-4 mb-6">
        <button className="w-[85px] h-[37px] bg-[#843a17] rounded-[4px] text-[#8c8078] font-semibold text-[13.5px]">
          Awesome
        </button>
        <button className="w-[85px] h-[37px] bg-[#843a17] rounded-[4px] text-[#8c8078] font-semibold text-[13.5px]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h2 className="text-[#b0b0b0] font-semibold text-[13.5px]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
