import Head from "../components/Head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import float from "../styles/Float.module.css";
import { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import { UserContext } from "../context";
import fauth from "../firebase";
import { useRouter } from "next/router";
import SideNav from "../components/SideNav";

export default function Home({ data }) {
  const events = data.events;
  let { userContext, setuserContext } = useContext(UserContext);
  const router = useRouter();
  // console.log(userContext);

  function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
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

  let arrevents = [
    ...events,
    ...events,
    ...events,
    ...events,
    ...events,
    ...events,
    ...events,
    ...events,
  ];

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head title="Tease Africa" />

      <div className={styles.lheading}>
        <div className={styles.lcontent}>
          <div className={styles.nav}>
            <div className={styles.dropcon}>
              <img className={styles.llogo} src="/logob.png" cl alt="logo" />
              {/* {fauth.currentUser ? (
                <img
                  className={`${styles.dropdown} ${styles.dropdown1}`}
                  src={userContext?.organizer?.profileURL}
                  alt="logo"
                />
              ) : (
                <img
                  className={styles.dropdown}
                  src={"/menu1.png"}
                  alt="hamburger"
                />
              )} */}
              <div className={styles.dropmenu}>
                <text className={styles.quicklink}></text>

                <Link href="/discover">
                  <text className={styles.link}>Discover</text>
                </Link>
                {fauth.currentUser ? (
                  <Link href="/create">
                    <text className={styles.link}>Create Event</text>
                  </Link>
                ) : (
                  <Link href="/login">
                    <text className={styles.link}>Login</text>
                  </Link>
                )}

                {fauth.currentUser ? (
                  <Link href="/profile">
                    <text className={styles.link}>Profile</text>
                  </Link>
                ) : null}
                {fauth.currentUser ? (
                  <text
                    onClick={() => {
                      fauth.signOut();
                      router.reload();
                    }}
                    className={styles.link}
                  >
                    Log Out
                  </text>
                ) : (
                  <Link href="/signup">
                    <text className={styles.link}>Sign Up</text>
                  </Link>
                )}
                <text className={styles.quicklink}></text>
              </div>
            </div>
            {fauth.currentUser ? (
              <img
                onClick={() => {
                  document.getElementById("sidemenu").style.left = "0";
                }}
                className={styles.menupic}
                src={userContext?.organizer?.profileURL}
                alt="profile-picture"
              />
            ) : (
              <img
                onClick={() => {
                  document.getElementById("sidemenu").style.left = "0";
                }}
                src="/menu1.png"
                className={styles.menu}
              />
            )}
          </div>

          <div className={styles.ltxt}>
            <h1 style={{ textAlign: "left" }} className={styles.h1}>
              Event ticketing for you.
            </h1>
            <p className={styles.subh1}>
              All-in-one event management and ticketing system for promoting,
              managing, buying & selling your event tickets online ‐ all for
              free!
            </p>
          </div>
          <div className={styles.imgs}>
            {/* <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
              <img src="/playstore.png" className={styles.app1} alt="android" />
            </Link> */}
            {/* <img src="/ios.png" className={styles.app} alt="ios" /> */}
            <Link href="/create">
              <div className={styles.sell}>Sell Ticket</div>
            </Link>
            <Link href="/discover">
              <div className={styles.sell2}>Discover</div>
            </Link>
          </div>
        </div>

        <SideNav />
        <div className={styles.lstories}>
          <div className={styles.lstoriesholder}>
            {arrevents.map((item) => {
              return (
                <Link href={"/" + item.slug}>
                  <div className={styles.lstory}>
                    <img src={item.imageURL} className={styles.image} />
                    <div className={styles.lstoryoverlay}>
                      <div className={styles.date}>
                        <text className={styles.dateh2}>{item.date.day}</text>
                        <text className={styles.datetext}>
                          {months[item.date.month - 1]}
                        </text>
                      </div>
                    </div>
                    <div className={styles.lstoryname}>
                      <div className={styles.eventdetails}>
                        <strong className={styles.strong}>{item.name}</strong>
                        <br />
                        <span className={styles.datte}>
                          {truncateString(item.about, 50)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={styles.lstoriesholder}>
            {arrevents.map((item) => {
              return (
                <Link href={"/" + item.slug}>
                  <div className={styles.lstory}>
                    <img
                      src={item.imageURL}
                      className={styles.image}
                      alt="event-image"
                    />
                    <div className={styles.lstoryoverlay}>
                      <div className={styles.date}>
                        <text className={styles.dateh2}>{item.date.day}</text>
                        <text className={styles.datetext}>
                          {months[item.date.month - 1]}
                        </text>
                      </div>
                    </div>
                    <div className={styles.lstoryname}>
                      <div className={styles.eventdetails}>
                        <strong className={styles.strong}>{item.name}</strong>
                        <br />
                        <span className={styles.datte}>
                          {truncateString(item.about, 50)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className={styles.lstoriesholder}>
            {arrevents.map((item) => {
              return (
                <Link href={"/" + item.slug}>
                  <div className={styles.lstory}>
                    <img
                      src={item.imageURL}
                      className={styles.image}
                      alt="event-image"
                    />
                    <div className={styles.lstoryoverlay}>
                      <div className={styles.date}>
                        <text className={styles.dateh2}>{item.date.day}</text>
                        <text className={styles.datetext}>
                          {months[item.date.month - 1]}
                        </text>
                      </div>
                    </div>
                    <div className={styles.lstoryname}>
                      <div className={styles.eventdetails}>
                        <strong className={styles.strong}>{item.name}</strong>
                        <br />
                        <span className={styles.datte}>
                          {truncateString(item.about, 50)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

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
        <text className={styles.dh1}>
          Get the app now, take control <br />
          of your events.
        </text>
        <div className={styles.dimgs}>
          <Link href="https://play.google.com/store/apps/details?id=africa.tease.organizer">
            <img src="/playstore.png" className={styles.app1} alt="android" />
          </Link>
          <img src="/ios.png" className={styles.app} alt="ios" />
        </div>
      </main>
      <main className={styles.main2}>
        <text className={styles.h1} data-aos="fade-up">
          We give you the right toolkits to manage your events like a PRO.
        </text>
        <div className={styles.points} data-aos="fade-up">
          <div className={styles.point}>
            <div className={styles.head}>
              <img src="/mark.png" className={styles.check} alt="event-image" />
              <text className={styles.h2}>Unlimited events</text>
            </div>
            <text className={styles.text}>
              Create unlimited events and we will help you manage, promote and
              sell them with our PRO tools for FREE.
            </text>
          </div>
          <div className={styles.point}>
            <div className={styles.head}>
              <img src="/mark.png" className={styles.check} alt="event-image" />
              <text className={styles.h2}>Mobile ticketing</text>
            </div>
            <text className={styles.text}>
              Easy and convenient ticketing for both you and your customers on
              our mobile app.
            </text>
          </div>
          <div className={styles.point}>
            <div className={styles.head}>
              <img src="/mark.png" className={styles.check} alt="event-image" />
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
              <img src="/mark.png" className={styles.check} alt="event-image" />
              <text className={styles.h2}>Ticket scanning</text>
            </div>
            <text className={styles.text}>
              Intuisive and fast ticket scanner to verify tickets. Easy to use
              and can handle any kind of event.
            </text>
          </div>
          <div className={styles.point}>
            <div className={styles.head}>
              <img src="/mark.png" className={styles.check} alt="event-image" />
              <text className={styles.h2}>Payment</text>
            </div>
            <text className={styles.text}>
              Receive payment from Tease anytime you need, you don't have to
              wait till end of week to get your cash.
            </text>
          </div>
          <div className={styles.point}>
            <div className={styles.head}>
              <img src="/mark.png" className={styles.check} alt="event-image" />
              <text className={styles.h2}>Promotion</text>
            </div>
            <text className={styles.text}>
              We give every event social media promotion on Facebook, Twitter
              and Instagram free of charge.
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
                Who can use Tease Africa?
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
      <Footer styles={styles} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let res = await fetch("https://passticketgo.herokuapp.com/api/getEvents", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = [];
  data = await res.json();
  return { props: { data: data } };
}
