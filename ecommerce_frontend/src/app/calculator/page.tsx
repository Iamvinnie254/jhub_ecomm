"use client";
import useCalculator from "@/utils";
import { useState } from "react";

const CalculatorPage = () => {
  const [display, setDisplay] = useState("0");

 // const { sum } = useCalculator();

  const appendValue = (value: string) => {
    if (display == "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const clearDisplay = () => {
    setDisplay("0");
  };
  const backspace = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const calculate = () => {
    try {
      const expression = display.replace(/×/g, "*").replace(/÷/g, "/");
      const result = eval(expression);

      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  //const { square } = useCalculator();

  const square = () => {
    try {
      const value = eval(display);
      setDisplay(String(Math.pow(value, 2)));
    } catch {
      setDisplay("Error");
    }
  };
  const squareRoot = () => {
    try {
      const value = eval(display);
      setDisplay(String(Math.sqrt(value)));
    } catch {
      setDisplay("Error");
    }
  };

  const reciprocal = () => {
    try {
      const value = eval(display);
      setDisplay(String(1 / value));
    } catch {
      setDisplay("Error");
    }
  };

  const percentage = () => {
    try {
      const value = eval(display);
      setDisplay(String(value / 100));
    } catch {
      setDisplay("Error");
    }
  };

  const toggleSign = () => {
    try {
      const value = eval(display);
      setDisplay(String(value * -1));
    } catch {
      setDisplay("Error");
    }
  };

  const Button = ({
    label,
    onClick,
    className = "",
  }: {
    label: string;
    onClick: () => void;
    className?: string;
  }) => (
    <button
      onClick={onClick}
      className={`h-14 rounded-lg shadow-md font-semibold text-lg transition hover:scale-105 active:scale-95 ${className}`}
    >
      {label}
    </button>
  );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="w-full max-w-md bg-gray-800 rounded-3xl shadow-2xl p-6 border-4 border-gray-700">
        {/* Calc header*/}
        <div className="mb-4">
          <h1 className="text-white text-xl font-bold">CASIO fx-82MS</h1>
          <p className="text-gray-400 text-sm">Calculator</p>
        </div>

        {/* screen*/}
        <div className="bg-green-100 border-4 border-gray-500 rounded-lg p-4 mb-6">
          <div className="text-right text-3xl font-mono break-all text-black min-h-[50px]">
            {display}
          </div>
        </div>

        {/* calc buttons */}
        <div className="grid grid-cols-4 gap-3">
          <Button
            label="AC"
            onClick={clearDisplay}
            className="bg-red-500 text-white"
          />

          <Button
            label="⌫"
            onClick={backspace}
            className="bg-orange-500 text-white"
          />

          <Button
            label="%"
            onClick={percentage}
            className="bg-blue-500 text-white"
          />

          <Button
            label="÷"
            onClick={() => appendValue("÷")}
            className="bg-gray-600 text-white"
          />

          <Button
            label="√"
            onClick={squareRoot}
            className="bg-blue-500 text-white"
          />

          <Button
            label="x²"
            onClick={square}
            className="bg-blue-500 text-white"
          />

          <Button
            label="1/x"
            onClick={reciprocal}
            className="bg-blue-500 text-white"
          />

          <Button
            label="×"
            onClick={() => appendValue("×")}
            className="bg-gray-600 text-white"
          />

          <Button
            label="7"
            onClick={() => appendValue("7")}
            className="bg-gray-200"
          />

          <Button
            label="8"
            onClick={() => appendValue("8")}
            className="bg-gray-200"
          />

          <Button
            label="9"
            onClick={() => appendValue("9")}
            className="bg-gray-200"
          />

          <Button
            label="-"
            onClick={() => appendValue("-")}
            className="bg-gray-600 text-white"
          />

          <Button
            label="4"
            onClick={() => appendValue("4")}
            className="bg-gray-200"
          />

          <Button
            label="5"
            onClick={() => appendValue("5")}
            className="bg-gray-200"
          />

          <Button
            label="6"
            onClick={() => appendValue("6")}
            className="bg-gray-200"
          />

          <Button
            label="+"
            onClick={() => appendValue("+")}
            className="bg-gray-600 text-white"
          />

          <Button
            label="1"
            onClick={() => appendValue("1")}
            className="bg-gray-200"
          />

          <Button
            label="2"
            onClick={() => appendValue("2")}
            className="bg-gray-200"
          />

          <Button
            label="3"
            onClick={() => appendValue("3")}
            className="bg-gray-200"
          />

          <Button
            label="+/-"
            onClick={toggleSign}
            className="bg-blue-500 text-white"
          />

          <Button
            label="("
            onClick={() => appendValue("(")}
            className="bg-gray-500 text-white"
          />

          <Button
            label="0"
            onClick={() => appendValue("0")}
            className="bg-gray-200"
          />

          <Button
            label=")"
            onClick={() => appendValue(")")}
            className="bg-gray-500 text-white"
          />

          <Button
            label="."
            onClick={() => appendValue(".")}
            className="bg-gray-500 text-white"
          />

          <button
            onClick={calculate}
            className="col-span-4 h-14 bg-green-600 text-white rounded-lg text-xl font-bold hover:bg-green-700 transition"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
