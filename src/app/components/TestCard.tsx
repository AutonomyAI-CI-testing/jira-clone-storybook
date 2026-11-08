import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[var(--DarkNeutral100)] font-primary"
    >
      <div className="h-[9px] w-full bg-[var(--DarkNeutral0)]" />

      <div className="flex flex-col px-5 pb-[62px] pt-[11px]">
        <div className="mb-[18px] flex items-center justify-between">
          <span className="font-primary-bold text-xs leading-4 text-[color:var(--DarkNeutral900)]">
            UI magician Agent
          </span>
          <IoSettingsOutline
            size={16}
            className="text-[color:var(--DarkNeutral800)]"
            aria-hidden="true"
          />
        </div>

        <div className="mb-[77px] flex items-center gap-[9px]">
          <HiChevronUp
            size={8}
            className="text-[color:var(--DarkNeutral700)]"
            aria-hidden="true"
          />
          <span className="text-2xs leading-[14px] text-[color:var(--DarkNeutral700)]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mb-7 flex items-center gap-[5px]">
          <HiChevronUp
            size={12}
            className="text-[color:var(--DarkNeutral900)]"
            aria-hidden="true"
          />
          <span className="font-primary-bold text-xs leading-4 text-[color:var(--DarkNeutral900)]">
            Add New Design
          </span>
        </div>

        <div className="mb-3 flex w-[168px] items-center justify-between">
          <span className="text-2xs leading-[14px] text-[color:var(--DarkNeutral800)]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle
            size={15}
            className="text-[color:var(--DarkNeutral700)]"
            aria-hidden="true"
          />
        </div>

        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mb-[11px] h-9 w-[211px] border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-[19px] text-2xs leading-[14px] text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
        />

        <div className="mb-[11px] flex w-[168px] items-center justify-between">
          <span className="text-2xs leading-[14px] text-[color:var(--DarkNeutral800)]">
            Design URL
          </span>
          <HiOutlineInformationCircle
            size={15}
            className="text-[color:var(--DarkNeutral700)]"
            aria-hidden="true"
          />
        </div>

        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mb-5 h-[37px] w-[211px] border-2 border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-[19px] text-2xs leading-[14px] text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]"
        />

        <div className="mb-[46px] ml-6 flex gap-4">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs leading-[14px] text-[color:var(--DarkNeutral700)]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs leading-[14px] text-[color:var(--DarkNeutral700)]"
          >
            Prepare
          </button>
        </div>

        <span className="font-primary-bold text-xs leading-4 text-[color:var(--DarkNeutral900)]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
