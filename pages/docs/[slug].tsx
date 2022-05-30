import Head from "next/head";
import { allDocs, Docs } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { H3, H1, H2, H4, H5, H6, Callout } from "../../components/Common";
import styles from "./Slug.module.css";
import { Footer } from "../../components";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
const Components = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Callout
};
export async function getStaticPaths() {
  const paths = allDocs.map((doc) => doc.url);
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps<{ doc: Docs }> = async ({
  params
}) => {
  const doc = allDocs.find(
    (doc) => doc._raw.flattenedPath === params?.slug
  ) as Docs;
  return {
    props: {
      doc
    }
  };
};

const DocLayout: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  doc
}) => {
  const Component = useMDXComponent(doc.body.code);
  return (
    <div className={styles["container"]}>
      <Head>
        <title>{doc.title} - Denocord</title>
      </Head>
      <article className={`${styles["content"]}`}>
        <Component {...{ components: Components }} />
      </article>
      <Footer />
    </div>
  );
};

export default DocLayout;