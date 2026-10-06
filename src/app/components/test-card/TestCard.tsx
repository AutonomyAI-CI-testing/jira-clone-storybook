import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

/**
 * Smoke-test card reproduced from a Figma frame.
 *
 * Self-contained by design: no props, no state, nothing interactive. The
 * colours below are arbitrary values read off the frame image rather than
 * theme tokens, because the frame is a fixed dark UI that is not part of the
 * app's themable token set — every token in `app.css` resolves through a theme
 * class, so a token here would change with the theme and stop matching the
 * frame. Spacing and type sizes are approximations.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col gap-12 bg-[#1c1c1c] p-6 font-primary text-[#f5f5f5]"
  >
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
        <MdSettings aria-hidden className="h-5 w-5 shrink-0 text-[#e0e0e0]" />
      </div>
      <div className="flex items-center gap-2 text-sm">
        <MdKeyboardArrowUp aria-hidden className="h-4 w-4 shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <h2 className="flex items-center gap-2 font-primary-bold text-base">
        <MdKeyboardArrowUp aria-hidden className="h-4 w-4 shrink-0" />
        Add New Design
      </h2>
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
      <div className="flex gap-4">
        <button type="button" className={BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASSES}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="font-primary-bold text-base">Recent Breakdowns</h2>
  </div>
);

const INPUT_CLASSES =
  "w-full rounded border border-[#5a5a5a] bg-[#242424] px-3 py-2.5 text-sm text-[#f5f5f5] outline-none placeholder:text-[#8a8a8a]";

const BUTTON_CLASSES = "rounded bg-[#a33f0f] px-6 py-3 text-sm text-[#c98a5f]";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-bold text-sm">
        {label}
      </label>
      <MdInfoOutline aria-hidden className="h-4 w-4 shrink-0 text-[#e0e0e0]" />
    </div>
    <input id={id} readOnly placeholder={placeholder} className={INPUT_CLASSES} />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
