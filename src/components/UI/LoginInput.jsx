import PropTypes from 'prop-types';

const LoginInput = ({ type, placeholder, reference, error }) => {
    return (
        <div className="grid gap-1">
        <input
            ref={reference}
            type={type}
            name={placeholder}
            id={placeholder}
            placeholder={placeholder}
            className="p-3 rounded border border-solid border-gray-300 focus:outline-none focus:border-white focus:border-2 text-white"
        />
        {error && <span className="text-red-500">{error}</span>}
        </div>
    );
}

LoginInput.propTypes= {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    reference:  PropTypes.object.isRequired,
    error: PropTypes.string
};

export default LoginInput;