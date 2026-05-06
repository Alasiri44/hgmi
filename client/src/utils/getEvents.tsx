import { client } from "../lib/sanity";

export async function getEvents() {
  const query = `*[_type == "event"]{
    _id,
    title,
    subheading,
    description,
    date,
    time,
    location,
    buttonText,
    slug,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query);
}