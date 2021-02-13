import Link from 'next/link'
import axios from 'axios'
import { PostProps } from '../../interfaces'
import { Wrapper, Text, HeadText, A, Title } from '../../styles/module.postid.style'

interface PostPageProps {
    title: string
    body: string
}

export default function Post({post}: PostPageProps) {
    console.log(post);

    return (
        <Wrapper>
            <Title>Post</Title>
            <HeadText>{post.title}</HeadText>
            <Text>{post.body}</Text>
            <Link href='/'><A>Back to Posts</A></Link>
        </Wrapper>
    )
}

Post.getInitialProps = async (ctx) => {
    const response = await fetch('https://simple-blog-api.crew.red/posts/' + ctx.query.id);
    const post: PostProps = await response.json();
  
    return {post};
}