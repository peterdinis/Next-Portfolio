import React, { Suspense } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../i18n/i18n";
import Layout from "../components/shared/Layout";
import FallbackLoader from "../components/shared/FallbackLoader";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
        <Suspense fallback={<FallbackLoader />}> {/* TODO: Fix this probably error with suspense */}
          <Component {...pageProps} />
        </Suspense>
    </Layout>
  );
}
