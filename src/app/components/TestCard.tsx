import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[360px] flex-col gap-3 rounded bg-elevation-surface-raised p-5 shadow-sm"
    >
      <span className="w-fit rounded bg-background-accent-blue-subtler px-1 py-0.5 font-primary text-2xs uppercase text-font-accent-blue">
        In progress
      </span>

      <h3 className="font-primary-black text-2xl text-font">TestCard</h3>

      <p className="font-primary-light text-sm text-font-subtle">
        Self-contained card, built entirely from the design system tokens.
      </p>

      <span className="font-primary text-2xs uppercase text-font-subtlest">
        TC-1 / Test card
      </span>

      <div className="flex justify-end">
        <Button>Open card</Button>
      </div>
    </div>
  );
};
