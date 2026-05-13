import PageBanner from "../components/pagesBanner";
import MembershipForm from "../components/membershipForm";
import { HeartHandshake, MapPin } from "lucide-react";

export default function Register() {
  return (
    <div className="bg-[#F8F7F2] min-h-screen flex flex-col">
      

      <PageBanner 
        title="Join the Family"
        subheading="Register with HGMI"
        paragraph="We are so glad you've decided to take this next step with us. Complete the registration form below to officially connect with our community, and our team will reach out to help you find your place."
      />

      {/* Main Form Container */}
      <div className="flex-grow py-16 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          

          <div className="w-full md:w-4/12 bg-emerald-700 p-12 text-black flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-emerald-600 rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10 sticky top-12">
              <span className="text-[#EFB839] font-bold tracking-widest text-sm uppercase">What's Next?</span>
              <h2 className="text-4xl font-serif font-bold mt-4 mb-6 leading-tight">
                Your Journey Starts Here.
              </h2>
              <p className="text-black leading-relaxed mb-8">
                Once you submit your details, our pastoral and welcoming teams will review your information. We'll reach out to officially welcome you and guide you through our foundation and ministry placement.
              </p>
              
              <div className="space-y-6 mt-12 hidden md:block">
                <div className="flex items-center gap-4 text-black-300">
                  <div className="bg-white/10 p-3 rounded-full text-[#EFB839]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Connect with a mentor</span>
                </div>
                <div className="flex items-center gap-4 text-black-300">
                  <div className="bg-white/10 p-3 rounded-full text-[#EFB839]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Join a local cell group</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - The Form */}
          < MembershipForm/>

        </div>
      </div>
    </div>
  );
}