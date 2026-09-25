import { useEffect } from "react";

export default function ExternalRedirect({ to }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="section">
      <div className="container narrow">
        <h1>Continuing to the linked page</h1>
        <p>
          <a href={to}>Continue</a>
        </p>
      </div>
    </main>
  );
}
