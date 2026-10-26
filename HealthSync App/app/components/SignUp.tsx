import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { Eye, EyeOff } from "lucide-react";

export function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-white overflow-y-auto">
        <div className="px-8 pt-16 pb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Sign Up</h1>

          <form onSubmit={handleSignUp}>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">NAME</label>
              <input
                type="text"
                placeholder="e.g. Jiara Martins"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">EMAIL</label>
              <input
                type="email"
                placeholder="e.g. hello@reallygreatsite.gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">PASSWORD</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="*****"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                It is recommended to have at least one number, one small and capital letter, and a symbol.
              </p>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">CONFIRM PASSWORD</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="*****"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">DATE OF BIRTH</label>
              <input
                type="text"
                placeholder="MM/DD/YYYY"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">SEX</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input type="radio" name="sex" value="M" className="mr-2" />
                  <span>Male</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="sex" value="F" className="mr-2" />
                  <span>Female</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-4"
            >
              Create New Account
            </button>

            <p className="text-center text-gray-600 text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-orange-500 font-semibold hover:underline"
              >
                Log In
              </button>
            </p>
          </form>
        </div>
      </div>
    </PhoneFrame>
  );
}
