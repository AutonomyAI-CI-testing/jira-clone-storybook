import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component reproducing the "UI magician Agent" Figma frame.
 *
 * Self-contained and prop-less: it is not wired into any route. The palette is
 * taken from the design itself rather than the app's semantic tokens, because
 * the design lives outside this product's colour system.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-screen w-[508px] flex-col bg-[#0f0f0f] px-10 py-6"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[#f2f2f2]">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="text-[#e6e6e6]">
        <FiSettings aria-hidden="true" size={24} />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        size={18}
        className="shrink-0 text-[#c7c7c7]"
      />
      <span className="truncate font-primary-light text-base text-[#c7c7c7]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        size={20}
        className="shrink-0 text-[#f2f2f2]"
      />
      <h2 className="font-primary-bold text-xl text-[#f2f2f2]">
        Add New Design
      </h2>
    </div>

    <div className="mt-8 flex flex-col gap-2">
      <FieldLabel htmlFor="pat-token-input">Personal Access Token</FieldLabel>
      <input
        id="pat-token-input"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        className={INPUT_CLASSNAME}
      />
    </div>

    <div className="mt-6 flex flex-col gap-2">
      <FieldLabel htmlFor="design-url-input">Design URL</FieldLabel>
      <input
        id="design-url-input"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={INPUT_CLASSNAME}
      />
    </div>

    <div className="mt-9 flex gap-6">
      <button type="button" className={BUTTON_CLASSNAME}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSNAME}>
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-xl text-[#c7c7c7]">
      Recent Breakdowns
    </h2>
  </div>
);

const INPUT_CLASSNAME =
  "h-12 w-full rounded-md border border-[#4a4a4a] bg-[#1b1b1b] px-3.5 font-primary-light text-base text-[#e6e6e6] placeholder:text-[#6f6f6f]";

const BUTTON_CLASSNAME =
  "rounded-lg bg-[#9e4a1e] px-7 py-3 font-primary-bold text-[17px] text-[#8f8f8f]";

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}): JSX.Element => (
  <div className="flex items-center gap-2.5">
    <label
      htmlFor={htmlFor}
      className="font-primary-light text-[15px] text-[#b0b0b0]"
    >
      {children}
    </label>
    <FiInfo aria-hidden="true" size={18} className="text-[#b0b0b0]" />
  </div>
);
