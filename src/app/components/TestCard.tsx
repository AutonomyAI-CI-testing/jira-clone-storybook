import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = () => {
  const iconMutedClass = "shrink-0 text-[color:var(--DarkNeutral600)]";
  const labelClass = "text-2xs text-[color:var(--DarkNeutral800)]";
  const fieldBoxClass =
    "flex w-full items-center border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral250)] px-3";
  const fieldValueClass =
    "truncate text-2xs text-[color:var(--DarkNeutral600)]";
  const buttonClass =
    "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[color:var(--DarkNeutral600)]";

  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-[color:var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <HiOutlineCog
          size={16}
          className="text-[color:var(--DarkNeutral900)]"
        />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <HiChevronUp size={12} className={iconMutedClass} />
        <span className="min-w-0 flex-1 truncate text-2xs text-[color:var(--DarkNeutral600)]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-[84px] flex items-center gap-2">
        <HiChevronUp size={14} className={iconMutedClass} />
        <span className="text-xs text-[color:var(--DarkNeutral800)]">
          Add New Design
        </span>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className={labelClass}>Personal Access Token</span>
          <HiOutlineInformationCircle size={15} className={iconMutedClass} />
        </div>
        <div className={`${fieldBoxClass} h-[36px] border`}>
          <span className={fieldValueClass}>figd_xxxxxxxxxxxxxxxxxx</span>
        </div>
      </div>

      <div className="mt-3">
        <div className="mb-2 flex items-center justify-between">
          <span className={labelClass}>Design URL</span>
          <HiOutlineInformationCircle size={15} className={iconMutedClass} />
        </div>
        <div className={`${fieldBoxClass} h-[37px] border-2`}>
          <span className={fieldValueClass}>https://www.figma.com/file/:</span>
        </div>
      </div>

      <div className="mt-5 flex justify-center gap-[17px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-auto text-xs text-[color:var(--DarkNeutral900)]">
        Recent Breakdowns
      </div>
    </div>
  );
};
