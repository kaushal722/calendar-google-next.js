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
      <h1>You Are Invited!</h1>
<br />
<h2 className={"center"}>Click the button bellow for details</h2>
<br />
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
      <h3><br />
      <br />
      Spoiler: There will be coffee!
      </h3>
    </main>
  );
}
