import type { GetStaticProps, NextPage } from 'next';
import { GraphQLClient, gql } from 'graphql-request'
import Head from 'next/head';
import Header from '../components/Header';
import Carousel from '../components/Carousel/Carousel';

import BlogListing from '../components/BlogListing';

export const getStaticProps: GetStaticProps = async () => {

  const graphQLClient = new GraphQLClient('https://demo.dotcms.com/api/v1/graphql')
  graphQLClient.setHeader('X-GQL-Token', process.env.DOTCMS_API_TOKEN as string)

  const query = gql`
  query ContentAPI {
    BlogCollection(query: "", limit: 100, offset: 0, sortBy: "") {
      tags
      identifier
      postingDate
      teaser
      title
      urlMap
      author {
        firstName
        lastName
        titleImage {
          idPath
        }
      }
      blogContent {
        json
      }
      image {
        idPath
      }
      contentHost {
        hostName
      }
    }
  }`

  const blog = await graphQLClient.request(query)

  return {
    props: { 
      blog
     }
  }
}

const Home: NextPage = ({ blog }: any) => {
  console.log('blog:',blog)
  return (
    <div className="bg-bg text-white">
      <Head>
        <title>Travel Blog</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <main>
        <BlogListing blog={blog} />
      </main>
    </div>
  );
};

export default Home;
