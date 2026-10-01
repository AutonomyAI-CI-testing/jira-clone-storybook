import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const SECTION_HEADING = "font-primary-light text-lg text-white/90";
const FIELD_LABEL = "font-primary-light text-base text-white/90";
const FIELD_INPUT =
  "h-14 w-full rounded border border-white/60 bg-white/5 px-4 font-primary-light text-base text-white placeholder:text-white/50";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-8 py-8 font-primary text-white"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-xl">UI magician Agent</h1>
        <IoSettingsOutline className="text-white/70" size={22} aria-hidden />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <IoChevronUp className="shrink-0 text-white/70" size={16} aria-hidden />
        <span className="truncate font-primary-light text-sm text-white/60">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <IoChevronUp className="shrink-0 text-white/80" size={22} aria-hidden />
        <h2 className={SECTION_HEADING}>Add New Design</h2>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-8 flex gap-4">
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            type="button"
            className="h-16 w-[45%] cursor-pointer rounded-md bg-[var(--Orange800)] font-primary text-base text-white"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className={`${SECTION_HEADING} mt-24`}>Recent Breakdowns</h2>
      <div className="h-24" />
    </div>
  );
}

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className={FIELD_LABEL}>{label}</span>
      <IoInformationCircleOutline
        className="text-white/60"
        size={16}
        aria-hidden
      />
    </div>
    <input type="text" placeholder={placeholder} className={FIELD_INPUT} />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
