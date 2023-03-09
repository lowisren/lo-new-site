import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import { Post } from "../../../../typings";



type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 60; //revalidation every 60 seconds

export async function generateStaticParams() {
    const query = groq`
    *[_type == "post"]{
        slug
    }`;
    
    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug,

    }));
}

async function Post({ params: { slug } }: Props) {
    const query = groq`
    *[_type == "post" && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `
    const post = await client.fetch(query, { slug });
    return (
    <article className="px-10 pb-28">
        <section className="space-y-2 border-gray-800 text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                    <Image
                        className="object-cover object-center mx-auto"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill                   
                    />  
                    </div>
                    <section className="p-5 bg-gray-800 w-full">
                        <div className="flex flex-col md:flex-row justify-between gap-y-5">
                            <div>
                                <h1 className="text-4xl font-extrabold">{post.title}
                                </h1>
                                <p>
                                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p> 
                            </div>
                            <div className="flex items-center space-x-2">
                                <Image
                                    className="rounded-full"
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    width={40}
                                    height={40}
                                />
                                <div className="w-64">
                                    <h2 className="text-lg font-bold">{post.author.name}</h2>
                                    <div>{/* TODO: Author Bio **/}</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="italic pt-10">{post.summary}</h3>
                            <div className="flex items-center justify-end mt-auto space-x-2">
                            {post.categories.map((category) => (
                                <h4 key={category._id} className="bg-gray-400 text-black px-3 py-1 rounded-full text-sm font-semibold mt-4">
                                    {category.title}
                                </h4>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            </section>
            
            <PortableText value={post.body} components={RichTextComponents} />
    </article>
    );
}

export default Post