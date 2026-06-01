export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[400px] rounded bg-elevation-surface-raised p-6 shadow-md"
  >
    <h2 className="mb-3 font-primary-bold text-lg text-font">Test Card</h2>
    <p className="font-primary-light text-sm text-font-subtle leading-6">
      This is a simple card component that displays a title heading and a
      description paragraph.
    </p>
  </div>
);
