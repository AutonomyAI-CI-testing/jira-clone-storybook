import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[var(--DarkNeutral100)] p-5 font-primary leading-[1.21]"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] text-[var(--Neutral400)]">
          UI magician Agent
        </span>
        <MdSettings size={16} className="text-[var(--Neutral400)]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <MdKeyboardArrowUp
          size={14}
          className="shrink-0 text-[var(--Neutral500)]"
        />
        <span className="font-primary-bold text-[11.5px] text-[var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[91px] flex items-center gap-2">
        <MdKeyboardArrowUp
          size={14}
          className="shrink-0 text-[var(--Neutral400)]"
        />
        <span className="font-primary-bold text-[13.5px] text-[var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[30px] flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[var(--Neutral500)]">
          Personal Access Token
        </span>
        <MdInfoOutline
          size={15}
          className="shrink-0 text-[var(--Neutral500)]"
        />
      </div>
      <div className="mt-3 flex h-[36px] w-[211px] items-center border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-3">
        <span className="font-primary-bold text-[11.5px] text-[var(--Neutral500)]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[11px] flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] text-[var(--Neutral500)]">
          Design URL
        </span>
        <MdInfoOutline
          size={15}
          className="shrink-0 text-[var(--Neutral500)]"
        />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-3">
        <span className="font-primary-bold text-[10.5px] text-[var(--Neutral500)]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mt-[22px] flex gap-[17px]">
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)]">
          <span className="font-primary-bold text-[11.5px] text-[var(--Neutral500)]">
            Awesome
          </span>
        </div>
        <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)]">
          <span className="font-primary-bold text-[11.5px] text-[var(--Neutral500)]">
            Prepare
          </span>
        </div>
      </div>

      <h2 className="mt-[47px] font-primary-bold text-[13.5px] text-[var(--Neutral400)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
