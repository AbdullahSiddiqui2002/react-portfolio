import projects from '../../data/Projects.json';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, Meteors } from '../../components';
const Project = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const sortedProjects = projects.sort((a, b) => b.id - a.id);

  const filteredProjects =
    selectedFilter === 'all'
      ? sortedProjects
      : sortedProjects.filter((project) => project.stack === selectedFilter);

  const filterOptions = ['all', 'Static Websites', 'Dynamic Websites'];

  return (
    <motion.div
      whileInView={{ y: [10, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="hidden sm:block">
        <Meteors />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="sm:text-4xl text-2xl text-center font-bold my-5 text-slate-200 font-madimi">
          My Creative <span className="text-teal-500">Projects</span> Section
        </h1>

        <div className="flex flex-wrap sm:gap-3 gap-2 justify-center items-center my-6">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedFilter(option)}
              className={`mr-2 px-4 py-2 uppercase text-md md:text-lg rounded-full border border-teal-500 ${
                selectedFilter === option ? 'bg-teal-600 text-white' : 'text-teal-600'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="md:w-[600px] w-[350px] h-[1px] bg-teal-600 mb-9"></div>
      </div>
      <div className="flex flex-wrap gap-x-9 justify-center">
        {filteredProjects.map((project) => (
          <motion.div
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 1, type: 'tween' }}
            key={project.id}
          >
            <Card
              imgUrl={project.imgUrl}
              title={project.title}
              id={project.id}
              liveLink={project.liveLink}
              GithubLink={project.gitHubLink}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
