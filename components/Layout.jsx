import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Layout.module.css"
import utilStyles from "../styles/utils.module.css"
const name = "kraven"
const Layout = ({children,title,description,home}) => {
    console.log(home);
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                 <title>{title}</title>
                 <meta
                 name="description"
                 content={description}
                 />
            </Head>

            <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/assetTest.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/assetTest.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
            <nav>
                <Link href="/">
                <a>inicio ||</a>
                </Link>
                <Link href="/blog">
                <a>blog  ||</a>
                </Link>
                <Link href="/contact">
                <a>contact  ||</a>
                </Link>
                <Link href="/about">
                <a>contact  ||</a>
                </Link>
                <Link href="/blog/primer-post">
                <a>primer-post  ||</a>
                </Link>
            </nav>
            <main>
                {children}
            </main>
            {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
        </div>
    )
}

export default Layout

Layout.defaultProps ={
    title: "Next.js | mi sitio web",
    description: "Descripcion de mi pagina"
}
