
"use client";

import { FC } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface Props {
  error: Error;
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-6 px-4">
      <div className="flex flex-col items-center bg-red-100 p-10 rounded-xl shadow-md max-w-lg text-center">
        <AlertTriangle 
          size={60} 
          className="mb-2 text-red-600 animate-pulse" 
          strokeWidth={2.5} 
        />
        <h1 className="text-2xl font-semibold text-red-700 drop-shadow-md">
          Bir Şeyler Ters Gitti!
        </h1>
        <p className="text-sm text-red-600 mt-2 font-medium">
          {error?.message || "Bilinmeyen hata"}
        </p>
      </div>

      <button
        aria-label="Hata Sonrası Tekrar Dene"
        onClick={reset}
        className="flex items-center gap-2 my-5 border p-2 px-5 border-zinc-500 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-200 shadow-md cursor-pointer"
      >
       <RotateCcw size={18} className="animate-spin-slow" strokeWidth={2.5} />
        <span>Tekrar Dene</span>
      </button>
    </div>
  );
};

export default Error;