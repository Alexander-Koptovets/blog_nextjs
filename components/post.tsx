import Link from 'next/link'
import { Wrapper, Text, Title } from '../styles/module.post.style'

interface PostProps {
  postID: string | number 
  name: string | number
  text: string | number 
};

export function Post(props: PostProps) {
    return (
      <Wrapper>
        <Title> 
          <Link href={'/posts/' + props.postID}><a>{props.name}</a></Link>
        </Title>
        <Text>{props.text}</Text>
      </Wrapper>
    )
  }