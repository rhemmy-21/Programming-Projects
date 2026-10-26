"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import { triggerConfetti, triggerSparkles } from "@/utils/confetti";

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyToClipboard = (text: string, key: string, e: React.MouseEvent) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    triggerSparkles();

    setTimeout(() => {
      const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Message from ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.open(mailtoLink, "_blank");
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-zinc-200/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-3"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-pink-600 font-bold">
            Get in Touch
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
              Contact &amp; Collaboration
            </h2>
            <p className="text-sm text-zinc-600 mt-1 max-w-xl">
              Feel free to reach out for student developer initiatives, internships, technical discussions, or speaking opportunities.
            </p>
          </motion.div>
          <span className="text-xs font-mono text-pink-700 bg-pink-50 border border-pink-200 px-3 py-1.5 rounded-full font-semibold self-start sm:self-auto shadow-sm">
            Replies within 24-48 hours
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Details Cards with rich color accents */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50/70 to-blue-50/50 border border-indigo-200 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10 transition-all flex items-start justify-between gap-3 group"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white shadow-md shadow-indigo-500/20 mt-0.5 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-indigo-600 uppercase tracking-wider font-semibold">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="block text-sm font-bold text-zinc-900 hover:text-indigo-600 mt-0.5 break-all transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                  <span className="text-xs text-zinc-500 mt-0.5 block">
                    Direct inquiries &amp; communications
                  </span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) =>
                  copyToClipboard(portfolioData.personal.email, "email", e)
                }
                title="Copy email to clipboard"
                className="p-2.5 rounded-xl bg-white border border-indigo-100 hover:bg-indigo-100 text-indigo-600 transition-colors shrink-0 shadow-sm"
              >
                {copiedKey === "email" ? (
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </motion.button>
            </motion.div>

            {/* Mobile Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/50 border border-emerald-200 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 transition-all flex items-start justify-between gap-3 group"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20 mt-0.5 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-emerald-600 uppercase tracking-wider font-semibold">
                    Mobile Number
                  </span>
                  <a
                    href={`tel:${portfolioData.personal.mobile.replace(/\s+/g, "")}`}
                    className="block text-sm font-bold text-zinc-900 hover:text-emerald-700 mt-0.5 font-mono transition-colors"
                  >
                    {portfolioData.personal.mobile}
                  </a>
                  <span className="text-xs text-zinc-500 mt-0.5 block">
                    Calls &amp; SMS (Philippines)
                  </span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) =>
                  copyToClipboard(portfolioData.personal.mobile, "mobile", e)
                }
                title="Copy phone to clipboard"
                className="p-2.5 rounded-xl bg-white border border-emerald-100 hover:bg-emerald-100 text-emerald-600 transition-colors shrink-0 shadow-sm"
              >
                {copiedKey === "mobile" ? (
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </motion.button>
            </motion.div>

            {/* Address Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/70 to-orange-50/50 border border-amber-200 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10 transition-all flex items-start justify-between gap-3 group"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20 mt-0.5 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-amber-600 uppercase tracking-wider font-semibold">
                    Residential Address
                  </span>
                  <p className="text-sm font-medium text-zinc-900 mt-0.5 leading-snug">
                    {portfolioData.personal.address}
                  </p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) =>
                  copyToClipboard(portfolioData.personal.address, "address", e)
                }
                title="Copy address to clipboard"
                className="p-2.5 rounded-xl bg-white border border-amber-100 hover:bg-amber-100 text-amber-600 transition-colors shrink-0 shadow-sm"
              >
                {copiedKey === "address" ? (
                  <Check className="w-4 h-4 text-emerald-600 font-bold" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </motion.button>
            </motion.div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-blue-200 hover:border-[#0A66C2] hover:shadow-md hover:shadow-blue-500/15 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                  <span className="text-xs font-bold text-zinc-900 group-hover:text-[#0A66C2] transition-colors">
                    LinkedIn
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:text-[#0A66C2] transition-colors" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-500 hover:shadow-md hover:shadow-zinc-500/10 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-zinc-900" />
                  <span className="text-xs font-bold text-zinc-900 group-hover:text-black transition-colors">
                    GitHub
                  </span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-colors" />
              </motion.a>
            </div>
          </div>

          {/* Interactive Message Box */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-indigo-100 shadow-xl shadow-indigo-500/5 relative overflow-hidden"
            >
              {/* Top rainbow banner */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500" />

              <h3 className="text-base font-extrabold text-zinc-950 flex items-center gap-2 mb-1">
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-500 mb-6">
                Fill in your details below to compose an inquiry or proposal directly to Rhem Gelo Marbella.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center mx-auto text-white shadow-lg shadow-emerald-500/30">
                    <Check className="w-6 h-6 font-bold" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-950">
                    Message Prepared!
                  </h4>
                  <p className="text-xs text-zinc-600 max-w-sm mx-auto">
                    Your email client will open with your pre-filled message. You can also reach out directly at{" "}
                    <span className="font-mono text-indigo-900 font-bold">
                      {portfolioData.personal.email}
                    </span>.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-xs font-bold text-indigo-600 underline underline-offset-4 pt-2 cursor-pointer"
                  >
                    Send another message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Your Name <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maria Santos"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full text-xs bg-zinc-50/70 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                        Your Email <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. maria@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full text-xs bg-zinc-50/70 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. GDG Speaking / Internship Opportunity / Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full text-xs bg-zinc-50/70 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                      Message <span className="text-pink-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your note, project overview, or inquiry here..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full text-xs bg-zinc-50/70 border border-zinc-200 rounded-xl p-3.5 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all resize-none shadow-sm"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white text-xs font-bold hover:shadow-lg hover:shadow-indigo-500/25 transition-all shadow-sm active:scale-98 cursor-pointer"
                  >
                    Send Message via Email
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
