"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Calendar, CheckCircle2, MessageSquare, Send, X } from "lucide-react";
import { useEffect, useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_SLOTS = [
  "10:00 AM - 11:00 AM EST",
  "11:30 AM - 12:30 PM EST",
  "02:00 PM - 03:00 PM EST",
  "04:00 PM - 05:00 PM EST",
];

const NEXT_DAYS = [
  { name: "Mon", date: "June 22" },
  { name: "Tue", date: "June 23" },
  { name: "Wed", date: "June 24" },
  { name: "Thu", date: "June 25" },
  { name: "Fri", date: "June 26" },
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Close on Escape Key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    // Mock API delay
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hi Gorli Janardhan Naidu, I would like to schedule an AI Consultation. My name is ${name || "Visitor"}.`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank");
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSelectedDate("");
    setSelectedSlot("");
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop blurring layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#040409]/90 backdrop-blur-md"
          />

          {/* Modal Body container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-full max-w-2xl rounded-2xl border border-white/8 bg-[#0a0a16] p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-2 border border-white/5 bg-white/5 text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    BOOK AI CONSULTATION
                  </h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Design, analyze, and scope enterprise-level AI integrations for your business.
                  </p>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs uppercase font-medium text-text-secondary">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="rounded-lg border border-white/8 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-glow-purple focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs uppercase font-medium text-text-secondary">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="rounded-lg border border-white/8 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-glow-purple focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Date slot selector */}
                <div className="space-y-3">
                  <span className="text-xs uppercase font-medium text-text-secondary flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-glow-blue" /> Select Date (Optional)
                  </span>
                  <div className="grid grid-cols-5 gap-2">
                    {NEXT_DAYS.map((day) => (
                      <button
                        key={day.date}
                        type="button"
                        onClick={() => setSelectedDate(day.date)}
                        className={`rounded-lg border py-2.5 flex flex-col items-center justify-center transition-all ${
                          selectedDate === day.date
                            ? "border-glow-purple bg-glow-purple/20 text-white"
                            : "border-white/8 bg-white/5 text-text-secondary hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <span className="text-[10px] uppercase font-bold">{day.name}</span>
                        <span className="text-xs font-semibold mt-0.5">{day.date.split(" ")[1]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time slot selector */}
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <span className="text-xs uppercase font-medium text-text-secondary">
                      Select Available Time Slot
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {AVAILABLE_SLOTS.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          className={`rounded-lg border px-4 py-2.5 text-xs font-medium text-left transition-all ${
                            selectedSlot === slot
                              ? "border-glow-blue bg-glow-blue/20 text-white"
                              : "border-white/8 bg-white/5 text-text-secondary hover:border-white/20 hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Project Details */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs uppercase font-medium text-text-secondary">
                    Project Summary & Objectives
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Briefly describe your objectives, timelines, and current tech stack..."
                    className="rounded-lg border border-white/8 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-glow-purple focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-glow-blue to-glow-purple px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white hover:shadow-lg hover:shadow-glow-purple/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        Request Booking <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-emerald-500/10 hover:bg-emerald-500/20 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-emerald-400 transition-all"
                  >
                    <MessageSquare className="h-4 w-4" /> Quick Connect
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center text-center py-10 space-y-6"
              >
                <div className="rounded-full bg-glow-purple/10 p-4">
                  <CheckCircle2 className="h-16 w-16 text-glow-purple animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    CONSULTATION REQUESTED
                  </h3>
                  <p className="text-sm text-text-secondary mt-2 max-w-md mx-auto">
                    Thank you, {name}! Your slot request has been sent directly to Gorli Janardhan Naidu.
                    We will review and confirm details via email at <span className="text-white font-medium">{email}</span> within 12 hours.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="rounded-lg border border-white/8 bg-white/5 hover:bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all"
                  >
                    Close Window
                  </button>
                  <button
                    onClick={resetForm}
                    className="rounded-lg bg-gradient-to-r from-glow-blue to-glow-purple px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:shadow-md"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
