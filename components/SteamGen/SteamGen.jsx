import Heading from "../Heading";

const SteamGen = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
      <Heading style={{color: 'black'}} tag="h3" text={title} />
      <p style={{color: 'black'}}>{body}</p>
    </>
  );
}

export default SteamGen;