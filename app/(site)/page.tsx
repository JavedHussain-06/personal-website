import { getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, fa2 } from '@fortawesome/free-solid-svg-icons';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className="p-5 flex justify-center items-center flex-col">
      <h1 className="text-7xl font-extrabold">Hello I'm <Link href="https://github.com/JavedHussain-06" rel="noopener noreferrer" className="bg-gradient-to-r hover:bg-gradient-to-l from-orange-400 via-red-500 to-purple-600  bg-clip-text text-transparent transition duration-250 ease-out ">Javed</Link>!</h1>


      <p className="mt-3 text-xl text-gray-600">Hello everyone! check out my projects!</p>
      <h2 className="text-3xl font-bold mt-20 mb-4 text-gray-800 border-b-2">My Projects</h2>
      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">{projects.map((project) => (<div className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition" key={project._id}>
        <Link href={`/projects/${project.slug}`} >
          {project.image && (
            <Image
              src={project.image}
              alt={project.alt}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
            )}
            </Link>
        <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-center p-1 md:p-1 md:font-bold flex justify-between">
          <div>
            <Link href={`/projects/${project.slug}`} > {project.name}</Link>
          </div>
          <div className="hover:animate-bounce transition">
            <a href={project.GitUrl} title="View Project" target="_blank" rel="noopener noreferrer" className="flex bg-gray-100  text-gray-500 font-bold  text-xs py-1 px-2 whitespace-nowrap transition hover:bg-black hover:text-white border-2 border-gray-500 rounded-lg  hover:scale-105 hover:border-blue-500 ">
                  Source Code
                  <FontAwesomeIcon icon={faCodeBranch} className="animate-bounce h-2 mt-1 pl-1" />
            </a>
          </div>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
}
