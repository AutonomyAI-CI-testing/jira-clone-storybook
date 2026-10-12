import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const inputClassName =
  "w-full rounded border border-border-input bg-background-input p-2 font-primary-light text-sm text-font placeholder:text-font-subtle";

const buttonClassName =
  "flex-1 rounded bg-background-brand-bold p-2 text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-80 flex-col gap-8 rounded-lg border border-border bg-elevation-surface p-6 font-primary text-font"
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
          <IoSettingsOutline aria-hidden className="text-xl text-font-subtle" />
        </div>
        <div className="flex items-center gap-2 font-primary-light text-sm text-font-subtle">
          <IoChevronUp aria-hidden />
          <span className="truncate">From entire frame to a singl...</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <IoChevronUp aria-hidden />
          <span>Add New Design</span>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label
              htmlFor="testElem-personal-access-token"
              className="font-primary-light text-sm text-font-subtle"
            >
              Personal Access Token
            </label>
            <IoInformationCircleOutline
              aria-hidden
              className="text-base text-font-subtle"
            />
          </div>
          <input
            id="testElem-personal-access-token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className={inputClassName}
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <label
              htmlFor="testElem-design-url"
              className="font-primary-light text-sm text-font-subtle"
            >
              Design URL
            </label>
            <IoInformationCircleOutline
              aria-hidden
              className="text-base text-font-subtle"
            />
          </div>
          <input
            id="testElem-design-url"
            placeholder="https://www.figma.com/file/"
            className={inputClassName}
          />
        </div>

        <div className="flex gap-3">
          <button type="button" className={buttonClassName}>
            Awesome
          </button>
          <button type="button" className={buttonClassName}>
            Prepare
          </button>
        </div>
      </div>

      <h2 className="font-primary-bold text-base">Recent Breakdowns</h2>
    </div>
  );
};
