import propTypes from "prop-types";

const Loading = ({ message = "Loading ...", messageClass = "text-red-600" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100px] w-full shadow">
      <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-red-600 animate-spin mb-4"></div>
      <p className={`text-sm ${messageClass}`}>{message}</p>
    </div>
  );
};

Loading.propTypes = {
  message: propTypes.string,
  messageClass: propTypes.string,
}

export default Loading;