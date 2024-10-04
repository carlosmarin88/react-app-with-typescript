import { useState } from "react"

export const useProduct = () => {

  const [counter, setCounter] = useState(0);
  
  const increaseBy = (value: number) => {
    setCounter(prev => Math.max(prev + value, 0));
  }

  const isEmpty = counter === 0;

  return {
    counter,
    isEmpty,
    increaseBy,
  }
}
