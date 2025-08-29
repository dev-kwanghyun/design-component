interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  isError?: boolean;
  errorMessage?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

function Input({
  title,
  isError,
  errorMessage,
  value,
  onChange,
  className,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col">
      {title && <div className="text-[14px] text-black mb-1">{title}</div>}
      <div
        className={`flex gap-1.5 items-center border bg-white placeholder:text-gray500 border-gray300 rounded-md px-4 py-2.5 focus:border-blue text-black text-[14px]
           ${className ?? ""} ${isError || errorMessage ? "border-red" : ""}`}
      >
        {leftIcon && leftIcon}
        <input
          type="text"
          className="outline-none w-full"
          value={value}
          onChange={onChange}
          {...props}
        />
        {rightIcon && rightIcon}
      </div>

      {errorMessage && (
        <span className="text-red text-[12px] mt-1">{errorMessage}</span>
      )}
    </div>
  );
}

export default Input;
