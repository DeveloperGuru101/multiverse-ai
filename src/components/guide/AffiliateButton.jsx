import { SYSTEME_URL } from "../../links";

export default function AffiliateButton({ children, variant = "primary" }) {
  return (
    <a
      className={`btn ${variant}`}
      href={SYSTEME_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
    >
      {children}
    </a>
  );
}
