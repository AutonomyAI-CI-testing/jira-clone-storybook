import { BsChevronUp, BsGear, BsInfoCircle } from "react-icons/bs";

const ACTION_BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

/**
 * Static replica of the attached Figma panel ("UI magician Agent").
 *
 * Smoke test only: no props, no state, no behaviour, and it is not wired into
 * the app. The colours, sizes and spacing are the design's own values, taken
 * from the exported style guide rather than from the product's token system,
 * because this panel is not part of the product's themed UI.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black p-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px]">UI magician Agent</span>
      <BsGear aria-hidden="true" size={14} />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <BsChevronUp aria-hidden="true" size={10} className="text-[#8b9291]" />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[90px] flex items-center gap-2">
      <BsChevronUp aria-hidden="true" size={14} className="text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-11">
      <div className="flex items-center gap-1">
        <label
          htmlFor="testElem-access-token"
          className="text-[11.5px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <BsInfoCircle aria-hidden="true" size={15} className="text-[#a4a4a3]" />
      </div>
      <input
        id="testElem-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-1">
        <label
          htmlFor="testElem-design-url"
          className="text-[11.5px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <BsInfoCircle aria-hidden="true" size={15} className="text-[#a3a3a2]" />
      </div>
      <input
        id="testElem-design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex justify-end gap-[17px]">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
