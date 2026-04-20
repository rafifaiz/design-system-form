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
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:opacity-50"
  };

  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${
        isLoading ? "cursor-not-allowed" : ""
      }`}
    >
      {isLoading ? "⏳ Loading..." : label}
    </button>
  );
};