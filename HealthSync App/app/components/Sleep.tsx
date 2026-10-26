import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Moon, Settings as SettingsIcon, Sunrise, Sunset, Cloud, Zap, BarChart3 } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function Sleep() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const sleepStages = [
    { stage: "Awake", duration: 15, color: "bg-yellow-400", percent: 3 },
    { stage: "Light", duration: 240, color: "bg-blue-300", percent: 53 },
    { stage: "Deep", duration: 90, color: "bg-blue-600", percent: 20 },
    { stage: "REM", duration: 105, color: "bg-purple-500", percent: 24 }
  ];

  const weeklyData = [
    { day: "Mon", hours: 7.5 },
    { day: "Tue", hours: 8.2 },
    { day: "Wed", hours: 6.8 },
    { day: "Thu", hours: 7.8 },
    { day: "Fri", hours: 7.3 },
    { day: "Sat", hours: 8.5 },
    { day: "Sun", hours: 7.5 }
  ];

  const maxHours = 10;

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 px-6 pt-16 pb-12 text-white relative">
            <button
              onClick={() => navigate("/home")}
              className="absolute left-6 top-16 p-2 bg-white/30 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="text-center mt-12">
              <h1 className="text-4xl font-bold mb-6">Sleep</h1>
              <Moon className="mx-auto mb-6" size={80} />
              <div className="text-5xl font-bold mb-2">7 hr 30 min</div>
              <div className="text-2xl mb-6">slept</div>
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
                <p className="text-base text-gray-700 mb-2">30 minutes to go</p>
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
                      stroke="#3b82f6"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.938} ${2 * Math.PI * 40}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-500">93.8%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-base text-gray-700 mb-2">Time of sleep:</p>
              <p className="text-4xl font-bold text-blue-500">10:17 p.m.</p>
              <p className="text-sm text-gray-500 mt-1">Tue, March 24, 2026</p>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-gray-800">Reward</span>
              </div>
              <span className="text-blue-500 font-bold text-2xl">+10 XP</span>
            </div>
          </div>

          {/* Weekly Challenge Card */}
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl shadow-lg p-6 text-white mb-6">
            <h3 className="text-3xl font-bold mb-4">Weekly Challenge</h3>
            <p className="text-base mb-6">Achieve at least 8 hours of sleep for 3 consecutive days</p>
            <div className="mb-6">
              <div className="flex justify-between mb-3 text-base font-semibold">
                <span>Progress</span>
                <span>0 / 3 days</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-4">
                <div className="bg-white rounded-full h-4" style={{ width: '0%' }} />
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

          {/* Sleep Quality Score */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Sleep Quality</h3>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="12"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="12"
                    strokeDasharray={`${2 * Math.PI * 70 * 0.85} ${2 * Math.PI * 70}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-bold text-blue-500">85</span>
                  <span className="text-sm text-gray-500">Good</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <Sunset className="mx-auto mb-2 text-blue-600" size={24} />
                <p className="text-sm text-gray-600 mb-1">Bedtime</p>
                <p className="text-xl font-bold text-gray-800">10:17 PM</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <Sunrise className="mx-auto mb-2 text-blue-600" size={24} />
                <p className="text-sm text-gray-600 mb-1">Wake Time</p>
                <p className="text-xl font-bold text-gray-800">5:47 AM</p>
              </div>
            </div>
          </div>

          {/* Sleep Stages */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Sleep Stages</h3>
            <div className="mb-6">
              <div className="flex rounded-full overflow-hidden h-8">
                {sleepStages.map((stage, idx) => (
                  <div
                    key={idx}
                    className={`${stage.color} transition-all`}
                    style={{ width: `${stage.percent}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              {sleepStages.map((stage, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${stage.color}`} />
                    <span className="font-semibold text-gray-700">{stage.stage}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-gray-800">{stage.duration} min</span>
                    <span className="text-sm text-gray-500 ml-2">({stage.percent}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Weekly Sleep</h3>
            <div className="flex items-end justify-between gap-2 h-40 mb-4">
              {weeklyData.map((data, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                  <div className="flex-1 w-full flex items-end justify-center">
                    <div
                      className="w-full bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${(data.hours / maxHours) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-600">{data.day}</span>
                  <span className="text-xs text-gray-500">{data.hours}h</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm bg-blue-50 rounded-xl p-4">
              <span className="text-gray-600">Weekly Average</span>
              <span className="font-bold text-blue-600">7.7 hours</span>
            </div>
          </div>

          {/* Sleep Insights */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Sleep Insights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl">
                <Cloud className="text-green-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Consistent Schedule</h4>
                  <p className="text-sm text-gray-600">You've been going to bed around the same time this week. Great job!</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-2xl">
                <Zap className="text-amber-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Deep Sleep</h4>
                  <p className="text-sm text-gray-600">Your deep sleep is slightly below average. Try avoiding screens before bed.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-2xl">
                <BarChart3 className="text-purple-600 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">REM Sleep</h4>
                  <p className="text-sm text-gray-600">Your REM sleep is excellent at 24%. This supports memory and learning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Sleep Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">•</span>
                <p className="text-gray-700">Maintain a consistent sleep schedule, even on weekends</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">•</span>
                <p className="text-gray-700">Keep your bedroom cool, dark, and quiet for optimal sleep</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 text-xl">•</span>
                <p className="text-gray-700">Avoid caffeine and heavy meals 3-4 hours before bedtime</p>
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