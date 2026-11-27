import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const ACTION_BUTTON_CLASSES =
  "rounded-lg bg-[#9c4a1c] px-8 py-3 font-primary-bold text-base text-[#d0d0d0] hover:bg-[#8a4018] active:bg-[#7a3815] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d0d0d0]";

interface TestCardFieldProps {
  id: string;
  label: string;
  hint: string;
  placeholder: string;
}

function TestCardField({ id, label, hint, placeholder }: TestCardFieldProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor={id} className="font-primary-bold text-base text-[#c8c8c8]">
          {label}
        </label>
        <span role="img" aria-label={hint} className="text-[#c8c8c8]">
          <IoInformationCircleOutline className="h-5 w-5" />
        </span>
      </div>
      <input
        id={id}
        name={id}
        type="text"
        placeholder={placeholder}
        className="w-full rounded border-2 border-[#8f8f8f] bg-[#2b2b2b] px-4 py-3 font-primary-light text-base text-[#d4d4d4] placeholder:text-[#8f8f8f] focus:border-[#d4d4d4] focus:outline-none"
      />
    </div>
  );
}

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] max-w-full flex-col bg-[#1e1e1e] px-10 py-8 font-primary text-base text-[#d4d4d4]"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[#dcdcdc]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded-full p-1 text-[#d4d4d4] hover:bg-[#2b2b2b] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d0d0d0]"
      >
        <IoSettingsOutline className="h-6 w-6" />
      </button>
    </header>

    <div className="mt-6 flex items-center gap-3">
      <IoChevronUpOutline
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#d4d4d4]"
      />
      <span className="truncate font-primary-light text-base text-[#b8b8b8]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <IoChevronUpOutline
        aria-hidden="true"
        className="h-5 w-5 shrink-0 text-[#d4d4d4]"
      />
      <h2 className="font-primary-bold text-xl text-[#dcdcdc]">
        Add New Design
      </h2>
    </div>

    <div className="mt-10 flex flex-col gap-6">
      <TestCardField
        id="personal-access-token"
        label="Personal Access Token"
        hint="More information about the personal access token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <TestCardField
        id="design-url"
        label="Design URL"
        hint="More information about the design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex justify-center gap-4">
      <button type="button" className={ACTION_BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-28 font-primary-bold text-xl text-[#dcdcdc]">
      Recent Breakdowns
    </h2>
  </div>
);
