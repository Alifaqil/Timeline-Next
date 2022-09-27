import { createContext, useState, useReducer, useEffect } from "react";
import { supabase } from "../supabase-client";

export const TimeContext = createContext(null);
export const TimeDispatch = createContext(null);

export default function TimeProvider({ children }) {
  const [data, dispatch] = useReducer(timeReducer, []);

  async function getData() {
    const { data, error } = await supabase.from("timeline").select();

    data.map((d) => {
      dispatch({
        type: "show",
        data: d,
      });
    });
  }

  useEffect((event) => {
    getData();
  }, []);

  return (
    <TimeContext.Provider value={data}>
      <TimeDispatch.Provider value={dispatch}>{children}</TimeDispatch.Provider>
    </TimeContext.Provider>
  );
}

function timeReducer(timeline, action) {
  async function insertData(data) {
    await supabase.from("timeline").insert({
      name: data.name,
      date: data.date,
      description: data.description,
      status: data.status,
    });
  }
  switch (action.type) {
    case "add": {
      console.log(action.data);
      (event) => {
        event.preventDefault();
        insertData(action.data);
      };
    }
    case "show": {
      return [...timeline, action.data];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
