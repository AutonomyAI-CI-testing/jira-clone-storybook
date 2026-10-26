import {
  MdInfoOutline,
  MdKeyboardArrowUp,
  MdOutlineSettings,
} from "react-icons/md";

const inputClassName =
  "mt-6 w-full rounded border-2 border-border-bold bg-elevation-surface-raised px-4 py-4 text-base text-font placeholder:text-font-subtlest";

const actionClassName =
  "rounded-lg bg-background-danger-bold px-6 py-5 text-base text-font-inverse";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-black text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="rounded-full text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
        >
          <MdOutlineSettings size={28} />
        </button>
      </div>

      <div className="mt-10 flex items-center gap-3 text-font-subtlest">
        <MdKeyboardArrowUp size={22} aria-hidden />
        <span className="truncate text-base">From entire frame to a singl...</span>
      </div>

      <div className="mt-40 flex items-center gap-2">
        <MdKeyboardArrowUp size={26} aria-hidden />
        <h2 className="font-primary-black text-xl">Add New Design</h2>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-token" className="text-base">
            Personal Access Token
          </label>
          <MdInfoOutline size={18} aria-hidden className="text-font-subtle" />
        </div>
        <input
          id="test-card-token"
          name="personalAccessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={inputClassName}
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label htmlFor="test-card-url" className="text-base">
            Design URL
          </label>
          <MdInfoOutline size={18} aria-hidden className="text-font-subtle" />
        </div>
        <input
          id="test-card-url"
          name="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={inputClassName}
        />
      </div>

      <div className="mt-12 flex gap-8">
        <button type="button" className={actionClassName}>
          Awesome
        </button>
        <button type="button" className={actionClassName}>
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-black text-xl">Recent Breakdowns</h2>
    </div>
  );
};
