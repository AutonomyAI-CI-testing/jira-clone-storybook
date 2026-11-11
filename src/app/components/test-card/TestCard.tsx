import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test card: a static, self-contained reproduction of the "UI magician
 * Agent" panel from the supplied Figma frame. It takes no props and holds no
 * state — its job is to prove a frame can reach the preview, not to ship UI.
 *
 * Colours are written as literal Tailwind arbitrary values on purpose. The
 * frame is a dark panel with rust buttons that no semantic token describes,
 * and the request asked for approximate rather than exact fidelity. Note that
 * this repo overrides `theme.colors` wholesale, so stock utilities such as
 * `bg-gray-800` or `text-zinc-400` compile to nothing.
 */
const FIELD_CLASS =
  "mt-4 w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-8 py-4 font-primary text-base text-[#d8d8d8] placeholder:text-[#8a8a8a] focus:border-[#c9c9c9] focus:outline-none";

const BUTTON_CLASS =
  "min-w-[170px] rounded bg-[#9c3d1e] px-6 py-3 font-primary text-base text-[#e2dedb] hover:bg-[#8a3517] active:bg-[#7a2f14]";

const InfoIcon = () => (
  <FiInfo aria-hidden="true" className="ml-3 h-5 w-5 shrink-0 text-[#d0d0d0]" />
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[#1e1e1e] px-10 py-10 font-primary text-[#d0d0d0]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-xl text-[#e8e8e8]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#d0d0d0] hover:text-[#e8e8e8]"
      >
        <FiSettings aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#9a9a9a]"
      />
      <span className="truncate text-base text-[#9a9a9a]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="h-6 w-6 shrink-0 text-[#e8e8e8]"
      />
      <h2 className="font-primary-bold text-2xl text-[#e8e8e8]">
        Add New Design
      </h2>
    </div>

    <div className="mt-8">
      <div className="flex items-center">
        <label htmlFor="testElem-token" className="text-base">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center">
        <label htmlFor="testElem-url" className="text-base">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-8 flex gap-8">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl text-[#e8e8e8]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
