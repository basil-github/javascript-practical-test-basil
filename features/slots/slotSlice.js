import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";
import { fetchSlotsAPI } from "./slotAPI";
const initialState = data;

export const slotSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    getTimeSlots: (state, { payload }) => {
      return (state = payload);
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
