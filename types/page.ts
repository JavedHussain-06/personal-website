import { PortableTextBlock } from "sanity"

export type page = {
    _id : string,
    _createdAt : Date,
    title : string,
    content : PortableTextBlock,
    slug : string
}