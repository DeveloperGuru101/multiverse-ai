export default function FeatureCard({ title, children }) {
  return (
    <article className="card feature-card">
      <h3>{title}</h3>
      {children}
    </article>
  );
}
