import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, color, onAdd }) => {
    const onClick = () => {
        console.log('click');
    };

    const style = {
        border: `solid 2px ${color}`,
        boxShadow: `1px 1px 10px ${color}`,
    };

    return (
        <header className='header' style={style}>
            <h1>{title}</h1>
            <Button onClick={onAdd} />
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
