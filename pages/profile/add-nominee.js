import Link from "next/link";
import styles from "../../styles/Signup.module.css";
import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import func from "../../functions";
import { UserContext } from "../../context";
import { useRouter } from "next/router";
import { toaster, Spinner } from "evergreen-ui";
import Headd from "../../components/Head";
import { BASE_URL, BASE_URL_POST } from "../../config/api";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import fapp from "../../firebase";

export default function AddNominee({ data }) {
  // Page 1
  let poll = data ? data?.poll : {};

  const [name, setname] = useState("");
  const [loading, setloading] = useState(false);
  const [category, setcategory] = useState(false);
  let { userContext, setuserContext } = useContext(UserContext);
  const router = useRouter();

  const [image, setimage] = useState(null);
  const [isUploading, setisUploading] = useState(false);
  const [upImage, setupImage] = useState(null);

  const storage = getStorage(fapp);
  const imagesRef = ref(storage, "tease");

  useEffect(() => {
    if (image) {
      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/*",
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, "tease/" + image.name);
      const uploadTask = uploadBytesResumable(storageRef, image, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setupImage(downloadURL);
            setimage(null);
          });
        }
      );
    }
  }, [image]);

  // console.log(router.query.id);

  useEffect(async () => {
    let res = await localStorage.getItem("user");
    const useRes = JSON.parse(res);
    // setuserContext(useRes);
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
    });
  }, []);

  // console.log(poll);

  useEffect(() => {
    if (poll) {
      setcategory(poll?.categories[0]);
    }
  }, [poll]);

  return (
    <main className={styles.main}>
      <Headd title="Dashboard" />
      <div className={styles.nav}>
        <Link href="/">
          <img
            alt="TixVote"
            data-aos="zoom-in"
            src="/logob.png"
            className={styles.logo}
          />
        </Link>
        <div className={styles.navlinks}>
          {userContext?.name ? (
            <Link href={`/profile/voting/${poll?.id}`}>
              <text className={styles.navitem}>{poll?.name}</text>
            </Link>
          ) : (
            <Link href="/login">
              <text className={styles.navitem}>Login</text>
            </Link>
          )}
        </div>
        <Link href="/">
          <img alt="tease vote" src="/back.png" className={styles.menu} />
        </Link>
      </div>

      <h1 className={styles.h1}>Add Nominee</h1>

      {userContext?.name ? (
        <>
          <text className={styles.text}>Basic Information</text>

          <text className={styles.label}>Upload nominee's picture</text>
          {image ? null : (
            <input
              type="file"
              accept="image/*"
              onChange={(v) => {
                console.log(v.target.files[0]);
                setimage(v.target.files[0]);
              }}
            />
          )}

          {upImage ? (
            <img
              style={{
                objectFit: "cover",
              }}
              src={upImage}
              className={styles.upimg}
            />
          ) : (
            <div onClick={() => {}} className={styles.upimg}>
              {image ? <Spinner /> : <img src="/imageupload.png" />}
            </div>
          )}

          <text className={styles.label}>Nominee Name*</text>
          <input
            className={styles.input1}
            placeholder="Enter nominee name"
            onChange={(value) => {
              setname(value.target.value);
            }}
            value={name}
          />

          <text className={styles.label}>Select Category*</text>
          <select
            onChange={(e) => {
              setcategory(e.target.value);
            }}
            className={styles.inputd}
            value={category}
          >
            {poll?.categories?.map((item) => {
              return (
                <option label={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>

          <div
            onClick={async () => {
              console.log(poll?.categories);
              if (category && name) {
                setloading(true);
                let payload = {
                  name: name,
                  category: category,
                  pollID: poll?.id,
                  nomineeImage: upImage ? upImage : "",
                  initials: poll?.initials,
                };

                // console.log(payload);

                let response = await func.addNominee(payload);
                // console.log("USE RES>>>>>>> ", response);

                if (response.status) {
                  toaster.success("Nominee added successfully", {
                    duration: 5,
                  });
                  setloading(false);
                  router.push(`/profile/voting/${poll?.id}`);
                } else {
                  setloading(false);
                  toaster.danger("Something went wrong, Please try again");
                }
              } else {
                toaster.notify("Fill all fields");
              }
            }}
            className={styles.btn}
          >
            {loading ? "Loading" : "Add Nominee"}
          </div>
        </>
      ) : (
        <>
          <text className={styles.text}>Login to continue</text>
          <Link href="/login">
            <div className={styles.btn}>Login</div>
          </Link>
        </>
      )}
    </main>
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
