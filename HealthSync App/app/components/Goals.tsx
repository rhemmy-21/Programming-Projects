import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Target, Heart, Footprints, Flame, Moon, Apple, Scale, Edit2, Check } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";
import { toast } from "sonner";

export function Goals() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [editingGoal, setEditingGoal] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState("");

  const [goals, setGoals] = useState({
    steps: { target: 10000, current: 9723, unit: "steps", icon: Footprints, color: "from-green-400 to-emerald-500" },
    heartRate: { target: 75, current: 78, unit: "BPM", icon: Heart, color: "from-red-400 to-pink-500" },
    calories: { target: 2200, current: 2200, unit: "kcal", icon: Flame, color: "from-orange-400 to-red-500" },
    sleep: { target: 8, current: 7.5, unit: "hours", icon: Moon, color: "from-blue-400 to-indigo-500" },
    nutrition: { target: 2000, current: 1967, unit: "kcal", icon: Apple, color: "from-yellow-400 to-amber-500" },
    bmi: { target: 18.5, current: 17.1, unit: "", icon: Scale, color: "from-purple-400 to-pink-500" }
  });

  const handleEditGoal = (goalKey: string) => {
    setEditingGoal(goalKey);
    setTempValue(goals[goalKey as keyof typeof goals].target.toString());
  };

  const handleSaveGoal = (goalKey: string) => {
    const newTarget = parseFloat(tempValue);
    if (isNaN(newTarget) || newTarget <= 0) {
      toast.error("Please enter a valid positive number.");
      return;
    }

    setGoals({
      ...goals,
      [goalKey]: { ...goals[goalKey as keyof typeof goals], target: newTarget }
    });
    setEditingGoal(null);
    toast.success("Goal updated successfully!");
  };

  const handleCancelEdit = () => {
    setEditingGoal(null);
    setTempValue("");
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-gradient-to-b from-indigo-50 to-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-400 to-purple-500 px-6 pt-16 pb-8 text-white">
            <button
              onClick={() => navigate("/home")}
              className="mb-4 text-white/80 hover:text-white"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Target size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Goals</h1>
                <p className="opacity-90">Set and track your targets</p>
              </div>
            </div>

            {/* Overall Progress */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
              <p className="text-sm opacity-90 mb-2">Overall Goal Completion</p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="w-full bg-white/30 rounded-full h-3 mb-2">
                    <div
                      className="bg-white rounded-full h-3 transition-all"
                      style={{
                        width: `${Math.round(
                          (Object.values(goals).reduce((sum, goal) =>
                            sum + Math.min((goal.current / goal.target) * 100, 100), 0
                          ) / Object.keys(goals).length)
                        )}%`
                      }}
                    />
                  </div>
                  <p className="text-xs opacity-90">
                    {Object.values(goals).filter(goal => goal.current >= goal.target).length} of {Object.keys(goals).length} goals met today
                  </p>
                </div>
                <p className="text-4xl font-bold">
                  {Math.round(
                    (Object.values(goals).reduce((sum, goal) =>
                      sum + Math.min((goal.current / goal.target) * 100, 100), 0
                    ) / Object.keys(goals).length)
                  )}%
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Goals List */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Daily Goals</h3>
              <div className="space-y-4">
                {Object.entries(goals).map(([key, goal]) => {
                  const Icon = goal.icon;
                  const percentage = Math.min((goal.current / goal.target) * 100, 100);
                  const isEditing = editingGoal === key;
                  const goalName = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');

                  return (
                    <div
                      key={key}
                      className="bg-white rounded-2xl shadow-lg p-5"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${goal.color} flex items-center justify-center`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">{goalName}</h4>
                          <p className="text-sm text-gray-600">
                            {goal.current} / {goal.target} {goal.unit}
                          </p>
                        </div>
                        {!isEditing ? (
                          <button
                            onClick={() => handleEditGoal(key)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
                          >
                            <Edit2 size={20} className="text-gray-600" />
                          </button>
                        ) : (
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleSaveGoal(key)}
                              className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-all"
                            >
                              <Check size={20} className="text-green-600" />
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all"
                            >
                              ×
                            </button>
                          </div>
                        )}
                      </div>

                      {isEditing ? (
                        <div className="mb-4">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Set New Target
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="number"
                              value={tempValue}
                              onChange={(e) => setTempValue(e.target.value)}
                              className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-400"
                              placeholder={`Enter target ${goal.unit}`}
                              step={key === "bmi" || key === "sleep" ? "0.1" : "1"}
                            />
                            <span className="flex items-center text-gray-600 font-semibold">{goal.unit}</span>
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* Progress Bar */}
                          <div className="mb-2">
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className={`bg-gradient-to-r ${goal.color} rounded-full h-3 transition-all`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className={`font-semibold ${percentage >= 100 ? 'text-green-600' : 'text-gray-600'}`}>
                              {Math.round(percentage)}% {percentage >= 100 ? '✓ Complete' : 'Complete'}
                            </span>
                            {percentage < 100 && (
                              <span className="text-gray-500">
                                {(goal.target - goal.current).toFixed(key === "bmi" || key === "sleep" ? 1 : 0)} {goal.unit} to go
                              </span>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Goal Setting Tips</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 font-bold text-sm">1</span>
                  </div>
                  <p className="text-sm text-gray-700">Set realistic, achievable goals based on your current fitness level</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 font-bold text-sm">2</span>
                  </div>
                  <p className="text-sm text-gray-700">Gradually increase targets as you build consistency</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 font-bold text-sm">3</span>
                  </div>
                  <p className="text-sm text-gray-700">Track progress daily and adjust goals weekly</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 font-bold text-sm">4</span>
                  </div>
                  <p className="text-sm text-gray-700">Celebrate small wins to stay motivated</p>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Stay Committed!</h3>
              <p className="text-sm opacity-90">
                Consistent goal tracking leads to better health outcomes. You're {Object.values(goals).filter(g => g.current >= g.target).length}/{Object.keys(goals).length} goals away from a perfect day!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}
