"use client";

import { useState } from "react";
import { submitConsultation, ConsultationData } from "@/app/actions";
import {
  User,
  Mail,
  Phone,
  Building,
  Briefcase,
  Calendar,
  DollarSign,
  FileText,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  MessageSquare
} from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState<ConsultationData>({
    fullName: "",
    email: "",
    mobileNumber: "",
    companyName: "",
    projectType: "",
    consultationDate: "",
    budget: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await submitConsultation(formData);
      if (res.success) {
        setSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          mobileNumber: "",
          companyName: "",
          projectType: "",
          consultationDate: "",
          budget: "",
          description: "",
        });
      } else {
        setError(res.error || "An error occurred while submitting.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Form Area */}
      <div className="lg:col-span-8 rounded-2xl border border-white/8 bg-card-glass/20 p-8 backdrop-blur-md relative overflow-hidden">
        {success ? (
          <div className="flex flex-col items-center justify-center text-center py-12 space-y-6">
            <div className="rounded-full bg-emerald-500/10 p-4 border border-emerald-500/20">
              <CheckCircle2 className="h-16 w-16 text-emerald-400 animate-pulse" />
            </div>
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                REQUEST RECEIVED
              </h3>
              <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                Thank you for your request. Gorli Janardhan Naidu will contact you shortly.
              </p>
            </div>
            <button
              onClick={() => setSuccess(false)}
              className="rounded-lg bg-gradient-to-r from-glow-blue to-glow-purple px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:shadow-md hover:shadow-glow-purple/20 cursor-pointer"
            >
              Book Another Consultation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide border-b border-white/5 pb-4">
              Consultation Details
            </h3>

            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-xs font-medium text-red-400">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullName" className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0a16]/60 border border-white/8 rounded-lg text-white text-sm focus:outline-none focus:border-glow-blue transition-colors placeholder-white/20"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0a16]/60 border border-white/8 rounded-lg text-white text-sm focus:outline-none focus:border-glow-blue transition-colors placeholder-white/20"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Mobile Number */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mobileNumber" className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                  Mobile Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <input
                    id="mobileNumber"
                    name="mobileNumber"
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0a16]/60 border border-white/8 rounded-lg text-white text-sm focus:outline-none focus:border-glow-blue transition-colors placeholder-white/20"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="companyName" className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                  Company Name (Optional)
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0a16]/60 border border-white/8 rounded-lg text-white text-sm focus:outline-none focus:border-glow-blue transition-colors placeholder-white/20"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Project Type */}
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label htmlFor="projectType" className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                  Project Type *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 pointer-events-none" />
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full pl-11 pr-10 py-3 bg-[#0a0a16]/90 border border-white/8 rounded-lg text-white text-sm focus:outline-none focus:border-glow-blue transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-white/40">Select project type...</option>
                    <option value="AI Healthcare Assistant">AI Healthcare Assistant</option>
                    <option value="Medical Report Analyzer">Medical Report Analyzer</option>
                    <option value="Healthcare Appointment Platform">Healthcare Appointment Platform</option>
                    <option value="Modern Farming Platform">Modern Farming Platform</option>
                    <option value="AI Automation Systems">AI Automation Systems</option>
                    <option value="Custom Enterprise AI Solution">Custom Enterprise AI Solution</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/30">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Consultation Date */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="consultationDate" className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 pointer-events-none" />
                  <input
                    id="consultationDate"
                    name="consultationDate"
                    type="date"
                    required
                    value={formData.consultationDate}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-[#0a0a16]/60 border border-white/8 rounded-lg text-white text-sm focus:outline-none focus:border-glow-blue transition-colors cursor-pointer [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            {/* Budget Range */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="budget" className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                Budget Range *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30 pointer-events-none" />
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full pl-11 pr-10 py-3 bg-[#0a0a16]/90 border border-white/8 rounded-lg text-white text-sm focus:outline-none focus:border-glow-blue transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled className="text-white/40">Select budget range...</option>
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="Over $50,000">Over $50,000</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white/30">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="description" className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                Project Description *
              </label>
              <div className="relative">
                <FileText className="absolute left-4 top-4 h-4 w-4 text-white/30" />
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your goals, workflow requirements, timelines, and systems to integrate..."
                  className="w-full pl-11 pr-4 py-3 bg-[#0a0a16]/60 border border-white/8 rounded-lg text-white text-sm focus:outline-none focus:border-glow-blue transition-colors placeholder-white/20 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-glow-blue to-glow-purple px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:shadow-lg hover:shadow-glow-purple/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Processing booking...
                </>
              ) : (
                "Book Consultation"
              )}
            </button>
          </form>
        )}
      </div>

      {/* Quick Connect Sidebar */}
      <div className="lg:col-span-4 rounded-2xl border border-white/8 bg-card-glass/10 p-6 backdrop-blur-sm lg:sticky lg:top-24 space-y-6">
        <div className="space-y-2">
          <h3 className="font-display text-lg font-bold uppercase text-white tracking-wide">
            Quick Connect
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed font-medium">
            Need immediate assistance or scheduling details? Contact directly via the channels below.
          </p>
        </div>

        {/* Direct WhatsApp Button */}
        <a
          href="https://wa.me/919154619699"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 rounded-lg border border-[#25D366]/20 bg-[#25D366]/10 hover:bg-[#25D366]/20 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[#25D366] hover:shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
        >
          Chat on WhatsApp
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.535 0 10.026-4.437 10.03-9.874.002-2.634-1.018-5.11-2.881-6.974-1.862-1.863-4.329-2.886-6.969-2.887-5.54 0-10.03 4.437-10.033 9.879-.001 1.765.474 3.493 1.377 5.02L1.087 21.725l5.56-1.571zM17.16 14.79c-.282-.141-1.666-.822-1.921-.914-.257-.09-.443-.136-.63.141-.186.28-.72.914-.882 1.096-.162.183-.326.206-.607.065-.282-.141-1.19-.44-2.266-1.403-.837-.749-1.403-1.674-1.567-1.956-.164-.282-.018-.435.123-.575.127-.127.282-.329.424-.494.14-.165.187-.282.282-.47.094-.189.046-.353-.023-.494-.069-.141-.63-1.517-.862-2.08-.227-.547-.457-.472-.63-.48l-.53-.01c-.183-.002-.482.068-.733.342-.252.274-.962.94-.962 2.292 0 1.353.984 2.658 1.122 2.846.137.189 1.938 2.96 4.695 4.15 2.757 1.19 2.757.793 3.257.747.5-.046 1.667-.68 1.902-1.336.236-.656.236-1.22.165-1.336-.07-.116-.254-.202-.536-.343z"/>
          </svg>
        </a>

        {/* Contact Info Panels */}
        <div className="border-t border-white/5 pt-4 space-y-3">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
            Direct Contacts
          </h4>
          
          <div className="flex flex-col gap-2.5">
            <div className="rounded-lg border border-white/5 bg-[#0a0a16]/40 p-3 flex flex-col gap-1">
              <span className="text-[9px] uppercase font-bold text-text-secondary tracking-wider flex items-center gap-1.5">
                <Mail className="h-3 w-3 text-glow-blue" /> Direct Email
              </span>
              <a
                href="mailto:jana.teja2003@gmail.com"
                className="text-xs text-white hover:text-glow-blue transition-colors font-medium break-all"
              >
                jana.teja2003@gmail.com
              </a>
            </div>

            <div className="rounded-lg border border-white/5 bg-[#0a0a16]/40 p-3 flex flex-col gap-1">
              <span className="text-[9px] uppercase font-bold text-text-secondary tracking-wider flex items-center gap-1.5">
                <MessageSquare className="h-3 w-3 text-[#25D366]" /> Direct WhatsApp
              </span>
              <a
                href="https://wa.me/919154619699"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white hover:text-glow-blue transition-colors font-medium"
              >
                +91 9154619699
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
