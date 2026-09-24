/**
 * TestCard — a single-file, self-contained smoke-test component reproducing the
 * "Test Page - Simple" Figma frame. It takes no props and renders static markup.
 *
 * NOTE: this repo's Tailwind config replaces `theme.colors` and `theme.fontFamily`
 * with the semantic design-token system, so palette utilities (`text-gray-400`)
 * and `font-sans` do not exist here. This component intentionally uses arbitrary
 * values to match the reference frame, which is a smoke test rather than product UI.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-[Inter,ui-sans-serif,sans-serif] font-semibold"
    >
      {/* 1 — header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
        <img
          className="h-4 w-[14px]"
          src="/images/test-card/gear.svg"
          alt=""
        />
      </div>

      {/* 2 — collapsed row */}
      <div className="mt-6 flex items-center gap-2">
        <img
          className="h-[5px] w-2"
          src="/images/test-card/chevron-collapsed.svg"
          alt=""
        />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* 3 — section heading */}
      <div className="mt-10 flex items-center gap-2">
        <img
          className="h-2 w-3"
          src="/images/test-card/chevron-section.svg"
          alt=""
        />
        <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* 4 — token label row */}
      <div className="mt-6 flex items-center gap-2">
        <span className="text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <img
          className="h-[15px] w-[15px]"
          src="/images/test-card/info-token.svg"
          alt=""
        />
      </div>

      {/* 5 — token field */}
      <div className="mt-2 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* 6 — url label row */}
      <div className="mt-5 flex items-center gap-2">
        <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
        <img
          className="h-[15px] w-[15px]"
          src="/images/test-card/info-url.svg"
          alt=""
        />
      </div>

      {/* 7 — url field */}
      <div className="mt-2 flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      {/* 8 — button row */}
      <div className="mt-5 flex justify-center gap-[15px]">
        <div className="flex h-10 w-[87px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]">
          Awesome
        </div>
        <div className="flex h-10 w-[87px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]">
          Prepare
        </div>
      </div>

      {/* 9 — bottom heading */}
      <div className="mt-10 text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
