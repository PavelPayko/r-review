
import { FunctionComponent } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { LayoutProps } from "./Layout.props";
import styles from './Layout.module.css';

function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer className={styles.footer} />
        </div>
    );
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
