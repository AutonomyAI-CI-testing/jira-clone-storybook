import { Button } from "@app/components/button";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[320px] rounded-md border border-border bg-elevation-surface-raised p-6 shadow-md"
  >
    <h2 className="font-primary-bold text-lg text-font">Test Card</h2>
    <p className="mb-4 mt-2 font-primary-light text-sm text-font-subtle">
      A small self-contained card used to smoke-test rendering.
    </p>
    <Button>Action</Button>
  </div>
);
