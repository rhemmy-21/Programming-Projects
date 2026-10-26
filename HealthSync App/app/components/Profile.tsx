import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, User, Heart, Footprints, Flame, Edit as EditIcon, AlertTriangle } from "lucide-react";
import { EditProfileDialog } from "./EditProfileDialog";
import { toast } from "sonner";
import { useUser } from "../UserContext";

export function Profile() {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [editDialog, setEditDialog] = useState<{ isOpen: boolean; field: "name" | "goals" | "about" | null }>({ isOpen: false, field: null });

  const [profileData, setProfileData] = useState({
    name: userData.fullName,
    stepsGoal: "10000",
    caloriesGoal: "2200",
    height: userData.height.toString(),
    weight: userData.weight.toString(),
    age: userData.age.toString(),
    sex: userData.gender
  });

  const isProfileIncomplete = !userData.fullName || userData.age === 0 || userData.height === 0 || userData.weight === 0;

  const handleSave = (field: "name" | "goals" | "about", data: any) => {
    setProfileData({ ...profileData, ...data });

    // Update user context
    if (field === "name") {
      updateUserData({ fullName: data.name });
    } else if (field === "about") {
      updateUserData({
        age: parseInt(data.age),
        height: parseInt(data.height),
        weight: parseInt(data.weight),
        gender: data.sex
      });
    }

    toast.success("Profile updated ✓");
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-white overflow-y-auto pb-24">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-400 to-emerald-500 px-6 pt-16 pb-8 text-white relative">
          <button
            onClick={() => navigate("/home")}
            className="absolute left-6 top-16 p-2 bg-white/20 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="text-center mt-8">
            <h1 className="text-3xl font-bold mb-6">Profile</h1>
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <User className="text-green-500" size={48} />
            </div>
            <h2 className="text-2xl font-bold">{userData.fullName}</h2>
          </div>
        </div>

        {/* Profile Info */}
        <div className="px-6 py-6">
          {/* Incomplete Profile Banner */}
          {isProfileIncomplete && (
            <div className="bg-yellow-50 rounded-2xl p-4 mb-4 border border-yellow-200 flex items-start gap-3">
              <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
              <div className="flex-1">
                <p className="font-bold text-sm text-gray-800 mb-1">Complete your profile</p>
                <p className="text-xs text-gray-600 mb-3">Add your info to get personalized health insights and accurate XP tracking.</p>
                <button
                  onClick={() => setEditDialog({ isOpen: true, field: "about" })}
                  className="px-4 py-2 bg-orange-400 text-white text-xs font-semibold rounded-full hover:bg-orange-500 transition-all"
                >
                  Fill in
                </button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Name</h3>
                <p className="text-gray-600">{profileData.name}</p>
              </div>
              <button
                onClick={() => setEditDialog({ isOpen: true, field: "name" })}
                className="text-green-500 font-semibold hover:underline flex items-center gap-1"
              >
                <EditIcon size={16} />
                Edit
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Current Level</p>
                <p className="text-2xl font-bold text-green-500">Level 1</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Total XP</p>
                <p className="text-2xl font-bold text-green-500">40 XP</p>
              </div>
            </div>
          </div>

          {/* Activity Goals */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Activity Goals</h3>
              <button
                onClick={() => setEditDialog({ isOpen: true, field: "goals" })}
                className="text-green-500 font-semibold hover:underline flex items-center gap-1"
              >
                <EditIcon size={16} />
                Edit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <Footprints className="text-green-500 mb-2" size={24} />
                <p className="text-sm text-gray-500 mb-1">steps</p>
                <p className="text-2xl font-bold">{parseInt(profileData.stepsGoal).toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Flame className="text-orange-500 mb-2" size={24} />
                <p className="text-sm text-gray-500 mb-1">kcal burnt</p>
                <p className="text-2xl font-bold">{parseInt(profileData.caloriesGoal).toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* About Me */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">About Me</h3>
              <button
                onClick={() => setEditDialog({ isOpen: true, field: "about" })}
                className="text-green-500 font-semibold hover:underline flex items-center gap-1"
              >
                <EditIcon size={16} />
                Edit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Height</p>
                <p className="text-xl font-bold">{profileData.height} cm</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Weight</p>
                <p className="text-xl font-bold">{profileData.weight} kg</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Age</p>
                <p className="text-xl font-bold">{profileData.age} years</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Sex</p>
                <p className="text-xl font-bold">{profileData.sex}</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Today's Summary</h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <Heart className="text-red-500 mx-auto mb-2" size={28} />
                <p className="text-xs text-gray-500 mb-1">Heart Rate</p>
                <p className="font-bold text-sm">78 bpm</p>
              </div>
              <div>
                <Footprints className="text-green-500 mx-auto mb-2" size={28} />
                <p className="text-xs text-gray-500 mb-1">Steps</p>
                <p className="font-bold text-sm">9,723</p>
              </div>
              <div>
                <Flame className="text-orange-500 mx-auto mb-2" size={28} />
                <p className="text-xs text-gray-500 mb-1">Calories</p>
                <p className="font-bold text-sm">2,200</p>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Dialog */}
        {editDialog.field && (
          <EditProfileDialog
            isOpen={editDialog.isOpen}
            onClose={() => setEditDialog({ isOpen: false, field: null })}
            field={editDialog.field}
            currentData={profileData}
            onSave={(data) => handleSave(editDialog.field!, data)}
          />
        )}
      </div>
    </PhoneFrame>
  );
}
