// Static card reproducing a single Figma frame. Self-contained: no props, no state,
// no behaviour. The frame's own colour values are used deliberately — the repo's
// semantic tokens carry no equivalent role for this warm olive/rust palette.
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 py-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <SettingsGlyph />
    </div>

    <div className="mt-[17px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUp width={8} height={5} color="#8b9291" />
      <span className="whitespace-nowrap text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUp width={12} height={8} color="#b2b2b1" />
      <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[28px] flex items-center gap-3">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoGlyph />
    </div>
    <div className="mt-3 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-3 flex items-center gap-3">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoGlyph />
    </div>
    <div className="mt-3 flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] pl-5">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    <p className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);

const CardButton = ({ children }: { children: string }): JSX.Element => (
  <div className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
    {children}
  </div>
);

const ChevronUp = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1 7L6 1.5L11 7"
      stroke={color}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoGlyph = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="#c9c9c9" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="#c9c9c9" />
    <path
      d="M7.5 6.9v3.9"
      stroke="#c9c9c9"
      strokeWidth="1.1"
      strokeLinecap="round"
    />
  </svg>
);

const SettingsGlyph = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3.2" stroke="#c9c9c9" strokeWidth="1.8" />
    <path
      d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09A1.7 1.7 0 0 0 15 4.7a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 9v.09a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.03Z"
      stroke="#c9c9c9"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
