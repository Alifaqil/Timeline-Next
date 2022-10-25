import React, { useContext } from "react";
// import { TimeContext } from "./Timecontext.js";
import TimelineItem from "./Timeitem.js";
import styles from "../styles/Time.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TimeSlicer from "./TimeSlicer.js";

export default function Timelist() {
  const showData = TimeSlicer.actions.showData;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  // const data = useContext(TimeContext);
  useEffect(
    (event) => {
      dispatch(showData);
    },
    [dispatch, showData]
  );

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
