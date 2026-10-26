import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Mail } from "lucide-react";
import { toast } from "sonner";

export function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate sending OTP
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Verification code sent to your email!");
      navigate("/otp-verification", { state: { email } });
    }, 1500);
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col">
        {/* Header */}
        <div className="px-6 pt-16 pb-6">
          <button
            onClick={() => navigate("/login")}
            className="mb-6 text-gray-400"
          >
            <ChevronLeft size={28} />
          </button>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">Forgot Password?</h1>
          <p className="text-gray-600">
            Don't worry! Enter your email address and we'll send you a verification code to reset your password.
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 py-6">
          <form onSubmit={handleSendOTP}>
            {/* Email Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-xl">
                <Mail size={64} className="text-white" />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                EMAIL
              </label>
              <input
                id="email"
                type="email"
                placeholder="e.g. hello@reallygreatsite.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
              />
            </div>

            {/* Send Code Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send Verification Code"}
            </button>
          </form>

          {/* Back to Login */}
          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/login")}
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              Back to Login
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="px-6 pb-8">
          <div className="bg-blue-50 rounded-2xl p-4 border-l-4 border-blue-500">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> The verification code will be sent to your registered email address. Please check your inbox and spam folder.
            </p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
