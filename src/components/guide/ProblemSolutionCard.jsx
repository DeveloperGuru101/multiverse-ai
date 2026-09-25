export default function ProblemSolutionCard({ title, problem, solution }) {
  return (
    <article className="card problem-card">
      <h3>{title}</h3>
      <p>
        <strong>The problem.</strong> {problem}
      </p>
      <p>
        <strong>How a platform like this helps.</strong> {solution}
      </p>
    </article>
  );
}
