import Head from "next/head";
import Link from "next/link";

export default function Footer({ styles, ligth }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        {ligth == true ? (
          <img src="/logow.png" className={styles.logob} />
        ) : (
          <img src="/logob.png" className={styles.logob} />
        )}
        <text className={styles.text}>
          All-in-one event management and ticketing system.
          <br />
          We give organizers the toolkit needed to manage, promote and sell
          tickets for any type of event - All for free.
          <br />
          <br />
          &copy; Tease Africa 2022
          <br />
          Deadalus Intelligence & Systems
          <br />
          <br />
          <img
            src="https://paystack.com/assets/img/icon/flags/4x3/gh.svg"
            className={styles.gh}
          />
          <img
            src="https://paystack.com/assets/img/icon/flags/4x3/ng.svg"
            className={styles.gh}
          />
          <img
            src="https://paystack.com/assets/img/icon/flags/4x3/za.svg"
            className={styles.gh}
          />
        </text>
      </div>
      <div className={styles.left}>
        <text className={styles.quicklink}></text>
        <Link href="/discover">
          <text className={styles.link}>Discover</text>
        </Link>
        <Link href="/overview">
          <text className={styles.link}>How it works</text>
        </Link>
        <Link href="/terms">
          <text className={styles.link}>Terms & Conditions</text>
        </Link>
        <Link href="/privacy">
          <text className={styles.link}>Privacy Policy</text>
        </Link>
        <text className={styles.quicklink}></text>
        <Link href="mailto:teaseafrica@gmail.com">
          <text className={styles.link}>hello@teaseafrica.xyz</text>
        </Link>
        <Link href="tel:+233208589528">
          <text className={styles.link}>+233208589528</text>
        </Link>
        {ligth ? (
          <div className={styles.socials}>
            <Link href="https://twitter.com/teaseafrica">
              <img src="/tw2.png" className={styles.soc} />
            </Link>
            <Link href="https://facebook.com/teaseafrica">
              <img src="/fb2.png" className={styles.soc} />
            </Link>
            <Link href="https://www.instagram.com/teaseafrica/">
              <img src="/ig2.png" className={styles.soc} />
            </Link>
            <img style={{ width: 30, height: 0 }} />
            <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
              <img src="/google.png" className={styles.soc} />
            </Link>
            {/* <Link href="https://www.instagram.com/teaseafrica/">
              <img src="/appstore.png" className={styles.soc} />
            </Link> */}
          </div>
        ) : (
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
            {/* <Link href="/">
              <img src="/appstore.png" className={styles.soc} />
            </Link> */}
          </div>
        )}
      </div>
    </footer>
  );
}
