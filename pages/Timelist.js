import React, { useContext } from "react";
import { TimeContext } from "./Timecontext.js";
import TimelineItem from "./api/Timeitem.js";
import styles from "../styles/Time.module.css";

function force() {
  this.forceUpdate();
}
export default function Timelist() {
  const data = useContext(TimeContext);
  force();
  console.log(data);
  return (
    <div className={styles.container}>
      <h1>Timeline</h1>
      <ul className={styles.timeline}>
        {data.map((item, index) => (
          <TimelineItem data={item} styles={styles} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
