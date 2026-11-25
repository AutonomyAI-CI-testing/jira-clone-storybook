import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import cx from "classix";
import { IoChevronDown } from "react-icons/io5";
import { toast } from "react-toastify";

const ENGLISH_UNITED_STATES = "en-US";

const languages: Array<{ value: string; label: string }> = [
  { value: ENGLISH_UNITED_STATES, label: "English (United States)" },
];

const notAvailable = (): void => {
  toast.info("This section is not available yet.");
};

const textActionClass = cx(
  "rounded py-2 font-[Montserrat,sans-serif] text-base text-black",
  "transition-opacity hover:opacity-70"
);

const primaryActionClass = cx(
  "rounded-full bg-black px-6 py-2.5 font-[Montserrat,sans-serif] text-base leading-6 text-white",
  "transition-opacity hover:opacity-80"
);

/**
 * The design's top bar: the SuddenlySpaces logo, the tenant / listing actions
 * and the language picker. The app has no tenant or listing page, so those two
 * actions announce that they are not built yet rather than doing nothing at
 * all — the same honest state the app's own unfinished navigation uses.
 */
export const FindYourSpaceNav = (): JSX.Element => {
  return (
    <header className="flex min-h-[80px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-[clamp(1rem,5vw,2.5rem)] py-3">
      <img
        src="/images/suddenly-spaces-logo.png"
        width={187}
        height={32}
        alt="SuddenlySpaces"
        className="h-8 w-auto"
      />
      <nav className="flex flex-wrap items-center gap-6">
        <button type="button" className={textActionClass} onClick={notAvailable}>
          Switch to tenant
        </button>
        <button type="button" className={primaryActionClass} onClick={notAvailable}>
          List Your Space
        </button>
        <LanguageMenu />
      </nav>
    </header>
  );
};

const LanguageMenu = (): JSX.Element => {
  const [language, setLanguage] = useState(ENGLISH_UNITED_STATES);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        aria-label="Select language"
        className="flex items-center gap-1.5 rounded"
      >
        <img
          src="/images/us-flag.png"
          width={16}
          height={16}
          alt=""
          className="h-4 w-4"
        />
        <IoChevronDown size={12} className="text-black" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className="z-50 origin-top-right rounded bg-elevation-surface-overlay p-3 text-font shadow-md radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
        >
          <DropdownMenu.Label className="select-none pb-2 text-lg">
            Select language
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={language} onValueChange={setLanguage}>
            {languages.map(({ value, label }) => (
              <DropdownMenu.RadioItem
                key={value}
                value={value}
                className={cx(
                  "flex cursor-pointer select-none items-center gap-2 rounded p-2 text-sm outline outline-2",
                  value === language
                    ? "bg-background-brand-subtlest text-font-brand outline-border-brand"
                    : "outline-transparent hover:outline-border-brand focus:outline-border-brand"
                )}
              >
                {label}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
