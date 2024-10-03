import React, { TextareaHTMLAttributes, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  maxLength?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  className,
  maxLength,
  value,
  onChange,
  ...props
}) => {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (typeof value === "string") {
      setCharCount(value.length);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    if (onChange) {
      onChange(e);
    }
  };

  const baseTextAreaClasses =
    "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 min-h-[100px] resize-y";
  const errorTextAreaClasses = "border-red-500 focus:ring-red-500";
  const normalTextAreaClasses = "border-gray-300";

  const textAreaClasses = twMerge(
    baseTextAreaClasses,
    error ? errorTextAreaClasses : normalTextAreaClasses,
    className,
  );

  return (
    <div className="mb-4">
      {label && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <textarea
          className={textAreaClasses}
          onChange={handleChange}
          value={value}
          maxLength={maxLength}
          {...props}
        />
        <div className="absolute bottom-2 right-2 text-xs text-gray-500">
          {charCount}
          {maxLength && `/${maxLength}`}
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default TextArea;
