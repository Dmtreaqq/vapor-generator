/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Layout from '../components/Layout';
import imgBig from '../public/elevate.jpg';
import Image from 'next/image';
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={imgBig}
      width={500}
      height={350}
      alt="Big image"
      placeholder="blur"
    />
  </Layout>
)

export default MyApp;
