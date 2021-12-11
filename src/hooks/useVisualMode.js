import { useState } from "react";

export default function useVisualMode (initial) {
  const [history, setHistory] = useState([initial])

  const transition = (newMode, replace =false) => {
    //TODO : use prev version of setHistory
    const newHistory = [...history];
    if(replace) {
      newHistory.pop()
    }
    setHistory([...newHistory,newMode]);
  }

  const back = () => {
    //TODO: use prev version
    if(history.length < 2) {
      return;
    }
    const newHistory = [...history]
    newHistory.pop()
    setHistory(newHistory)
  }

  const mode = history[history.length-1];
  return {transition, back, mode};
}



