export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#272822] px-5 py-5"
    >
      {/* ── Header row ── */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>

        {/* Gear icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M12.176 8.688c.032-.224.048-.456.048-.688s-.016-.472-.056-.688l1.48-1.16a.354.354 0 0 0 .084-.448l-1.4-2.424a.35.35 0 0 0-.428-.152l-1.744.7a5.12 5.12 0 0 0-1.184-.688l-.264-1.856A.34.34 0 0 0 8.376 1H5.624a.34.34 0 0 0-.336.284l-.264 1.856a5.39 5.39 0 0 0-1.184.688l-1.744-.7a.34.34 0 0 0-.428.152l-1.4 2.424a.344.344 0 0 0 .084.448l1.48 1.16A5.47 5.47 0 0 0 1.776 8c0 .224.016.464.048.688L.344 9.848a.354.354 0 0 0-.084.448l1.4 2.424c.088.152.28.2.428.152l1.744-.7c.368.272.76.496 1.184.688l.264 1.856c.044.168.184.284.336.284h2.752a.34.34 0 0 0 .336-.284l.264-1.856a5.39 5.39 0 0 0 1.184-.688l1.744.7c.16.06.34.008.428-.152l1.4-2.424a.354.354 0 0 0-.084-.448l-1.48-1.16ZM7 10.4A2.4 2.4 0 0 1 4.6 8 2.4 2.4 0 0 1 7 5.6 2.4 2.4 0 0 1 9.4 8 2.4 2.4 0 0 1 7 10.4Z"
            fill="#b5b5b5"
          />
        </svg>
      </div>

      {/* ── Subtitle row ── */}
      <div className="mt-3 flex items-center gap-2">
        {/* Small chevron-up */}
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 4L4 1L7 4"
            stroke="#8b9291"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Spacer ── */}
      <div className="mt-10" />

      {/* ── "Add New Design" section header ── */}
      <div className="flex items-center gap-2">
        {/* Large chevron-up */}
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1 7L6 2L11 7"
            stroke="#b2b2b1"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* ── Form ── */}
      <div className="mt-5 space-y-3">

        {/* Personal Access Token */}
        <div>
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
              Personal Access Token
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
              <path
                d="M7.5 5V5.5M7.5 6.5V10"
                stroke="#a4a4a3"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] outline-none"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
              Design URL
            </span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
              <path
                d="M7.5 5V5.5M7.5 6.5V10"
                stroke="#a3a3a2"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <input
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] outline-none"
          />
        </div>
      </div>

      {/* ── Button row ── */}
      <div className="mt-5 flex justify-center gap-4">
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-7 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-7 py-2.5 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* ── Footer ── */}
      <div className="mt-12">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
