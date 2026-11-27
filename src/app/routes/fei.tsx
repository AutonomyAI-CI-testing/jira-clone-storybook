// A deliberately bare page: a white canvas with a single word centered in it.
// It sits outside the `__main` layout on purpose, so no header, sidebar or
// theme chrome shows around it. Its white background and red text are fixed
// values rather than theme roles, so the page looks the same in all five themes.
export default function FeiRoute() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-8xl text-[#ca3521]">Fei</h1>
    </div>
  );
}
