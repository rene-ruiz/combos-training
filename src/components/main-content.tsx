import React, { useState, useEffect, useMemo, useCallback } from "react";
import Arrow, { ArrowProps } from "./arrow";
import useKeyPress from "../hooks/useKeyPress";

const WinMessage: React.FC = () => (
  <div className="absolute bottom-1/4 flex flex-col items-center">
    <div className="text-2xl text-gray-200">You win!</div>
    <div className="mt-2 text-lg text-gray-400">Press any key to restart</div>
  </div>
);

const MainContent: React.FC = () => {
  const { pressedKeys, resetPressedKeys } = useKeyPress();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [resetState, setResetState] = useState(0);
  const challenge = useMemo(
    () => ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    [],
  );

  const handleKeyPress = useCallback(() => {
    const lastPressed = pressedKeys[pressedKeys.length - 1];
    if (lastPressed === challenge[currentIndex]) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, challenge.length));
    } else if (currentIndex === challenge.length) {
      setHasWon(true);
      setResetState(resetState + 1);
    }
  }, [pressedKeys, challenge, currentIndex, hasWon]);

  const handleRestart = useCallback(() => {
    if (hasWon && resetState === 2) {
      setCurrentIndex(0);
      setHasWon(false);
      resetPressedKeys();
      setResetState(0);
    }
  }, [hasWon, pressedKeys, resetPressedKeys, setResetState]);

  useEffect(() => {
    handleKeyPress();
    handleRestart();
  }, [handleKeyPress, handleRestart]);

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="flex">
        {challenge.map((item, index) => (
          <Arrow
            key={`${item}-${index}`}
            direction={item as ArrowProps["direction"]}
            size={180}
            color={index < currentIndex ? "#4ade80" : "#e3e3e3"}
          />
        ))}
      </div>
      {hasWon && <WinMessage />}
    </div>
  );
};

export default MainContent;
