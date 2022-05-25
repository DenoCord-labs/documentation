import Head from 'next/head'
import Link from 'next/link'
import { allDocs } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { H3, H1, H2, H4, H5, H6,Callout } from '../../components/Common'
import styles from './Slug.module.css'
const Components = {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Callout
}
export async function getStaticPaths() {
    const paths = allDocs.map((doc) => doc.url)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {

    const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug)
    return {
        props: {
            doc,
        },
    }
}

const DocLayout = ({ doc }) => {
    const Component = useMDXComponent(doc.body.code)
    return (
        <>
            <Head>
                <title>{doc.title} - Denocord</title>
            </Head>
            <article className={`${styles["content"]}`}>
                <Component {...{ components: Components }} />
            </article>
        </>
    )
}

export default DocLayout