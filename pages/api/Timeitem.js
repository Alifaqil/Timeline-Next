import React from "react";
const TimelineItem = ({ data, styles, key }) => {
  const date = new Date(data.date).toDateString();
  function setColor(status) {
    if (status === "Done") {
      return "green";
    } else if (status === "Canceled") {
      return "red";
    } else if (status === "In progress") {
      return "blue";
    } else {
      return "grey";
    }
  }
  const color = setColor(data.status);
  return (
    <li key={key}>
      <div className={styles.direction}>
        <div className={styles.flagwrapper}>
          <span className={styles.hexa}></span>
          <span className={styles.flag}>{data.name}</span>
          <span className={styles.timewrapper}>
            <span className={styles.time}>{date}</span>
          </span>
        </div>
        <div className={styles.desc}>{data.description}</div>
        <span className={styles.status} style={{ background: color }}>
          {data.status}
        </span>
      </div>
    </li>
  );
};

export default TimelineItem;
