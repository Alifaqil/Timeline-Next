import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
export const TimeSlicer = createSlice({
  name: "time",
  initialState,
  reducers: {
    addData: (state, action) => {
      async () => {
        await supabase.from("timeline").insert({
          name: action.payload.name,
          date: action.payload.date,
          description: action.payload.description,
          status: action.payload.status,
        });
      };
      state.data = [...state.data, action.payload];
    },
    showData: (state) => {
      async () => {
        const { data, error } = await supabase
          .from("timeline")
          .select()
          .order("date", { ascending: true });
        state.data = [...state.data, data];
      };
    },
  },
});

// Action creators are generated for each case reducer function

export default TimeSlicer;
