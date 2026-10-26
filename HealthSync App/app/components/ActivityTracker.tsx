import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Activity, Heart, Footprints, Flame, Moon, Apple, Scale, TrendingUp, Calendar } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function ActivityTracker() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const todayActivities = [
    { icon: Heart, label: "Heart Rate", value: "78 BPM", status: "Normal", color: "from-red-400 to-pink-500", route: "/heart-rate" },
    { icon: Footprints, label: "Steps", value: "9,723", target: "10,000", progress: 97, color: "from-green-400 to-green-500", route: "/steps" },
    { icon: Flame, label: "Calories", value: "2,200 kcal", status: "Goal Met", color: "from-orange-400 to-orange-500", route: "/calories" },
    { icon: Moon, label: "Sleep", value: "7h 30m", target: "8h", progress: 94, color: "from-blue-400 to-blue-500", route: "/sleep" },
    { icon: Apple, label: "Nutrition", value: "967 kcal", status: "On Track", color: "from-yellow-400 to-yellow-500", route: "/nutrition" },
    { icon: Scale, label: "BMI", value: "17.1", status: "Underweight", color: "from-purple-400 to-purple-500", route: "/bmi" }
  ];

  const weeklyProgress = [
    { day: "Mon", completion: 85 },
    { day: "Tue", completion: 92 },
    { day: "Wed", completion: 78 },
    { day: "Thu", completion: 95 },
    { day: "Fri", completion: 97 },
    { day: "Sat", completion: 88 },
    { day: "Sun", completion: 90 }
  ];

  const recentAchievements = [
    { text: "Reached 10,000 steps!", time: "2 hours ago", icon: "🏃" },
    { text: "7 day streak maintained", time: "Today", icon: "🔥" },
    { text: "Sleep goal achieved", time: "Yesterday", icon: "😴" }
  ];

  const overallCompletion = Math.round(
    todayActivities.reduce((sum, activity) => sum + (activity.progress || 100), 0) / todayActivities.length
  );

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 flex flex-col">
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
                <Activity size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Activity</h1>
                <p className="opacity-90">Track all activities</p>
              </div>
            </div>

            {/* Overall Progress */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm opacity-90">Overall Progress</p>
                  <p className="text-3xl font-bold">{overallCompletion}%</p>
                </div>
                <Calendar className="opacity-80" size={40} />
              </div>
              <div className="w-full bg-white/30 rounded-full h-3">
                <div
                  className="bg-white rounded-full h-3 transition-all"
                  style={{ width: `${overallCompletion}%` }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Today's Activities */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Today's Activities</h3>
              <div className="space-y-3">
                {todayActivities.map((activity, idx) => {
                  const Icon = activity.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => navigate(activity.route)}
                      className={`w-full bg-gradient-to-r ${activity.color} rounded-2xl p-5 text-white shadow-lg hover:shadow-xl transition-all`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Icon size={24} />
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-lg">{activity.label}</p>
                            <p className="text-sm opacity-90">
                              {activity.value}
                              {activity.target && ` / ${activity.target}`}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          {activity.progress !== undefined ? (
                            <div className="text-2xl font-bold">{activity.progress}%</div>
                          ) : (
                            <div className="text-sm font-semibold bg-white/30 px-3 py-1 rounded-full">
                              {activity.status}
                            </div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Weekly Progress Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Weekly Completion</h3>
              <div className="flex items-end justify-between gap-2 h-40">
                {weeklyProgress.map((day, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex-1 w-full flex items-end justify-center">
                      <div
                        className="w-full bg-gradient-to-t from-indigo-400 to-purple-500 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${day.completion}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{day.day}</span>
                    <span className="text-xs text-gray-500">{day.completion}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Achievements</h3>
              <div className="space-y-4">
                {recentAchievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{achievement.text}</p>
                      <p className="text-sm text-gray-500">{achievement.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Today's Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <TrendingUp size={24} className="mb-2" />
                  <p className="text-2xl font-bold">6/6</p>
                  <p className="text-sm opacity-90">Goals Active</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <Activity size={24} className="mb-2" />
                  <p className="text-2xl font-bold">40 XP</p>
                  <p className="text-sm opacity-90">Earned Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}
