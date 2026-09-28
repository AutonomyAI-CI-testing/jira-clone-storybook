import { Button } from "@app/components/button";

export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-elevation-surface-raised p-6 shadow-md">
        <h2 className="font-primary-black text-2xl text-font">Test card</h2>
        <p className="mt-2 font-primary-light text-sm text-font-subtle">
          This is a self-contained card component used as a smoke test. It takes
          no props and holds no state.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="rounded bg-background-brand-subtlest px-2 py-1 font-primary-light text-2xs uppercase text-font-brand">
            Smoke test
          </span>
          <Button>Action</Button>
        </div>
      </div>
    </div>
  );
};
