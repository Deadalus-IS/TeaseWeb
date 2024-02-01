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
import Head from "../../../components/Head";
const DChart = dynamic(() => import("../../../components/Graph"), {
  ssr: false,
});

export default function Profile() {
  const [polls, setpolls] = useState([]);
  const [data, setdata] = useState([]);
  const [categories, setcategories] = useState([]);
  let { userContext, setuserContext } = useContext(UserContext);

  useEffect(async () => {
    let res = localStorage.getItem("user");
    const useRes = JSON.parse(res);
    // setuserContext(useRes); dd

    if (userContext) {
      let response = await func.getPolls({
        id: userContext?.id,
      });
      // console.log(response);
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

  useEffect(() => {
    let tempData = [];
    let tempCat = [];
    polls.map((item) => {
      // console.log(item?.name);

      tempData.push(item?.totalVotes);
      tempCat.push(item?.name);

      setdata(tempData);
      setcategories(tempCat);
    });
  }, [polls]);

  return (
    <DashboardLayout sidebar={false}>
      <Head title="Dashboard" />
      <main className={styles.main}>
        <div className={styles.top}>
          <text className={styles.toptxt1}>Hello {userContext?.name}</text>
          <text className={styles.toptxt}>Here you can manage your polls</text>
        </div>

        <div className={styles.hlist}>
          <div className={styles.hlistitem}>
            <div>
              <img alt="TixVote" src="/poll.png" />
              <text className={styles.hlistitemtext}>Polls</text>
            </div>
            <text className={styles.hlistitemtext1}>{polls?.length}</text>
          </div>
          <div className={styles.hlistitem}>
            <div>
              <img alt="TixVote" src="/badge.png" />
              <text className={styles.hlistitemtext}>Total Votes</text>
            </div>
            <text className={styles.hlistitemtext1}>
              {polls.reduce((n, a) => n + (a.totalVotes || 0), 0)}
            </text>
          </div>
          <Link href="/results">
            <div className={styles.hlistitem}>
              <div>
                <img alt="TixVote" src="/pie-chart.png" />
                <text className={styles.hlistitemtext}>Results</text>
              </div>
              <text
                style={{
                  cursor: "pointer",
                }}
                className={styles.hlistitemtext1}
              >
                View
              </text>
            </div>
          </Link>
        </div>

        <div className={styles.graphcon}>
          <div className={styles.graph}>
            <text>Total Votes</text>
          </div>
          <DChart data={data} categories={categories} />
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
              return (
                <div className={styles.tableitems}>
                  <div className={styles.one}>
                    <img
                      alt="TixVote"
                      src={item?.coverImage ? item?.coverImage : "/photo.png"}
                    />
                    <div className={styles.oneitem}>
                      <text className={styles.eventname}>{item?.name}</text>
                      <text className={styles.eventdate}></text>
                    </div>
                  </div>
                  <div className={styles.two}>
                    <text
                      style={{
                        backgroundColor: item?.avaliable
                          ? "#4beb88bb"
                          : "#eb4b76bb",
                      }}
                      className={styles.pollstatus}
                    >
                      {item?.avaliable ? "ACTIVE" : "CLOSED"}
                    </text>
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
              <img alt="TixVote" src="/emptyf.png" />
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
      <section className={styles.rightbar}>
        {/* <div className={styles.searchcon}>
          <input placeholder="Search for your events" />
          <img alt="TixVote" src="/loupe.png" />
        </div> */}

        <div className={styles.card}>
          <text className={styles.cardtitle}>Balance</text>
          <text className={styles.balance}>
            GHS{" "}
            {Number(polls.reduce((n, a) => n + (a.balance || 0), 0)).toFixed(2)}
          </text>

          {/* <div className={styles.withdraw}>Withdraw</div> */}
        </div>
      </section>
    </DashboardLayout>
  );
}
