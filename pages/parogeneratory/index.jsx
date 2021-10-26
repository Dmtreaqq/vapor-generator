import Heading from "../../components/Heading";
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
  
    if(!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { posts: data },
    }
  } catch {
    return {
      props: { posts: null }
    }
  }
}

const Contacts = ({posts}) => {
  
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading style={{color: 'black'}} text="Список парогенераторов:" />
      <ul>
        {posts && posts.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link href={`/parogeneratory/parogenerator-gsm-143`}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </>   
  )
  
};

export default Contacts;