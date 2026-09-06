import { ErrorBase } from "../error-base";

export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return (
    <ErrorBase
      variant="404"
      message={message}
      href={href}
      imageSrc="/images/error-404.png"
    />
  );
};

interface Props {
  message: string;
  href: string;
}
