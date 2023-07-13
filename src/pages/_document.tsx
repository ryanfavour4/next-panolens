import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          href="/linkedin-logo.png"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main />
        <div id="root_element"></div>
        <NextScript />
      </body>
    </Html>
  );
}
