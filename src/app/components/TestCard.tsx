import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" panel from the
 * supplied Figma frame. Smoke-test only: it takes no props, holds no state and
 * is not wired into any route.
 *
 * Colours come from the raw palette declared in src/app/styles/app.css
 * (--DarkNeutral*, --Orange800) through arbitrary values, so the card renders
 * identically under every theme and introduces no new design tokens.
 */

const FIELDS = [
  {
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const fieldInput =
  "mt-3 h-[68px] w-full rounded border border-[var(--DarkNeutral700)] bg-transparent px-4 text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

const actionButton =
  "h-[60px] w-[176px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-xl text-[var(--DarkNeutral900)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] p-10 font-primary text-[var(--DarkNeutral800)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-2xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <HiOutlineCog
        aria-hidden
        size={26}
        className="shrink-0 text-[var(--DarkNeutral1100)]"
      />
    </div>

    <div className="mt-7 flex items-center gap-4">
      <HiChevronUp
        aria-hidden
        size={24}
        className="shrink-0 text-[var(--DarkNeutral900)]"
      />
      <span className="truncate text-lg">From entire frame to a singl…</span>
    </div>

    <div className="mt-24 flex items-center gap-4">
      <HiChevronUp
        aria-hidden
        size={28}
        className="shrink-0 text-[var(--DarkNeutral900)]"
      />
      <h2 className="font-primary-black text-2xl text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    {FIELDS.map((field, index) => (
      <div key={field.label} className={index === 0 ? "mt-12" : "mt-6"}>
        <div className="flex items-center gap-4">
          <span className="text-lg">{field.label}</span>
          <HiOutlineInformationCircle
            aria-hidden
            size={22}
            className="shrink-0 text-[var(--DarkNeutral1000)]"
          />
        </div>
        <input
          aria-label={field.label}
          placeholder={field.placeholder}
          className={fieldInput}
        />
      </div>
    ))}

    <div className="mt-12 flex justify-center gap-8">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={actionButton}>
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-black text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
