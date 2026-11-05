import { BsChevronUp } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark flex w-[254px] flex-col bg-elevation-surface p-5 text-font"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] text-font">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="text-font-subtle" />
      </div>

      <div className="mt-2.5 flex items-center gap-1.5">
        <BsChevronUp size={12} className="shrink-0 text-font-subtlest" />
        <span className="font-primary-light text-[11.5px] text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-10 flex items-center gap-1.5">
        <BsChevronUp size={12} className="shrink-0 text-font-subtle" />
        <span className="font-primary-bold text-[13.5px] text-font">
          Add New Design
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-primary-light text-[11.5px] text-font-subtle">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle
            size={15}
            className="shrink-0 text-font-subtlest"
          />
        </div>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-9 w-full rounded border border-border-bold bg-elevation-surface-raised px-2.5 font-primary-light text-[11.5px] text-font-subtle placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-primary-light text-[11.5px] text-font-subtle">
            Design URL
          </span>
          <HiOutlineInformationCircle
            size={15}
            className="shrink-0 text-font-subtlest"
          />
        </div>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="h-9 w-full rounded border border-border-bold bg-elevation-surface-raised px-2.5 font-primary-light text-[11.5px] text-font-subtle placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-font"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-font"
        >
          Prepare
        </button>
      </div>

      <div className="mt-10">
        <span className="font-primary-bold text-[13.5px] text-font">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
