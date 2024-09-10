export interface ArrowProps {
  color?: string;
  size?: number;
  direction?: "ArrowUp" | "ArrowDown" | "ArrowLeft" | "ArrowRight";
}

const Arrow = ({
  color = "white",
  size = 24,
  direction = "ArrowRight",
}: ArrowProps) => {
  const getRotation = () => {
    switch (direction) {
      case "ArrowUp":
        return "rotate(-90deg)";
      case "ArrowDown":
        return "rotate(90deg)";
      case "ArrowLeft":
        return "rotate(180deg)";
      default:
        return "rotate(0deg)";
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: getRotation() }}
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow;
