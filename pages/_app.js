import "../styles/globals.css";
import styles from "../styles/App.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../context";
import { getCookie } from "../functions/cookies";
import func from "../functions";

function MyApp({ Component, pageProps }) {
  const [userContext, setuserContext] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setloading] = useState(true);

  const router = useRouter();
  const path = useRouter().pathname;

  useEffect(() => {
    const run = async () => {
      setloading(true);
      let token = getCookie("auth");
      console.log("auth" + token);

      if (!token) {
        if (path.includes("profile")) {
          router.push("/login").then(() => {
            setloading(false);
            setIsLogged(false);
          });
        }
        setloading(false);
        return;
      }

      let userRes = await func.getUser({
        id: token,
      });

      let data = userRes;

      if (!data.status) {
        setloading(false);
        setIsLogged(false);
      }

      if (data.status) {
        setIsLogged(true);
        console.log(data.user);
        setuserContext(data.user);
        if (
          path.includes("profile") ||
          path.includes("create") ||
          path.includes("vote")
        ) {
          setloading(false);
        } else if (path.includes("login") || path.includes("signup")) {
          router.push("/profile");
          setloading(false);
        } else {
          router.push("/").then(() => {
            setloading(false);
          });
        }
      } else {
        if (path !== "/" || path == "/terms" || path == "/privacy") {
          router.push("/login").then(() => {
            setloading(false);
            setIsLogged(false);
          });
        }
      }
    };

    run();
  }, []);

  if (loading) {
    return (
      <main className={styles.body}>
        <div className={styles.box}>
          <img src="/loader/1.png" className={styles.one} />
          <img src="/loader/2.png" className={styles.two} />
          <img src="/loader/3.png" className={styles.three} />
        </div>
      </main>
    );
  }

  return (
    <UserContext.Provider value={{ userContext, setuserContext }}>
      <div>
        <Component {...pageProps} />
      </div>
    </UserContext.Provider>
  );
}

export default MyApp;
