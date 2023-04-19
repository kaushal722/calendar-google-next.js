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
        zIndex: "1"
      }}
    >
      

      <h1>You Are Invited! Cheers</h1>

      <div>
        <a
          target="_blank"
          href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MmtmZHNlajNxbXEyZzRydGUzaDgzZWw3YW0gZTllNTA5MmVmYTA2NWU5OWM3MjZkOGI5Nzc4ZjlmOWZkNWNmMjk0ZTFjY2U4OWMzNzdlYjQ2YzU2MWRlZjM1MUBn&amp;tmsrc=e9e5092efa065e99c726d8b9778f9f9fd5cf294e1cce89c377eb46c561def351%40group.calendar.google.com"
        >
          <img
            border="0"
            src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"
          ></img>
        </a>
      </div>
    </main>
  );
}
