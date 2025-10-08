import React from "react";
import Ralo from "../assets/Ralo.jpeg";
import Weddingplanner from "../assets/Weddingplanner.jpeg";
import Gymfit from "../assets/Gymfit.jpeg";
import Travelling from "../assets/Travelling.jpeg";
import Petgromming from "../assets/Petgromming.jpeg";
import Dairy from "../assets/Dairy.jpeg";
import Builder from "../assets/Builder.jpeg";
import Listingpage from "../assets/Listingpage.jpeg";
import Commercialproperty from "../assets/Commercialproperty.jpeg";

const projects = [
  {
    title: "Supreme Website",
    url: "https://supremewebsite.netlify.app/",
    img: Ralo,
    desc: "A modern landing page for a tech startup with responsive design and animations.",
  },
  {
    title: "Weddings Planner",
    url: "https://weddingsplanner.netlify.app/",
    img: Weddingplanner,
    desc: "A wedding planning service website with event details and RSVP form.",
  },
  {
    title: "Gym Fit",
    url: "https://gymfitwebsite.netlify.app/",
    img: Gymfit,
    desc: "A fitness center website showcasing classes, trainers, and membership options.",
  },
  {
    title: "Travelling Tour Agency",
    url: "https://travellingtouragency.netlify.app/",
    img: Travelling,
    desc: "A travel agency website featuring tour packages and booking functionality.",
  },
  {
    title: "Pet Grooming Website",
    url: "https://petgroomings.netlify.app/",
    img: Petgromming,
    desc: "A pet grooming service website with service listings and appointment booking.",
  },
  {
    title: "Dairy's Website",
    url: "https://dairyswebsite.netlify.app/",
    img: Dairy,
    desc: "A dairy products website with product catalog and online ordering features.",
  },
  {
    title: "Builder's Website",
    url: "https://endearing-travesseiro-d808de.netlify.app/",
    img: Builder,
    desc: "A construction company website showcasing projects and services offered.",
  },
  {
    title: "Property Listing Website",
    url: "https://hisarlisting.netlify.app/",
    img: Listingpage,
    desc: "A real estate listing website with property details and contact forms.",
  },
  {
    title: "Commercial Property Website",
    url: "https://hisarcommercialproject.netlify.app/",
    img: Commercialproperty,
    desc: "A commercial property website featuring listings and agent contact information.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frontend Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore some of the projects I've built and deployed using modern
            web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white  dark:bg-gray-700 p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-500 dark:border-gray-600 flex flex-col transform  group-hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.7)] dark:hover:shadow-[0_0_25px_8px_rgba(56,189,248,0.3)]"
            >
              <div className="w-full h-40 sm:h-52 overflow-hidden rounded-lg mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full  text-blue-500 object-contain"
                />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 font-bold dark:text-gray-300 mb-2">
                {project.desc}
              </p>
              <p className="text-blue-600 dark:text-blue-400 break-all text-sm">
                {project.url}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
