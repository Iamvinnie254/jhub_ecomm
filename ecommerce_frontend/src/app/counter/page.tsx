"use client";
import { useState } from "react";

const CounterPage = () => {
  const [count, setCount] = useState(20);

  const decrement = (count: number) => {
    setCount(count - 1);
  };

  const increment = (count: number) => {
    setCount(count + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value));
  };

  return (
    <div className="h-[90vh] justify-center items-center flex flex-col">
      <div className="flex gap-4">
        <button
          onClick={() => decrement(count)}
          className="bg-red-500 px-2 rounded-xl p-2"
        >
          Decrement (-1)
        </button>
        <span className="px-4 py-2 border border-gray-200">{count}</span>
        <button
          onClick={() => increment(count)}
          className="bg-green-500 px-2 rounded-xl p-2"
        >
          Increment (+1)
        </button>
      </div>
      <div className="p-4">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter a number to add or subtract"
          className="p-2 mx-5 border border-gray-900 rounded-lg"
        />
        {/* <button className="bg-blue-500 px-2 rounded-xl p-2 px-5 mx-5">
          Set
        </button> */}
      </div>
    </div>
  );
};

export default CounterPage;
