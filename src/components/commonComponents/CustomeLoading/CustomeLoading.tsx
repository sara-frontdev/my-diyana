const CustomeLoading = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-20 h-20">
        <div className="absolute w-full h-full border-4 border-gray-400 rounded-full opacity-100 animate-ripple" />
        <div className="absolute w-full h-full border-4 border-gray-400 rounded-full opacity-100 animate-ripple [animation-delay:0.6s]" />
      </div>
    </div>
  );
};

export { CustomeLoading };
