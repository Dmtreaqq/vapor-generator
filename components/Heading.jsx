const Heading = ({tag, text, style}) => {
  const Tag = tag || 'h1';
  return <Tag style={style}>{text}</Tag>
}

export default Heading;