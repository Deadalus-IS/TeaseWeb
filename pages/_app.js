import "../styles/globals.css";
import styles from "../styles/App.module.css";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { onAuthStateChanged } from "firebase/auth";
import fauth from "../firebase";
import func from "../functions";
import { UserContext } from "../context";
import { toaster } from "evergreen-ui";

function MyApp({ Component, pageProps }) {
  const [userContext, setuserContext] = useState({});
  const [loading, setloading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(fauth, async (user) => {
      if (user) {
        // console.log("user logged in");

        let userRes = await func.getUser({
          id: user.uid,
        });
        // console.log(userRes);
        if (userRes.status) {
          setuserContext(userRes.user);
        } else {
          toaster.notify("Logging you in, please wait ");
        }
        setloading(false);
      } else {
        // console.log("no user logged in");
        setloading(false);
      }
    });

    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <UserContext.Provider value={{ userContext, setuserContext }}>
      <div>
        <Component {...pageProps} />
        {loading ? (
          <main className={styles.body}>
            <div className={styles.boxes}>
              <div className={styles.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={styles.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={styles.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={styles.box}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </main>
        ) : null}
      </div>
    </UserContext.Provider>
  );
}

export default MyApp;
