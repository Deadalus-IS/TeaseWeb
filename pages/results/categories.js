import Head from "../../components/Head";
import Link from "next/link";
import styles from "../../styles/Discover.module.css";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import * as gtag from "../../lib/gtag";
import SideNav from "../../components/SideNav";
import { useRouter } from "next/router";

import AOS from "aos";
import "aos/dist/aos.css";
import { BASE_URL } from "../../config/api";

export default function Stat({ data }) {
  const router = useRouter();
  console.log(data);
  const [query, setquery] = useState("");
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
    });

    // console.log(data);
  }, []);

  const polls = data?.poll;
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className={styles.container}>
      <Head title="Discover polls | TixVote" />
      <main className={styles.main}>
        <div className={styles.nav}>
          <Link href="/">
            <img
              alt="TixVote"
              data-aos="zoom-in"
              src="/logow.png"
              className={styles.logo}
            />
          </Link>

          <div className={styles.navlinks}>
            {/* <text className={styles.navitem}>Download</text> */}
          </div>
          <img
            alt="TixVote"
            onClick={() => {
              document.getElementById("sidemenu").style.left = "0";
            }}
            src="/menu.png"
            className={styles.menu}
          />
        </div>

        <SideNav />

        <text data-aos="zoom-in" className={styles.mainText}>
          Results
        </text>
        <text data-aos="zoom-in" className={styles.subText}>
          View realtime results and positions of your nominees
          <br />
        </text>
      </main>
      <main className={styles.main2}>
        <div className={styles.search}>
          <div>
            <img alt="TixVote" src="/searchw.png" />
            <input
              onChange={(e) => {
                setquery(e.target.value);
              }}
              placeholder="Search by event"
            />
          </div>
        </div>
        <div className={styles.points}>
          {polls?.categories?.length > 0 ? (
            polls?.categories.map((item) => {
              return (
                <Link href={"/results/" + polls?.slug + "/?category=" + item}>
                  <div
                    onClick={() => {
                      gtag.event({
                        action: "OPENED_EVENT",
                        category: "polls",
                        label: item.name,
                        value: item.name,
                      });
                    }}
                    key={item.id}
                    style={{
                      background: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.9)), url(${
                        item.coverImage ? item.coverImage : "/img.png"
                      })`,
                      backgroundSize: "100%",
                      backgroundRepeat: "no-repeat",
                      backgroundColor: "#eee",
                    }}
                    className={styles.point}
                  >
                    <div />
                    <text className={styles.h2}>
                      {item} <br />
                      <text className={styles.text}>Category</text>
                    </text>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className={styles.emptycon}>
              <img alt="TixVote" src="/empty.png" className={styles.emptyimg} />
              <text className={styles.empty}>No polls Available</text>
            </div>
          )}
        </div>
        {/* <div className={styles.more}>View more</div> */}
      </main>

      <Footer styles={styles} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  let res = await fetch(BASE_URL + "/api/getPoll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });

  // console.log(res);
  let data = [];
  data = await res.json();

  // console.log(data);
  return { props: { data: data ? data : null } };
}
