import useKeyPress from "./hooks/useKeyPress";

const App: React.FC = () => {
  const pressedKeys = useKeyPress();
  return (
    <div className="min-h-screen bg-zinc-700 text-gray-200">
      {pressedKeys.map((item, key) => (
        <span key={item.concat(key.toString())}>{item}{' '}</span>
      ))}
    </div>
  );
};

export default App;
