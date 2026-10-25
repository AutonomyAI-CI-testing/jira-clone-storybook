export const FeiView = () => {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      {/* Fixed palette red rather than the semantic `text-font-danger` token:
          this page keeps a hard-coded white background, and the danger token
          resolves to a pale pink in the dark themes, which would be unreadable
          on white. */}
      <h1 className="font-primary-black text-8xl text-[color:var(--Red600)]">
        Fei
      </h1>
    </div>
  );
};
