import { HoverEffect } from "../../components/ui/Card-Hover";
import { motion } from "framer-motion"
export const projects = [

    {
        title: "Responsive design",
        description:
            "I design websites that adapt seamlessly to any device, providing an optimal viewing experience on desktops, tablets, and smartphones.",
    },
    {
        title: "Web design",
        description:
            "I create visually appealing and user-friendly designs that align with your brand, ensuring a captivating and intuitive experience for visitors.",
    },
    {
        title: "Web Development",
        description:
            "I build robust web applications with clean, efficient code, ensuring your site is secure, scalable, and performs flawlessly.",
    },
    // {
    //     title: "Frontend Development",
    //     description:
    //         "Specializing in frontend development using ReactJS, I craft dynamic and responsive user interfaces that enhance user experiences and drive engagement. With a focus on clean code and efficient design patterns, I bring your ideas to life with speed and precision, ensuring your web applications stand out in today's digital landscape.",
    //     link: "https://amazon.com",
    // },
    // {
    //     title: "Backend Development",
    //     description:
    //         "Expert in backend development using Node.js and Express.js, I build robust and scalable server-side solutions to power your web applications. With a focus on performance and security, I leverage the capabilities of Node.js and Express.js to deliver efficient APIs, authentication systems, and data management solutions, ensuring seamless functionality and reliability for your projects.",
    //     link: "https://microsoft.com",
    // },
    // {
    //     title: "Web Designing",
    //     description:
    //         "Crafting captivating digital experiences through innovative web design.I specialize in creating visually stunning websites that engage and inspire. Let's transform your online presence into a dynamic and impactful platform.",
    //     link: "https://stripe.com",
    // },
];

const Services = () => {
    return (

        <div className="text-white">
            <h1 className="text-5xl font-madimi text-center  my-10">My Services</h1>
            <motion.div
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </motion.div>
        </div>
    );
}

export default Services

