import React, { useState } from "react";

interface QuantityButtonProps {
  initialQuantity?: number;
  onQuantityChange?: (newQuantity: number) => void;
  minQuantity?: number;
  maxQuantity?: number;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  initialQuantity = 1,
  onQuantityChange,
  minQuantity = 0,
  maxQuantity = Infinity,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > minQuantity) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleDecrement}
        className="px-3 py-1 bg-gray-200 rounded-l-md"
        disabled={quantity <= minQuantity}
      >
        -
      </button>
      <span className="px-4 py-1 bg-gray-100">{quantity}</span>
      <button
        onClick={handleIncrement}
        className="px-3 py-1 bg-gray-200 rounded-r-md"
        disabled={quantity >= maxQuantity}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
