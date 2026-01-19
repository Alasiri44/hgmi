import PageBanner from '../components/pagesBanner';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import EventCardList from '../features/EventCardList';

export default function Events() {
    // Mock data for events
    const eventData = [
        {
            title: "Sunday Worship Service",
            subheading: "Weekly Gathering",
            description: "Join us for a powerful time of worship, prayer, and a life-changing word from God. We have two sessions to accommodate everyone in our community.",
            image: "https://images.unsplash.com/photo-1510563393941-f29666985c92?auto=format&fit=crop&q=80&w=1000",
            date: "Every Sunday",
            time: "9:00 AM & 11:00 AM",
            location: "Main Sanctuary",
            buttonText: "Join Online"
        },
        {
            title: "Mid-Week Bible Study",
            subheading: "Deepening the Word",
            description: "A mid-week recharge where we dive deeper into the scriptures. This is an interactive session designed to equip you for daily Christian living.",
            image: "https://images.unsplash.com/photo-1504052434139-a8c5d63b172d?auto=format&fit=crop&q=80&w=1000",
            date: "Every Wednesday",
            time: "7:00 PM",
            location: "Fellowship Hall",
            buttonText: "View Series"
        },
        {
            title: "Global Prayer Night",
            subheading: "Intercession & Power",
            description: "Coming together as a global family to stand in the gap for our nations, our families, and our church. Expect a night of breakthrough and miracles.",
            image: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=1000",
            date: "Last Friday of Month",
            time: "9:00 PM - Midnight",
            location: "Online & On-site",
            buttonText: "Register"
        }
    ];

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