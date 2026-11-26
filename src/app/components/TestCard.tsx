import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static reproduction of the "UI magician Agent" panel.
 *
 * Smoke-test component: self-contained, takes no props and holds no state.
 * Spacing, colour and type are approximations read off the design, and the
 * palette is the theme's semantic tokens so every theme keeps working.
 */

const fieldClass =
  "rounded-md border border-border bg-background-input px-4 py-4 font-primary-light text-base text-font placeholder:text-font-subtlest";

const actionButtonClass =
  "flex-1 rounded bg-background-warning-bold px-6 py-4 text-lg text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] max-w-full flex-col rounded-md bg-elevation-surface px-[40px] py-10 font-primary text-font"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-2xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Agent settings"
          className="rounded-full p-1 text-icon-subtle hover:bg-background-neutral-hovered hover:text-icon"
        >
          <HiOutlineCog size={26} />
        </button>
      </div>

      <div className="mt-6 flex items-center gap-2 text-font-subtle">
        <HiOutlineChevronUp aria-hidden="true" className="shrink-0" size={22} />
        <span className="truncate text-base">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <HiOutlineChevronUp aria-hidden="true" className="shrink-0" size={24} />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <label className="mt-6 flex flex-col gap-2">
        <span className="flex items-center gap-2 text-font-subtle">
          <span className="text-base">Personal Access Token</span>
          <HiOutlineInformationCircle
            className="text-icon-subtle"
            size={20}
            title="More information"
          />
        </span>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className={fieldClass}
        />
      </label>

      <label className="mt-5 flex flex-col gap-2">
        <span className="flex items-center gap-2 text-font-subtle">
          <span className="text-base">Design URL</span>
          <HiOutlineInformationCircle
            className="text-icon-subtle"
            size={20}
            title="More information"
          />
        </span>
        <input
          readOnly
          placeholder="https://www.figma.com/file/"
          className={fieldClass}
        />
      </label>

      <div className="mt-8 flex gap-9">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <h3 className="mt-16 font-primary-bold text-xl text-font-subtle">
        Recent Breakdowns
      </h3>
    </div>
  );
};
