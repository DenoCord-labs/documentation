import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon"
            href="./images/logo.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Cantarell&family=Roboto&display=swap" rel="stylesheet" />
          <meta name="theme-color" content={'#' + Math.floor(Math.random() * 16777215).toString(16)} />
          <meta name="description" content="An Object Oriented Discord Api Wrapper for Deno." />
          <meta property='og:title' content='DenoCord' />
          <meta property='og:image' content='./images/denocord.png' />
          <meta property='og:url' content='https://denocord-docs.vercel.app/' />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='DenoCord' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:locale:alternate' content='en_US' />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="DenoCord" />
          <meta name="twitter:description" content="An Object Oriented Discord Api Wrapper for Deno." />
          <meta name="twitter:image" content="./images/denocord.png" />
          <meta name="twitter:image:alt" content="DenoCord" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}