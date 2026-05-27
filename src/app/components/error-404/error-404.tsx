import { ErrorBase } from "../error-base";

interface Props {
  message: string;
  href: string;
}

export const Error404 = ({ message = "Error 404: Not Found", href }: Props) => {
  return <ErrorBase variant="404" message={message} href={href} />;
};
