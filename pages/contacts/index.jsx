import Heading from "../../components/Heading";
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
  
    if(!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { contacts: data },
    }
  } catch {
    return {
      props: { contacts: null }
    }  
  }
}

const Contacts = ({contacts}) => {
  
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts List:" />
      <ul>
        {contacts && contacts.map(({ id, name, email }) => {
          return (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </>   
  )
  
};

export default Contacts;