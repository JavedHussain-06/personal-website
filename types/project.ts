import { PortableTextBlock } from "sanity";

export type project = {
    _id : string;
    _createdAt : Date;
    name : string ;
    slug : string;
    image : string;
    url : string;
    GitUrl : string ;
    alt : string;
    content : PortableTextBlock[];
}