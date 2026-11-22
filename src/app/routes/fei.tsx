import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  const title = "Fei";
  return [{ title }];
};

export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <h1 className="font-primary-black text-9xl text-black">Fei</h1>
    </div>
  );
}
