import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n/i18n";
import Layout from "../components/shared/Layout";
import AuthContextProvider from "../context/AuthContext";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AuthContextProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AuthContextProvider>
    </Layout>
  );
}
