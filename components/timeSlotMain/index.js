import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Button from "../Button";
import SlotForm from "../Form";
import { useSelector, useDispatch } from "react-redux";

export default function MyModal() {
  const dispatch = useDispatch();
  const slots = useSelector((state) => state.slot);
  let [isOpen, setIsOpen] = useState(false);
  const activeCls = "ring-1 ring-red-400 bg-red-500";
  let [currentModel, setCurrent] = useState();
  function closeModal() {
    setIsOpen(false);
  }
  function openModal(i) {
    setIsOpen(true);
    setCurrent(i);
  }

  const sortedSlots = slots.slice().sort((a, b) => {
    return parseInt(a.id) - parseInt(b.id);
  });
  return (
    <>
      <div className="grid gap-4 md:grid-cols-4 grid-cols-3">
        {sortedSlots.map((slot, i) => (
          <Button
            key={slot.id}
            openModal={() => openModal(slot.id)}
            activeCls={slot.person.f_name.length > 0 && activeCls}
            slot={slot}
          />
        ))}
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
                {slots.map((slot, i) => {
                  if (slot.id === currentModel) {
                    return (
                      <div className="mt-2" key={i}>
                        <SlotForm closeModal={closeModal} slot={slot} />
                      </div>
                    );
                  }
                })}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
