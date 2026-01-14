import PageBanner from "../components/pagesBanner";
import MinistryCardList from "../features/MinistryCardList";

export default function Ministries() {
  return (
    <div className="pt-20 bg-[#FDF9F0] min-h-screen font-sans">
      <PageBanner
        title="Our Ministries"
        subheading="Serving Together"
        paragraph="Discover a place to belong and serve. Our ministries are designed to help you grow in your faith and use your gifts for God's glory."
      />
      < MinistryCardList/>
    </div>
  );
}
