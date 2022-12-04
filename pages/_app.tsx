import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n/i18n";
import Layout from "../components/shared/Layout";
import AuthContextProvider from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </Layout>
  );
}
