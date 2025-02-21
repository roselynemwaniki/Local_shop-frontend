const Table = ({ columns, data }) => {
    return (
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col) => (
              <th key={col} className="border p-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border">
              {columns.map((col) => (
                <td key={col} className="p-2 border">{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;