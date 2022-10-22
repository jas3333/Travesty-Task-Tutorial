import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    const buttonStyle = {
        border: `solid 2px ${color}`,
    };

    return (
        <button className='btn' style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: '#6e82a2',
    text: 'Add',
};

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
