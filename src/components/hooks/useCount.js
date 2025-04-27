import { useEffect, useState } from "react";

export function useCount(initialCount) {
const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count + " It works")
  }, [count])

  function increment() {
    setCount((prev) => prev + 1);
  }

  return { count, increment}
}
