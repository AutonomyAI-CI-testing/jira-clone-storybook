// Simple card component for displaying test content
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="rounded-lg border border-border bg-elevation-surface p-6 shadow-sm"
    >
      <h2 className="mb-2 font-primary-black text-xl text-font">
        Test Card Title
      </h2>
      <p className="font-primary-light text-font-subtlest">
        This is a short description for the test card component.
      </p>
    </div>
  );
};
