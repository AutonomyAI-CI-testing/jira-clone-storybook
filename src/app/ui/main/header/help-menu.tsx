import { useEffect, useRef, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HiChevronDown } from "react-icons/hi";
import cx from "classix";

// Time the menu stays open after the pointer leaves it, so the pointer can
// travel from the trigger down to the content without the menu flickering shut.
const CLOSE_DELAY = 150;

const menuItemClass = cx(
  "flex cursor-pointer select-none items-center rounded px-3 py-2 text-sm text-font",
  "hover:bg-background-brand-subtlest hover:text-font-brand",
  "focus:bg-background-brand-subtlest focus:text-font-brand"
);

export const HelpMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const openMenu = (): void => {
    clearTimeout(closeTimeout.current);
    setIsOpen(true);
  };

  const closeMenuLater = (): void => {
    closeTimeout.current = setTimeout(() => setIsOpen(false), CLOSE_DELAY);
  };

  // Both items are placeholders for now: they carry no destination yet, and
  // selecting one only closes the menu.
  const helpItems = ["Keyboard shortcuts", "Docs"];

  useEffect(() => {
    return () => {
      clearTimeout(closeTimeout.current);
    };
  }, []);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen} modal={false}>
      <DropdownMenu.Trigger
        onPointerEnter={openMenu}
        onPointerLeave={closeMenuLater}
        className="flex cursor-pointer items-center gap-1 rounded px-3 py-2 text-font hover:bg-background-brand-subtlest hover:text-font-brand"
      >
        <span>Help</span>
        <HiChevronDown
          size={16}
          className={cx(
            "transition-transform duration-100",
            isOpen && "rotate-180"
          )}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          onPointerEnter={openMenu}
          onPointerLeave={closeMenuLater}
          className="z-50 min-w-[180px] rounded bg-elevation-surface-overlay p-1.5 text-font shadow-md radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
        >
          {helpItems.map((item) => (
            <DropdownMenu.Item asChild key={item} className={menuItemClass}>
              <a>{item}</a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
