import { usersMock } from "@domain/user";

/**
 * Smoke-test card.
 *
 * Self-contained and prop-less on purpose: it always renders the same fixed
 * mock content, so it can be used to check that a brand-new component file
 * reaches the screen. Approximate spacing/colour/typography is intended.
 */

const CARD_KEY = "JC-42";
const CARD_TYPE = "Story";
const CARD_TITLE = "Smoke test card";
const CARD_DESCRIPTION =
  "Self-contained card used to verify that a new component renders in the preview.";
const COMMENT_COUNT = 3;
const PARTICIPANT_COUNT = 3;

const getInitials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

export const TestCard = (): JSX.Element => {
  const participants = usersMock.slice(0, PARTICIPANT_COUNT);

  return (
    <div
      id="testElem"
      className="w-[320px] rounded border border-border bg-elevation-surface-raised p-4 text-font shadow-xs"
    >
      <div className="flex items-center justify-between">
        <span className="rounded bg-background-brand-bold px-2 py-0.5 font-primary-bold text-2xs text-font-inverse">
          {CARD_KEY}
        </span>
        <span className="font-primary-light text-2xs text-font-subtlest">
          {CARD_TYPE}
        </span>
      </div>

      <h2 className="pt-3 font-primary-bold text-lg text-font">{CARD_TITLE}</h2>
      <p className="line-clamp-2 pt-1 font-primary-light text-sm text-font-subtle">
        {CARD_DESCRIPTION}
      </p>

      <div className="my-3 border-t border-border" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {participants.map((user) => (
            <span
              key={user.id}
              aria-hidden="true"
              title={user.name}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-background-neutral font-primary-bold text-2xs"
              style={user.color ? { backgroundColor: user.color } : undefined}
            >
              {getInitials(user.name)}
            </span>
          ))}
        </div>
        <span className="font-primary-light text-2xs text-font-subtlest">
          {COMMENT_COUNT} comments
        </span>
      </div>
    </div>
  );
};
