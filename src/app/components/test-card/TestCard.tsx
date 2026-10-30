import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const actionButtonClass =
  "flex-1 cursor-pointer rounded bg-background-brand-bold p-2 text-center font-primary-bold text-sm text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[400px] flex-col gap-6 rounded bg-elevation-surface-sunken p-5 text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-lg">UI magician Agent</h2>

      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer rounded p-1 text-icon hover:bg-background-neutral-hovered"
      >
        <RiSettings3Line size={20} />
      </button>
    </div>

    <button
      type="button"
      className="flex cursor-pointer items-center gap-2 text-left"
    >
      <RiArrowUpSLine className="shrink-0 text-icon" size={20} />
      <span className="truncate font-primary-light text-sm text-font-subtle">
        From entire frame to a singl...
      </span>
    </button>

    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <RiArrowUpSLine className="text-icon" size={20} />
        <h3 className="font-primary-bold text-lg">Add New Design</h3>
      </div>

      <Field
        id="testcard-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      />

      <Field
        id="testcard-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-4">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>
    </div>

    <h3 className="font-primary-bold text-lg">Recent Breakdowns</h3>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="flex items-center gap-2 font-primary-bold text-sm text-font-subtle"
    >
      {label}
      <RiInformationLine aria-hidden className="text-icon-subtle" size={16} />
    </label>

    <input
      id={id}
      placeholder={placeholder}
      className="w-full rounded-md border border-border bg-background-input p-3 font-primary-light text-sm text-font placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
