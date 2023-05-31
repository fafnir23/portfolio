import Image from "next/image";
import { Button, OutlineButton } from "../Button";

const Card = ({ image, title, description, tags, preview, github }) => {
    return (
        <div className="grid grid-cols-1 place-content-between rounded-3xl ring-2  ring-slate-700 p-10 backdrop-filter backdrop-blur-[3px]">
            <div className="" >
                <Image 
                    src={image} 
                    priority
                    alt="shv2" 
                    width={700}
                    height={475}
                    className="w-auto h-auto"
                />
            </div>

            <div className="pt-5">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="text-slate-300 pt-2 text-xs md:text-sm">{description}</p>
                <div className="flex flex-wrap gap-2 mt-3" >
                    {tags?.map( (tag, index) => <span key={index} className="text-sm" >#{tag}</span> )}
                </div>

            </div>

            <div className="flex justify-between gap-2 pt-5 ">
                {preview && <Button name="Preview" link={preview} />}
                <OutlineButton name="Github" link={github} />
            </div>
        </div>
    )
}


export default Card;