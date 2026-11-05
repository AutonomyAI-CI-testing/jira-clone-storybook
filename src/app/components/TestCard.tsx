import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const BUTTON_STYLE =
  "w-[170px] rounded-lg bg-[var(--Orange800)] py-4 text-lg font-primary-bold text-font";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

function Field({ id, label, placeholder }: FieldProps) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <label className="text-sm text-font-subtle" htmlFor={id}>
          {label}
        </label>
        <HiOutlineInformationCircle
          aria-hidden
          className="text-font-subtle"
          size={20}
        />
      </div>
      <input
        className="mt-4 h-12 w-full rounded border border-border-bold bg-elevation-surface-sunken px-3 text-sm text-font placeholder:text-font-subtlest"
        id={id}
        placeholder={placeholder}
        readOnly
      />
    </div>
  );
}

/**
 * A self-contained reproduction of the attached Figma frame — a dark settings
 * panel with a title row, a collapsed caption, an "Add New Design" section and
 * a "Recent Breakdowns" heading. It takes no props and holds no state.
 *
 * The frame is a fixed dark panel, so the `dark` theme class is pinned on the
 * root. A theme pin does not re-resolve an inherited colour, which is why
 * `text-font` is declared on that same element.
 */
export function TestCard() {
  return (
    <div
      className="dark w-[508px] bg-elevation-surface p-8 font-primary text-font"
      id="testElem"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-xl">UI magician Agent</h1>
        <HiOutlineCog aria-hidden className="text-font-subtle" size={28} />
      </div>

      <div className="mt-12 flex items-center gap-3 text-font-subtle">
        <HiChevronUp aria-hidden size={20} />
        <span className="min-w-0 flex-1 truncate text-sm">
          From entire frame to a single frame
        </span>
      </div>

      <section className="mt-40">
        <div className="flex items-center gap-3">
          <HiChevronUp aria-hidden size={24} />
          <h2 className="font-primary-black text-2xl">Add New Design</h2>
        </div>

        <div className="mt-16 space-y-10">
          <Field
            id="testElem-token"
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          />
          <Field
            id="testElem-url"
            label="Design URL"
            placeholder="https://www.figma.com/file/"
          />
        </div>

        <div className="mt-10 flex justify-center gap-8">
          {BUTTON_LABELS.map((label) => (
            <button className={BUTTON_STYLE} key={label} type="button">
              {label}
            </button>
          ))}
        </div>
      </section>

      <h2 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h2>
    </div>
  );
}
