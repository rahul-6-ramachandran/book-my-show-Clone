
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

export default function PaymentModal({isOpen, setIsOpen,price}) {

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const launchRazorPay = ()=>{
    let options = {
        key: "rzp_test_pHeTOylwTLS3BK",
        amount : price * 100,
        currency : "INR",
        name : "Book My Show Clone",
        description : "Movie Ticket Booking",
        Image : "https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/e-commerce-companies/bookmyshow-logo.png",
        handler: ()=>{
            setIsOpen(false)
            alert("Payment Done")
        },
        theme:{color: "#c4242d"}
    }
    const RazorPay = new window.Razorpay(options)
    RazorPay.open()
  }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Please Make a Payment 
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Please Click on the below button to make a Payment
                    </p>
                  </div>

                  <div className="mt-4 w-full">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent bg-btn-600 px-4 py-2 text-sm font-medium text-white hover:bg-btn-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-btn-500 focus-visible:ring-offset-2"
                      onClick={launchRazorPay}
                    >
                      Pay ₹{price}
                    </button>
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md  px-4 py-2 text-sm font-medium text-btn-300 hover:text-btn-600 mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-btn-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}


