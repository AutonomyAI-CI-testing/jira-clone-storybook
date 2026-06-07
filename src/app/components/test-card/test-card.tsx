export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="flex w-[320px] flex-col gap-2 rounded bg-elevation-surface-raised p-4 shadow-sm">
        <h2 className="font-primary-black text-lg text-font">Card Title</h2>
        <p className="font-primary-light text-sm text-font-subtle">
          A short description of this card&apos;s content.
        </p>
      </div>
    </div>
  );
};
