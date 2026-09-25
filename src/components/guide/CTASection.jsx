import AffiliateButton from "./AffiliateButton";

export default function CTASection({ id, title, text, label }) {
  return (
    <section className="guide-cta" id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <h2 id={id ? `${id}-title` : undefined}>{title}</h2>
      <p>{text}</p>
      <AffiliateButton>{label}</AffiliateButton>
    </section>
  );
}
