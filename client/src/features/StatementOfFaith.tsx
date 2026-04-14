
const statementsOfFaith = [
  "We believe Jesus Christ is the Son of God and that He was crucified, died, and was buried. On the third day, He arose from the dead, ascended on high, and sat at the right hand of God the Father.",
  "We believe in the unity of the Father, the Son, and the Holy Spirit in the Godhead.",
  "We believe in the sovereignty of God in creation, revelation, redemption, and final judgment.",
  "We believe in the divine inspiration and trustworthiness of the Holy Scriptures and its supreme authority on all matters of faith and conduct.",
  "We believe in man's universal sinfulness and guilt since the fall, rendering him subject to God's wrath and judgment.",
  "We believe in the redemption from the guilt, penalty, dominion, and pollution of sin solely through the sacrificial death (as our representative and substitute) of the Lord Jesus Christ, the incarnate Son of God.",
  "We believe in life after death, spent in heaven or hell, based on one's decision to believe in Christ as Lord and savior.",
  "We believe in the presence and power of the Holy Spirit in the work of regeneration.",
  "We believe in the indwelling and work of the Holy Spirit in every believer.",
  "We believe in the sinner's justification by God's grace through faith alone.",
  "We believe in the one holy universal church, which is the body of Christ, and to which all true believers belong.",
  "We believe in the bodily return of the Lord Jesus Christ.",
  "We believe in the unity of all true believers in Christ."
]

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
            {statementsOfFaith.map((statement, index) => (
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
