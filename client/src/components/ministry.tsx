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
        className="w-full h-auto lg:h-[450px] object-contain lg:object-cover lg:object-top rounded-xl sm:rounded-3xl shadow-none sm:shadow-xl"
  />

      <div className="absolute -bottom-6 right-8 bg-blue-600 text-white p-5 rounded-2xl shadow-lg border-4 border-[#FDF9F0]">
        <FaUsers size={24} />
      </div>
    </div>
  );
}
