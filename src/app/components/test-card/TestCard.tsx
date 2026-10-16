import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard
 *
 * A self-contained recreation of the "UI magician Agent" panel from the supplied
 * Figma frame. It is a smoke test of turning a design hand-off into a component,
 * so it is deliberately static: no props, no state, no data, no interactivity.
 *
 * The design is a dark panel, so the root pins the `lava` theme class. That binds
 * this app's semantic colour roles to their dark values — and the brand role to a
 * warm red step — for this subtree only, without editing any global stylesheet.
 */

const FIELD_CLASS =
  "mt-3 h-[62px] w-full rounded-sm bg-background-input px-6 font-primary-light text-base text-font outline outline-2 outline-border-input placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASS =
  "flex h-[76px] w-[170px] cursor-pointer items-center justify-center rounded-lg bg-background-brand-bold font-primary text-xl text-font-inverse hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed";

const SectionHeading = ({ children }: SectionHeadingProps): JSX.Element => (
  <div className="flex items-center gap-2">
    <FiChevronUp aria-hidden size={20} className="text-font" />
    <h2 className="font-primary-bold text-2xl text-font">{children}</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <label className="mt-6 block" htmlFor={id}>
    <span className="flex items-center gap-2 text-base text-font-subtle">
      {label}
      <FiInfo aria-hidden size={16} className="text-icon-subtle" />
    </span>
    <input id={id} placeholder={placeholder} className={FIELD_CLASS} />
  </label>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="lava w-[508px] bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <FiSettings aria-hidden size={24} className="text-icon" />
    </div>

    <div className="mt-3 flex items-center gap-2 text-font-subtle">
      <FiChevronUp aria-hidden size={16} />
      <span className="truncate text-base">
        From entire frame to a single component
      </span>
    </div>

    <section className="mt-32">
      <SectionHeading>Add New Design</SectionHeading>

      <div className="mt-16">
        <Field
          id="test-card-personal-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-12 flex justify-center gap-8">
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASS}>
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

interface SectionHeadingProps {
  children: React.ReactNode;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
