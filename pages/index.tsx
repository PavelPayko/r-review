import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Htag, Text, Button, Tag, Rating } from '../components';
import { withLayout } from '../layout/Layout/Layout';
import styles from '../styles/Home.module.css';
import axios from "axios";

const Home = ({ menu }: HomeProps): JSX.Element => {

  // useEffect(() => {
  //   const { data: menu } = axios.post('https://courses-top.ru/api/top-page/find', {
  //     firstCategory: 0
  //   });
  //   console.log(menu)
  // });
  const [rating, setRrating] = useState<number>(4);

  return (
    <>
      <Htag tag={"h1"}>Next</Htag>
      <Button appearance='primary' arrow='right' >Inc</Button>
      <Button appearance='ghost' arrow='down' >Dec</Button>
      <Text size='s'>Text small count </Text>
      <Text >Text medium count </Text>
      <Text size='l'>Text large count </Text>
      <Tag size='m' color='red'>red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag size='m' color='ghost'>Ghost</Tag>
      <Tag size='s' color='primary'>Primary</Tag>
      <Tag size='s' color='primary' href='#'>Primary Link</Tag>
      <Rating rating={rating} setRating={setRrating} isEdittable={true} />
      <ul>
        {menu.map((item: any, i: number) => <li key={i}>{item._id.secondCategory}</li>)}
      </ul>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post('https://courses-top.ru/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu?: any,
  firstCategory?: number
}
