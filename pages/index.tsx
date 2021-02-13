import axios from 'axios'
import { Post } from '../components/post'
import { PostsWrapper } from '../components/postsWrapper'
import { PostProps } from '../interfaces'

interface HomePageProps {
  data: PostProps[]
}

export default function Home({ data }: HomePageProps) {
  console.log(data);
  return (
    <PostsWrapper>
      {data.map(post =>
        <Post
        key={post.id}
        name={post.title}
        text={post.body}
        postID={post.id}
        />
      )}
    </PostsWrapper>
  )
}

Home.getInitialProps = async () => {
  const response = await axios.get('https://simple-blog-api.crew.red/posts');
  const data: PostProps[] = await response.data;
  
  return {data};
}
