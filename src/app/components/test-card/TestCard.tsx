export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-elevation-surface-raised text-font shadow-sm rounded-md p-4 flex flex-col gap-2">
      <h3 className="font-primary-black text-xl text-font">Test Card Title</h3>
      <p className="font-primary-light text-font-subtlest text-sm">This is a short description of the test card.</p>
    </div>
  );
};
