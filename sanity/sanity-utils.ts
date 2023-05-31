import { project } from "@/types/project";
import { page } from "@/types/page";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";


export async function getProjects() : Promise<project[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'project']{
            _id,
            name,
            _createdAt,
            'slug': slug.current,
            'image' : image.asset->url,
            url,
            GitUrl,
            content,
            alt,
        }`
    )
}

export async function getProject(slug : string) : Promise<project> {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'project' && slug.current == $slug][0]{
            _id,
            name,
            _createdAt,
            'slug': slug.current,
            'image' : image.asset->url,
            url,
            content,
            alt,
        }`,
        {slug}
    )
}

export async function getPages() : Promise<Pages[]>{
    return createClient(clientConfig).fetch(
        groq`*[_type == 'page']{
            _id,
            _createdAt,
            title,
            'slug': slug.current
        }`
    )
}

export async function getPage(slug: string) : Promise<page>{
    return createClient(clientConfig).fetch(
    groq`*[_type == 'page' && slug.current == $slug][0]{
        _id,
        _createdAt,
        'slug': slug.current,
        content,
    }`,
    {slug}
    )

}