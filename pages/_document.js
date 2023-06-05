import { Html, Head, Main, NextScript } from 'next/document';
import { Header } from './components/header/header';
import { NavBar } from './components/nav-bar/nav-bar';
import { Footer } from './components/footer/footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head> 
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossOrigin="anonymous" />
      </Head>
      <body>
        <Header />
        <NavBar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
