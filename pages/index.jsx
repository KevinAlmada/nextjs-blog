import Layout from "../components/Layout"

import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout
    title="home next"
    description="home description"
    home
    >
      <section className={utilStyles.headingMd}>
        <p>I´m a web developer learning next.js</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
