import '../styles/globals.css'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return <>
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
     <Head>
    <script src = "https://developers.kakao.com/sdk/js/kakao.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
  </Head>
  <Component {...pageProps} />  
  </QueryClientProvider>
  </RecoilRoot>
  
  </>
  
  
}
