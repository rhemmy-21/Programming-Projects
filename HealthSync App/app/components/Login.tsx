import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { Eye, EyeOff } from "lucide-react";

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col bg-white overflow-y-auto">
        <div className="flex-1 flex flex-col px-8 pt-20 pb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to HealthSync</h1>
          <p className="text-2xl font-semibold text-gray-700 mb-12">Log In Your Account</p>

          <form onSubmit={handleLogin} className="flex-1 flex flex-col">
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">EMAIL</label>
              <input
                type="email"
                placeholder="e.g. hello@reallygreatsite.gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue=""
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">PASSWORD</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="*****"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  defaultValue=""
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm text-gray-600">Remember Me</span>
              </label>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm text-orange-500 hover:underline"
              >
                Forget password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors mb-6"
            >
              Log In
            </button>

            <div className="text-center mb-6">
              <span className="text-gray-500">OR</span>
            </div>

            <p className="text-center text-gray-600">
              Not Registered?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-orange-500 font-semibold hover:underline"
              >
                Sign up here.
              </button>
            </p>
          </form>
        </div>
      </div>
    </PhoneFrame>
  );
}
