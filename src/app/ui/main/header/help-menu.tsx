import { useEffect, useRef, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HiChevronDown } from "react-icons/hi";
import cx from "classix";

// Time the menu stays open after the pointer leaves it, so the pointer can
// travel from the trigger down to the content without the menu flickering shut.
const CLOSE_DELAY = 150;

// Neither item goes anywhere yet, so each one carries the same marker the
// sidebar's disabled Backlog item does and drops its hover highlight the same
// way - see NavItem in ui/main/project/sidebar/sidebar.tsx. The marker has no
// fill: the sidebar's own `bg-grey-300` is a dead legacy class, and the token
// fill that would replace it leaves this 12px label at 3.56:1 in the dark
// themes (6:1 without one).
const NOT_IMPLEMENTED = "Not implemented";
const helpItems = ["Keyboard shortcuts", "Docs"];

const menuItemClass = cx(
  "flex items-center justify-between gap-4 rounded px-3 py-2 text-sm text-font",
  "!cursor-not-allowed select-none"
);

const notImplementedClass =
  "rounded px-2 py-1 text-2xs uppercase text-font-subtle";

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
              <a>
                <span>{item}</span>
                <span className={notImplementedClass}>{NOT_IMPLEMENTED}</span>
              </a>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
