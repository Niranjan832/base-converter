import React, { useState } from "react";

function BaseConverter() {
  const [input, setInput] = useState("");
  const [base, setBase] = useState("decimal");
  const [results, setResults] = useState({});

  const convertNumber = () => {
    let decimalValue;

    try {
      if (base === "binary") {
        decimalValue = parseInt(input, 2);
      } else if (base === "octal") {
        decimalValue = parseInt(input, 8);
      } else if (base === "decimal") {
        decimalValue = parseInt(input, 10);
      } else if (base === "hexadecimal") {
        decimalValue = parseInt(input, 16);
      }

      if (isNaN(decimalValue)) throw new Error("Invalid input");

      setResults({
        binary: decimalValue.toString(2),
        octal: decimalValue.toString(8),
        decimal: decimalValue.toString(10),
        hexadecimal: decimalValue.toString(16).toUpperCase(),
      });
    } catch {
      setResults({ error: "Invalid number for selected base" });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Base Converter</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter number"
        style={{ marginRight: "10px" }}
      />
      <select value={base} onChange={(e) => setBase(e.target.value)}>
        <option value="binary">Binary</option>
        <option value="octal">Octal</option>
        <option value="decimal">Decimal</option>
        <option value="hexadecimal">Hexadecimal</option>
      </select>
      <button onClick={convertNumber} style={{ marginLeft: "10px" }}>
        Convert
      </button>

      <div style={{ marginTop: "20px" }}>
        {results.error ? (
          <p style={{ color: "red" }}>{results.error}</p>
        ) : (
          <>
            <p><strong>Binary:</strong> {results.binary}</p>
            <p><strong>Octal:</strong> {results.octal}</p>
            <p><strong>Decimal:</strong> {results.decimal}</p>
            <p><strong>Hexadecimal:</strong> {results.hexadecimal}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default BaseConverter;
