import React, { useState } from "react";
import Header from "./Header.js";
import { useRouter } from "next/router";
import { supabase } from "../supabase-client";
import styles from "../styles/Time.module.css";
import Button from "./Button.jsx";
import Timelist from "./Timelist.js";

const initial = {
  name: "",
  date: "",
  description: "",
  status: "List",
};

function Timeform() {
  const [timeline, setTimeline] = useState(initial);
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, date, description, status } = timeline;

  const PopLoad = () => {
    return (
      <div className={styles.popUp}>
        <div className={styles.popupContent}>
          <div className={styles.ldsroller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  };

  const PopModal = () => {
    const router = useRouter();
    setTimeline(initial);
    return (
      <div className={styles.popUp}>
        <div className={styles.popupContent}>
          <span>Timeline Added</span>
          <Button
            onClick={() => {
              setPopup(false);
              Timelist.forceUpdate();
              router.push("/");
            }}
          >
            Ok
          </Button>
        </div>
      </div>
    );
  };

  function Loading() {
    if (popup) {
      return loading ? <PopLoad /> : <PopModal />;
    } else {
      return <div></div>;
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    async function insertData(data) {
      await supabase.from("timeline").insert({
        name: data.name,
        date: data.date,
        description: data.description,
        status: data.status,
      });
    }
    const lists = {
      name,
      date,
      description,
      status,
    };
    setLoading(true);
    setPopup(true);
    insertData(lists).then(setTimeout(function () {
        setLoading(false);
      }, 25));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setTimeline((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };
  return (
    <div>
      <Header />
      <form className={styles.timeform} onSubmit={handleOnSubmit}>
        <h1>Add Timeline</h1>
        <input
          type="date"
          name="date"
          value={timeline.date}
          onChange={handleInputChange}
          required
        ></input>
        <input
          type="text"
          name="name"
          value={timeline.name}
          placeholder="Enter name of the activity"
          onChange={handleInputChange}
          required
        ></input>
        <input
          type="text"
          name="description"
          value={timeline.description}
          placeholder="Enter description of the activity"
          onChange={handleInputChange}
          required
        ></input>
        <select
          name="status"
          value={timeline.status}
          onChange={handleInputChange}
        >
          <option value="List">List</option>
          <option value="In progress">In Progress</option>
          <option value="Done">Done</option>
          <option value="Canceled">Canceled</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <Loading />
    </div>
  );
}

export default Timeform;
