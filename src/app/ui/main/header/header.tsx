import { Link } from "react-router";
import cx from "classix";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";
import { Tooltip } from "@app/components/tooltip/tooltip";
import { SelctTheme } from "./select-theme";
import { UserProfile } from "./user-profile";

const helpItems = ["Keyboard shortcuts", "Docs", "Changelog"];

export const Header = (): JSX.Element => {
  const iconBaseClass =
    "w-[24px] h-[24px] text-icon rounded-full flex items-center justify-center hover:bg-background-brand-subtlest hover:text-icon-brand";

  return (
    <header className="relative z-10 flex w-full items-center justify-between bg-elevation-surface-raised px-5 py-2 shadow-[0_1px_5px_-1px_rgba(0,0,0,0.3)]">
      <section>
        <Link
          to="/"
          className="flex cursor-pointer items-center rounded px-3 py-2 text-font hover:bg-background-brand-subtlest hover:text-font-brand"
        >
          <img src="/images/logo.png" width={24} height={24} alt="Logo" />
          <span className="ml-2">Jira Clone</span>
        </Link>
      </section>
      <section className="flex items-center gap-4">
        <Tooltip title="About">
          <button
            aria-label="About this website"
            disabled
            className={cx(iconBaseClass, "cursor-not-allowed")}
          >
            <HiQuestionMarkCircle size={24} />
          </button>
        </Tooltip>
        <Tooltip title="Github">
          <a
            href="https://github.com/daniserrano7/jira-clone"
            className={iconBaseClass}
            aria-label="Go to my Github"
          >
            <AiFillGithub size={24} />
          </a>
        </Tooltip>
        <div className="group relative">
          <button
            type="button"
            aria-haspopup="true"
            className="flex items-center gap-1 rounded px-3 py-2 text-font hover:bg-background-brand-subtlest hover:text-font-brand"
          >
            <span>Help</span>
            <RxCaretDown size={14} />
          </button>
          <div className="invisible absolute right-0 top-full z-50 pt-1.5 opacity-0 transition duration-100 ease-out group-hover:visible group-hover:opacity-100">
            <ul className="min-w-[168px] rounded bg-elevation-surface-overlay p-2 text-font shadow-md">
              {helpItems.map((item) => (
                <li
                  key={item}
                  className="cursor-default select-none rounded px-2 py-1.5 text-sm hover:bg-background-brand-subtlest"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SelctTheme />
        <UserProfile />
      </section>
    </header>
  );
};
