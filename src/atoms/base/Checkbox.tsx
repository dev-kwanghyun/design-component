import { useRef } from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

function Checkbox({ id, checked, labelText, ...props }: CheckboxProps) {
  const ref = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        ref={ref}
        type="checkbox"
        id={id}
        checked={checked}
        className="peer sr-only"
        {...props}
      />

      <div
        onClick={handleClick}
        className="w-[18px] h-[18px] border-[1.5px] flex items-center justify-center border-gray-300 rounded-sm peer-checked:border-none peer-checked:bg-[#157AFF] m-[3px] cursor-pointer transition-all duration-200 "
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            className="transition-opacity duration-150"
          >
            <path
              d="M11.1133 0.387142C11.4517 0.725596 11.4517 1.27434 11.1133 1.61279L5.11328 7.61279C4.77483 7.95125 4.22608 7.95125 3.88763 7.61279L0.88763 4.61279C0.549175 4.27434 0.549175 3.7256 0.88763 3.38714C1.22608 3.04869 1.77483 3.04869 2.11328 3.38714L4.50046 5.77432L9.88763 0.387142C10.2261 0.0486872 10.7748 0.0486872 11.1133 0.387142Z"
              fill="white"
            />
          </svg>
        )}
      </div>
      <label
        htmlFor={id}
        className="cursor-pointer select-none text-[14px] font-medium"
      >
        {labelText}
      </label>
    </div>
  );
}

export default Checkbox;
