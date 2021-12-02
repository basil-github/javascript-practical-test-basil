import { configureStore } from "@reduxjs/toolkit";
import slotReducer from "../features/slots/slotSlice";

export default configureStore({
  reducer: {
    slot: slotReducer,
  },
});
