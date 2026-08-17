export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#27272a", width: "254px" }}
      className="text-sm overflow-hidden"
    >
      {/* Scoped placeholder styles */}
      <style>{`
        #testElem .token-input::placeholder { color: #737470; }
        #testElem .url-input::placeholder { color: #71726e; }
      `}</style>

      {/* Top bar */}
      <div className="h-[9px]" />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-3 pb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>UI magician Agent</span>
        {/* Gear icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" style={{ color: "#b5b5b5" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1.5 px-5 pb-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2" style={{ color: "#8b9291" }} fill="none" viewBox="0 0 8 6" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M1 5L4 2l3 3" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>From entire frame to a singl...</span>
      </div>

      {/* Gap */}
      <div className="h-4" />

      {/* Add New Design */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-2" style={{ color: "#b2b2b1" }} fill="none" viewBox="0 0 12 8" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M1 6L6 2l5 4" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>Personal Access Token</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" style={{ color: "#a4a4a3" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <input
            className="token-input w-full rounded px-3 py-2.5"
            style={{ background: "#272822", border: "1px solid #a5adad", color: "#737470", fontSize: "11.5px", fontWeight: 600, outline: "none" }}
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>Design URL</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" style={{ color: "#a3a3a2" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
          <input
            className="url-input w-full rounded px-3 py-2.5"
            style={{ background: "#272822", border: "2px solid #929291", color: "#71726e", fontSize: "10.5px", fontWeight: 600, outline: "none" }}
            placeholder="https://www.figma.com/file/:"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-6">
          <button
            className="flex-1 py-2.5 text-center"
            style={{ background: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px", fontWeight: 600 }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2.5 text-center"
            style={{ background: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px", fontWeight: 600 }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
