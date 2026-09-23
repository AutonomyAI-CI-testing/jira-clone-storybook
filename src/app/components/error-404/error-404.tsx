import { ErrorBase } from "../error-base";

export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden">
      <img
        src="/images/wizard-robot.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 h-[420px] w-auto -translate-y-4 opacity-10"
      />
      <ErrorBase variant="404" message={message} href={href} />
    </div>
  );
};

interface Props {
  message: string;
  href: string;
}
