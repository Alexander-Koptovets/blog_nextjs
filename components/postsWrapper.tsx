import Link from 'next/link'
import { A, Title, Wrapper, HeadWrapper } from '../styles/module.postsWrapper.style'

export function PostsWrapper({children}) {
    return (
      <div>
        <HeadWrapper>
          <Title>Posts</Title>
          <Link href='/posts/new'><A>
            New Post
          </A></Link>
        </HeadWrapper>
        <Wrapper>
          {children}
        </Wrapper>
      </div>
    )
  }