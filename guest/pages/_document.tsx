import { DOMAIN } from "constants/index";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="Vietnamese" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Uto Tech JSC" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link
            rel="preload"
            href={`${DOMAIN}fonts/Gilroy/SanFranciscoDisplay-Regular.otf`}
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
