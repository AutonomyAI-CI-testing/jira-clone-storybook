import { Button } from "@app/components/button";

/**
 * Self-contained test card. Takes no props — it only exists to confirm a
 * component renders correctly in the preview.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[320px] rounded bg-elevation-surface-raised p-4 text-font shadow-sm outline outline-2 outline-transparent"
    >
      <h2 className="font-primary-bold text-lg">Test card</h2>
      <p className="mt-1 font-primary-light text-sm leading-6 text-font-subtle">
        A self-contained test card. It takes no props — it exists to confirm a
        new component renders correctly in the preview.
      </p>
      <Button className="mt-4 w-full">Continue</Button>
    </div>
  );
};
