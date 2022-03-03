import styles from './Text.module.css';
import { TextProps } from './Text.props';
import cn from 'classnames';

export const Text = ({ size = 'm', children, className, ...props }: TextProps): JSX.Element => {
    const textStyle = cn(styles.text, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
    });

    return (
        <p className={textStyle} {...props}>
            {children}
        </p>
    );
};

export default Text;
