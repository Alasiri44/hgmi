import { FaUsers } from "react-icons/fa";

type MinistryProps = {
  image: string;
  title: string;
};

export default function MinistryCard({ image, title }: MinistryProps) {
  return (
    <div className="w-full lg:w-1/2 relative group">
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
      />

      <div className="absolute -bottom-6 right-8 bg-blue-600 text-white p-5 rounded-2xl shadow-lg border-4 border-[#FDF9F0]">
        <FaUsers size={24} />
      </div>
    </div>
  );
}

