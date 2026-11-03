import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
        >
          <HiOutlineCog size={26} />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-2 text-font-subtle">
        <HiChevronUp size={18} />
        <span className="font-primary-light text-lg">
          From entire frame to a singl…
        </span>
      </div>

      <h2 className="mt-40 flex items-center gap-2 font-primary-black text-2xl">
        <HiChevronUp size={22} />
        Add New Design
      </h2>

      <div className="mt-14 flex items-center gap-2">
        <label htmlFor="personal-access-token" className="text-lg">
          Personal Access Token
        </label>
        <HiOutlineInformationCircle
          size={18}
          aria-hidden="true"
          className="text-icon-subtle"
        />
      </div>
      <input
        id="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-8 w-full rounded-md border border-border-bold bg-elevation-surface-raised p-4 text-lg text-font placeholder:text-font-subtlest"
      />

      <div className="mt-10 flex items-center gap-2">
        <label htmlFor="design-url" className="text-lg">
          Design URL
        </label>
        <HiOutlineInformationCircle
          size={18}
          aria-hidden="true"
          className="text-icon-subtle"
        />
      </div>
      <input
        id="design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-8 w-full rounded-md border border-border-bold bg-elevation-surface-raised p-4 text-lg text-font placeholder:text-font-subtlest"
      />

      <div className="mt-14 flex justify-end gap-10">
        <button
          type="button"
          className="w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] py-4 text-xl text-font-subtle hover:bg-[var(--Orange900)] active:bg-[var(--Orange1000)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="w-[170px] cursor-pointer rounded-lg bg-[var(--Orange800)] py-4 text-xl text-font-subtle hover:bg-[var(--Orange900)] active:bg-[var(--Orange1000)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-28 font-primary-black text-xl">Recent Breakdowns</h2>
    </div>
  );
};
