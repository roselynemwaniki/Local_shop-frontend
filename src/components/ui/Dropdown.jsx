const Dropdown = ({ options, onChange }) => {
    return (
      <select className="border p-2" onChange={(e) => onChange(e.target.value)}>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    );
  };
  
  export default Dropdown;