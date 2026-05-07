import { client } from "../lib/sanity";

const query = `*[_type == "statementOfFaith"][0]{
  statements
}`;
const statementsOfFaith = await client.fetch(query);

export default function StatementOfFaith() {
  return (
    <>
      <section className="py-24 px-4 md:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900">
              Our Statement of Faith
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {statementsOfFaith.statements.map((statement: string, index: number) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5">•</span>
                <p className="text-slate-700 text-m leading-relaxed">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
