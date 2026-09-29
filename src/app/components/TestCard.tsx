import { Button } from "@app/components/button";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded border border-border bg-elevation-surface-raised p-4 shadow-sm"
    >
      <h3 className="font-primary-black text-2xl text-font">Test card</h3>
      <p className="mt-2 font-primary-light text-sm text-font-subtle">
        A self-contained card that checks a new component renders end to end.
      </p>

      <dl className="mt-4 flex flex-col gap-2 border-t border-border pt-3">
        <div className="flex items-center justify-between gap-4">
          <dt className="font-primary-bold text-xs text-font-subtle">Status</dt>
          <dd className="font-primary text-sm text-font">In progress</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="font-primary-bold text-xs text-font-subtle">Owner</dt>
          <dd className="font-primary text-sm text-font">Daniel Serrano</dd>
        </div>
      </dl>

      <div className="mt-4 flex items-center justify-between gap-4 border-t border-border pt-3">
        <span className="font-primary-light text-2xs text-font-subtlest">
          Updated just now
        </span>
        <Button type="button">Open card</Button>
      </div>
    </div>
  );
};
