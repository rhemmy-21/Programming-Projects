import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Footprints, Settings as SettingsIcon, TrendingUp, Target, MapPin, Clock } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function Steps() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const hourlyData = [
    { hour: "6AM", steps: 120 },
    { hour: "8AM", steps: 850 },
    { hour: "10AM", steps: 1200 },
    { hour: "12PM", steps: 1500 },
    { hour: "2PM", steps: 2100 },
    { hour: "4PM", steps: 1800 },
    { hour: "6PM", steps: 1400 },
    { hour: "8PM", steps: 753 }
  ];

  const weeklyData = [
    { day: "Mon", steps: 8234 },
    { day: "Tue", steps: 9521 },
    { day: "Wed", steps: 7865 },
    { day: "Thu", steps: 10234 },
    { day: "Fri", steps: 9723 },
    { day: "Sat", steps: 6543 },
    { day: "Sun", steps: 11234 }
  ];

  const maxSteps = Math.max(...weeklyData.map(d => d.steps));
  const maxHourly = Math.max(...hourlyData.map(d => d.steps));

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-br from-green-400 to-green-500 px-6 pt-16 pb-12 text-white relative">
            <button
              onClick={() => navigate("/home")}
              className="absolute left-6 top-16 p-2 bg-white/30 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="text-center mt-12">
              <h1 className="text-4xl font-bold mb-6">Steps</h1>
              <Footprints className="mx-auto mb-6" size={80} />
              <div className="text-6xl font-bold mb-2">9,723</div>
              <div className="text-2xl mb-6">steps</div>
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
                  <p className="text-base text-gray-700 mb-2">277 steps to go</p>
                </div>
                <div className="ml-4">
                  <div className="relative w-24 h-24">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="8"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="8"
                        strokeDasharray={`${2 * Math.PI * 40 * 0.97} ${2 * Math.PI * 40}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-green-500">97%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-base text-gray-700 mb-2">Distance covered:</p>
                <p className="text-4xl font-bold text-green-500">9.67 km</p>
              </div>

              <div className="bg-green-50 rounded-2xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold text-gray-800">Reward</span>
                </div>
                <span className="text-green-500 font-bold text-2xl">+10 XP</span>
              </div>
            </div>

            {/* Weekly Challenge Card */}
            <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-3xl shadow-lg p-6 text-white mb-6">
              <h3 className="text-3xl font-bold mb-4">Weekly Challenge</h3>
              <p className="text-base mb-6">Achieve at least 5,000 steps for 3 consecutive days</p>
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

            {/* Hourly Activity */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Today's Activity</h3>
              <div className="flex items-end justify-between gap-1 h-40">
                {hourlyData.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex-1 w-full flex items-end justify-center">
                      <div
                        className="w-full bg-gradient-to-t from-green-400 to-green-500 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${(data.steps / maxHourly) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{data.hour}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">Peak activity: 2PM with 2,100 steps</p>
            </div>

            {/* Weekly Chart */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Weekly Progress</h3>
              <div className="flex items-end justify-between gap-2 h-40">
                {weeklyData.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex-1 w-full flex items-end justify-center">
                      <div
                        className="w-full bg-gradient-to-t from-green-400 to-green-500 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${(data.steps / maxSteps) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{data.day}</span>
                    <span className="text-xs text-gray-500">{(data.steps / 1000).toFixed(1)}k</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Stats */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Activity Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-green-600" size={20} />
                    <span className="text-sm text-gray-600">Avg Steps</span>
                  </div>
                  <p className="text-3xl font-bold text-green-600">9,194</p>
                  <p className="text-xs text-gray-500 mt-1">This week</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-600">Goal Rate</span>
                  </div>
                  <p className="text-3xl font-bold text-blue-600">86%</p>
                  <p className="text-xs text-gray-500 mt-1">6/7 days</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="text-purple-600" size={20} />
                    <span className="text-sm text-gray-600">Total Distance</span>
                  </div>
                  <p className="text-3xl font-bold text-purple-600">64.3</p>
                  <p className="text-xs text-gray-500 mt-1">km this week</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="text-orange-600" size={20} />
                    <span className="text-sm text-gray-600">Active Time</span>
                  </div>
                  <p className="text-3xl font-bold text-orange-600">5.2</p>
                  <p className="text-xs text-gray-500 mt-1">hours today</p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Walking Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">•</span>
                  <p className="text-gray-700">Take the stairs instead of the elevator to boost daily steps</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">•</span>
                  <p className="text-gray-700">A 10-minute walk after meals can aid digestion and add 1,000+ steps</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">•</span>
                  <p className="text-gray-700">Park further away from entrances to naturally increase your step count</p>
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