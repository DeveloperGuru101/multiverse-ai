export default function WorkflowDiagram({ steps, label }) {
  return (
    <ol className="flow guide-flow" aria-label={label}>
      {steps.map((step, index) => (
        <li className="flow-item" key={step}>
          <span className="flow-step">{step}</span>
          {index < steps.length - 1 && (
            <span className="flow-arrow" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}
