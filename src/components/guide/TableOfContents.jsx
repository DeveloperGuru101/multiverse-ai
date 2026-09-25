export default function TableOfContents({ items }) {
  return (
    <nav className="toc" aria-label="On this page">
      <p className="toc-label">On this page</p>
      <ol>
        {items.map((item, index) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
