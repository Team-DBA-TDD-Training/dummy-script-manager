import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HistoryPanel from "./HistoryPanel.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HistoryPanel></HistoryPanel>
    </>
  );
}

export default App;
