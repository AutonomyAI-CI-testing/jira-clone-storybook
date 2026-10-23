export const FeiView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      {/* Literal red (the repo's Red600): this page keeps a fixed white surface in
          every theme, so its text colour is fixed too — the semantic text-danger
          token resolves to a pale salmon in the dark, lava and lime themes. */}
      <h1 className="font-primary-black text-5xl text-[#e34935]">Fei</h1>
    </div>
  );
};
