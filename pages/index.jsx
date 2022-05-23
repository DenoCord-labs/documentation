import Head from 'next/head'
import Link from 'next/link'
import { allDocs } from 'contentlayer/generated'

export async function getStaticProps() {
  const docs = allDocs.sort()
  return { props: { docs } }
}

function DocsCard(docs) {
  return (
    <div className="mb-6">
      <h2 className="text-lg">
        <Link href={docs.url}>
          <a className="text-blue-700 hover:text-blue-900">{docs.title}</a>
        </Link>
      </h2>
    </div>
  )
}

export default function Home({ docs }) {
  return (
    <div className="mx-auto max-w-2xl py-16 text-center">
      <Head>
        <title>Denocord - DenoCord</title>
      </Head>

      <h1 className="mb-8 text-3xl font-bold">Contentlayer Blog Example</h1>

      {docs.map((docs, idx) => (
        <DocsCard key={idx} {...docs} />
      ))}
    </div>
  )
}
