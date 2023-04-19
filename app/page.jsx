import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        position: "absolute",
        width: "100%",
        flexDirection: "column",
        zIndex: "1",
        padding: "2rem",
      }}
    >
      <h1>You Are Invited!</h1>
      <br />
      <h3 className={"center"}>
        20th Apr, 6:00pm onwards{" "}
        <a
          style={{ color: "#ded05a", fontWeight: "700" }}
          href="https://goo.gl/maps/6mWsJo7E2aZqBBRUA"
        >
          @Dude's Place
        </a>{" "}
      </h3>
      <br />
      <br />
      <br />
      <h2 className={"center"}>Tap bellow to get reminded 🚀</h2>
      <br />
      <div>
        <a
          title="Count me in!"
          class="addeventatc"
          data-id="yT16810291"
          href="https://www.addevent.com/event/yT16810291"
          target="_blank"
        >
          Count me in!
        </a>
        <script
          type="text/javascript"
          src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js"
          async
          defer
        ></script>
      </div>
      <h6>
        <br />
        <br />
        <br />
        <br />
        <br />
        Spoiler: There will be a lot of caffeine!
      </h6>
    </main>
  );
}
