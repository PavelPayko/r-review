import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
    const buttonStyle = cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
    });
    const arrowStyle = cn(styles.arrow, {
        [styles.down]: arrow == 'down',
    });
    return (
        <button className={buttonStyle} {...props}>
            {children}
            {arrow !== 'none' && <div className={arrowStyle}><img src="/arrow.svg" alt="arrow" /></div>}
        </button>
    );
};

export default Button;
