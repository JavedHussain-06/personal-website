import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"


type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return <div>
    <header className="flex items-center justify-between">
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent sm:text-5xl  text-4xl drop-shadow font-extrabold">{project.name}</h1>
      <div className="hover:animate-bounce m-0 p0">
            <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="flex bg-gray-100  text-gray-500 font-bold  text-xs py-1 px-2 whitespace-nowrap hover:bg-black hover:text-white border-2 border-gray-500 rounded-lg  hover:scale-105 hover:border-blue-500 transition">
                  View Project
            </a>
          </div>
    </header>

    <div className="text-lg text-gray-700 mt-5">
      <PortableText value={project.content} />
    </div>

    <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
  </div>
} 