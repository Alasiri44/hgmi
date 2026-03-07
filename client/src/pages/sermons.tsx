import PageBanner from "../components/pagesBanner";
import SermonsList from "../features/sermonsList";

export default function Sermons() {
  return (
    <>
      <PageBanner
        title="Sermons & Media"
        subheading="Watch and Listen"
        paragraph="Catch up on past sermons, watch live services, and grow in your faith wherever you are."
      />
      <div>
        <SermonsList />
      </div>
    </>
  );
}
