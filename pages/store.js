import { configureStore } from "@reduxjs/toolkit";
import TimeSlicer from "./TimeSlicer";

export const store = configureStore({
  reducer: {
    time: TimeSlicer.reducer,
  },
});
