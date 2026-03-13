import { HeartHandshake, MapPin, Mail, Phone, Home, Briefcase, Church } from "lucide-react";
import PageBanner from "../components/pagesBanner";

export default function Register() {
  return (
    <div className="bg-[#F8F7F2] min-h-screen flex flex-col">
      
      {/* Page Banner at the top */}
      <PageBanner 
        title="Join the Family"
        subheading="Register with HGMI"
        paragraph="We are so glad you've decided to take this next step with us. Complete the registration form below to officially connect with our community, and our team will reach out to help you find your place."
      />

      {/* Main Form Container */}
      <div className="flex-grow py-16 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Left Side - Next Steps & Vision */}
          <div className="w-full md:w-4/12 bg-[#1E3A5F] p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#EFB839] rounded-full opacity-10 blur-3xl"></div>
            
            <div className="relative z-10 sticky top-12">
              <span className="text-[#EFB839] font-bold tracking-widest text-sm uppercase">What's Next?</span>
              <h2 className="text-4xl font-serif font-bold mt-4 mb-6 leading-tight">
                Your Journey Starts Here.
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                Once you submit your details, our pastoral and welcoming teams will review your information. We'll reach out to officially welcome you and guide you through our foundational classes and ministry placement.
              </p>
              
              <div className="space-y-6 mt-12 hidden md:block">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="bg-white/10 p-3 rounded-full text-[#EFB839]">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Connect with a mentor</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="bg-white/10 p-3 rounded-full text-[#EFB839]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-sm">Join a local cell group</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - The Form */}
          <div className="w-full md:w-8/12 p-8 md:p-12 lg:p-16 bg-white overflow-y-auto max-h-[90vh]">
            <h3 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-2">Member Registration</h3>
            <p className="text-slate-500 mb-8">Please fill in your details below so we can get to know you better.</p>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              
              {/* SECTION 1: Personal Details */}
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-2">
                  <h4 className="text-lg font-bold text-[#1E3A5F] flex items-center gap-2">
                    <HeartHandshake className="w-5 h-5 text-[#EFB839]" /> Personal Details
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Gender</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600" required>
                      <option value="">Select...</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Date of Birth</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Marital Status</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600">
                      <option value="">Select...</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Occupation / Profession</label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input type="text" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50" placeholder="e.g. Teacher, Software Engineer, Student" />
                  </div>
                </div>
              </div>

              {/* SECTION 2: Contact Information */}
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-2">
                  <h4 className="text-lg font-bold text-[#1E3A5F] flex items-center gap-2">
                    <Mail className="w-5 h-5 text-[#EFB839]" /> Contact Information
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input type="email" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <input type="tel" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50" placeholder="+254 700 000000" required />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600">Area of Residence</label>
                  <div className="relative">
                    <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input type="text" className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50" placeholder="e.g. Juja, Kiambu County" required />
                  </div>
                </div>
              </div>

              {/* SECTION 3: Church Background */}
              <div className="space-y-6">
                <div className="border-b border-slate-100 pb-2">
                  <h4 className="text-lg font-bold text-[#1E3A5F] flex items-center gap-2">
                    <Church className="w-5 h-5 text-[#EFB839]" /> Church Background & Interests
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Spiritual Background</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600" required>
                      <option value="">Select status...</option>
                      <option value="new_believer">I am a new believer</option>
                      <option value="transferring">Transferring from another church</option>
                      <option value="visiting">Just visiting/exploring</option>
                      <option value="rededicating">Rededicating my life</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Previous Church (If applicable)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50" placeholder="Name of previous church" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">How did you hear about us?</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600">
                      <option value="">Select...</option>
                      <option value="friend">Invited by a friend/family</option>
                      <option value="social_media">Social Media (Facebook/Instagram)</option>
                      <option value="website">Church Website</option>
                      <option value="walk_in">Walk-in / Driving by</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-600">Ministry Interest</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600">
                      <option value="">Not sure yet / General Membership</option>
                      <option value="choir">Worship & Arts Ministry</option>
                      <option value="media">Media & Tech Team</option>
                      <option value="ushers">Ushering & Protocol</option>
                      <option value="children">Children's Ministry</option>
                      <option value="youth">Youth Ministry</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="w-full bg-[#EFB839] hover:bg-[#d9a32c] text-[#1E3A5F] py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#EFB839]/30 mt-8 text-lg">
                Complete Registration
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}