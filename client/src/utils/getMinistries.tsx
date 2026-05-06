import { client } from "../lib/sanity";

export async function getMinistries() {
  const query = `*[_type == "ministry"]{
    _id,
    title,
    subheading,
    description,
    tags,
    time,
    location,
    slug,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query);
}