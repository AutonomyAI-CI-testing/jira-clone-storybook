import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a static recreation of the reference design panel.
 *
 * Smoke test only: no props, no state, no interactivity, and it is not wired
 * into any screen.
 *
 * The reference is a dark tool panel, so the root carries the app's `dark`
 * theme class and the card is built from the semantic tokens that class
 * redefines (`elevation-surface`, `font`, `background-input`, `border-input`).
 * The single literal is the action fill: the palette has no semantic token for
 * a warm-orange action — Brand Blue is the only action colour — and this card
 * sits outside the app's UI.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col rounded bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-2xl">UI magician Agent</span>
      <FiSettings size={24} aria-hidden />
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp size={20} aria-hidden />
      <span className="text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-14 flex items-center gap-3">
      <FiChevronUp size={20} aria-hidden />
      <span className="font-primary-bold text-xl">Add New Design</span>
    </div>

    <Field
      className="mt-6"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-5"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-8 flex items-center gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <span className="mt-14 font-primary-bold text-xl">Recent Breakdowns</span>
  </div>
);

const Field = ({
  label,
  placeholder,
  className = "",
}: FieldProps): JSX.Element => (
  <div className={`flex flex-col gap-3 ${className}`}>
    <div className="flex items-center gap-3">
      <span className="text-base">{label}</span>
      <FiInfo size={16} aria-hidden />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="rounded-md bg-background-input px-3 py-3 text-base outline outline-2 outline-border-input placeholder:text-font-subtlest"
    />
  </div>
);

const ActionButton = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <button
    type="button"
    className="flex-1 cursor-pointer rounded-md bg-[#a03f14] px-6 py-3 font-primary-bold text-base text-[#d9b7a4]"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
