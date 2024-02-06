import Head from "../components/Head";
import Link from "next/link";
import AOS from "aos";
import styles from "../styles/Home.module.css";
import { useEffect, useContext } from "react";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import SideNav from "../components/SideNav";
import { useState } from "react";
import Layout from "../components/Layout";

export default function Home({ data }) {
  const events = data.events;
  const router = useRouter();
  const [width, setwidth] = useState("");
  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  // 54.205.240.192/32
  // 41.204.44.88/32

  useEffect(() => {
    if (typeof window !== "undefined") {
      width =
        document.body.clientWidth ||
        window.innerHeight ||
        document.documentElement.clientHeigh;

      setwidth(width);
    }
  }, []);

  useEffect(async () => {
    let res = await localStorage.getItem("user");
    const useRes = JSON.parse(res);
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
    });
  }, []);

  return (
    <Layout>
      <div className={styles.container}>
        <Head title="" />

        <div className={styles.lheading}>
          <div className={styles.lcontent}>
            <div className={styles.ltxt}>
              {/* <div
                data-w-id="e6a76bfe-0db6-ad1c-ec7f-413e2dddd4d2"
                class="event-atg"
                style="transform:translate3d(0px,0px,0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(-5deg) skew(0deg,0deg);transform-style:preserve-3d"
              >
                <div class="event-tag-inner">
                  <div class="event-tag-text">Event</div>
                </div>
              </div> */}
              <h1 style={{ textAlign: "center" }} className={styles.h1}>
                <text className={styles.h1x}>Effortless</text> <br />
                Voting and Ticketing <br />
                at Your Fingertips.
              </h1>
              <p style={{ textAlign: "center" }} className={styles.subh1}>
                Get started and user our online ticketing, USSD and online{" "}
                <br />
                voting platforms for your next event
              </p>
            </div>
            <div className={styles.imgs}>
              {/* <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
              <img alt="TixVote" src="/playstore.png" className={styles.app1} alt="android" />
            </Link> */}
              {/* <img alt="TixVote" src="/ios.png" className={styles.app} alt="ios" /> */}
              <Link href="/login">
                <div className={styles.sell}>Get Started</div>
              </Link>
              {/* <Link href="/discover">
                <div className={styles.sell2}>Discover</div>
              </Link> */}
              <Link href="/vote">
                <div className={styles.sell2}>Vote</div>
              </Link>
            </div>
          </div>

          <SideNav />

          {/* <marquee
          width="100%"
          direction="left"
          style={{ disple: "flex", flexDirection: "row" }}
          // height="100px"
        >
          <section className={styles.mobilescroll}>
            <div className={styles.lstorymobile}></div>
            <div className={styles.lstorymobile}></div>
            <div className={styles.lstorymobile}></div>
          </section>
        </marquee> */}
        </div>

        <main className={styles.downloadad}>
          {width <= 600 ? (
            <text className={styles.h1m}>
              Get the app now, <br />
              take control of your events.
            </text>
          ) : (
            <text className={styles.dh1}>
              Get the app now, take control <br />
              of your events.
            </text>
          )}
          <div className={styles.dimgs}>
            <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
              <img alt="TixVote" src="/playstore.png" className={styles.app1} />
            </Link>
            {/* <img alt="TixVote" src="/ios.png" className={styles.app} alt="ios" /> */}
          </div>
        </main>
        <main className={styles.main2}>
          {width <= 600 ? (
            <text className={styles.h1m} data-aos="fade-up">
              We give you the right tools to manage your events like a PRO.
            </text>
          ) : (
            <text className={styles.h1} data-aos="fade-up">
              We give you the right tools to manage your events like a PRO.
            </text>
          )}
          <div className={styles.points} data-aos="fade-up">
            <div className={styles.point}>
              <div className={styles.head}>
                <img alt="TixVote" src="/mark.png" className={styles.check} />
                <text className={styles.h2}>Unlimited events</text>
              </div>
              <text className={styles.text}>
                Create unlimited events and we will help you manage, promote and
                sell them with our PRO tools for FREE.
              </text>
            </div>
            <div className={styles.point}>
              <div className={styles.head}>
                <img alt="TixVote" src="/mark.png" className={styles.check} />
                <text className={styles.h2}>Mobile ticketing</text>
              </div>
              <text className={styles.text}>
                Easy and convenient ticketing for both you and your customers on
                our mobile app.
              </text>
            </div>
            <div className={styles.point}>
              <div className={styles.head}>
                <img alt="TixVote" src="/mark.png" className={styles.check} />
                <text className={styles.h2}>Analytics & report</text>
              </div>
              <text className={styles.text}>
                Real time reports of how customers are engaging with your events
                and sales.
              </text>
            </div>
          </div>
          <div className={styles.points} data-aos="fade-up">
            <div className={styles.point}>
              <div className={styles.head}>
                <img alt="TixVote" src="/mark.png" className={styles.check} />
                <text className={styles.h2}>Unlimited events</text>
              </div>
              <text className={styles.text}>
                Create unlimited events and we will help you manage, promote and
                sell them with our PRO tools for FREE.
              </text>
            </div>
            <div className={styles.point}>
              <div className={styles.head}>
                <img alt="TixVote" src="/mark.png" className={styles.check} />
                <text className={styles.h2}>Mobile ticketing</text>
              </div>
              <text className={styles.text}>
                Easy and convenient ticketing for both you and your customers on
                our mobile app.
              </text>
            </div>
            <div className={styles.point}>
              <div className={styles.head}>
                <img alt="TixVote" src="/mark.png" className={styles.check} />
                <text className={styles.h2}>Analytics & report</text>
              </div>
              <text className={styles.text}>
                Real time reports of how customers are engaging with your events
                and sales.
              </text>
            </div>
          </div>
          <div className={styles.points} data-aos="fade-up">
            <div className={styles.point}>
              <div className={styles.head}>
                <img alt="TixVote" src="/mark.png" className={styles.check} />
                <text className={styles.h2}>Organize Poll</text>
              </div>
              <text className={styles.text}>
                Organizers poll for award events and let users vote for your
                nominees.
              </text>
            </div>
            <div className={styles.point}>
              <div className={styles.head}>
                <img alt="TixVote" src="/mark.png" className={styles.check} />
                <text className={styles.h2}>Realtime Dashboard</text>
              </div>
              <text className={styles.text}>
                Monitor incoming votes and revenue from our realtime dashboard,
                manage your polls here to.
              </text>
            </div>
            <div className={styles.point}>
              <div className={styles.head}>
                <img alt="TixVote" src="/mark.png" className={styles.check} />
                <text className={styles.h2}>Cheaper</text>
              </div>
              <text className={styles.text}>
                We have the cheapest rate in the market, only 10%
              </text>
            </div>
          </div>
        </main>

        <div className={styles.faq} data-aos="zoom-in">
          <text className={styles.h1}>FAQ</text>
          <div className={styles.accordion}>
            <div className={styles.accordionitem}>
              <button
                id="accordionbutton1"
                aria-expanded="false"
                onClick={() => {
                  const itemToggle = document
                    .getElementById("accordionbutton1")
                    .getAttribute("aria-expanded");

                  document
                    .getElementById("accordionbutton1")
                    .setAttribute("aria-expanded", "false");

                  if (itemToggle == "false") {
                    document
                      .getElementById("accordionbutton1")
                      .setAttribute("aria-expanded", "true");
                  }
                }}
              >
                <span className={styles.accordiontitle}>
                  Who can use TixVote?
                </span>
                <span className={styles.icon} aria-hidden="true"></span>
              </button>
              <div className={styles.accordioncontent}>
                <p>
                  Tease is available to anyone to discover and buy tickets or to
                  create events with our event management tools.
                </p>
              </div>
            </div>
            <div className={styles.accordionitem}>
              <button
                id="accordionbutton2"
                aria-expanded="false"
                onClick={() => {
                  const itemToggle = document
                    .getElementById("accordionbutton2")
                    .getAttribute("aria-expanded");

                  document
                    .getElementById("accordionbutton2")
                    .setAttribute("aria-expanded", "false");

                  if (itemToggle == "false") {
                    document
                      .getElementById("accordionbutton2")
                      .setAttribute("aria-expanded", "true");
                  }
                }}
              >
                <span className={styles.accordiontitle}>
                  How many events can I create?
                </span>
                <span className={styles.icon} aria-hidden="true"></span>
              </button>
              <div className={styles.accordioncontent}>
                <p>
                  You are at liberty to create as many events as you want, our
                  tools will help you management them like a PRO.
                </p>
              </div>
            </div>
            <div className={styles.accordionitem}>
              <button
                id="accordionbutton3"
                aria-expanded="false"
                onClick={() => {
                  const itemToggle = document
                    .getElementById("accordionbutton3")
                    .getAttribute("aria-expanded");

                  document
                    .getElementById("accordionbutton3")
                    .setAttribute("aria-expanded", "false");

                  if (itemToggle == "false") {
                    document
                      .getElementById("accordionbutton3")
                      .setAttribute("aria-expanded", "true");
                  }
                }}
              >
                <span className={styles.accordiontitle}>
                  How much does it cost to create events?
                </span>
                <span className={styles.icon} aria-hidden="true"></span>
              </button>
              <div className={styles.accordioncontent}>
                <p>
                  Creating events is totally free, however we take 2% payment
                  processing fee + 3% service charge for all tickets sold. Free
                  events are always free.
                </p>
              </div>
            </div>
            <div className={styles.accordionitem}>
              <button
                id="accordionbutton4"
                aria-expanded="false"
                onClick={() => {
                  const itemToggle = document
                    .getElementById("accordionbutton4")
                    .getAttribute("aria-expanded");

                  document
                    .getElementById("accordionbutton4")
                    .setAttribute("aria-expanded", "false");

                  if (itemToggle == "false") {
                    document
                      .getElementById("accordionbutton4")
                      .setAttribute("aria-expanded", "true");
                  }
                }}
              >
                <span className={styles.accordiontitle}>
                  How can i withdraw my money?
                </span>
                <span className={styles.icon} aria-hidden="true"></span>
              </button>
              <div className={styles.accordioncontent}>
                <p>
                  You can request for your monies at anytime and we will deposit
                  it into the account you will provide. This usually takes less
                  than 24 hours.
                </p>
              </div>
            </div>
            <div className={styles.accordionitem}>
              <button
                id="accordionbutton5"
                aria-expanded="false"
                onClick={() => {
                  const itemToggle = document
                    .getElementById("accordionbutton5")
                    .getAttribute("aria-expanded");

                  document
                    .getElementById("accordionbutton5")
                    .setAttribute("aria-expanded", "false");

                  if (itemToggle == "false") {
                    document
                      .getElementById("accordionbutton5")
                      .setAttribute("aria-expanded", "true");
                  }
                }}
              >
                <span className={styles.accordiontitle}>
                  How do I admit people to my event?
                </span>
                <span className={styles.icon} aria-hidden="true"></span>
              </button>
              <div className={styles.accordioncontent}>
                <p>
                  We provide a ticket scanner in the app that you can use to
                  verify tickets before letting people in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let res = await fetch("http://api.tixvote.com:443//api/getEvents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(res);
  let data = [];
  // data = await res.json();

  // console.log(data);
  return { props: { data: data ? data : [] } };
}
