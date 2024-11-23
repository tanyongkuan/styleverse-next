import React from 'react';

type Props = {
  placeholder?: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export default function NumberInput({
  placeholder,
  value,
  onIncrement,
  onDecrement
}: Props) {
  return (
    <div className="custom-number-input flex h-10 w-32 flex-col gap-1">
      {placeholder && (
        <label
          htmlFor="custom-input-number"
          className="w-full text-sm font-semibold"
        >
          {placeholder}
        </label>
      )}
      <div className="relative flex h-10 w-full flex-row rounded-lg bg-transparent">
        <button
          onClick={onDecrement}
          data-action="decrement"
          className="h-full w-20 cursor-pointer rounded-l outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="flex w-full cursor-default items-center text-center text-base font-semibold text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none md:text-base"
          name="custom-input-number"
          value={value}
          readOnly
        />
        <button
          onClick={onIncrement}
          data-action="increment"
          className="h-full w-20 cursor-pointer rounded-r"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
