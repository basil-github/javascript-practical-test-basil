import React from "react";

function index({ openModal, activeCls, slot }) {
  return (
    <button
      type="button"
      onClick={openModal}
      className={
        activeCls +
        " px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      }
    >
      {slot.time}
    </button>
  );
}

export default index;
