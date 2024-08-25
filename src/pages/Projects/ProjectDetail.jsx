import { useParams } from 'react-router-dom'
import projects from "../../data/Projects.json"


const ProjectDetail = () => {
    const param = useParams();

    return (
        <div className="">
            {projects.map((project, i) => {
                return (
                    (param.id === project.id) ? (
                        <div className="min-h-screen flex flex-col justify-center items-center ">
                            <div key={i} className=" w-[80%]">
                                <div className="py-4">
                                    <h1 className="font-bold text-teal-600 md:text-3xl py-3 text-3xl">
                                        Project:{" "}
                                        <span
                                            className="font-semibold text-slate-200 md:text-3xl text-2xl
                  "
                                        >
                                            {project.title}
                                        </span>
                                    </h1>
                                    <h1 className="font-bold text-teal-600 md:text-2xl text-xl pb-3">
                                        Tools:{" "}
                                        <span className="font-normal text-slate-200 md:text-[18px] text-sm">
                                            {project.tools}
                                        </span>
                                    </h1>
                                    <h1 className="font-bold text-teal-600 md:text-2xl text-xl">
                                        Project Description:{" "}
                                        <span className="font-normal text-slate-200 md:text-[18px] text-sm">
                                            {project.description}
                                        </span>
                                    </h1>
                                </div>

                                <div className="image-gallery">
                                    {/* Map over the fetched images and display them */}
                                    {project.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="border border-teal-600 my-5 overflow-hidden p-2"
                                        >
                                            <img
                                                src={image}
                                                className="w-full h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : ""
                )
            })}
        </div>


    );
}
export default ProjectDetail