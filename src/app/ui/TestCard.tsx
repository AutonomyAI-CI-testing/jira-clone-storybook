export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full p-6 font-sans bg-[#2b2b2b]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] font-semibold text-[13.5px]">UI magician Agent</span>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b5b5b5]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6667 8C11.6667 9.93333 10.0573 11.5 8 11.5C5.94267 11.5 4.33333 9.93333 4.33333 8C4.33333 6.06667 5.94267 4.5 8 4.5C10.0573 4.5 11.6667 6.06667 11.6667 8ZM9.08333 1.83333C9.08333 1.3731 8.74959 1 8.33333 1H7.66667C7.24838 1 6.91667 1.3731 6.91667 1.83333V2.83333C6.46743 2.94921 6.04632 3.14924 5.66667 3.4243C5.28913 3.69788 4.96574 4.043 4.69324 4.44444L3.84074 4.02012C3.4754 3.83447 3.01185 3.96788 2.8309 4.30058L2.09703 5.5847C1.91609 5.9174 2.00067 6.33123 2.30806 6.55403L3.00332 7.05403C2.90159 7.36159 2.83333 7.67975 2.83333 8C2.83333 8.32025 2.90159 8.63841 3.00332 8.94597L2.30806 9.44597C2.00067 9.66877 1.91609 10.0826 2.09703 10.4153L2.8309 11.6994C3.01185 12.0321 3.4754 12.1655 3.84074 11.9799L4.69324 11.5556C4.96574 11.957 5.28913 12.3021 5.66667 12.5757C6.04632 12.8508 6.46743 13.0508 6.91667 13.1667V14.1667C6.91667 14.6269 7.24838 15 7.66667 15H8.33333C8.74959 15 9.08333 14.6269 9.08333 14.1667V13.1667C9.53257 13.0508 9.95368 12.8508 10.3333 12.5757C10.7109 12.3021 11.0343 11.957 11.3068 11.5556L12.1593 11.9799C12.5246 12.1655 12.9882 12.0321 13.1691 11.6994L13.9029 10.4153C14.0839 10.0826 13.9993 9.66877 13.6919 9.44597L12.9967 8.94597C13.0984 8.63841 13.1667 8.32025 13.1667 8C13.1667 7.67975 13.0984 7.36159 12.9967 7.05403L13.6919 6.55403C13.9993 6.33123 14.0839 5.9174 13.9029 5.5847L13.1691 4.30058C12.9882 3.96788 12.5246 3.83447 12.1593 4.02012L11.3068 4.44444C11.0343 4.043 10.7109 3.69788 10.3333 3.4243C9.95368 3.14924 9.53257 2.94921 9.08333 2.83333V1.83333Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mt-4">
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#8b9291]"
        >
          <path d="M4 0L0 5H8L4 0Z" fill="currentColor" />
        </svg>
        <span className="text-[#8b9291] text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mt-8">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b2b2b1]"
        >
          <path d="M6 0L0 8H12L6 0Z" fill="currentColor" />
        </svg>
        <span className="text-[#b2b2b1] font-semibold text-[13.5px]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label className="text-[#a4a4a3] text-[11.5px] font-semibold">
            Personal Access Token
          </label>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#a4a4a3]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 1.5C3.91 1.5 1 4.41 1 8C1 11.59 3.91 14.5 7.5 14.5C11.09 14.5 14 11.59 14 8C14 4.41 11.09 1.5 7.5 1.5ZM8.25 10.5V7.5H6.75V10.5H8.25ZM8.25 5.5V4.5H6.75V5.5H8.25Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#272822] border border-[#a5adad] text-[#737470] placeholder:text-[#737470] text-[11.5px] font-semibold px-3 py-2 mt-1 rounded"
        />
      </div>

      {/* Design URL Field */}
      <div className="mt-3">
        <div className="flex items-center gap-1">
          <label className="text-[#a4a4a3] text-[11.5px] font-semibold">
            Design URL
          </label>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#a4a4a3]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 1.5C3.91 1.5 1 4.41 1 8C1 11.59 3.91 14.5 7.5 14.5C11.09 14.5 14 11.59 14 8C14 4.41 11.09 1.5 7.5 1.5ZM8.25 10.5V7.5H6.75V10.5H8.25ZM8.25 5.5V4.5H6.75V5.5H8.25Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#272822] border-2 border-[#929291] text-[#71726e] placeholder:text-[#71726e] text-[11.5px] font-semibold px-3 py-2 mt-1 rounded"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5 justify-center">
        <button
          className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-8 py-2"
        >
          Awesome
        </button>
        <button
          className="bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded px-8 py-2"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Header */}
      <h2 className="mt-8 text-[#b0b0b0] text-[13.5px] font-semibold">
        Recent Breakdowns
      </h2>
    </div>
  );
};
