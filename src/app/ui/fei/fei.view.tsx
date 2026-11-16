// Deliberately not themed: the page is a plain white sheet with the word
// "Fei" in black, so it reads the same in every theme.
export const FeiView = (): JSX.Element => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </div>
  );
};
