// A deliberately bare page: a white canvas with a single word centred on it.
// It sits outside the main layout so no header or navigation is rendered.
export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-black">Fei</h1>
    </div>
  );
}
