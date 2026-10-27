import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

export default function ProjectsRoute() {
  return (
    <main className="flex h-full w-full items-center justify-center bg-black">
      <h1 className="font-primary-black text-8xl leading-none text-font-success">
        Fei
      </h1>
    </main>
  );
}
