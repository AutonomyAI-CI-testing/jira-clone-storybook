import { Button } from "@app/components/button";

/**
 * Self-contained smoke-test card. Takes no props — it renders the same
 * content every time it appears.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-80 max-w-full rounded bg-elevation-surface-raised p-4 text-font shadow-sm"
    >
      <h2 className="font-primary-bold text-lg">Test Card</h2>
      <p className="pt-1 text-sm text-font-subtle">
        A small self-contained card used to check that a component renders in
        the preview.
      </p>
      <Button type="button" className="mt-4 w-fit">
        Primary action
      </Button>
    </div>
  );
};
