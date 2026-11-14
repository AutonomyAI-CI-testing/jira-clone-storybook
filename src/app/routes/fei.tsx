// Standalone page: the word "Fei" centred on a white background.
// Registered outside the __main layout so no header or navigation renders.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-5xl text-black">Fei</h1>
    </div>
  );
}
