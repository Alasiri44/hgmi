import { Outlet } from "react-router-dom";
import PageBanner from "../components/pagesBanner";
import SermonNavBar from "../components/sermonNavBar";
// import SermonsList from "../features/sermonsList";

export default function Sermons() {
  return (
    <>
      <PageBanner
        title="Sermons & Media"
        subheading="Watch and Listen"
        paragraph="Catch up on past sermons, watch live services, and grow in your faith wherever you are."
      />
      <div>
        < SermonNavBar/>
        < Outlet/>
      </div>
    </>
  );
}
