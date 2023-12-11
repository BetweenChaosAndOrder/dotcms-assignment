import type { GetStaticProps, NextPage } from 'next';
import { GraphQLClient, gql } from 'graphql-request'
import Head from 'next/head';
import Header from '../components/Header';
import Carousel from '../components/Carousel/Carousel';

import Image from 'next/image';

export const getStaticProps: GetStaticProps = async () => {

  const endpoint = process.env.DOTCMS_GRAPHQL_ENDPOINT as string;
  const baseURL = process.env.DOTCMS_URL

  const graphQLClient = new GraphQLClient(endpoint)
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
      blog,
      baseURL
     }
  }
}

const Home: NextPage = ({blog, baseURL}: any) => {
  console.log('blog:',blog)
  let images: any = []
  blog.BlogCollection.forEach((element: any) => {
    console.log('https://' + element.contentHost.hostName + element.image.idPath)
    images.push(
      <img className="h-full w-full object-cover" src={'https://' + element.contentHost.hostName + element.image.idPath} alt="teste" />
    )
  });
  console.log(images)
  return (
    <div className="h-screen w-screen overflow-hidden bg-bg text-white">
      <Head>
        <title>Travel Blog</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mb-10 flex flex-col  justify-center space-y-6">
          <h1 className="text-4xl font-bold md:text-5xl">TRAVEL BLOG</h1>
          <p className="text-center w-3/5 text-xs opacity-75 m-auto">
            Get inspired to experience the world. Our writers will give you their first-hand stories and 
            recommendations that will inspire, excite you, and help you make the best desition s for planning your next adventure.
          </p>
        </div>
        <Carousel items={images} />
      </main>
    </div>
  );
};

export default Home;
