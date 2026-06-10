import { Form } from "@remix-run/react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaPowerOff } from "react-icons/fa";
import cx from "classix";
import { useUserStore } from "@app/store/user.store";
import { UserAvatar } from "@app/components/user-avatar";
import { Button } from "@app/components/button";
import { Tooltip } from "@app/components/tooltip";

export const UserProfile = (): JSX.Element => {
  const { user } = useUserStore();

  return (
    <DropdownMenu.Root>
      <Tooltip title="User settings">
        <DropdownMenu.Trigger
          aria-label="Toggle user profile menu"
          className="ml-1 rounded-full outline outline-2 outline-border-disabled hover:outline-border-brand transition-all"
        >
          <UserAvatar {...user} />
        </DropdownMenu.Trigger>
      </Tooltip>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className={cx(
            "z-50 min-w-[200px] rounded bg-elevation-surface-overlay shadow-md",
            "radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up"
          )}
        >
          <div className="flex flex-col items-center p-4">
            <UserAvatar {...user} size={80} />
            <span className="mt-3 text-lg font-medium text-font">{user.name}</span>
            <span className="text-sm text-font-subtle">{user.email}</span>
          </div>
          <DropdownMenu.Separator className="h-px bg-border" />
          <div className="p-2">
            <Form action="action/logout" method="post">
              <Button
                color="danger"
                variant="subtlest"
                type="submit"
                className="w-full justify-start gap-2"
                aria-label="Log out of account"
              >
                <FaPowerOff />
                <span>Log out</span>
              </Button>
            </Form>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
