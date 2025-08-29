import { useEffect, useState, type ChangeEventHandler } from "react";
import IconArrowDown from "@/asset/base/ArrowDown.svg";
import Input from "./Input";

interface SelectWithInputProps<T> {
  options: T[];
  placeholder?: string;
  value: T | undefined;
  keyName: keyof T;
  onChange: (option: T) => void;
  onTextChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
}

function SelectWithInput<T>({
  options,
  value,
  placeholder,
  keyName,
  onChange,
  onTextChange,
  disabled = false,
  className = "",
}: SelectWithInputProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [isInputMode, setIsInputMode] = useState(false);

  const handleSelect = (option: T) => {
    onChange?.(option);
    setIsOpen(false);
  };

  useEffect(() => {}, []);
  console.log({ value });
  console.log({ options });
  return (
    <div className={`relative ${className}`}>
      <div
        className={` ${
          disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {!isInputMode && (
          <button
            onDoubleClick={() => {
              setIsInputMode(true);
            }}
            className="pl-4 pr-3 py-2.5 border bg-white border-gray300 rounded-md text-[14px] leading-[140%] text-black relative hover:bg-gray100 hover:border-gray500 flex justify-between items-center w-full"
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
        )}
        {isInputMode && (
          <Input
            value={value ? String(value[keyName]) : placeholder}
            onChange={onTextChange}
            rightIcon={
              <button
                onClick={() => setIsInputMode(false)}
                className="flex w-5 h-5 justify-center items-center"
              >
                <IconArrowDown />
              </button>
            }
          />
        )}
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

export default SelectWithInput;
