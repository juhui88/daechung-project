import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
  <Head>
    <script src = "https://developers.kakao.com/sdk/js/kakao.js"></script>
  </Head>
  <Component {...pageProps} />
  </>
  
  
}
