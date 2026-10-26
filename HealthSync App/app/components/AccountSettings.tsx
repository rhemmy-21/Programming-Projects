import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, User, Mail, Phone, Lock, Shield, Trash2, LogOut } from "lucide-react";
import { toast } from "sonner";

export function AccountSettings() {
  const navigate = useNavigate();
  const [accountData, setAccountData] = useState({
    name: "Rhem Gello Marbella",
    email: "rhem.marbella@email.com",
    phone: "+1 (555) 123-4567"
  });

  const handleLogout = () => {
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently deleted."
    );

    if (confirmed) {
      toast.success("Account deleted successfully");
      navigate("/login");
    }
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 flex flex-col overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-white px-6 pt-16 pb-6 shadow-sm">
          <button
            onClick={() => navigate("/settings")}
            className="mb-4 text-gray-400"
          >
            <ChevronLeft size={28} />
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Account</h1>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {/* Profile Information */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
            <div className="p-4 bg-gradient-to-r from-orange-400 to-red-500">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <User className="text-orange-500" size={32} />
                </div>
                <div className="text-white">
                  <h2 className="text-xl font-bold">{accountData.name}</h2>
                  <p className="text-sm opacity-90">Level 1 • 40 XP</p>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="space-y-4">
                <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                  <Mail className="text-gray-400" size={20} />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm font-semibold text-gray-800">{accountData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                  <Phone className="text-gray-400" size={20} />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Phone</p>
                    <p className="text-sm font-semibold text-gray-800">{accountData.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Privacy */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 px-2">Security & Privacy</h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={() => navigate("/reset-password")}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <Lock className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Change Password</span>
              </button>

              <button className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors">
                <Shield className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Two-Factor Authentication</span>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full font-semibold">Enabled</span>
              </button>
            </div>
          </div>

          {/* Account Actions */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3 px-2">Account Actions</h3>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors border-b border-gray-100"
              >
                <LogOut className="text-gray-500" size={24} />
                <span className="flex-1 text-left text-base text-gray-800">Log Out</span>
              </button>

              <button
                onClick={handleDeleteAccount}
                className="w-full flex items-center gap-4 p-5 hover:bg-red-50 transition-colors"
              >
                <Trash2 className="text-red-500" size={24} />
                <span className="flex-1 text-left text-base text-red-600 font-semibold">Delete Account</span>
              </button>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-blue-50 rounded-2xl p-4 border-l-4 border-blue-500">
            <p className="text-sm text-blue-800">
              <strong>Privacy:</strong> Your data is encrypted and secure. We never share your personal information with third parties.
            </p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
