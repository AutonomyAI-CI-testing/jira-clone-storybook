import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-white">
      <p className="font-primary-black text-8xl text-[color:var(--Red700)]">
        Fei
      </p>
    </div>
  );
}
