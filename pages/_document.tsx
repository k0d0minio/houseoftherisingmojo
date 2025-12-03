import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
          <meta name="theme-color" content="#A63131" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="House of the Rising Mojo - A sanctuary for connection, healing & growth in Santo Isidoro, Portugal."
          />
          <meta property="og:site_name" content="House of the Rising Mojo" />
          <meta
            property="og:description"
            content="A vibrant community space and living sanctuary, offering a nurturing environment for transformative events."
          />
          <meta property="og:title" content="House of the Rising Mojo" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="House of the Rising Mojo" />
          <meta
            name="twitter:description"
            content="A vibrant community space and living sanctuary, offering a nurturing environment for transformative events."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
