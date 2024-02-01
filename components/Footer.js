import Head from "next/head";
import Link from "next/link";
import styles2 from "../styles/Home.module.css";

export default function Footer({ styles = styles2, ligth }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        {ligth == true ? (
          <img alt="TixVote" src="/logow.png" className={styles.logob} />
        ) : (
          <img alt="TixVote" src="/logob.png" className={styles.logob} />
        )}
        <text className={styles.text}>
          All-in-one event ticketing system.
          <br />
          We give organizers the toolkit needed to manage, promote and sell
          tickets for any type of event - All for free.
          <br />
          <br />
          &copy; TixVote 2023
          <br />
          Deadalus Intelligence & Systems
          <br />
          <br />
          <img
            alt="TixVote"
            src="https://paystack.com/assets/img/icon/flags/4x3/gh.svg"
            className={styles.gh}
          />
          <img
            alt="TixVote"
            src="https://paystack.com/assets/img/icon/flags/4x3/ng.svg"
            className={styles.gh}
          />
          <img
            alt="TixVote"
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
        <Link href="/results">
          <text className={styles.link}>Results</text>
        </Link>
        <Link href="/vote">
          <text className={styles.link}>Vote</text>
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
          <text className={styles.link}>teaseafrica@gmail.com</text>
        </Link>
        <Link href="tel:+233504277427">
          <text className={styles.link}>+233504277427</text>
        </Link>
        {ligth ? (
          <div className={styles.socials}>
            <Link href="https://twitter.com/teaseafrica">
              <img alt="TixVote" src="/tw2.png" className={styles.soc} />
            </Link>
            <Link href="https://facebook.com/teaseafrica">
              <img alt="TixVote" src="/fb2.png" className={styles.soc} />
            </Link>
            <Link href="https://www.instagram.com/teaseafrica/">
              <img alt="TixVote" src="/ig2.png" className={styles.soc} />
            </Link>
            {/* <img alt="TixVote" style={{ width: 30, height: 0 }} /> */}
            <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
              <img alt="TixVote" src="/google.png" className={styles.soc} />
            </Link>
            {/* <Link href="https://www.instagram.com/teaseafrica/">
              <img alt="TixVote" src="/appstore.png" className={styles.soc} />
            </Link> */}
          </div>
        ) : (
          <div className={styles.socials}>
            <Link href="https://twitter.com/teaseafrica">
              <img alt="TixVote" src="/tw.png" className={styles.soc} />
            </Link>
            <Link href="https://facebook.com/teaseafrica">
              <img alt="TixVote" src="/fb.png" className={styles.soc} />
            </Link>
            <Link href="https://www.instagram.com/teaseafrica/">
              <img alt="TixVote" src="/ig.png" className={styles.soc} />
            </Link>
            {/* <img alt="TixVote" style={{ width: 30, height: 0 }} /> */}
            <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
              <img alt="TixVote" src="/google.png" className={styles.soc} />
            </Link>
            {/* <Link href="/">
              <img alt="TixVote" src="/appstore.png" className={styles.soc} />
            </Link> */}
          </div>
        )}
      </div>
    </footer>
  );
}
