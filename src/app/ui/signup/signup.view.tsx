import { useState } from "react";
import { Form, Link } from "@remix-run/react";
import cx from "classix";
import { Button } from "@app/components/button";

type FormField = {
  value: string;
  error: string;
};

const initialField = (): FormField => ({ value: "", error: "" });

export const SignupView = () => {
  const [name, setName] = useState<FormField>(initialField());
  const [email, setEmail] = useState<FormField>(initialField());
  const [password, setPassword] = useState<FormField>(initialField());
  const [confirmPassword, setConfirmPassword] =
    useState<FormField>(initialField());

  const validate = (): boolean => {
    let valid = true;

    if (!name.value.trim()) {
      setName((f) => ({ ...f, error: "Full name is required." }));
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
      setEmail((f) => ({ ...f, error: "Email address is required." }));
      valid = false;
    } else if (!emailRegex.test(email.value)) {
      setEmail((f) => ({ ...f, error: "Enter a valid email address." }));
      valid = false;
    }

    if (!password.value) {
      setPassword((f) => ({ ...f, error: "Password is required." }));
      valid = false;
    } else if (password.value.length < 8) {
      setPassword((f) => ({
        ...f,
        error: "Password must be at least 8 characters.",
      }));
      valid = false;
    }

    if (!confirmPassword.value) {
      setConfirmPassword((f) => ({
        ...f,
        error: "Please confirm your password.",
      }));
      valid = false;
    } else if (password.value !== confirmPassword.value) {
      setConfirmPassword((f) => ({
        ...f,
        error: "Passwords do not match.",
      }));
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validate()) {
      e.preventDefault();
    }
  };

  return (
    <div className="mx-auto max-w-[400px] pt-[10vh]">
      {/* Logo / heading */}
      <div className="mb-8 flex items-center gap-3">
        <img src="/logo.png" alt="Jira Clone logo" className="h-8 w-8" />
        <span className="font-primary-black text-2xl text-font">
          Jira Clone
        </span>
      </div>

      <h1 className="font-primary-black text-4xl text-font">Create account</h1>
      <p className="mb-8 mt-2 font-primary-light text-base text-font-subtle">
        Sign up to manage your projects and issues.
      </p>

      <Form
        method="post"
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Full name */}
        <Field
          id="signup-name"
          label="Full name"
          type="text"
          name="name"
          value={name.value}
          onChange={(v) => setName({ value: v, error: "" })}
          error={name.error}
          placeholder="Woody Pride"
          autoComplete="name"
        />

        {/* Email */}
        <Field
          id="signup-email"
          label="Email address"
          type="email"
          name="email"
          value={email.value}
          onChange={(v) => setEmail({ value: v, error: "" })}
          error={email.error}
          placeholder="woody@andys-room.com"
          autoComplete="email"
        />

        {/* Password */}
        <Field
          id="signup-password"
          label="Password"
          type="password"
          name="password"
          value={password.value}
          onChange={(v) => setPassword({ value: v, error: "" })}
          error={password.error}
          placeholder="At least 8 characters"
          autoComplete="new-password"
        />

        {/* Confirm password */}
        <Field
          id="signup-confirm-password"
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword.value}
          onChange={(v) => setConfirmPassword({ value: v, error: "" })}
          error={confirmPassword.error}
          placeholder="Repeat your password"
          autoComplete="new-password"
        />

        <Button
          type="submit"
          name="_action"
          value="signup"
          aria-label="Create account"
          className="mt-2 w-full"
        >
          Create account
        </Button>
      </Form>

      <p className="mt-6 text-center font-primary-light text-sm text-font-subtle">
        Already have an account?{" "}
        <Link
          to="/login"
          className="font-primary-bold text-font-brand hover:underline"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

/* ─── Internal Field component ─── */

type FieldProps = {
  id: string;
  label: string;
  type: "text" | "email" | "password";
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
};

const Field = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
}: FieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="font-primary-bold text-sm text-font"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cx(
          "rounded-md border-none bg-background-input p-3 text-sm text-font outline-2 transition-all duration-200 ease-in-out",
          "placeholder:font-primary-light placeholder:text-xs placeholder:text-font-subtlest",
          "hover:bg-background-input-hovered",
          "focus-visible:bg-background-input-pressed focus-visible:shadow-blue focus-visible:outline-border-brand",
          error && "outline outline-2 outline-border-danger"
        )}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="font-primary-light text-xs text-font-danger"
        >
          {error}
        </p>
      )}
    </div>
  );
};
