import { useState } from "react";
import { FaMobileAlt, FaUniversity, FaHeart } from "react-icons/fa";
import PageBanner from "../components/pagesBanner";

export default function Give() {
  const [amount, setAmount] = useState("");
  const [givingType, setGivingType] = useState("Tithes");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");

  const presetAmounts = [500, 1000, 5000, 10000];

  return (
    <>
      <PageBanner
        title="Generosity"
        subheading="Giving to Higher Grounds Assembly"
        paragraph="Your giving impacts us all"
      />
      <div className="bg-[#FDF9F0] min-h-screen font-sans py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <FaHeart className="text-emerald-500 text-4xl mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
              Worship Through Giving
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Your generosity helps us reach our community and share the love of
              Jesus across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left Side: Form (3 Columns) */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-emerald-50">
                {/* 1. Select Type */}
                <div className="mb-8">
                  <label className="block text-slate-900 font-bold mb-4">
                    Select Giving Type
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Tithes", "Offering", "Other"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setGivingType(type)}
                        className={`py-3 rounded-xl font-semibold transition-all border-2 ${
                          givingType === type
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                            : "border-gray-100 text-gray-500 hover:border-emerald-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Select Amount */}
                <div className="mb-8">
                  <label className="block text-slate-900 font-bold mb-4">
                    Select Amount (KES)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {presetAmounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt.toString())}
                        className="py-2 rounded-lg border border-gray-200 hover:bg-emerald-600 hover:text-white transition-colors font-medium text-gray-600"
                      >
                        {amt.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    placeholder="Enter Custom Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-emerald-500 focus:outline-none transition-all text-lg font-bold text-slate-900"
                  />
                </div>

                {/* 3. Payment Method */}
                <div className="mb-8">
                  <label className="block text-slate-900 font-bold mb-4">
                    Payment Method
                  </label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setPaymentMethod("mpesa")}
                      className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === "mpesa"
                          ? "border-emerald-600 bg-emerald-50"
                          : "border-gray-100"
                      }`}
                    >
                      <FaMobileAlt
                        className={
                          paymentMethod === "mpesa"
                            ? "text-emerald-600"
                            : "text-gray-400"
                        }
                      />
                      <span
                        className={`font-bold ${
                          paymentMethod === "mpesa"
                            ? "text-emerald-700"
                            : "text-gray-500"
                        }`}
                      >
                        M-Pesa
                      </span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod("bank")}
                      className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                        paymentMethod === "bank"
                          ? "border-emerald-600 bg-emerald-50"
                          : "border-gray-100"
                      }`}
                    >
                      <FaUniversity
                        className={
                          paymentMethod === "bank"
                            ? "text-emerald-600"
                            : "text-gray-400"
                        }
                      />
                      <span
                        className={`font-bold ${
                          paymentMethod === "bank"
                            ? "text-emerald-700"
                            : "text-gray-500"
                        }`}
                      >
                        Bank Transfer
                      </span>
                    </button>
                  </div>
                </div>

                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all text-lg">
                  Complete Giving
                </button>
              </div>
            </div>

            {/* Right Side: Instructions (2 Columns) */}
            <div className="lg:col-span-2">
              <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl h-full sticky top-8">
                <h3 className="text-xl font-bold mb-6 text-emerald-400">
                  Giving Instructions
                </h3>

                {paymentMethod === "mpesa" ? (
                  <div className="space-y-6">
                    <div className="border-b border-slate-700 pb-4">
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                        Paybill Number
                      </p>
                      <p className="text-3xl font-mono font-bold text-white">
                        542542
                      </p>
                    </div>
                    <div className="border-b border-slate-700 pb-4">
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                        Account Number
                      </p>
                      <p className="text-xl font-semibold text-emerald-400">
                        00300896631410
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm text-slate-300 leading-relaxed italic">
                        "Each of you should give what you have decided in your
                        heart to give, not reluctantly or under compulsion, for
                        God loves a cheerful giver." <br />
                        <span className="not-italic font-bold mt-2 block">
                          — 2 Corinthians 9:7
                        </span>
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                        Bank Name
                      </p>
                      <p className="text-xl font-bold">IM BANK C2B</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                        Reason
                      </p>
                      <p className="text-lg">Springfield Branch</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                        Paybill Number
                      </p>
                      <p className="text-lg">542542</p>
                    </div>
                    <div className="border-b border-slate-700 pb-4">
                      <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">
                        Account Number
                      </p>
                      <p className="text-2xl font-mono font-bold text-emerald-400">
                        00300896631410
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
