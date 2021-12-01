import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Button from "../Button";
import SlotForm from "../Form";
export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  const activeCls = "ring-1 ring-red-400 bg-red-500";

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="grid gap-4 md:grid-cols-4 grid-cols-3">
        <Button openModal={openModal} activeCls={activeCls} />
        <Button openModal={openModal} activeCls={""} />
        <Button openModal={openModal} activeCls={""} />
        <Button openModal={openModal} activeCls={""} />
        <Button openModal={openModal} activeCls={""} />
        <Button openModal={openModal} activeCls={""} />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Slot Details
                </Dialog.Title>

                <div className="mt-2">
                  <SlotForm />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
