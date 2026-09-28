import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function FeiRoute() {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <span className="font-primary-black text-9xl leading-none text-[var(--Red600)]">
        Fei
      </span>
    </div>
  );
}
