import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, MessageCircle, Mail, Phone, Send, HelpCircle, Book, Video, FileText } from "lucide-react";
import { toast } from "sonner";

export function UserSupport() {
  const navigate = useNavigate();
  const [showContactForm, setShowContactForm] = useState(false);
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSendMessage = () => {
    if (!subject || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message sent! We'll respond within 24 hours.");
    setMessage("");
    setSubject("");
    setShowContactForm(false);
  };

  const faqs = [
    {
      question: "How do I sync my wearable device?",
      answer: "Go to Settings > Devices > Add Device, then follow the on-screen instructions to pair your device via Bluetooth."
    },
    {
      question: "Can I export my health data?",
      answer: "Yes! Go to Profile > Export Data to download your health information in CSV or PDF format."
    },
    {
      question: "How do I change my daily goals?",
      answer: "Navigate to Profile > Edit > Activity Goals to customize your daily step and calorie targets."
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely! All data is encrypted end-to-end and we never share your information with third parties."
    }
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 flex flex-col overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 px-6 pt-16 pb-8 text-white">
          <button
            onClick={() => navigate("/settings")}
            className="mb-4 text-white/80 hover:text-white"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-3xl font-bold">User Support</h1>
          <p className="mt-2 opacity-90">We're here to help you!</p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setShowContactForm(!showContactForm)}
              className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="text-orange-500" size={24} />
              </div>
              <p className="font-bold text-gray-800 text-sm">Contact Us</p>
            </button>

            <button className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Phone className="text-blue-500" size={24} />
              </div>
              <p className="font-bold text-gray-800 text-sm">Call Support</p>
            </button>

            <button className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Mail className="text-green-500" size={24} />
              </div>
              <p className="font-bold text-gray-800 text-sm">Email Us</p>
            </button>

            <button
              onClick={() => navigate("/help")}
              className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="text-purple-500" size={24} />
              </div>
              <p className="font-bold text-gray-800 text-sm">Help Center</p>
            </button>
          </div>

          {/* Contact Form */}
          {showContactForm && (
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Send us a message</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    SUBJECT
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Brief description of your issue"
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your issue in detail..."
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all resize-none"
                  />
                </div>

                <button
                  onClick={handleSendMessage}
                  className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </div>
          )}

          {/* Resources */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 px-2">Resources</h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100">
                <Book className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">User Guide</span>
              </button>

              <button className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100">
                <Video className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Video Tutorials</span>
              </button>

              <button className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors">
                <FileText className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Documentation</span>
              </button>
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 px-2">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  <summary className="p-5 cursor-pointer hover:bg-gray-50 transition-colors font-semibold text-gray-800">
                    {faq.question}
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={20} />
                <span>support@healthsync.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>1-800-HEALTH-SYNC</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle size={20} />
                <span>Live Chat: Mon-Fri, 9am-6pm EST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
