import styles from "../styles/Signup.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Ad() {
  const [show, setShow] = useState(true);
  return (
    <div style={{ display: show ? "flex" : "none" }} className={styles.ad}>
      <img
        alt="tease africa"
        onClick={() => {
          setShow(false);
        }}
        src="/close.png"
        className={styles.x}
      />
      <text className={styles.adhead}>Install Tease</text>
      <text className={styles.adtext}>
        Download the mobile app for more functionalities to manage your event
        and ticket sales.
      </text>
      <div className={styles.imgs}>
        {/* <img alt="tease africa" src="/ios.png" className={styles.app} /> */}

        <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
          <img
            alt="tease africa"
            src="/playstore.png"
            className={styles.app1}
          />
        </Link>
      </div>
    </div>
  );
}
