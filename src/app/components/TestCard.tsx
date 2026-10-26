import cx from "classix";

/**
 * A self-contained, static reproduction of the "UI magician Agent" Figma frame.
 *
 * It takes no props and holds no state — it exists to be rendered and looked at.
 * Colours are the frame's own literals rather than semantic tokens: the frame is a
 * dark panel and the token palette has no orange/brown role, so no token resolves to
 * these values (see the task plan, decision D2).
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 pt-5 pb-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <GearGlyph />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <ChevronGlyph size={8} />
      <span className="text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px] text-[#b2b2b1]">
      <ChevronGlyph />
      <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
    </div>

    <FieldLabel className="mt-7">Personal Access Token</FieldLabel>
    <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    <FieldLabel className="mt-3">Design URL</FieldLabel>
    <div className="mt-3 flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e]">
      https://www.figma.com/file/:
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <FrameButton>Awesome</FrameButton>
      <FrameButton>Prepare</FrameButton>
    </div>

    <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const FieldLabel = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cx("flex items-center gap-2 text-[#a4a4a3]", className)}>
    <span className="text-[11.5px] leading-[13.92px]">{children}</span>
    <InfoGlyph />
  </div>
);

const FrameButton = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
    {children}
  </div>
);

const glyph = "shrink-0";

const GearGlyph = () => (
  <svg
    className={glyph}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.4" />
    <path d="M12 2.6v2.6M12 18.8v2.6M2.6 12h2.6M18.8 12h2.6M5.35 5.35l1.85 1.85M16.8 16.8l1.85 1.85M18.65 5.35 16.8 7.2M7.2 16.8 5.35 18.65" />
  </svg>
);

const ChevronGlyph = ({ size = 12 }: { size?: number }) => (
  <svg
    className={glyph}
    width={size}
    height={(size * 8) / 12}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = () => (
  <svg
    className={glyph}
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 6.9v3.7"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.6" r="0.8" fill="currentColor" />
  </svg>
);
