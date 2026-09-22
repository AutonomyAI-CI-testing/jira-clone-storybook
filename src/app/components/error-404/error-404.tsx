import { ErrorBase } from "../error-base";

export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-lg bg-gradient-to-b from-[#092957] via-[#172b4d] to-[#1d2125] p-6 sm:flex-row sm:items-end sm:gap-2 sm:p-8">
      <img
        src="/images/error-404/wizard-background.png"
        alt="A wizard robot casting a spell, wand raised"
        className="pointer-events-none order-2 h-[150px] w-auto shrink-0 drop-shadow-lg sm:order-1 sm:h-[220px]"
      />
      <div className="relative order-1 rounded-md bg-elevation-surface p-6 shadow-md sm:order-2">
        <ErrorBase variant="404" message={message} href={href} />
      </div>
    </div>
  );
};

interface Props {
  message: string;
  href: string;
}
