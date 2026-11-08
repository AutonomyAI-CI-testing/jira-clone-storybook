import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[254px] bg-elevation-surface px-5 pb-[60px] pt-5 font-primary"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-xs text-font">
          UI magician Agent
        </span>
        <FiSettings size={16} className="text-font-subtle" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FiChevronUp size={12} className="text-font-subtlest" />
        <span className="text-2xs text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <FiChevronUp size={14} className="text-font" />
        <span className="font-primary-bold text-xs text-font">
          Add New Design
        </span>
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-2">
          <label
            htmlFor="figma-access-token"
            className="font-primary-bold text-2xs text-font-subtle"
          >
            Personal Access Token
          </label>
          <FiInfo size={15} className="text-font-subtle" />
        </div>
        <input
          id="figma-access-token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded border border-border-bold bg-elevation-surface-raised px-3 py-2 text-2xs text-font-subtlest placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2">
          <label
            htmlFor="figma-design-url"
            className="font-primary-bold text-2xs text-font-subtle"
          >
            Design URL
          </label>
          <FiInfo size={15} className="text-font-subtle" />
        </div>
        <input
          id="figma-design-url"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 w-full rounded border border-border-bold bg-elevation-surface-raised px-3 py-2 text-2xs text-font-subtlest placeholder:text-font-subtlest"
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-font-subtlest"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-font-subtlest"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-[46px] font-primary-bold text-xs text-font">
        Recent Breakdowns
      </h3>
    </div>
  );
};
