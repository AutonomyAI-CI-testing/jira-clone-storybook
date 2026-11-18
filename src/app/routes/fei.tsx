import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [{ title: "Fei" }];
};

const FeiRoute = (): JSX.Element => {
  return (
    <div className="flex h-full items-center justify-center bg-white">
      <p className="font-primary-black text-5xl text-black">Fei</p>
    </div>
  );
};

export default FeiRoute;
