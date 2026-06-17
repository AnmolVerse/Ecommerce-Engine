type ButtonProps = {
  text: string;
  onClick?: () => void;
  bgColor?: string;
};

function Button({
  text,
  onClick,
  bgColor = "#ff9900",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: "white",
        border: "none",
        padding: "12px 24px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
      }}
    >
      {text}
    </button>
  );
}

export default Button;