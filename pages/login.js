import Head from "../components/Head";
import Link from "next/link";
import styles from "../styles/Signup.module.css";
import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import fauth from "../firebase";
import func from "../functions";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";
import { UserContext } from "../context";
import { toaster} from "evergreen-ui";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  let { userContext, setuserContext } = useContext(UserContext);
  const router = useRouter();

  function convertMessage(code) {
    // console.log("called");
    switch (code) {
      case "auth/user-disabled": {
        return "Sorry your user is disabled.";
      }
      case "auth/user-not-found": {
        return "Sorry user not found.";
      }

      case "auth/wrong-password": {
        return "Sorry, incorrect password entered. Please try again.";
      }

      default: {
        return "Login error try again.";
      }
    }
  }

  const auth = fauth;
  let signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        let userRes = await func.getUser({
          id: user.user.uid,
        });
        if (userRes.status) {
          setuserContext(userRes.user);
          router.push("/profile");
          setLoading(false);
        } else {
          setLoading(false);
          toaster.danger("Something went wrong, Please try again");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setLoading(false);
        toaster.danger(convertMessage(errorCode));
      });
  };

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head title="Login" />

      <main className={styles.main}>
        <div className={styles.nav}>
          <Link href="/">
            <img data-aos="zoom-in" src="/logob.png" className={styles.logo} />
          </Link>
          <div className={styles.navlinks}>
            {fauth.currentUser ? (
              <Link href="/profile">
                <text className={styles.navitem}>Profile</text>
              </Link>
            ) : (
              <Link href="/signup">
                <text className={styles.navitem}>Create an account</text>
              </Link>
            )}
          </div>
          <Link href="/">
            <img src="/back.png" className={styles.menu} />
          </Link>
        </div>

        <h1 className={styles.h1}>Login</h1>

        {fauth.currentUser ? (
          <>
            <text className={styles.text}>
              You&apos;re alreary logged in as {fauth.currentUser.email}
            </text>

            <div
              onClick={() => {
                fauth.signOut();
                router.reload();
              }}
              className={styles.btn}
            >
              Log Out
            </div>
            <Link href="/">
              <text style={{marginLeft: 0}} className={styles.navitem}>Go Home</text>
            </Link>
          </>
        ) : (
          <>
            <text className={styles.text}>Log into your account</text>

            <text className={styles.label}>Email</text>
            <input
              className={styles.input1}
              placeholder="Enter your email"
              onChange={(value) => {
                setemail(value.target.value);
              }}
            />

            <text className={styles.label}>Password</text>
            <input
              className={styles.input1}
              placeholder="Enter your password"
              onChange={(value) => {
                setpassword(value.target.value);
              }}
              type="password"
            />

            <div
              onClick={() => {
                if (email && password) {
                  setLoading(true);
                  signIn(email, password);
                }
              }}
              className={styles.btn}
            >
              {loading ? "Loading..." : "Login"}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
