import Link from "next/link";
import fauth from "../firebase";
import { useRouter } from "next/router";
import styles from "../styles/Discover.module.css";

export default function SideNav() {
  const router = useRouter();
  return (
    <div id="sidemenu" className={styles.sidemenu}>
      <div className={styles.nav}>
        <Link href="/">
          <img data-aos="zoom-in" src="/logob.png" className={styles.logo} />
        </Link>

        <img
          onClick={() => {
            document.getElementById("sidemenu").style.left = "-100vw";
          }}
          src="/close.png"
          className={styles.menu}
        />
      </div>
      <div className={styles.left}>
        <text className={styles.quicklink}></text>
        <text className={styles.quicklink}></text>

        {fauth.currentUser ? (
          <Link href="/create">
            <text className={styles.link}>Create Event</text>
          </Link>
        ) : (
          <Link href="/login">
            <text className={styles.link}>Login</text>
          </Link>
        )}

        {fauth.currentUser ? (
          <Link href="/profile">
            <text className={styles.link}>Profile</text>
          </Link>
        ) : null}
        {fauth.currentUser ? (
          <text
            onClick={() => {
              fauth.signOut();
              router.reload();
            }}
            className={styles.link}
          >
            Log Out
          </text>
        ) : (
          <Link href="/signup">
            <text className={styles.link}>Sign Up</text>
          </Link>
        )}
        <text className={styles.quicklink}></text>

        <Link href="/discover">
          <text className={styles.link}>Discover</text>
        </Link>
        <Link href="/overview">
          <text className={styles.link}>How it works</text>
        </Link>
        <text className={styles.quicklink}></text>
        <Link href="/terms">
          <text className={styles.link}>Terms & Conditions</text>
        </Link>
        <Link href="/privacy">
          <text className={styles.link}>Privacy Policy</text>
        </Link>
        <text className={styles.quicklink}></text>
        <Link href="mailto:teaseafrica@gmail.com">
          <text className={styles.link}>hello@tease.africa</text>
        </Link>
        <Link href="tel:+233208589528">
          <text className={styles.link}>+233208589528</text>
        </Link>
        <div className={styles.socials}>
          <Link href="https://twitter.com/teaseafrica">
            <img src="/tw.png" className={styles.soc} />
          </Link>
          <Link href="https://facebook.com/teaseafrica">
            <img src="/fb.png" className={styles.soc} />
          </Link>
          <Link href="https://www.instagram.com/teaseafrica/">
            <img src="/ig.png" className={styles.soc} />
          </Link>
          <img style={{ width: 30, height: 0 }} />
          <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
            <img src="/google.png" className={styles.soc} />
          </Link>
          {/* <Link href="https://www.instagram.com/teaseafrica/">
            <img src="/appstore.png" className={styles.soc} />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
