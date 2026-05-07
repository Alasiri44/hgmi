import Leader from "../components/leader";
import { client } from "../lib/sanity";

const leaders = await client.fetch(`
  *[_type == "leader"] | order(order asc) {
    _id,
    name,
    position,
    description,
    "image": image.asset->url
  }
`);

export default function Leaders() {
  return (
    <>
      (
      <section className="bg-slate-50 py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900">
              Our Leadership
            </h2>
            <p className="text-slate-500 mt-4">
              Led by the Spirit, serving the People
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader: any) => (
              <Leader key={leader._id} leader={leader} />
            ))}
          </div>
        </div>
      </section>
      )
    </>
  );
}
