import { Button } from "@app/components/button";

/**
 * A small, self-contained card used as a smoke test for the component
 * pipeline. It takes no props and renders hardcoded demo content.
 */
export const TestCard = () => {
  return (
    <div id="testElem" className="flex items-center justify-center p-6">
      <div className="w-[320px] rounded bg-elevation-surface-raised p-6 shadow-sm outline outline-2 outline-transparent">
        <h2 className="font-primary-bold text-lg text-font">Test card</h2>
        <p className="mt-2 font-primary-light text-sm text-font-subtle">
          A self-contained card rendered to confirm the component pipeline
          works end to end.
        </p>
        <div className="mt-4 flex items-center justify-end gap-2">
          <Button color="neutral" variant="subtlest">
            Dismiss
          </Button>
          <Button>Confirm</Button>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
