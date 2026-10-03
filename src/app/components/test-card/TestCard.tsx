import { FaCog } from "react-icons/fa";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { RiArrowDropUpLine } from "react-icons/ri";

const buttonStyles =
  "rounded bg-background-brand-bold px-4 py-2 font-primary text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

/**
 * Self-contained smoke-test card built from the handed-over Figma frame.
 * Takes no props and holds no state — every value below is static.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-80 flex-col gap-6 rounded bg-elevation-surface-raised p-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary text-lg">UI magician Agent</h1>
      <FaCog aria-hidden className="text-icon-subtle" size={20} />
    </div>

    <div className="flex items-center gap-2">
      <RiArrowDropUpLine aria-hidden className="text-icon-subtle" size={24} />
      <span className="truncate font-primary-light text-sm text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <section className="flex flex-col gap-4">
      <h2 className="flex items-center gap-2 font-primary-bold text-base">
        <RiArrowDropUpLine aria-hidden className="text-icon-subtle" size={24} />
        Add New Design
      </h2>

      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-3">
        <button type="button" className={buttonStyles}>
          Awesome
        </button>
        <button type="button" className={buttonStyles}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="font-primary-bold text-base">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary-light text-sm text-font-subtle"
      >
        {label}
      </label>
      <HiQuestionMarkCircle
        aria-hidden
        className="text-icon-subtle"
        size={16}
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-border bg-background-neutral px-3 py-2 font-primary-light text-sm text-font outline-none placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
