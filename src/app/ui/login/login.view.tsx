import { useState } from "react";
import { Form } from "@remix-run/react";
import { User } from "@domain/user";
import { LoginBrandPanel, LoginForm } from "@app/components/login";

export const LoginView = ({ users }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = (email: string, password: string, rememberMe: boolean) => {
    setIsLoading(true);
    setError(null);

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    if (password.length < 1) {
      setError("Password is required");
      setIsLoading(false);
      return;
    }

    console.log("Login attempt:", { email, rememberMe });

    setTimeout(() => {
      const defaultUser = users[0];
      if (defaultUser) {
        const form = document.createElement("form");
        form.method = "post";
        form.innerHTML = `
          <input type="hidden" name="_action" value="setUser" />
          <input type="hidden" name="user" value="${defaultUser.id}" />
          <input type="hidden" name="rememberMe" value="${rememberMe}" />
        `;
        document.body.appendChild(form);
        form.submit();
      }
    }, 500);
  };

  return (
    <div className="autonomy-login-container">
      <LoginBrandPanel />
      <Form method="post" className="flex-1">
        <LoginForm
          isLoading={isLoading}
          error={error || undefined}
          onSubmit={handleFormSubmit}
        />
      </Form>
    </div>
  );
};

interface Props {
  users: User[];
}
