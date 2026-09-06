import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const companyLinks = ["Company", "About", "Careers", "Press", "Contact Us"];
const legalLinks = ["Terms of Use", "Privacy Policy"];

const socialLinks = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaYoutube, label: "YouTube" },
];

export const LandingFooter = (): JSX.Element => {
  return (
    <footer className="flex w-full items-center justify-between border-t border-border px-10 py-6">
      <span className="font-primary text-2xs text-font-subtle">
        © SuddenlySpaces, 2024
      </span>
      <nav className="flex items-center gap-6" aria-label="Company links">
        {companyLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="font-primary text-2xs text-font hover:underline"
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        {socialLinks.map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-icon hover:bg-background-neutral-hovered"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
      <nav className="flex items-center gap-6" aria-label="Legal links">
        {legalLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="font-primary text-2xs text-font-subtle hover:underline"
          >
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
};
