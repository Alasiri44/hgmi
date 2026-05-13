import {
  Briefcase,
  Church,
  HeartHandshake,
  Home,
  Mail,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { client } from "../lib/sanity";
import Alert from "./alert";

const initialFormState = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  maritalStatus: "",
  occupation: "",
  email: "",
  phoneNumber: "",
  residence: "",
  spiritualBackground: "",
  previousChurch: "None",
  heardAboutUs: "",
  ministryInterest: "general",
};

function toTitleCase(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function validateForm(data: typeof initialFormState): string | null {
  if (!data.firstName.trim()) return "First name is required.";
  if (!data.lastName.trim()) return "Last name is required.";
  if (!data.gender) return "Please select a gender.";
  if (!data.dateOfBirth) return "Date of birth is required.";
  if (!data.phoneNumber.trim()) return "Phone number is required.";
  if (!/^\d{10}$/.test(data.phoneNumber.trim())) return "Invalid phone number.";
  if (!data.residence.trim()) return "Area of residence is required.";
  if (!data.spiritualBackground)
    return "Please select your spiritual background.";
  return null;
}

export default function MembershipForm() {
  const [alert, setAlert] = useState<{
    message: string;
    error?: boolean;
  } | null>(null);
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const sanitized = {
      ...formData,
      firstName: toTitleCase(formData.firstName),
      middleName: toTitleCase(formData.middleName),
      lastName: toTitleCase(formData.lastName),
      occupation: toTitleCase(formData.occupation),
      residence: toTitleCase(formData.residence),
      previousChurch: formData.previousChurch.trim() || "None",
      email: formData.email.trim().toLowerCase(),
      phoneNumber: formData.phoneNumber.replace(/\D/g, ""), // strip any non-digits
    };

    const validationError = validateForm(sanitized);
    if (validationError) {
      setAlert({ message: validationError, error: true });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
      return;
    }

    try {
      const existingMember = await client.fetch(
        `*[_type == "member" && email == $email][0]`,
        { email: sanitized.email},
      );

      if (existingMember) {
        setAlert({
          message: "This email is already registered!",
          error: true,
        });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
        return;
      }

      const RESERVED_MEMBERS: Record<string, string> = {
        "norbert|rakiro": "HGA001",
        "laureen|rakiro": "HGA002",
      };

      const nameKey = `${sanitized.firstName}|${sanitized.lastName}`
        .toLowerCase()
        .trim();
      const reserved = RESERVED_MEMBERS[nameKey];

      let nextMemberNumber = "HGA003";
      if (reserved) {
        nextMemberNumber = reserved;
      } else {
        const members = await client.fetch(
          `*[_type == "member" && defined(memberNumber)] | order(memberNumber desc) [0].memberNumber`,
        );

        if (members) {
          const lastNumber = parseInt(members.replace("HGA", ""), 10);
          const nextNumber = lastNumber + 1;
          nextMemberNumber = `HGA${String(nextNumber).padStart(3, "0")}`;
        }
      }
      await client.create({
        _type: "member",
        ...sanitized,
        memberNumber: nextMemberNumber,
        registrationDate: new Date().toISOString(),
      });

      setAlert({ message: "Registration Successful!" });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
      setFormData(initialFormState);
    } catch (error) {
      console.error(error);
      setAlert({ message: "Something went wrong", error: true });
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };
  return (
    <>
      <div className="w-full md:w-8/12 p-8 md:p-12 lg:p-16 bg-white overflow-y-auto max-h-[90vh]">
        {alert && (
          <Alert key={Date.now()} message={alert.message} error={alert.error} />
        )}
        <h3 className="text-3xl font-serif font-bold text-[#1E3A5F] mb-2">
          Member Registration
        </h3>
        <p className="text-slate-500 mb-8">
          Please fill in your details below so we can get to know you better.
        </p>

        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* SECTION 1: Personal Details */}
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <h4 className="text-lg font-bold text-[#1E3A5F] flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#EFB839]" /> Personal
                Details
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      firstName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50"
                  placeholder=""
                  value={formData.middleName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      middleName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lastName: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  Gender
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gender: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600"
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dateOfBirth: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  Marital Status
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600"
                  value={formData.maritalStatus}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      maritalStatus: e.target.value,
                    })
                  }
                >
                  <option value="">Select...</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">
                Occupation / Profession
              </label>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50"
                  value={formData.occupation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      occupation: e.target.value,
                    })
                  }
                  placeholder="e.g. Teacher, Software Engineer, Student"
                />
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
                <label className="text-sm font-bold text-slate-600">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="email"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="tel"
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50"
                    maxLength={10}
                    minLength={10}
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      if (value.length <= 10) {
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        });
                      }
                    }}
                    placeholder="0700 000000"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-600">
                Area of Residence
              </label>
              <div className="relative">
                <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50"
                  value={formData.residence}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      residence: e.target.value,
                    })
                  }
                  placeholder="e.g. Juja, Kiambu County"
                  required
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: Church Background */}
          <div className="space-y-6">
            <div className="border-b border-slate-100 pb-2">
              <h4 className="text-lg font-bold text-[#1E3A5F] flex items-center gap-2">
                <Church className="w-5 h-5 text-[#EFB839]" /> Church Background
                & Interests
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  Spiritual Background
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600"
                  value={formData.spiritualBackground}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      spiritualBackground: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Select status...</option>
                  <option value="new_believer">I am a new believer</option>
                  <option value="transferring">
                    Transferring from another church
                  </option>
                  <option value="visiting">Just visiting/exploring</option>
                  <option value="rededicating">Rededicating my life</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  Previous Church (If applicable)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50"
                  value={formData.previousChurch}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      previousChurch: e.target.value,
                    })
                  }
                  placeholder="Name of previous church"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  How did you hear about us?
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600"
                  value={formData.heardAboutUs}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      heardAboutUs: e.target.value,
                    })
                  }
                >
                  <option value="">Select...</option>
                  <option value="friend">Invited by a friend/family</option>
                  <option value="social_media">
                    Social Media (Facebook/Instagram)
                  </option>
                  <option value="website">Church Website</option>
                  <option value="walk_in">Walk-in / Driving by</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-600">
                  Ministry Interest
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#EFB839] bg-slate-50 text-slate-600"
                  value={formData.ministryInterest}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      ministryInterest: e.target.value,
                    })
                  }
                >
                  <option value="general">
                    Not sure yet / General Membership
                  </option>
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
          <button
            type="submit"
            className="w-full bg-[#EFB839] hover:bg-[#d9a32c] text-[#1E3A5F] py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#EFB839]/30 mt-8 text-lg"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </>
  );
}
