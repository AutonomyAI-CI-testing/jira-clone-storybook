import cx from "classix";
import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

/**
 * Display-only recreation of the "UI magician Agent" panel from the reference
 * Figma frame. It takes no props and has no behaviour: it is not wired into any
 * screen and exists so the component pipeline can be exercised end to end.
 *
 * The panel is a fixed dark surface, so its surface and action colours are
 * literal values — this repo's palette is light-first and has no token for
 * either. Everything else uses the repo's existing font tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1c1c1c] px-10 py-9 font-primary text-[#d9d9d9]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl text-[#e8e8e8]">
        UI magician Agent
      </h2>
      <LuSettings aria-hidden className="shrink-0 text-[#dcdcdc]" size={26} />
    </div>

    <div className="mt-10 flex items-center gap-3">
      <LuChevronUp aria-hidden className="shrink-0 text-[#dcdcdc]" size={20} />
      <span className="max-w-[300px] truncate text-xl text-[#c9c9c9]">
        From entire frame to a single component
      </span>
    </div>

    <SectionHeading className="mt-28" text="Add New Design" />

    <Field
      className="mt-12"
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-6"
      label="Design URL"
      value="https://www.figma.com/file/"
    />

    <div className="mt-10 flex justify-end gap-9">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <SectionHeading className="mt-14" text="Recent Breakdowns" />
  </div>
);

const SectionHeading = ({ text, className }: SectionHeadingProps): JSX.Element => (
  <div className={cx("flex items-center gap-3", className)}>
    <LuChevronUp aria-hidden className="shrink-0 text-[#dcdcdc]" size={26} />
    <h3 className="font-primary-bold text-2xl text-[#e8e8e8]">{text}</h3>
  </div>
);

interface SectionHeadingProps {
  text: string;
  className?: string;
}

/**
 * A labelled field: label row with an info icon, then the field itself.
 *
 * The field is static text in a bordered box rather than a real `<input>` — the
 * card is a non-interactive mock, so there is nothing to type into and no form
 * state to carry.
 */
const Field = ({ label, value, className }: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <span className="text-xl text-[#e0e0e0]">{label}</span>
      <LuInfo aria-hidden className="shrink-0 text-[#d0d0d0]" size={22} />
    </div>
    <div className="mt-4 h-[76px] w-full border border-[#8f8f8f] bg-[#232323] px-5 leading-[74px] text-xl text-[#8b8b8b]">
      {value}
    </div>
  </div>
);

interface FieldProps {
  label: string;
  value: string;
  className?: string;
}

const PanelButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[72px] w-[168px] cursor-pointer rounded-md bg-[#9a3f18] font-primary-bold text-xl text-[#c2a897] hover:bg-[#a8491d]"
  >
    {children}
  </button>
);
