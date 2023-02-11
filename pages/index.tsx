import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Layout, Detail } from '../components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BUMP OF CHICKEN | Lyrics</title>
        <meta name="description" content="BUMP OF CHICKEN English Lyrics" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Detail />
      </Layout>
    </>
  );
}
