import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col gap-8 rounded-md bg-elevation-surface-raised p-8 text-font"
    >
      <header className="flex items-center justify-between">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Open settings"
          className="cursor-pointer rounded-full p-1 text-icon hover:bg-background-brand-subtlest hover:text-icon-brand"
        >
          <IoSettingsOutline size={24} aria-hidden />
        </button>
      </header>

      <button
        type="button"
        className="flex w-full cursor-pointer items-center gap-3 text-left font-primary text-sm text-font-subtle"
      >
        <IoChevronUpOutline size={20} aria-hidden />
        <span className="truncate">From entire frame to a singl…</span>
      </button>

      <section className="flex flex-col gap-4">
        <h2 className="flex items-center gap-3 font-primary-black text-lg">
          <IoChevronUpOutline size={20} aria-hidden />
          Add New Design
        </h2>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-primary text-xs text-font-subtle">
            Personal Access Token
            <IoInformationCircleOutline size={16} aria-hidden />
          </span>
          <input
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className="w-full rounded bg-background-input p-3 font-primary-light text-font outline outline-1 outline-border placeholder:text-font-subtlest"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="flex items-center gap-2 font-primary text-xs text-font-subtle">
            Design URL
            <IoInformationCircleOutline size={16} aria-hidden />
          </span>
          <input
            readOnly
            placeholder="https://www.figma.com/file/"
            className="w-full rounded bg-background-input p-3 font-primary-light text-font outline outline-1 outline-border placeholder:text-font-subtlest"
          />
        </label>

        <div className="mt-2 flex gap-6">
          <button
            type="button"
            className="min-w-[150px] cursor-pointer rounded-md bg-background-brand-bold px-6 py-3 font-primary text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          >
            Awesome
          </button>
          <button
            type="button"
            className="min-w-[150px] cursor-pointer rounded-md bg-background-brand-bold px-6 py-3 font-primary text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
          >
            Prepare
          </button>
        </div>
      </section>

      <h2 className="font-primary-black text-lg">Recent Breakdowns</h2>
    </div>
  );
};
