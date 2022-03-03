import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";

export default function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <span>OwlTop © 2020 - 2021 Все права защищены</span>
            <span><a href="#">Пользовательское соглашение</a></span>
            <span><a href="#">Политика конфиденциальности</a></span>
        </footer>
    );
}
