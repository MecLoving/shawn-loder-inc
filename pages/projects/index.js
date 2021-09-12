import Head from 'next/head'
import Link from 'next/link'
import Heading from '../../components/heading'

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Shawn Loder Inc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <h1 className="title">
          Projects
        </h1>
        <Link href="/">
          <a>Home</a>
        </Link>

        <div className="grid">
          <Link href="/ecologie">
            <a className="card">
              <h3>Eco-Projets &rarr;</h3>
              <p>pour améliorer la planète, ou au moins essayer de réduire la détérioration de celle-ci</p>
            </a>
          </Link>

          <Link href="/gaming">
            <a className="card">
              <h3>Jeux Vidéos &rarr;</h3>
              <p>Projets/idées liés aux jeux vidéos.</p>
            </a>
          </Link>

          <Link href="/sociaux">
            <a className="card">
              <h3>Sociaux &rarr;</h3>
              <p>Projets/idées liés aux enjeux Sociaux</p>
            </a>
          </Link>

          <Link href="/crypto">
            <a className="card">
              <h3>Crypto &rarr;</h3>
              <p>Projets/idées liés a la cryptomonnaie.</p>
            </a>
          </Link>
        </div>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .title,
        .description {
          text-align: center;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .logo {
          height: 1em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}