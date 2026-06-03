export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-sm rounded-md bg-elevation-surface p-6 shadow-md"
  >
    <h2 className="mb-3 text-lg font-primary text-font">Test Card</h2>
    <p className="font-primary-light leading-6 text-font-subtle">
      This is a simple display card component that shows a title and
      description. It is self-contained with no external data dependencies.
    </p>
  </div>
);
