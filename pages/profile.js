import Head from "../components/Head";
import Link from "next/link";
import styles from "../styles/Signup.module.css";
import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import fauth from "../firebase";
import func from "../functions";
import { useRouter } from "next/router";
import { UserContext } from "../context";
import Ad from "../components/Ad";
import { toaster} from "evergreen-ui";

export default function Profile() {
  const [events, setevents] = useState([]);
  const [loading, setloading] = useState(true);
  let { userContext, setuserContext } = useContext(UserContext);

  const router = useRouter();

  function addCommas(nStr) {
    nStr += "";
    let x = nStr.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  }

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(async () => {
    // console.log(userContext)
    // if (!fauth.currentUser) {
    //   router.push("login");
    // }
    if (userContext) {
      let response = await func.getEventsBy({
        id: userContext?.organizer?.id,
      });
      // console.log(response);
      if (response.status) {
        setevents(response.events);
      } else {
        toaster.danger("Something went wrong, Please try again");
      }
    }

    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
    });
  }, [userContext]);
  return (
    <div className={styles.container}>
      <Head title="Dashboard" />

      <main className={styles.main}>
        <div className={styles.nav}>
          <Link href="/">
            <img data-aos="zoom-in" src="/logob.png" className={styles.logo} />
          </Link>
          <div className={styles.navlinks}>
            {fauth.currentUser ? (
              <Link href="/create">
                <text className={styles.navitem}>Create an event</text>
              </Link>
            ) : (
              <Link href="/login">
                <text className={styles.navitem}>Login</text>
              </Link>
            )}
          </div>
          <Link href="/">
            <img src="/back.png" className={styles.menu} />
          </Link>
        </div>
        {fauth.currentUser ? (
          <>
            <h1 style={{ marginTop: "20px" }} className={styles.h1}>
              <text className={styles.text}>Your Balance</text>
              <br />
              GHS{" "}
              {addCommas(
                String(
                  userContext?.organizer?.balance
                    ? userContext?.organizer?.balance
                    : 0
                )
              )}
              .00
            </h1>

            <text className={styles.text}>Your Events</text>

            <text className={styles.text}>{loading}</text>

            {events?.map((event) => {
              return (
                <div className={styles.event}>
                  <img src={event.imageURL} className={styles.eventimage} />
                  <div className={styles.eventdetails}>
                    <text className={styles.eventdate}>
                      {event?.date?.day +
                        ", " +
                        months[event?.date?.month - 1] +
                        " " +
                        event?.date?.year}
                    </text>
                    <text className={styles.eventname}>{event.name}</text>

                    <text className={styles.sold}>
                      Tickets Sold: ¢{addCommas(String(event.balance))}
                    </text>
                    <div className={styles.bar}>
                      <div
                        className={styles.innerbar}
                        style={{
                          width:
                            (event.ticketsBought / event.totalTickets) * 100 +
                            "%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <text className={styles.text}>Login to continue</text>
            <Link href="/login">
              <div className={styles.btn}>Login</div>
            </Link>
          </>
        )}

        <Ad />
      </main>
    </div>
  );
}
