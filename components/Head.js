import Head from "next/head";

export default function Headd({ title, image }) {
  return (
    <Head>
      <title>{title + " | Discover and Manage events"} </title>
      <meta
        name="title"
        content={title + " | Discover and Manage events"}
      ></meta>
      <meta
        name="og:title"
        content={title + " | Discover and Manage events"}
      ></meta>
      <meta
        content={title + " | Discover and Manage events"}
        property="og:title"
      ></meta>
      <meta
        property="twitter:title"
        content={title + " | Discover and Manage events"}
      ></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://tease.africa/"></meta>
      <meta
        name="description"
        content="With Tease you can discover events in your city, buy tickets to music or games, create and manage your own event and sell tickets to other users."
      />
      <link rel="icon" href="/icon.png" />

      <meta
        proterty="og:description"
        content="With Tease you can discover events in your city, buy tickets to music or games, create and manage your own event and sell tickets to other users."
      ></meta>
      <meta
        property="og:image"
        content={image ? image : "https://teaseafrica.netlify.app/1.png"}
      ></meta>

      <meta
        content="With Tease you can discover events in your city, buy tickets to music or games, create and manage your own event and sell tickets to other users."
        property="twitter:description"
      ></meta>
      <meta
        property="twitter:title"
        content={title + " | Discover and Manage events"}
      ></meta>
      <meta property="twitter:url" content="https://tease.africa/"></meta>
      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta
        property="twitter:image"
        content={image ? image : "https://teaseafrica.netlify.app/1.png"}
      ></meta>
      <meta
        property="twitter:image"
        content={image ? image : "https://teaseafrica.netlify.app/1.png"}
        data-vue-meta="true"
      ></meta>
      <meta
        property="og:image"
        content={image ? image : "https://teaseafrica.netlify.app/1.png"}
        data-vue-meta="true"
      ></meta>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Y5P4TVP212"
      ></script>
      
      <script
        dangerouslySetInnerHTML={{
          __html: `    window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-Y5P4TVP212')`,
        }}
      />
    </Head>
  );
}
