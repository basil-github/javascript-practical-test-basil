import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";

const initialState = data;

export const slotSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    getTimeSlots: (state) => {
      state.value = state;
    },
    addTimeSlot: (state, { payload }) => {
      return (state = payload);
    },
    deleteTimeSlot: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const { getTimeSlots, addTimeSlot, deleteTimeSlot } = slotSlice.actions;

export default slotSlice.reducer;
