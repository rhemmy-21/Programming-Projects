import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const verified = location.state?.verified;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if not verified
  if (!verified) {
    navigate("/forgot-password");
    return null;
  }

  const validatePassword = (pwd: string) => {
    const requirements = {
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd)
    };
    return requirements;
  };

  const requirements = validatePassword(password);
  const allRequirementsMet = Object.values(requirements).every(Boolean);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!allRequirementsMet) {
      toast.error("Password does not meet all requirements");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);

    // Simulate password reset
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Password reset successfully!");
      navigate("/login");
    }, 1500);
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col overflow-y-auto">
        {/* Header */}
        <div className="px-6 pt-16 pb-6">
          <button
            onClick={() => navigate("/otp-verification")}
            className="mb-6 text-gray-400"
          >
            <ChevronLeft size={28} />
          </button>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">Reset Password</h1>
          <p className="text-gray-600">
            Create a new password for <span className="font-semibold text-orange-500">{email}</span>
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 px-6 py-6">
          <form onSubmit={handleResetPassword}>
            {/* Lock Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                <Lock size={64} className="text-white" />
              </div>
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                NEW PASSWORD
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 pr-12 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                CONFIRM PASSWORD
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-4 pr-12 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="mb-6 bg-gray-50 rounded-2xl p-4">
              <p className="text-sm font-semibold text-gray-700 mb-3">Password must contain:</p>
              <div className="space-y-2">
                <div className={`flex items-center gap-2 text-sm ${requirements.length ? 'text-green-600' : 'text-gray-500'}`}>
                  <CheckCircle2 size={16} className={requirements.length ? 'opacity-100' : 'opacity-30'} />
                  <span>At least 8 characters</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${requirements.uppercase ? 'text-green-600' : 'text-gray-500'}`}>
                  <CheckCircle2 size={16} className={requirements.uppercase ? 'opacity-100' : 'opacity-30'} />
                  <span>One uppercase letter</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${requirements.lowercase ? 'text-green-600' : 'text-gray-500'}`}>
                  <CheckCircle2 size={16} className={requirements.lowercase ? 'opacity-100' : 'opacity-30'} />
                  <span>One lowercase letter</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${requirements.number ? 'text-green-600' : 'text-gray-500'}`}>
                  <CheckCircle2 size={16} className={requirements.number ? 'opacity-100' : 'opacity-30'} />
                  <span>One number</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${requirements.special ? 'text-green-600' : 'text-gray-500'}`}>
                  <CheckCircle2 size={16} className={requirements.special ? 'opacity-100' : 'opacity-30'} />
                  <span>One special character</span>
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              disabled={isLoading || !allRequirementsMet}
              className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </PhoneFrame>
  );
}
