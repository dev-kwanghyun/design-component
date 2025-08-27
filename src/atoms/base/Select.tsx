import { useState } from "react";
import IconArrowDown from "@/asset/base/ArrowDown.svg";

interface SelectProps<T> {
  options: T[];
  placeholder?: string;
  value: T | undefined;
  keyName: keyof T;
  onChange: (option: T) => void;
  disabled?: boolean;
  className?: string;
}

function Select<T>({
  options,
  value,
  placeholder,
  keyName,
  onChange,
  disabled = false,
  className = "",
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: T) => {
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={` ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <button
          className="pl-4 pr-3 py-2.5 border border-gray300 rounded-md text-[14px] leading-[140%] text-black relative hover:bg-gray100 hover:border-gray500 flex justify-between items-center w-full"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          <span>{value ? String(value[keyName]) : placeholder}</span>
          <span
            className={`flex w-5 h-5 justify-center items-center transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <IconArrowDown />
          </span>
        </button>
      </div>

      {isOpen && !disabled && (
        <div className="absolute w-[300px] p-1 shadow flex flex-col gap-0.5 rounded-lg bg-white left-0 top-[calc(100%+2px)] z-10 border border-gray-200">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-2.5 py-2 hover:bg-gray100 rounded-sm cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {String(option[keyName])}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
