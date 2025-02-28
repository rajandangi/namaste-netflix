const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
      <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-red-600 animate-spin mb-4"></div>
      <p className="text-red-600 font-medium text-lg">Loading...</p>
    </div>
  );
};

export default Loading;