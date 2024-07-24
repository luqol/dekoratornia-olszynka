import clsx from 'clsx';
import styles from './Button.module.scss'
import PropTypes from 'prop-types';

const Button = ({children, action, className, disabled}) => {
    return (
        <button type='submit' className={clsx(styles.button, className)} onClick={action} disabled={disabled}>{children}</button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    action: PropTypes.func,
    className: PropTypes.string,
};

export default Button;