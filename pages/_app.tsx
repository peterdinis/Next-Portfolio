import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../i18n/i18n"
import Layout from '../components/shared/Layout'
import mailgo from "mailgo";

const mailgoConfig = {
  dark: true,
};

export default function App({ Component, pageProps }: AppProps) {
  
  React.useEffect(() => {
    mailgo(mailgoConfig);
  }, []);
  
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
