import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Jack</p>
        <p>
         I've got quite a ways to go with this project. But not bad for the first night. <Link href="posts/first-post"><a>Check out my first page</a></Link>)
        </p>
      </section>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <div className={utilStyles.wrapper}>
            <li className={utilStyles.listItem} key={id}>
              <Link href={id} className={utilStyles.headingLg}><a>{title}</a></Link>
              <br />
              {id}
              <br />
              {date}
            </li>
            </div>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
