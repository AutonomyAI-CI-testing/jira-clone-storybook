import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const labelClassName =
  "flex items-center gap-6 text-lg text-[var(--DarkNeutral800)]";

const inputClassName =
  "mt-6 h-16 w-full rounded-sm border border-[var(--DarkNeutral400)] bg-transparent px-8 text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral600)]";

const actionClassName =
  "h-[72px] w-[170px] cursor-pointer rounded-md bg-[var(--Orange700)] text-xl font-primary-bold text-white";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[1016px] w-[508px] flex-col bg-[var(--DarkNeutral100)] px-9 py-10 font-primary text-[var(--DarkNeutral1100)]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-primary-bold">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex cursor-pointer items-center justify-center"
        >
          <IoSettingsOutline size={26} />
        </button>
      </div>

      {/* Collapsed row */}
      <div className="mt-8 flex items-center gap-4 text-lg text-[var(--DarkNeutral700)]">
        <IoChevronUp size={22} />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Empty band, as in the frame */}
      <div className="h-[150px]" aria-hidden="true" />

      {/* Section header */}
      <div className="flex items-center gap-3">
        <IoChevronUp size={26} />
        <h2 className="text-2xl font-primary-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <label
        htmlFor="personal-access-token"
        className={`mt-12 ${labelClassName}`}
      >
        Personal Access Token
        <IoInformationCircleOutline size={24} aria-hidden="true" />
      </label>
      <input
        id="personal-access-token"
        name="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={inputClassName}
      />

      {/* Design URL */}
      <label htmlFor="design-url" className={`mt-10 ${labelClassName}`}>
        Design URL
        <IoInformationCircleOutline size={24} aria-hidden="true" />
      </label>
      <input
        id="design-url"
        name="design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={inputClassName}
      />

      {/* Actions */}
      <div className="mt-12 flex justify-end gap-8">
        <button type="button" className={actionClassName}>
          Awesome
        </button>
        <button type="button" className={actionClassName}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-28 text-2xl text-[var(--DarkNeutral900)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
