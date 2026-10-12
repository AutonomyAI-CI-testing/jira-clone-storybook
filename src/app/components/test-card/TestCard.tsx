import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Standalone panel reproducing the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: no props, no state, no app wiring. The frame is
 * a one-off dark UI whose palette does not map onto this app's light-first
 * semantic tokens, so its surfaces, text and the rust buttons use literal
 * colours rather than theme tokens.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-screen w-[500px] flex-col bg-[#141414] p-10 font-primary text-[#d7d7d7]"
  >
    <div className="flex items-center justify-between">
      <h1 className={HEADING_CLASSES}>UI magician Agent</h1>
      <FiSettings size={22} aria-hidden />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#8a8a8a]">
      <FiChevronUp size={22} aria-hidden />
      <span className="text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-36 flex items-center gap-3">
      <FiChevronUp size={26} aria-hidden />
      <h2 className={HEADING_CLASSES}>Add New Design</h2>
    </div>

    <div className="mt-8 flex flex-col gap-6">
      {FIELDS.map((field) => (
        <div key={field.id}>
          <div className="flex items-center gap-3">
            <label htmlFor={field.id} className="text-lg">
              {field.label}
            </label>
            <FiInfo size={20} aria-hidden />
          </div>
          <input
            id={field.id}
            placeholder={field.placeholder}
            className={INPUT_CLASSES}
          />
        </div>
      ))}
    </div>

    <div className="mt-10 flex gap-8">
      {BUTTONS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-14 flex-1 rounded-lg bg-[#9c4318] font-primary-bold text-lg text-[#c8b6ac]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className={`mt-16 ${HEADING_CLASSES}`}>Recent Breakdowns</h2>
  </div>
);

const FIELDS = [
  {
    id: "test-card-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const BUTTONS = ["Awesome", "Prepare"];

const HEADING_CLASSES = "font-primary-bold text-2xl";

const INPUT_CLASSES =
  "mt-4 h-14 w-full rounded border border-[#5f5f5f] bg-transparent px-4 text-lg placeholder:text-[#7a7a7a]";
