import Image from "next/image";
import data from "./data";

const Skills = () => {
    return (
        <>
            <h1 id="technologies" className="text-4xl font-bold" >Skills | Technologies</h1>

            <div className="flex flex-wrap justify-evenly gap-10 grow mt-10" >
                {data.map( skill => (
                    <div  className="bg-gray-800 rounded-lg p-2 md:p-4 place-items-center grid grid-cols-1 place-content-between">
                        <Image className="rounded-md w-1/2 h-auto " src={skill.image} alt={skill.title} width={100} height={100}  />
                        <h3 className="text-lg font-semibold mt-1" >{skill.title}</h3>
                    </div>
                ) )}
               
            </div>
        </>
    )
}

export default Skills;