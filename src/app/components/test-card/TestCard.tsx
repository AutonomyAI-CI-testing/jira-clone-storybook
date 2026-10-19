/**
 * TestCard
 *
 * A self-contained, throwaway reproduction of the Figma "UI magician Agent"
 * frame. It takes no props and holds no state: it exists to smoke-test the
 * design-to-code path, not to ship as a product surface.
 *
 * Measurements come from the frame's extracted style guide (254x508 panel).
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <GearIcon />
    </div>

    {/* Collapsed row */}
    <div className="ml-[3px] mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon width={8} height={5} className="text-[#8b9291]" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="ml-[6px] mt-[77px] flex items-center gap-[5px]">
      <ChevronUpIcon width={12} height={8} className="text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px] flex items-center justify-between pr-[46px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon className="text-[#a4a4a3]" />
    </div>
    <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[18px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-[18px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon className="text-[#a3a3a2]" />
    </div>
    <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[18px]">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <div className="ml-[24px] mt-[22px] flex gap-[17px]">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    {/* Recent Breakdowns */}
    <p className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </p>
  </div>
);

const CardButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] cursor-pointer items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

const GearIcon = (): JSX.Element => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#b5b5b5]"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

const ChevronUpIcon = ({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className: string;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    className={className}
  >
    <path
      d={`M0.5 ${height - 0.5} L${width / 2} 0.5 L${width - 0.5} ${height - 0.5}`}
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    className={className}
  >
    <circle cx={7.5} cy={7.5} r={6.5} stroke="currentColor" />
    <path d="M7.5 6.6V11" stroke="currentColor" strokeLinecap="round" />
    <circle cx={7.5} cy={4.1} r={0.6} fill="currentColor" />
  </svg>
);
