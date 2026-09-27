export default function FeatureCard({ title, children, number }) {
  return (
    <article className="card feature-card">
      {number ? <span className="feature-card-number" aria-hidden="true">{number}</span> : null}
      <h3>{title}</h3>
      {children}
    </article>
  );
}
