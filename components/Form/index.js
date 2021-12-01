import React from "react";
import { useForm } from "react-hook-form";

function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
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
            value="Save"
          />
          <button
            type="button"
            className="ml-4  inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-green-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            // onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default Index;
