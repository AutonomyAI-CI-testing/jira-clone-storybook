import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * A self-contained panel rebuilt from a Figma frame ("UI magician Agent").
 * Smoke test: no props, no state, no app imports — it renders from the
 * theme tokens declared by the `dark` class on its own root element.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 py-8 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded border-none p-1 text-font-subtle hover:bg-background-neutral-hovered hover:text-font"
      >
        <HiOutlineCog size={22} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-font-subtle">
      <HiOutlineChevronUp size={20} aria-hidden="true" className="shrink-0" />
      <span className="truncate font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <HiOutlineChevronUp size={22} aria-hidden="true" className="shrink-0" />
      <h2 className="font-primary-bold text-lg">Add New Design</h2>
    </div>

    <div className="mt-16 flex flex-col gap-7">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-12 flex gap-8">
      <CtaButton>Awesome</CtaButton>
      <CtaButton>Prepare</CtaButton>
    </div>

    <h2 className="mt-24 font-primary-bold text-lg">Recent Breakdowns</h2>
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <HiOutlineInformationCircle
        size={18}
        aria-hidden="true"
        className="shrink-0 text-font-subtle"
      />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded-md border-none bg-background-input p-4 text-base text-font outline outline-2 outline-border-input placeholder:font-primary-light placeholder:text-font-subtlest hover:bg-background-input-hovered focus:outline-border-brand"
    />
  </div>
);

const CtaButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="w-[168px] rounded-md border-none bg-background-warning-bold py-6 text-base text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed"
  >
    {children}
  </button>
);
