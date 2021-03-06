import Head from 'next/head'
import {PostCard, PostWidget, Categories} from '../components'
import {getPosts} from '../sevices'
import {FeaturedPosts} from '../sections/'

export const getStaticProps = async () => {
  const posts = (await getPosts()) || []

  return {
    props: {
      posts
    }
  }
}

export default function Home({posts}) {
  return (
    <div className="container mx-auto lg:px-10 md:px-5 px-2 mb-8">
      <Head>
        <title>BlogPage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedPosts/>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        {
          posts.map((post, index) => (
            <div>
              <PostCard post={post.node} key={post.node.title}/>
            </div>
          ))
        }
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>

    </div>
  )
}
