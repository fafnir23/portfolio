import { Button } from "./Button";
import Image from "next/image";

const Introduction = () => {

    return (
        <div className="flex flex-wrap justify-between gap-10 mt-60">
            <div className="w-full md:w-2/3" >
                <div className="">
                    <h1 className="pt-4 pb-4 bg-clip-text text-transparent text-4xl sm:text-5xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" >Hello, I'm Agustin Agapito,</h1>
                    <h1 className="text-3xl sm:text-5xl" >Web Developer</h1>

                    <p className="text-sm sm:text-base text-gray-300 mt-5" >As a web developer, I have a passion for creating visually appealing and user-friendly websites that meet the needs of my clients. With expertise in various programming languages and a commitment to staying up-to-date with the latest industry trends, I strive to deliver high-quality results that exceed expectations.</p>
                </div>
                <div className="mt-10" >
                    <Button name="Hire me" link="#contact" self />
                </div>
            </div>
            {/* <div className="">
                <Image 
                    src="/electron.png" 
                    alt="pic" 
                    priority 
                    width={200} 
                    height={100} 
                    className="w-auto h-auto border-2 border-cyan-500 rounded-full" 
                />
            </div> */}
        </div>
    )
}

export default Introduction;