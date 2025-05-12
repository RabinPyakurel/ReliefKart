import React, { useEffect, useState } from "react";

const Toast = ({ message, type }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval;
    let timeout;

    // Animate the bottom progress bar
    interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 1 : 0));
    }, 20); // 100 * 20ms = 2000ms = 2 seconds

    // Cleanup
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-gray-700";

  return (
    <div className="fixed top-5 right-4 transform -translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-lg px-4 py-3 w-80 z-50">
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${bgColor}`}></div>
        <p className="text-gray-800 text-sm">{message}</p>
      </div>
      {/* Bottom progress bar */}
      <div className="mt-2 h-1 bg-gray-300 rounded overflow-hidden">
        <div
          className={`h-full ${bgColor} transition-all duration-50`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Toast;
