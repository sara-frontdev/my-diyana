import { FC } from "react";
import { BsTrainFront } from "react-icons/bs";

const FullPageLoading: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center h-64 space-y-6">
      <div className="flex items-center space-x-2 animate-bounce">
        <BsTrainFront className="w-10 h-10 text-pink-400 animate-pulse" />
        <div className="w-8 h-8 rounded-md bg-yellow-400" />
        <div className="w-8 h-8 rounded-md bg-green-400" />
        <div className="w-8 h-8 rounded-md bg-blue-400" />
      </div>
      <p className="text-pink-500 font-extrabold text-xl animate-wiggle">
        در حال حرکت به دنیای شادی‌ها...
      </p>
    </div>
  );
};

export { FullPageLoading };
