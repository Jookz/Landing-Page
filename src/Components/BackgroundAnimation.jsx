import React from "react";

export default function BackgroundAnimation() {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute top-0 -left-4 w-64 h-64 bg-green-600  rounded-full  filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-64 h-64 bg-amber-300 rounded-full  filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute left-20 -bottom-64 w-64 h-64 bg-green-900 rounded-full  filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>
  );
}
