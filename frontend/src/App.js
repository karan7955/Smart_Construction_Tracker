import React, { useEffect, useState } from "react";
import { getData } from "./Api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getData().then(data => setMessage(data.message));
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-blue-100">
      <h1 className="text-3xl font-bold text-green-600">{message}</h1>
    </div>
  );
}

export default App;
