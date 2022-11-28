import styles from "../../styles/Dashboard.module.scss";
import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import func from "../../functions";
import { UserContext } from "../../context";
import dynamic from "next/dynamic";
import { Alert, Link, toaster } from "evergreen-ui";
import DashboardLayout from "../../components/DashboardLayout";
const DChart = dynamic(() => import("../../components/Graph"), { ssr: false });

export default function Profile() {
  const [events, setevents] = useState([]);
  let { userContext, setuserContext } = useContext(UserContext);

  // console.log(userContext);

  useEffect(async () => {
    let res = localStorage.getItem("user");
    const useRes = JSON.parse(res);
    // console.log(useRes);

    // setuserContext(useRes);

    if (userContext) {
      let response = await func.getEventsBy({
        id: userContext?.organizer?.id,
      });
      // console.log(response);
      if (response.status) {
        setevents(response.events ? response.events : []);
      } else {
        toaster.danger("Something went wrong, Please try again");
      }
    }

    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
    });
  }, []);

  return (
    <DashboardLayout>
      <main className={styles.main}>
        <Alert
          marginBottom={30}
          intent="danger"
          title="Sorry, Event Ticketing is currently under maintainance"
        >
          Please check out our other services like USSD and Online voting for
          your events. Events Ticketing will be back soon.
        </Alert>

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
            <text className={styles.hlistitemtext1}>0</text>
          </div>
          <div className={styles.hlistitem}>
            <div>
              <img src="ticket.png" />
              <text className={styles.hlistitemtext}>Tickets Sold</text>
            </div>
            <text className={styles.hlistitemtext1}>0</text>
          </div>
          <div className={styles.hlistitem}>
            <div>
              <img src="users.png" />
              <text className={styles.hlistitemtext}>Customers</text>
            </div>
            <text className={styles.hlistitemtext1}>0</text>
          </div>
        </div>

        <div className={styles.graphcon}>
          <div className={styles.graph}>
            <text>Total Sale</text>
          </div>
          <DChart />
        </div>

        {events.length > 0 ? (
          <div className={styles.sales}>
            <div className={styles.graph}>
              <text>Your Events</text>
              <Link href="/profile/create">
                <div className={styles.infobtn}>Create Poll</div>
              </Link>
            </div>
            <div className={styles.table}>
              <text className={styles.one}>Event</text>
              <text className={styles.two}>Status</text>
              <text className={styles.three}>Sold</text>
              <text className={styles.four}></text>
            </div>

            {events.map((item, index) => {
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
        ) : (
          <div className={styles.sales}>
            {/* No events, create a new event */}
            <div className={styles.info}>
              <img src="/emptyf.png" />
              <text className={styles.infotxt}>
                You have no events, create a new event
              </text>
              {/* <Link href="/profile/create">
                <div className={styles.infobtn}>Create Event</div>
              </Link> */}
            </div>
          </div>
        )}
      </main>
    </DashboardLayout>
  );
}
