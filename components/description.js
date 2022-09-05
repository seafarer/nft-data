import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons'
import { faCircleXmark } from "@fortawesome/pro-duotone-svg-icons";

export default function Description({...item}) {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button className="text-slate-300 text-base" onClick={openModal}>
        <FontAwesomeIcon icon={faCircleInfo} />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >

                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="font-bold text-2xl mb-2">About {item.name}</Dialog.Title>
                  <Dialog.Description className="collection-description text-slate-600" as="div">
                    <ReactMarkdown>
                      {item.description}
                    </ReactMarkdown>
                  </Dialog.Description>
                  <button className="absolute top-1 right-2 md:top-3 md:right-4 text-xl text-indigo-500" onClick={() => setIsOpen(false)}>
                    <div className="sr-only">Close</div>
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                </Dialog.Panel>

              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}