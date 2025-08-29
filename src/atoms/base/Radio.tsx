import { useRef } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

function Radio({ id, checked, name, labelText, ...props }: CheckboxProps) {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.click(); // onchange() 대신 click() 사용
    }
  };
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-5 h-5 rounded-full cursor-pointer ${
          checked ? "border-[6px] border-blue" : "border border-gray300"
        }`}
        onClick={handleClick}
      ></div>
      <input
        ref={ref}
        type="radio"
        id={id}
        checked={checked}
        name={name}
        className="peer sr-only" // w-0 h-0 대신 sr-only 사용 (접근성)
        {...props}
      />
      <label
        htmlFor={id}
        className="cursor-pointer select-none text-[14px] font-medium"
      >
        {labelText}
      </label>
    </div>
  );
}
export default Radio;
