import { useCallback, useState } from "react";

/**
 * Toggles a piece of state between true and false
 */
export const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  const toggle = useCallback(() => {
    setState((value) => !value);
  }, []);

  return [state, toggle] as const;
};
