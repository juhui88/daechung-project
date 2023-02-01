import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
  <Head>
    <script src = "https://developers.kakao.com/sdk/js/kakao.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Jua&family=Nanum+Gothic:wght@700&family=Stylish&display=swap" rel="stylesheet"></link>
  </Head>
  <Component {...pageProps} />
  </>
  
  
}
