import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Heart, Settings as SettingsIcon, TrendingUp, Activity, Calendar, Award } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function HeartRate() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const weeklyData = [
    { day: "Mon", bpm: 75 },
    { day: "Tue", bpm: 78 },
    { day: "Wed", bpm: 72 },
    { day: "Thu", bpm: 78 },
    { day: "Fri", bpm: 76 },
    { day: "Sat", bpm: 74 },
    { day: "Sun", bpm: 78 }
  ];

  const maxBpm = Math.max(...weeklyData.map(d => d.bpm));
  const insights = [
    { icon: TrendingUp, title: "Resting Heart Rate", value: "60-72 BPM", status: "Excellent", color: "text-green-500" },
    { icon: Activity, title: "Active Heart Rate", value: "120-140 BPM", status: "Normal", color: "text-blue-500" },
    { icon: Calendar, title: "Weekly Average", value: "76 BPM", status: "Healthy", color: "text-purple-500" }
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-br from-red-400 to-pink-500 px-6 pt-16 pb-12 text-white relative">
            <button
              onClick={() => navigate("/home")}
              className="absolute left-6 top-16 p-2 bg-white/30 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="text-center mt-12">
              <h1 className="text-4xl font-bold mb-6">Heart Rate</h1>
              <Heart className="mx-auto mb-6" size={80} fill="white" />
              <div className="text-6xl font-bold mb-2">78</div>
              <div className="text-2xl mb-6">BPM</div>
              <p className="text-base opacity-90">Last tracked: Today</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6 bg-gray-50">
          {/* Daily Goal Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-3xl font-bold mb-6">Daily Goal</h3>
            <div className="flex items-center justify-between mb-6">
              <div className="flex-1">
                <p className="text-base text-gray-700">Healthy heart rate maintained!</p>
              </div>
              <div className="ml-4">
                <div className="w-20 h-20 rounded-full border-8 border-red-500 flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SettingsIcon className="text-red-500" size={28} />
                <span className="text-lg font-semibold text-gray-800">Reward</span>
              </div>
              <span className="text-red-500 font-bold text-2xl">+10 XP</span>
            </div>
          </div>

          {/* Weekly Challenge Card */}
          <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl shadow-lg p-6 text-white mb-6">
            <h3 className="text-3xl font-bold mb-4">Weekly Challenge</h3>
            <p className="text-base mb-6">Maintain your heart rate healthy for 3 consecutive days</p>
            <div className="mb-6">
              <div className="flex justify-between mb-3 text-base font-semibold">
                <span>Progress</span>
                <span>1 / 3 days</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-4">
                <div className="bg-white rounded-full h-4" style={{ width: '33%' }} />
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SettingsIcon size={28} />
                <span className="text-lg font-semibold">Reward</span>
              </div>
              <span className="font-bold text-2xl">+500 XP</span>
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Weekly History</h3>
            <div className="flex items-end justify-between gap-2 h-40">
              {weeklyData.map((data, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div className="flex-1 w-full flex items-end justify-center">
                    <div
                      className="w-full bg-gradient-to-t from-red-400 to-pink-500 rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${(data.bpm / maxBpm) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-600">{data.day}</span>
                  <span className="text-xs text-gray-500">{data.bpm}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Health Insights */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Health Insights</h3>
            <div className="space-y-4">
              {insights.map((insight, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className={`p-3 rounded-xl ${insight.color} bg-opacity-10`}>
                    <insight.icon className={insight.color} size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-1">{insight.title}</h4>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{insight.value}</p>
                    <p className={`text-sm font-semibold ${insight.color}`}>{insight.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-lg p-6 text-white mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Award size={32} />
              <h3 className="text-2xl font-bold">Achievement Unlocked!</h3>
            </div>
            <p className="text-lg mb-2 font-semibold">Heart Hero</p>
            <p className="text-base opacity-90">Maintained healthy heart rate for 7 consecutive days</p>
            <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
              <span className="text-xl font-bold">+1000 XP Bonus</span>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Health Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl">•</span>
                <p className="text-gray-700">Normal resting heart rate for adults ranges from 60-100 BPM</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl">•</span>
                <p className="text-gray-700">Regular exercise can help lower your resting heart rate</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl">•</span>
                <p className="text-gray-700">Stay hydrated to maintain healthy cardiovascular function</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}