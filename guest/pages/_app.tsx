import "../public/nprogress.css";
import "../styles/globals.css";
import { useRouter } from "next/router";
import Footer from "components/layout/footer";
import GoToTop from "components/goToTop";
import Header from "components/layout/header";
import NProgress from "nprogress";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }: any) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GoToTop />
    </>
  );
}

export default MyApp;
