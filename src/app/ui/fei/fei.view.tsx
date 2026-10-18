export const FeiView = () => {
  return (
    // Fixed white canvas: render with the light token set so the text colour
    // stays legible against the white background in every theme.
    <div className="light flex min-h-screen items-center justify-center bg-white">
      <h1 className="text-center font-primary-black text-5xl text-font-danger">
        Fei
      </h1>
    </div>
  );
};
