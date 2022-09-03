import { useState, useEffect, Fragment } from 'react'
import { useRouter } from "next/router"
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/pro-solid-svg-icons'
import { faCircleXmark } from "@fortawesome/pro-duotone-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false
import Search from "./search";

export default function SearchModal() {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      closeModal()
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button className="text-slate-50 text-xl" onClick={openModal}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
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

                <Dialog.Panel className="w-full max-w-lg transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="font-bold text-2xl mb-6">Search NFTs</Dialog.Title>
                  <Dialog.Description className="relative" as="div">
                    <Search classnames="" hitStyles="h-96 overflow-scroll absolute bg-white pt-2 px-1.5 pb-3 right-0 left-0 drop-shadow top-[44px]" />
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