import React, { useState } from "react";
import Header from "./Header.js";
import { supabase } from "../supabase-client";
import styles from "../styles/Time.module.css";

const initial = {
  name: "",
  date: "",
  description: "",
  status: "list",
};

function Timeform() {
  const [timeline, setTimeline] = useState(initial);

  const { name, date, description, status } = timeline;

  const handleOnSubmit = (event) => {
    async function insertData(data) {
      await supabase.from("timeline").insert({
        name: data.name,
        date: data.date,
        description: data.description,
        status: data.status,
      });
      alert("Timeline Added");
      setTimeline(initial);
    }
    const lists = {
      name,
      date,
      description,
      status,
    };
    insertData(lists);
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
    </div>
  );
}

export default Timeform;
