type SkeletonCustomeSliderProps = {
  imagePosition?: "left" | "right";
};

const SkeletonCustomeSlider = ({
  imagePosition,
}: SkeletonCustomeSliderProps) => {
  return (
    <div
      className={`relative z-10
        max-w-3xl  mt-[10rem] 
        flex flex-col-reverse lg:flex mx-auto
        ${imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"}
         justify-between gap-4 items-center
        bg-[#f1f7fc] p-4 rounded-xl shadow-md animate-pulse`}
    >
      {/* اسکلتون تصویر */}
      <div className="w-full md:w-1/2  bg-gray-200 rounded-xl relative">
        <div className="absolute left-1 top-1/2 -translate-y-1/2  bg-white text-black border rounded-md w-6 h-6 flex items-center justify-center shadow opacity-40">
          ←
        </div>
        <div className="absolute right-1 top-1/2 -translate-y-1/2 bg-white text-black border rounded-md w-6 h-6 flex items-center justify-center shadow opacity-40">
          →
        </div>
      </div>

      {/* اسکلتون توضیحات */}
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <div className="w-40 h-6 bg-gray-300 rounded mb-4" /> {/* عنوان */}
        <div className="p-3 rounded-xl min-h-40  bg-[#f1f7fc] space-y-2 flex flex-col justify-center">
          <div className="w-3/4 h-4 bg-gray-300 rounded" />
          <div className="w-full h-4 bg-gray-200 rounded" />
          <div className="w-5/6 h-4 bg-gray-200 rounded" />
          <div className="w-2/3 h-4 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCustomeSlider;
