import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke test: a Tailwind transcription of the supplied Figma frame.
 * Self-contained — no props, no data, nothing wired into the product.
 *
 * The `dark` class on the root pins the frame's dark palette, so the card
 * looks the same whatever theme the preview is in.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface-sunken p-10 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <HiOutlineCog className="text-font-subtle" size={26} />
    </div>

    <div className="mt-10 flex items-center gap-3 text-font-subtle">
      <HiOutlineChevronUp size={16} />
      <span className="font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <HiOutlineChevronUp size={20} />
      <h2 className="font-primary-black text-2xl">Add New Design</h2>
    </div>

    <Field
      id="personal-access-token"
      className="mt-12"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="design-url"
      className="mt-8"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-12 flex gap-9">
      {/* The frame's rust CTA — no semantic token covers this hue. */}
      <button
        type="button"
        className="h-[74px] flex-1 rounded-lg bg-[#8f3a17] font-primary-light text-xl text-font-subtle"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[74px] flex-1 rounded-lg bg-[#8f3a17] font-primary-light text-xl text-font-subtle"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
  className = "",
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="font-primary-light text-lg text-font-subtle">
        {label}
      </label>
      <HiOutlineInformationCircle className="text-font-subtle" size={18} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-[64px] w-full rounded-none border-2 border-border-bold bg-transparent px-8 font-primary-light text-base text-font placeholder:text-font-subtlest"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
