import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div className="mt-6"><h1 className="text-center bg-gradient-to-r from-orange-400 from-10% via-red-400 via-40% to-purple-600 to-70% bg-clip-text text-transparent sm:text-5xl  text-4xl drop-shadow font-extrabold">{page.title}</h1>
      <div className="text-lg text-gray-700 mt-10"><PortableText value={page.content} /></div>
    </div>
  )
}
 