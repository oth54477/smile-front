import React, { useState, useEffect } from "react";
import Card from "./components/common/card";

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <p>와우</p>
      <Card />
    </div>
  );
}

export default App;
