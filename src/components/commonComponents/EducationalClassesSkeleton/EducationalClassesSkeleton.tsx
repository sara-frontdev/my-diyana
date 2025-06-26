// base
import { FC } from "react";

const EducationalClassesSkeleton: FC = () => {
  return (
    <div className="product-item group shadow-xl rounded-lg p-4 mt-4 my-8 animate-pulse bg-white">
      <div className="overflow-hidden rounded-xl mb-4 bg-gray-200 h-[173px] flex justify-center items-center">
        <div className="w-[285px] h-[173px] bg-gray-300 rounded-lg" />
      </div>

      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between gap-2">
            <div className="w-[100px] h-[16px] bg-gray-300 rounded" />
            <div className="w-[150px] h-[16px] bg-gray-200 rounded" />
          </div>
        ))}

        <div className="flex items-center justify-between gap-2">
          <div className="w-[80px] h-[18px] bg-gray-300 rounded" />
          <div className="w-[120px] h-[22px] bg-gray-200 rounded" />
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="w-[80px] h-[18px] bg-gray-300 rounded" />
          <div className="w-[120px] h-[22px] bg-gray-200 rounded" />
        </div>

        <div className="w-full h-[40px] bg-gray-300 rounded-lg mt-4" />
      </div>
    </div>
  );
};

export { EducationalClassesSkeleton };
