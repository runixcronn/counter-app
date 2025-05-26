import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);

  // Bu şekilde yazarsak her tıklamada önceki değerini koruyoruz.
  const handleIncrement = () => {
    setCount((prevCount) => {
      const newIncrement = prevCount + 1;
      return newIncrement;
    });
  };

  
  // Bu şekilde yazarsak her tıklamada önceki değerini koruyoruz.
    const handleDecrement = () => {
    setCount((prevCount) => {
      const newDecrement = prevCount - 1;
      return newDecrement;
    });
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen bg-amber-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Counter App</h1>

        <div className="flex justify-center items-center mb-6">
          <div className="text-5xl font-bold bg-gray-100 px-8 py-4 rounded-lg">
            {count}
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors duration-200"
            onClick={handleDecrement}
          >
            Azalt
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors duration-200"
            onClick={handleIncrement}
          >
            Artır
          </button>
        </div>

        <div className="flex justify-center items-center mt-6">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg w-full transition-colors duration-200"
            onClick={handleReset}
          >
            Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
