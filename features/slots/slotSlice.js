import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../data.json";
import { fetchSlotsAPI } from "./slotAPI";
const initialState = {
  entities: [],
  loading: false,
};

export const getSlotsThunk = createAsyncThunk(
  "slots/getSlotsThunk",
  async (thunkAPI) => {
    const res = await fetch("https://vrproperty.herokuapp.com/time-slots").then(
      (data) => data.json()
    );
    return res;
  }
);

export const slotSlice = createSlice({
  name: "slot",
  initialState,
  reducers: {
    getTimeSlots: (state, { payload }) => {
      return (state = payload);
    },
    addTimeSlot: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    deleteTimeSlot: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
  },
  extraReducers: {
    [getSlotsThunk.pending]: (state) => {
      state.loading = true;
    },
    [getSlotsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getSlotsThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { getTimeSlots, addTimeSlot, deleteTimeSlot } = slotSlice.actions;

export default slotSlice.reducer;
