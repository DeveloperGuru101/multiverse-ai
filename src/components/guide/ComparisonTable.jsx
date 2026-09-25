export default function ComparisonTable({ caption, columns, rows }) {
  return (
    <div className="table-wrap">
      <table className="compare-table">
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th scope="col">Topic</th>
            {columns.map((column) => (
              <th scope="col" key={column}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              {row.cells.map((cell, index) => (
                <td key={`${row.label}-${index}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
