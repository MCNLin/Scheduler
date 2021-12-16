import { useState } from "react";

export default function useVisualMode(initial) {

  const [history, setHistory] = useState([initial])

  const transition = (newMode, replace = false) => {
  
    setHistory((prev) => {
      const newHistory = [...prev];
      if (replace) {
        newHistory.pop();
      }
      newHistory.push(newMode);
      return newHistory
    });

  };

  const back = () => {
  
    if (history.length < 2) {
      return;
    }
    setHistory((prev) => {
      const newHistory = [...prev]
      newHistory.pop()
      return newHistory
    });
  };
  const mode = history[history.length - 1];
  return { transition, back, mode };
};



