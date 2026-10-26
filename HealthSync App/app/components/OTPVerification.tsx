import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Shield } from "lucide-react";
import { toast } from "sonner";

export function OTPVerification() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "your email";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = [...otp];

    for (let i = 0; i < pastedData.length; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    // Focus last filled input or first empty
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleVerify = async () => {
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      toast.error("Please enter the complete 6-digit code");
      return;
    }

    setIsLoading(true);

    // Simulate OTP verification (in real app, verify with backend)
    setTimeout(() => {
      setIsLoading(false);

      // For demo purposes, accept any 6-digit code
      if (otpCode === "123456" || otpCode.length === 6) {
        toast.success("Code verified successfully!");
        navigate("/reset-password", { state: { email, verified: true } });
      } else {
        toast.error("Invalid verification code. Please try again.");
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    }, 1500);
  };

  const handleResend = () => {
    if (resendTimer > 0) return;

    setResendTimer(60);
    toast.success("New verification code sent!");
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col">
        {/* Header */}
        <div className="px-6 pt-16 pb-6">
          <button
            onClick={() => navigate("/forgot-password")}
            className="mb-6 text-gray-400"
          >
            <ChevronLeft size={28} />
          </button>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">Verify Code</h1>
          <p className="text-gray-600">
            We've sent a 6-digit verification code to <span className="font-semibold text-orange-500">{email}</span>
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 py-6">
          {/* Shield Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
              <Shield size={64} className="text-white" />
            </div>
          </div>

          {/* OTP Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">
              ENTER VERIFICATION CODE
            </label>
            <div className="flex gap-3 justify-center" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 text-center text-2xl font-bold bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                />
              ))}
            </div>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={isLoading || otp.join("").length !== 6}
            className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed mb-4"
          >
            {isLoading ? "Verifying..." : "Verify Code"}
          </button>

          {/* Resend Code */}
          <div className="text-center">
            <p className="text-gray-600 mb-2">Didn't receive the code?</p>
            {resendTimer > 0 ? (
              <p className="text-gray-400">
                Resend code in <span className="font-bold text-orange-500">{resendTimer}s</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
              >
                Resend Code
              </button>
            )}
          </div>
        </div>

        {/* Info Section */}
        <div className="px-6 pb-8">
          <div className="bg-yellow-50 rounded-2xl p-4 border-l-4 border-yellow-500">
            <p className="text-sm text-yellow-800">
              <strong>Tip:</strong> For demo purposes, you can enter any 6-digit code or use <strong>123456</strong>
            </p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
