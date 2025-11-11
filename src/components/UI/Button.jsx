export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
}) {
  const base =
    "rounded-lg font-semibold transition duration-200 focus:outline-none";

  const variants = {
    primary: "bg-goo-blue hover:bg-blue-600 text-white",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    violet: "bg-goo-violet hover:bg-violet-800 text-white",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
