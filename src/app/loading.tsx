import { FC } from "react";
import { FaSpinner } from "react-icons/fa";

interface Props {
  message?: string;
  designs?: string;
}

const Loading: FC<Props> = ({ message = "Yükleniyor...", designs = "" }) => {
  return (
    <div className={`flex flex-col justify-center items-center h-full ${designs}`}>
      <FaSpinner className="text-6xl text-blue-600 animate-spin mb-4" />
      <p className="text-blue-700 font-semibold text-lg select-none">{message}</p>
    </div>
  );
};

export default Loading;
