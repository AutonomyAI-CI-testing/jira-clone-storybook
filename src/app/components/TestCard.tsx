import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Smoke test: the attached Figma frame built as one self-contained component.
 *
 * The frame is a dark panel, and the app's semantic colour tokens are
 * light-surface values, so the frame's own colours are used verbatim through
 * arbitrary Tailwind values: #1e1e1e panel, #d4d4d4 title, #c7c7c7 section
 * headings, #b0b0b0 field labels, #8f8f8f muted text, #2a2a2a fields on an
 * #8c8c8c border, #a0471f actions with an #e9a68c label. Radius, type families
 * and spacing come from the repo's own scale.
 */
const FIELD_CLASS =
  "mt-2 h-10 w-full rounded border border-[#8c8c8c] bg-[#2a2a2a] px-4 font-primary-light text-[13px] text-[#d4d4d4] placeholder:text-[#8f8f8f]";

const ACTION_CLASS =
  "h-9 w-[84px] rounded bg-[#a0471f] font-primary text-[13px] text-[#e9a68c]";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-[#1e1e1e] p-5 font-primary">
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-base text-[#d4d4d4]">
        UI magician Agent
      </h2>
      <IoSettingsOutline size={22} className="shrink-0 text-[#d4d4d4]" />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <IoChevronUp size={16} className="shrink-0 text-[#8f8f8f]" />
      <span className="truncate font-primary-light text-[13px] text-[#8f8f8f]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <IoChevronUp size={18} className="shrink-0 text-[#c7c7c7]" />
      <h3 className="font-primary-bold text-[15px] text-[#c7c7c7]">
        Add New Design
      </h3>
    </div>

    <div className="mt-4">
      <div className="flex items-center gap-2">
        <span className="font-primary-light text-sm text-[#b0b0b0]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={16}
          className="shrink-0 text-[#b0b0b0]"
        />
      </div>
      <input
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-4">
      <div className="flex items-center gap-2">
        <span className="font-primary-light text-sm text-[#b0b0b0]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={16}
          className="shrink-0 text-[#b0b0b0]"
        />
      </div>
      <input
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file:"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-6 flex items-center gap-4">
      <button type="button" className={ACTION_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-[15px] text-[#c7c7c7]">
      Recent Breakdowns
    </h3>
  </div>
);
