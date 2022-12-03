import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I Am shreenath bhanderi. We are all shreenath bhanderi when you really think about it.</p>
        <p>
          This is my site.
        </p>
      </section>
    </Layout>
  );
}
