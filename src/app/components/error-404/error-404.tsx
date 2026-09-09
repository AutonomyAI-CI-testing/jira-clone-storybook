import { ErrorBase } from "../error-base";

export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <div
      className="flex min-h-[600px] w-full items-center justify-center bg-contain bg-center bg-no-repeat p-6"
      style={{ backgroundImage: "url(/images/error-404-wizard.png)" }}
    >
      <ErrorBase variant="404" message={message} href={href} />
    </div>
  );
};

interface Props {
  message: string;
  href: string;
}
