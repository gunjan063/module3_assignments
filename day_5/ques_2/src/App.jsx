import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <div
        style={{
          color: isRed ? "red" : "blue",
          fontSize: "24px",
          marginBottom: "20px"
        }}
      >
        This text changes color
      </div>

      <button onClick={toggleColor}>
        Change Color
      </button>
    </div>
  );
}

export default App;

