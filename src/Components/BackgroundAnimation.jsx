import React from "react";

export default function BackgroundAnimation() {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute top-0 -left-4 w-72 h-72 bg-green-700 rounded-full"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-green-300 rounded-full"></div>
      <div className="absolute left-20 -bottom-8 w-72 h-72 bg-green-900 rounded-full"></div>
    </div>
  );
}
