import styles from "../../../styles/Dashboard.module.scss";
import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import func from "../../../functions";
import { UserContext } from "../../../context";
import dynamic from "next/dynamic";
import { toaster } from "evergreen-ui";
import DashboardLayout from "../../../components/DashboardLayout";
import Link from "next/link";
const DChart = dynamic(() => import("../../../components/Graph"), {
  ssr: false,
});

export default function Profile() {
  const [polls, setpolls] = useState([]);
  let { userContext, setuserContext } = useContext(UserContext);

  useEffect(async () => {
    let res = localStorage.getItem("user");
    const useRes = JSON.parse(res);
    // setuserContext(useRes); dd

    if (userContext) {
      let response = await func.getPolls();
      console.log(response);
      if (response.status) {
        setpolls(response.polls ? response.polls : []);
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
        <div className={styles.top}>
          <text className={styles.toptxt1}>Hello {userContext?.name}</text>
          <text className={styles.toptxt}>
            Here you can manage your tickets
          </text>
        </div>

        <div className={styles.hlist}>
          <div className={styles.hlistitem}>
            <div>
              <img src="/poll.png" />
              <text className={styles.hlistitemtext}>Polls</text>
            </div>
            <text className={styles.hlistitemtext1}>10</text>
          </div>
          <div className={styles.hlistitem}>
            <div>
              <img src="/badge.png" />
              <text className={styles.hlistitemtext}>Total Votes</text>
            </div>
            <text className={styles.hlistitemtext1}>GHC 3026</text>
          </div>
          <div className={styles.hlistitem}>
            <div>
              <img src="/users.png" />
              <text className={styles.hlistitemtext}>Nominees</text>
            </div>
            <text className={styles.hlistitemtext1}>1360</text>
          </div>
        </div>

        <div className={styles.graphcon}>
          <div className={styles.graph}>
            <text>Total Votes</text>
          </div>
          <DChart />
        </div>

        {polls.length > 0 ? (
          <div className={styles.sales}>
            <div className={styles.graph}>
              <text>Polls</text>

              <Link href="/profile/create-poll">
                <div className={styles.infobtn}>Create Poll</div>
              </Link>
            </div>
            <div className={styles.table}>
              <text className={styles.one}>Event</text>
              <text className={styles.two}>Status</text>
              <text className={styles.three}>Votes</text>
              <text className={styles.four}></text>
            </div>

            {polls.map((item, index) => {
              console.log(item);
              return (
                <div className={styles.tableitems}>
                  <div className={styles.one}>
                    <img src={item?.imageURL ? item?.imageURL : "/photo.png"} />
                    <div className={styles.oneitem}>
                      <text className={styles.eventname}>{item?.name}</text>
                      <text className={styles.eventdate}></text>
                    </div>
                  </div>
                  <div className={styles.two}>
                    <text className={styles.pollstatus}>ACTIVE</text>
                  </div>
                  <div className={styles.three}>
                    <text className={styles.eventsold}>{item?.totalVotes}</text>
                  </div>
                  <div className={styles.four}>
                    <Link href={`/profile/voting/${item?.id}`}>
                      <div onClick={() => {}} className={styles.fouritem}>
                        open
                      </div>
                    </Link>
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
                You have no polls, create a new poll
              </text>
              <Link href="/profile/create-poll">
                <div className={styles.infobtn}>Create Poll</div>
              </Link>
            </div>
          </div>
        )}
      </main>
    </DashboardLayout>
  );
}
