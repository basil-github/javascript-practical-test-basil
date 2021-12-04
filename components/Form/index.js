import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { putSlotsAPI } from "../../features/slots/slotAPI";
import {
  getTimeSlots,
  addTimeSlot,
  deleteTimeSlot,
} from "../../features/slots/slotSlice";
function Index({ closeModal, slot }) {
  const dispatch = useDispatch();
  dispatch(getTimeSlots());

  const slots = useSelector((state) => state.slot);
  let newSlots = [];
  let filtredSlots = () => {
    let data = slots.filter((slt) => {
      if (slot.id != slt.id) {
        newSlots.push(slt);
      }
    });
    return data;
  };

  const onSubmit = async (data, e) => {
    await filtredSlots();
    let newData = {
      id: slot.id,
      time: slot.time,
      person: data,
    };
    newSlots.push(newData);
    await dispatch(addTimeSlot(newSlots));
    let putData = {
      slots: newSlots,
    };
    closeModal();
    await putSlotsAPI(putData);
  };
  const delSlot = async (data, e) => {
    await filtredSlots();
    let newData = {
      id: slot.id,
      time: slot.time,
      person: {
        f_name: "",
        l_name: "",
        m_number: "",
      },
    };
    newSlots.push(newData);
    await dispatch(deleteTimeSlot(newSlots));
    let putData = {
      slots: newSlots,
    };
    closeModal();
    await putSlotsAPI(putData);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: slot.person,
  });
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          type="text"
          placeholder="First name"
          className={
            (errors.f_name && "border-red-300") +
            " my-4  w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          }
          {...register("f_name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          className={
            (errors.l_name && "border-red-300") +
            " w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          }
          {...register("l_name", { required: true, maxLength: 100 })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          className={
            (errors.m_number && "border-red-300") +
            " my-4  w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          }
          {...register("m_number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
        <div className="save_close">
          <input
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            type="submit"
            value={slot?.person?.f_name?.length > 0 ? "Edit" : "Save"}
          />
          {slot?.person?.f_name?.length > 0 && (
            <button
              type="button"
              className="ml-4  inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-red-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={() => delSlot()}
            >
              Delete
            </button>
          )}

          <button
            type="button"
            className="ml-4  inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-green-300 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default Index;
