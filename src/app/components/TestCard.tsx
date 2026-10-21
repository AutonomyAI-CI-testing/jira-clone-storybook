/**
 * TestCard — a 254x508 panel: a title row, a collapsed summary row, an
 * "Add New Design" section, two labelled fields and a pair of actions.
 *
 * Presentational only: no props, no state, no interaction.
 *
 * The panel's palette has no equivalent in the app's semantic token set, so
 * its colours are written as Tailwind arbitrary values rather than mapped
 * onto unrelated tokens.
 */

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0 text-[#b5b5b5]"
    fill="currentColor"
    height={16}
    viewBox="0 0 24 24"
    width={16}
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const ChevronUpIcon = ({
  height,
  width,
}: {
  height: number;
  width: number;
}): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0 text-[#c9c9c9]"
    fill="none"
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    width={width}
  >
    <path
      d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="shrink-0 text-[#d4d4d4]"
    fill="none"
    height={15}
    viewBox="0 0 15 15"
    width={15}
  >
    <circle cx={7.5} cy={7.5} r={6.5} stroke="currentColor" strokeWidth={1.2} />
    <circle cx={7.5} cy={4.6} fill="currentColor" r={0.9} />
    <path
      d="M7.5 7v3.9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.3}
    />
  </svg>
);

const CardButton = ({ label }: { label: string }): JSX.Element => (
  <button
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
    type="button"
  >
    {label}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#111111] px-5 py-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon height={5} width={8} />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex items-center gap-[5px]">
      <ChevronUpIcon height={8} width={12} />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[12px] flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <div className="mt-[12px] flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-[11px] flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon />
    </div>
    <div className="mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
      <span className="truncate text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/
      </span>
    </div>

    <div className="mt-[21px] flex justify-center gap-[17px]">
      <CardButton label="Awesome" />
      <CardButton label="Prepare" />
    </div>

    <h2 className="mt-[45px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
