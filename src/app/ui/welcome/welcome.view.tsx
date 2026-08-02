import { Link } from "@remix-run/react";
import { Button } from "@app/components/button";

export const WelcomeView = () => {
  return (
    <div className="mx-auto flex max-w-[500px] flex-col items-center pt-[10vh] text-center">
      <h1 className="font-primary-black text-5xl text-red-500">Welcome</h1>
      <p className="mb-6 mt-3 font-primary-light text-lg text-font-subtle">
        Your project management companion. Stay on top of your work, collaborate
        with your team, and ship great things.
      </p>
      <img
        src="/images/welcome-mascot.png"
        alt="Jira Clone wizard mascot"
        className="mb-8 h-[300px] w-auto"
      />
      <Link to="/login">
        <Button size="lg" color="primary" variant="contained">
          Get Started
        </Button>
      </Link>
    </div>
  );
};
