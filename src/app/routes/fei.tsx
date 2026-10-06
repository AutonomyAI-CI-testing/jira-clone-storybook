// Standalone page: a plain white canvas with "Fei" centered in large black type.
// Deliberately independent of the app shell and the theme system — the request
// calls for a fixed white background and black text in every theme.
export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-black">Fei</h1>
    </div>
  );
}
