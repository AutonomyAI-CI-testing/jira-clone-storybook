/**
 * TestCard — smoke-test component built from the attached Figma frame
 * ("UI magician Agent" panel). Deliberately self-contained: no props, no state,
 * no app imports, and approximate values from the frame's style guide.
 * The frame's palette is a dark third-party one that no design token in this
 * repo carries, so the colours are literals rather than token utilities.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1b1b1b] px-5 py-5 font-primary-light text-[11.5px] text-[#a4a4a3]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
      <img src="/images/test-card/gear.png" width={14} height={16} alt="" />
    </div>

    <div className="mt-3 flex items-center gap-2">
      <img src="/images/test-card/chevron-small.png" width={8} height={5} alt="" />
      <span className="truncate text-[#8b9291]">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <img src="/images/test-card/chevron.png" width={12} height={8} alt="" />
      <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">Add New Design</span>
    </div>

    <span className="mt-7 flex items-center gap-2">
      Personal Access Token
      <img src="/images/test-card/info.png" width={15} height={15} alt="" />
    </span>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <span className="mt-3 flex items-center gap-2">
      Design URL
      <img src="/images/test-card/info.png" width={15} height={15} alt="" />
    </span>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-6 flex justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">Recent Breakdowns</span>
  </div>
);
