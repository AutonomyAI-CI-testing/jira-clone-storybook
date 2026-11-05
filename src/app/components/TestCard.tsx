import { useId } from "react";
import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Static rendering of the "UI magician Agent" settings panel from the reference
 * design. Self-contained: it takes no props, holds no state and does nothing.
 *
 * The root pins the `dark` theme class because this is a fixed dark surface that
 * must look the same whichever theme the rest of the app is using, and it
 * declares its own `text-font` — a theme pin does not re-resolve an inherited
 * colour.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-6 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <HiOutlineCog size={24} className="text-font-subtle" />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <HiOutlineChevronUp size={18} />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    {/* Empty stretch, as in the reference */}
    <div className="mt-[150px]" />

    <div className="flex items-center gap-2">
      <HiOutlineChevronUp size={22} />
      <h2 className="font-primary-black text-2xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
    />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-8 flex gap-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    {/* Empty stretch, as in the reference */}
    <div className="mt-[90px]" />

    <h2 className="font-primary-black text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps) => {
  const id = useId();

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm">
          {label}
        </label>
        <HiOutlineInformationCircle size={20} className="text-font-subtle" />
      </div>
      <input
        id={id}
        placeholder={placeholder}
        className="mt-2 h-[58px] w-full rounded-lg border border-border-bold bg-elevation-surface-raised px-4 text-sm text-font placeholder:text-font-subtle"
      />
    </div>
  );
};

/**
 * A plain element rather than the app's Button: that component's fills come from
 * the semantic colour families and its `cx` helper only concatenates classes, so
 * a className cannot override the fill without fighting it.
 */
const CardButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[60px] flex-1 rounded-lg bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral1100)] hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
  >
    {children}
  </button>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
