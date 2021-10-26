import Head from 'next/head';
import imgBig from '../public/images/nord1.jpg';
import Image from 'next/image';
import Heading from '../components/Heading';
import Socials from '../components/Socials/Socials';
import styles from '../styles/Home.module.scss';

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();
  
    if(!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { socials: data },
    }
  } catch {
    return {
      props: { socials: null }
    }
  }
}

const Home = ({socials}) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading style={{color: 'black'}} text="Парогенераторы Nordmann" /> 
    <Image
      src={imgBig}
      width={500}
      height={350}
      alt="Big image"
      placeholder="blur"
    />
    <Socials socials={socials} />
  </div>
);

export default Home;