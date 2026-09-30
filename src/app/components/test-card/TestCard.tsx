import { Button } from "@app/components/button";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[200px] items-center justify-center p-6"
  >
    <div className="w-full max-w-sm rounded border border-border bg-elevation-surface-raised p-4 text-sm shadow-sm">
      <h2 className="font-primary-bold text-base text-font">Test Card</h2>
      <p className="mt-1 font-primary-light text-font-subtle">
        A self-contained card used to smoke-test how a new component renders.
      </p>
      <div className="mt-4 flex justify-end">
        <Button type="button">Action</Button>
      </div>
    </div>
  </div>
);
