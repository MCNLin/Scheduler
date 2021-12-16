import { useState } from "react";

//custom hook to 
export default function useVisualMode(initial) {
  
  const [history, setHistory] = useState([initial])
  //transition function to be able to advance to any other mode
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
  //back function to allow to return previous mode
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
  //mode state
  const mode = history[history.length - 1];
  return { transition, back, mode };
};



