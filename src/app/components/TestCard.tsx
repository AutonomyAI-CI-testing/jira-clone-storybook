import { LuChevronUp, LuInfo, LuSettings } from "react-icons/lu";

/**
 * Standalone reproduction of the "UI magician Agent" panel from the Figma frame.
 *
 * It is deliberately self-contained: no props, no state, nothing wired up.
 *
 * The colours below are the design's own hex values, written as Tailwind
 * arbitrary values on purpose. The panel is a dark surface that has no
 * equivalent in the app's semantic theme — the nearest tokens are visibly
 * different shades (the ground sits between --DarkNeutral0 #161a1d and
 * --DarkNeutral100 #1d2125, and the rust button #843a17 has no near token at
 * all) — so nothing here resolves through a theme variable and the panel looks
 * the same in every theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1a1a1a] p-5 font-primary-bold text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <LuSettings aria-hidden="true" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <LuChevronUp
        aria-hidden="true"
        size={10}
        className="shrink-0 text-[#8b9291]"
      />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-1.5">
      <LuChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <label
        htmlFor="testElem-token"
        className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <LuInfo
        aria-hidden="true"
        size={15}
        className="shrink-0 text-[#a5adad]"
      />
    </div>
    <input
      id="testElem-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] leading-[13.92px] placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-3">
      <label
        htmlFor="testElem-url"
        className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <LuInfo
        aria-hidden="true"
        size={15}
        className="shrink-0 text-[#a5adad]"
      />
    </div>
    <input
      id="testElem-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-3 h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-5 font-primary-bold text-[10.5px] leading-[12.71px] placeholder:text-[#71726e]"
    />

    <div className="mt-5 flex justify-end gap-[17px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-11 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

interface ActionButtonProps {
  children: string;
}
