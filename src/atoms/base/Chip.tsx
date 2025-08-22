const themeJson = {
  green: "text-tagGreen1 bg-tagGreen2",
  blue: "text-tagBlue1 bg-tagBlue2",
  gray: "text-gray700 bg-gray200",
  red: "text-tagRed1 bg-tagRed2",
};

interface ChipProps extends React.ButtonHTMLAttributes<HTMLSpanElement> {
  theme?: keyof typeof themeJson;
}
function Chip({ theme = "green", children, className }: ChipProps) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 inline-flex items-center h-6 text-[12px] ${
        themeJson[theme]
      } ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

export default Chip;
