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
      }}
    >
      <h1>You Are Invited!</h1>
      <br />
      <h3 className={"center"}>20th Apr, 6:00pm onwards @Dude's Place</h3>
      <br />
      <br />
      <br />
      <h2 className={"center"}>Tap bellow to get reminded 🚀</h2>
      <br />
      <div>
        
        <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MmtmZHNlajNxbXEyZzRydGUzaDgzZWw3YW0gZTllNTA5MmVmYTA2NWU5OWM3MjZkOGI5Nzc4ZjlmOWZkNWNmMjk0ZTFjY2U4OWMzNzdlYjQ2YzU2MWRlZjM1MUBn&tmsrc=e9e5092efa065e99c726d8b9778f9f9fd5cf294e1cce89c377eb46c561def351%40group.calendar.google.com"
        >
          <button className={"inviteBtn"}>Count me in!</button>
        </a>
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
