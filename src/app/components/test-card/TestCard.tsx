const OVERLINE = "TEST-1";
const TITLE = "Test card";
const BODY =
  "A self-contained card used to check that a new component can be added and rendered. Everything on it is written inside the component itself.";
const STATUS = "In progress";
const META = "Updated today · Daniel Serrano";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-full max-w-[400px] p-4">
      <div className="flex w-full flex-col gap-3 rounded border border-border bg-elevation-surface-raised p-5 shadow-sm">
        <span className="font-primary-bold text-2xs uppercase text-font-subtle">
          {OVERLINE}
        </span>
        <h2 className="font-primary-bold text-lg text-font">{TITLE}</h2>
        <p className="font-primary-light text-sm text-font-subtle">{BODY}</p>
        <div className="flex items-center gap-3 border-t border-border pt-3">
          <span className="rounded bg-background-brand-subtlest px-2 py-1 font-primary-bold text-2xs text-font-brand">
            {STATUS}
          </span>
          <span className="font-primary-light text-2xs text-font-subtle">
            {META}
          </span>
        </div>
      </div>
    </div>
  );
};
