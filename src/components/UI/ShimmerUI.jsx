const ShimmerUI = () => {
    return (
        <div className="w-full h-screen bg-black">
            <div className="pt-36 px-12 md:px-24">
                {/* Title shimmer */}
                <div className="w-1/2 h-8 bg-gray-700 rounded-md mb-4 animate-pulse"></div>
                {/* Overview shimmer */}
                <div className="w-3/4 h-4 bg-gray-700 rounded-md mb-2 animate-pulse"></div>
                <div className="w-2/3 h-4 bg-gray-700 rounded-md mb-2 animate-pulse"></div>
                <div className="w-1/2 h-4 bg-gray-700 rounded-md mb-6 animate-pulse"></div>
                {/* Buttons shimmer */}
                <div className="flex gap-3">
                    <div className="w-28 h-10 bg-gray-700 rounded-md animate-pulse"></div>
                    <div className="w-28 h-10 bg-gray-700 rounded-md animate-pulse"></div>
                </div>
            </div>
            {/* Background shimmer */}
            <div className="w-full h-screen absolute top-0 left-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        </div>
    );
};

export default ShimmerUI;