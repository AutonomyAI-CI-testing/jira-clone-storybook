import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[color:var(--Neutral600)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black p-5 font-primary text-[13.5px] text-[color:var(--Neutral400)]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold">UI magician Agent</span>
        <MdSettings size={16} />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11.5px] text-[color:var(--Neutral500)]">
        <MdKeyboardArrowUp size={14} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <MdKeyboardArrowUp size={16} />
        <span className="font-primary-bold">Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-1.5 text-[11.5px] text-[color:var(--DarkNeutral800)]">
        <span>Personal Access Token</span>
        <MdInfoOutline size={15} />
      </div>

      <div className="mt-2.5 flex h-[36px] items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 text-[11.5px] text-[color:var(--Neutral700)]">
        <span>figd_xxxxxxxxxxxxxxxxxx</span>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-[11.5px] text-[color:var(--Neutral400)]">
        <span>Design URL</span>
        <MdInfoOutline size={15} />
      </div>

      <div className="mt-2.5 flex h-[37px] items-center border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] px-4 text-[10.5px] text-[color:var(--Neutral700)]">
        <span>https://www.figma.com/file/:</span>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        {BUTTON_LABELS.map((label) => (
          <button key={label} type="button" className={buttonClass}>
            {label}
          </button>
        ))}
      </div>

      <div className="mt-12 font-primary-bold">Recent Breakdowns</div>
    </div>
  );
};
