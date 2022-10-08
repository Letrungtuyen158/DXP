import "../public/nprogress.css";
import "../styles/globals.css";
import { ROUTERS } from "constants/router.constant";
import { ToastError } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { getCookies } from "cookies-next";
import { useRouter } from "next/router";
import Api from "services/api";
import Header from "components/layouts/header";
import NProgress from "nprogress";
import React, { useEffect, useState } from "react";
import Sidebar from "components/layouts/sidebar";

function MyApp({ Component, pageProps }: any) {
  const [userData, setUserData] = useState<any>(null);
  const router = useRouter();
  const [verifying, setVerifying] = useState(true);

  const getUserMe = async () => {
    const token = getCookies()?.secret;
    if (!token) {
      ToastError("Session expired!");
      location.replace(ROUTERS.LOGIN);
      return;
    }
    const res: any = await Api.getUserMe(token);

    setUserData(res?.data);

    if (checkApiStatus(res)) {
      setVerifying(false);
    } else {
      ToastError("Token expired");
      location.replace(ROUTERS.LOGIN);
    }
  };

  useEffect(() => {
    getUserMe();

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

  const renderContent = () => {
    if (verifying) {
      return (
        <div className="flex w-full h-screen justify-center items-center">
          <h1>Loading</h1>
        </div>
      );
    }

    return <Component {...pageProps} />;
  };
  return (
    <body className="overflow-x-hidden">
      <Header userData={userData} />
      <div className="flex flex-row min-h-screen w-screen">
        <div className="flex flex-col min-h-screen pl-10 pt-32 w-[260px] bg-darkbluebg text-white">
          <Sidebar roles={userData?.roles} />
        </div>
        <div className="flex flex-1 pt-[100px] overflow-hidden bg-gray400">{renderContent()}</div>
      </div>
    </body>
  );
}

export default MyApp;
