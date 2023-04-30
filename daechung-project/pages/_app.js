import '../styles/globals.css'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query';
import ErrorBoundary from '@/components/ErrorBoundary';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return <>
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
     <Head>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet"></link>
  </Head>
  <ErrorBoundary>
    <Component {...pageProps} />  
  </ErrorBoundary>
  
  </QueryClientProvider>
  </RecoilRoot>
  
  </>
  
  
}
