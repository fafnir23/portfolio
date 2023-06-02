"use client"

import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import Modal from "../Modal";
import { Onlinejobsph } from './icon';

const Contact = () => {

    const submitRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    useEffect( () => {
        if(localStorage.getItem("sent")) {
            setSent(true);
            submitRef.current.disabled = true;
        }

    }, [])

    const onChange = e => {
        setFormData( data => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        } )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e)

        fetch("/api/mail", {
            body: JSON.stringify(formData),
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then( data => data.json() )
        .then( res => {
            if (res.success) {
                setOpen(true)
            }
        })
        .catch(err => console.error(err))
        .finally( () => {
            localStorage.setItem("sent", true);
            setSent(true);
            submitRef.current.disabled = true
        } )
    }

    return (
        <>
            <div id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between transition-all duration-300">
                <div className="">
                    <h1 className="text-4xl font-bold" >Want to hire me?</h1>
                    <p className="mt-2 text-slate-200">Let's connect and explore new possibilities together!</p>

                    <div className="grid gap-5 mt-10 w-1/2">
                        <a className="flex gap-3 items-center hover:ring-2 rounded-full opacity-80 hover:opacity-100 transition duration-300 font-semibold fill-white hover:fill-blue-500 hover:text-blue-500" href="https://www.linkedin.com/in/agustin-agapito-a30bbb260" target="_blank" >
                            <svg className="w-[35px]  rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            LinkedIn
                        </a>
                    
                        <a className="flex gap-3 items-center hover:ring-2 ring-slate-600 rounded-full opacity-80 hover:opacity-100 transition duration-300 font-semibold" href="https://github.com/senhai-kun" target="_blank" >
                            <svg className="w-[35px] fill-white transition duration-300 ease-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                            </svg>
                            Github
                        </a>
                        <a className="flex gap-3 fill-white  hover:ring-2 rounded-full hover:fill-sky-300 hover:text-sky-300 items-center opacity-80 hover:opacity-100 transition duration-300 font-semibold" href="https://www.onlinejobs.ph/jobseekers/info/1856766" target="_blank" >
                            <Onlinejobsph />
                            OnlinejobsPH
                        </a>
                    </div>
                
                </div>
                <form onSubmit={onSubmit} method="POST" className="grid gap-5 px-4" >
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={onChange} type="text" name="name" id="floating_name" className="block py-2.5 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-base text-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Your Name
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={onChange} type="email" name="email" id="floating_email" className="block py-2.5 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-base text-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Your Email
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <textarea onChange={onChange} type="text" name="message" id="floating_message" className="block py-3 mt-2 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_message" className="peer-focus:font-medium absolute text-base text-semibold text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-200 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Your Message
                        </label>
                    </div>
                    
                    <div>
                        <button ref={submitRef} type="submit" className="relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-white rounded-lg hover:bg-white group">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                                { sent ? "Already Sent!" : "Send" }
                            </span>
                        </button>
                    </div>
                </form>
            </div>

            <Modal open={open} setOpen={setOpen} />
        </>
    )
}

export default Contact;