import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Discover.module.css";
import func from "../functions";

export default function SideNav() {
  const router = useRouter();
  return (
    <div id="sidemenu" className={styles.sidemenu}>
      <div className={styles.nav}>
        <Link href="/">
          <img
            alt="tease africa"
            data-aos="zoom-in"
            src="/logob.png"
            className={styles.logo}
          />
        </Link>

        <img
          alt="tease africa"
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

        <text className={styles.quicklink}></text>

        <Link href="/discover">
          <text className={styles.link}>Discover</text>
        </Link>
        <Link href="/results">
          <text className={styles.link}>Results</text>
        </Link>
        <Link href="/vote">
          <text className={styles.link}>Vote</text>
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
            <img alt="tease africa" src="/tw.png" className={styles.soc} />
          </Link>
          <Link href="https://facebook.com/teaseafrica">
            <img alt="tease africa" src="/fb.png" className={styles.soc} />
          </Link>
          <Link href="https://www.instagram.com/teaseafrica/">
            <img alt="tease africa" src="/ig.png" className={styles.soc} />
          </Link>
          <img alt="tease africa" style={{ width: 30, height: 0 }} />
          <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
            <img alt="tease africa" src="/google.png" className={styles.soc} />
          </Link>
          {/* <Link href="https://www.instagram.com/teaseafrica/">
            <img alt="tease africa" src="/appstore.png" className={styles.soc} />
          </Link> */}
        </div>
      </div>
    </div>
  );
}
