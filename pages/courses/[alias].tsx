import type { GetStaticProps } from 'next';
import styles from '../styles/Home.module.css';
import axios from "axios";
import { withLayout } from '../../layout/Layout/Layout';

const Course = ({ menu }: CourseProps): JSX.Element => {
    return (
        <>

        </>
    );
};

export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post('https://courses-top.ru/api/top-page/find', {
        firstCategory
    });
    const { data: page } = await axios.post('https://courses-top.ru/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface CourseProps extends Record<string, unknown> {
    menu?: any,
    firstCategory?: number
}
