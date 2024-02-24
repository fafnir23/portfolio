import { Fragment } from "react";
import Card from "./Card";
import data from "./data";
import { Button } from "../Button";

const Project = () => {
    return (
        <>
            <h1 className="text-4xl font-bold">Projects</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 pt-10">
                {data.map((data, index) => (
                    <Fragment key={index}>
                        <Card
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            tags={data.tags}
                            preview={data.preview}
                            github={data.github}
                        />
                    </Fragment>
                ))}
                <div className="rounded-3xl ring-2  ring-slate-700 p-10 backdrop-filter backdrop-blur-[3px] flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-center">
                            Want to know more about my Projects?
                        </h1>

                        <div className="pt-5">
                            <h1 className="text-2xl font-semibold mb-5">
                                Reach me out
                            </h1>
                            <Button name="Hire me" link="#contact" self />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;
