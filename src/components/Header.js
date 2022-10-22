import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, color }) => {
    const headerStyle = {
        border: `solid 2px ${color}`,
        boxShadow: `2px 2px 5px ${color}`,
    };

    const onClick = () => {
        console.log('click');
    };

    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
            <Button onClick={onClick} />
        </header>
    );
};

Header.defaultProps = {
    title: 'Task Tracker',
    color: '#6e82a2',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
