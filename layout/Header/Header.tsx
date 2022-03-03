import { HeaderProps } from "./Header.props";

export default function Header({ ...props }: HeaderProps): JSX.Element {
    return (
        <header {...props}>
            Header
        </header>
    );
}
