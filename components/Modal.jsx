"use client"

const Modal = ({ open, setOpen }) => {   

    const close = () => setOpen(false)

    return (
        <div className={`fixed ${!open && "hidden"} inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}>
            <div
                className="flex justify-center align-center w-full items-center h-[100vh] p-3"
            >
                <div className="mt-3 text-center ring-2  ring-slate-700 w-96 shadow-lg rounded-md bg-gray-800 p-5 ">
                    <div
                        className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100"
                    >
                        <svg
                            className="h-6 w-6 text-sky-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            ></path>
                        </svg>
                    </div>
                    <h3 className="text-lg leading-6 font-medium text-white-900 mt-2">Sent!</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-300">
                            Your email has been sent!
                        </p>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            id="ok-btn"
                            className="px-4 py-2 bg-sky-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
                            onClick={close}
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal;