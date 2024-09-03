import { useCallback, useEffect, useState } from "react";

const useKeyPress = () => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    setPressedKeys((prevKeys) => [...prevKeys, event.key]);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return pressedKeys;
};

export default useKeyPress;
