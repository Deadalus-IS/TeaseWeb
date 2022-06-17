import Head from "../components/Head";
import Link from "next/link";
import styles from "../styles/Dashboard.module.scss";
import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import func from "../functions";
import { useRouter } from "next/router";
import { UserContext } from "../context";
import dynamic from "next/dynamic";
const DChart = dynamic(() => import("../components/Graph"), { ssr: false });

export default function Profile() {
  const [events, setevents] = useState([]);
  const [loading, setloading] = useState(true);
  const [pathname, setPathname] = useState("/");
  let { userContext, setuserContext } = useContext(UserContext);

  useEffect(async () => {
    const events_ = await func.getEvents();
    if (events_.status == true) {
      setevents(events_.events);
    }

    console.log(events);
  }, []);

  // useEffect(async () => {
  //   let res = await localStorage.getItem("user");
  //   const useRes = JSON.parse(res);
  //   setuserContext(useRes);

  //   if (userContext) {
  //     let response = await func.getEventsBy({
  //       id: userContext?.organizer?.id,
  //     });
  //     console.log(response);
  //     if (response.status) {
  //       setevents(response.events ? response.events : []);
  //     } else {
  //       toaster.danger("Something went wrong, Please try again");
  //     }
  //   }

  //   AOS.init({
  //     offset: 120,
  //     delay: 0,
  //     duration: 400,
  //   });
  // }, [userContext]);

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
          <div
            className={`${
              pathname == "/" ? styles.menuitem : styles.menuitem2
            }`}
          >
            {pathname == "/" ? (
              <img src="dashboard.png" />
            ) : (
              <img src="dashboard1.png" />
            )}
            <text>Dashboard</text>
          </div>

          <div
            className={`${
              pathname == "notification" ? styles.menuitem : styles.menuitem2
            }`}
          >
            {pathname == "notification" ? (
              <img src="notification1.png" />
            ) : (
              <img src="notification.png" />
            )}
            <text>Notifications</text>
          </div>

          <div
            className={`${
              pathname == "setting" ? styles.menuitem : styles.menuitem2
            }`}
          >
            {pathname == "setting" ? (
              <img src="setting1.png" />
            ) : (
              <img src="setting.png" />
            )}
            <text>Settings</text>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.top}>
          <text className={styles.toptxt1}>Hello {userContext?.name}</text>
          <text className={styles.toptxt}>
            Here you can manage your tickets
          </text>
        </div>

        <div className={styles.hlist}>
          <div className={styles.hlistitem}>
            <div>
              <img src="calendar2.png" />
              <text className={styles.hlistitemtext}>Events</text>
            </div>
            <text className={styles.hlistitemtext1}>10</text>
          </div>
          <div className={styles.hlistitem}>
            <div>
              <img src="ticket.png" />
              <text className={styles.hlistitemtext}>Tickets Sold</text>
            </div>
            <text className={styles.hlistitemtext1}>GHC 3026</text>
          </div>
          <div className={styles.hlistitem}>
            <div>
              <img src="users.png" />
              <text className={styles.hlistitemtext}>Customers</text>
            </div>
            <text className={styles.hlistitemtext1}>1360</text>
          </div>
        </div>

        <div className={styles.graphcon}>
          <div className={styles.graph}>
            <text>Total Sale</text>
          </div>
          <DChart />
        </div>

        <div className={styles.sales}>
          <div className={styles.graph}>
            <text>Your Events</text>
          </div>
          <div className={styles.table}>
            <text className={styles.one}>Event</text>
            <text className={styles.two}>Status</text>
            <text className={styles.three}>Sold</text>
            <text className={styles.four}></text>
          </div>

          {events.map((item, index) => {
            console.log(item);
            return (
              <div className={styles.tableitems}>
                <div className={styles.one}>
                  <img src={item?.imageURL} />
                  <div className={styles.oneitem}>
                    <text className={styles.eventname}>{item?.name}</text>
                    <text className={styles.eventdate}>
                      {new Date(
                        Number(item?.date.timestamp / 1000)
                      ).toUTCString()}
                    </text>
                  </div>
                </div>
                <div className={styles.two}>
                  <text className={styles.eventstatus}>ACTIVE</text>
                </div>
                <div className={styles.three}>
                  <text className={styles.eventsold}>
                    {item?.ticketsBought + "/" + item?.totalTickets}
                  </text>
                </div>
                <div className={styles.four}>
                  <div onClick={() => {}} className={styles.fouritem}>
                    open
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <section className={styles.rightbar}>
        <div className={styles.searchcon}>
          <input placeholder="Search for your events" />
          <img src="loupe.png" />
        </div>

        <div className={styles.card}>
          <text className={styles.cardtitle}>Balance</text>
          <text className={styles.balance}>GHS 60,000.00</text>

          <div className={styles.withdraw}>Withdraw</div>
        </div>
      </section>
    </div>
  );
}
