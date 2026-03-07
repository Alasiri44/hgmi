import PageBanner from '../components/pagesBanner';
import EventCardList from '../features/EventCardList';

export default function Events() {

    return (
        <div className="pt-20 bg-[#FDF9F0] min-h-screen font-sans">
            <PageBanner 
                title="Upcoming Events"
                subheading="Stay Connected"
                paragraph="Join us for our upcoming services and special events. Whether online or in-person, there is always a place for you at Higher Grounds."
            />

            < EventCardList/>
        </div>
    );
}