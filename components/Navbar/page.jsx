"use client"

import { useState } from "react";
import { Pivot as Hamburger } from 'hamburger-react'
import Mobile from "./Mobile";

const Navigation = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen( (prev) => !prev  );

    return (
        <header>
            <nav className="fixed top-0 w-full backdrop-filter backdrop-blur-lg pt-5 pb-3 z-50" >
                <div className="container mx-auto px-4 lg:px-10 xl:px-20 flex justify-between ">
                    <a href="#top" className="text-2xl font-bold text-gray-200">A. Agapito</a>
                    
                    <div className="grid grid-cols-3 gap-4 text-center hidden sm:block " > 
                        <a href="#project" className="text-gray-400 hover:text-white rounded-full px-3 py-2 text-sm font-medium transition duration-300 ease-out">Projects</a>
                        <a href="#technologies" className="text-gray-400 hover:text-white rounded-full px-3 py-2 text-sm font-medium transition duration-300 ease-out">Technologies</a>
                        <a href="#contact" className="text-gray-400 hover:text-white rounded-full px-3 py-2 text-sm font-medium transition duration-300 ease-out">Contact me</a>
                    </div>

                    <div className="visible sm:hidden ">
                        <Hamburger toggled={open} toggle={toggleMenu} />
                    </div>
                </div>
                
                <Mobile open={open} setOpen={setOpen} />
            </nav>

        </header>
    )
}

export default Navigation;