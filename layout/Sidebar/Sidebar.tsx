import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";

export default function Sidebar({ ...props }: SidebarProps): JSX.Element {
    return (
        <div {...props}>
            Sidebar
        </div>
    )
}
