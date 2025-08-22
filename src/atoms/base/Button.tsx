const themeJson = {
  main: "bg-[#151515] text-white hover:text-[#DBE1E8]",
  sub: "bg-[#fff] border border-[#B2B8C3] text-[#151515] hover:text-[#157AFF] hover:border-[#157AFF]",
  disabled: "!bg-[#DBE1E8] !text-[#949CA8] border-none",
};

const sizeJson = {
  big: "w-[300px] h-[52px] px-4 py-2 text-[14px] font-semibold rounded-[6px]",
  small: "px-3 py-1 rounded-[6px] text-[13px] font-semibold",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: keyof typeof themeJson;
  size?: keyof typeof sizeJson;
}
function Button({
  theme = "main",
  size = "big",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${themeJson[theme]} ${sizeJson[size]} ${
        disabled ? themeJson.disabled : ""
      }`}
      {...props}
    ></button>
  );
}

export default Button;
