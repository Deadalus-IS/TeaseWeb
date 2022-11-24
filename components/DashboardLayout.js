import Link from "next/link";
import styles from "../styles/Dashboard.module.scss";
import { useRouter } from "next/router";
import "aos/dist/aos.css";
import Head from "next/head";

export default function DashboardLayout({ children, sidebar = true }) {
  const router = useRouter();
  let pathname = router.pathname;

  console.log(pathname);

  return (
    <div className={styles.container}>
      <Head title="Dashboard" />
      <section className={styles.sidebar}>
        <Link href="/">
          <div className={styles.logo}>
            <img src="/logob.png" />
            <text>| Organizer</text>
          </div>
        </Link>

        <div className={styles.menus}>
          <Link href="/profile">
            <div
              className={`${
                pathname == "/profile" ? styles.menuitem : styles.menuitem2
              }`}
            >
              {pathname == "/profile" ? (
                <img src="/dashboard.png" />
              ) : (
                <img src="/dashboard1.png" />
              )}
              <text>Events</text>
            </div>
          </Link>
          <Link href="/profile/voting">
            <div
              className={`${
                pathname.includes("/profile/voting")
                  ? styles.menuitem
                  : styles.menuitem2
              }`}
            >
              {pathname.includes("/profile/voting") ? (
                <img src="/vote.png" />
              ) : (
                <img src="/vote1.png" />
              )}
              <text>Voting</text>
            </div>
          </Link>
          <Link href="/profile/notification">
            <div
              className={`${
                pathname == "notification" ? styles.menuitem : styles.menuitem2
              }`}
            >
              {pathname == "/profile/notification" ? (
                <img src="/notification1.png" />
              ) : (
                <img src="/notification.png" />
              )}
              <text>Notifications</text>
            </div>
          </Link>
          <Link href="/profile/setting">
            <div
              className={`${
                pathname == "/profile/setting"
                  ? styles.menuitem
                  : styles.menuitem2
              }`}
            >
              {pathname == "/profile/setting" ? (
                <img src="/setting1.png" />
              ) : (
                <img src="/setting.png" />
              )}
              <text>Settings</text>
            </div>
          </Link>
        </div>
      </section>

      {children}

      {!sidebar ? null : (
        <section className={styles.rightbar}>
          <div className={styles.searchcon}>
            <input placeholder="Search for your events" />
            <img src="/loupe.png" />
          </div>

          <div className={styles.card}>
            <text className={styles.cardtitle}>Balance</text>
            <text className={styles.balance}>GHS 60,000.00</text>

            <div className={styles.withdraw}>Withdraw</div>
          </div>
        </section>
      )}
    </div>
  );
}
