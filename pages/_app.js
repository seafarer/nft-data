import '../styles/globals.css'
import 'nprogress/nprogress.css'

import { useRouter } from 'next/router';
import { useEffect } from 'react';

import NProgress from 'nprogress';
NProgress.configure({showSpinner:false})

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start());
    router.events.on('routeChangeComplete', () =>  NProgress.done());
    router.events.on('routeChangeError', () =>  NProgress.done());
  }, []);

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
