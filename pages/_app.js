import "../styles/globals.css";
import styles from "../styles/App.module.css";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import func from "../functions";
import { toaster } from "evergreen-ui";

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);

  const router = useRouter();

  useEffect(async () => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Component {...pageProps} />
      {loading ? (
        <main className={styles.body}>
          <div className={styles.box}>
            <img src="/loader/1.png" className={styles.one} />
            <img src="/loader/2.png" className={styles.two} />
            <img src="/loader/3.png" className={styles.three} />
          </div>
        </main>
      ) : null}
    </div>
  );
}

export default MyApp;
