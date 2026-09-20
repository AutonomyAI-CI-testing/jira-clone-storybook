export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[280px] rounded bg-[#000000] p-4 font-sans"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <img
          src="/images/test-card/gear-icon.svg"
          alt=""
          className="h-4 w-3.5"
        />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11.5px] font-semibold text-[#8b9291]">
        <img
          src="/images/test-card/chevron-icon.svg"
          alt=""
          className="h-[5px] w-2"
        />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-2 text-[13.5px] font-semibold text-[#b2b2b1]">
          <img
            src="/images/test-card/chevron-icon-2.svg"
            alt=""
            className="h-2 w-3"
          />
          <span>Add New Design</span>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center gap-2 text-[11.5px] font-semibold text-[#a4a4a3]">
            <span>Personal Access Token</span>
            <img
              src="/images/test-card/info-icon-1.svg"
              alt=""
              className="h-[15px] w-[15px]"
            />
          </div>
          <input
            readOnly
            value="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470]"
          />
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center gap-2 text-[11.5px] font-semibold text-[#a3a3a2]">
            <span>Design URL</span>
            <img
              src="/images/test-card/info-icon-2.svg"
              alt=""
              className="h-[15px] w-[15px]"
            />
          </div>
          <input
            readOnly
            value="https://www.figma.com/file/:"
            className="w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e]"
          />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            disabled
            type="button"
            className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            disabled
            type="button"
            className="flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold text-[#8c8078]"
          >
            Prepare
          </button>
        </div>
      </div>

      <div className="mt-8 text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
