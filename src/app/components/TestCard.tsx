import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static transcription of a Figma frame ("UI magician Agent" panel).
 *
 * Self-contained and deliberately theme-independent: it reads the raw colour
 * ramps declared on `:root` in app.css rather than the semantic tokens, so the
 * panel stays dark in every theme.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[var(--DarkNeutral100)] px-5 py-5 font-primary"
    >
      <div className="flex items-center justify-between text-[13.5px] font-primary-bold text-[var(--Neutral400)]">
        <span>UI magician Agent</span>
        <IoSettingsOutline size={16} />
      </div>

      <div className="mt-[18px] flex items-center gap-2 text-[11.5px] text-[var(--Neutral500)]">
        <IoChevronUp size={10} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-[84px] flex items-center gap-2 text-[13.5px] font-primary-bold text-[var(--Neutral400)]">
        <IoChevronUp size={14} />
        <span>Add New Design</span>
      </div>

      <label className="mt-7 flex flex-col gap-2 text-[11.5px] text-[var(--Neutral500)]">
        <span className="flex items-center gap-2">
          Personal Access Token
          <IoInformationCircleOutline size={15} />
        </span>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-9 w-full border border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 text-[11.5px] text-[var(--Neutral400)] placeholder:text-[var(--DarkNeutral600)]"
        />
      </label>

      <label className="mt-3 flex flex-col gap-2 text-[11.5px] text-[var(--Neutral500)]">
        <span className="flex items-center gap-2">
          Design URL
          <IoInformationCircleOutline size={15} />
        </span>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="h-9 w-full border-2 border-[var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 text-[10.5px] text-[var(--Neutral400)] placeholder:text-[var(--DarkNeutral600)]"
        />
      </label>

      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] font-primary-bold text-[var(--Neutral400)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] font-primary-bold text-[var(--Neutral400)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] text-[13.5px] font-primary-bold text-[var(--Neutral400)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
