import Card from "./Card";
import data from "./data";

const Project = () => {
   

    return (
        <>
            <h1 className="text-4xl font-bold">Projects</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 pt-10">
                {data.map((data, index) => (
                    <React.Fragment key={index}>
                        <Card
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            tags={data.tags}
                            preview={data.preview}
                            github={data.github}
                        />
                    </React.Fragment>
                ))}
            </section>
        </>
    );
};

export default Project;
