interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  isLoading?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  type = "button",
  variant = "primary",
  isLoading = false,
  onClick
}) => {
  const baseStyle = "px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 text-sm";
  const variants = {
    primary: "bg-gradient-to-r from-red-800 to-red-700 text-white hover:from-red-900 hover:to-red-800 disabled:from-red-300 disabled:to-red-300 shadow-md hover:shadow-lg",
    outline: "border-2 border-red-700 text-red-700 hover:bg-red-50 disabled:opacity-50"
  };
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${isLoading ? "cursor-not-allowed" : ""}`}
    >
      {isLoading ? "⏳ Memproses..." : label}
    </button>
  );
};