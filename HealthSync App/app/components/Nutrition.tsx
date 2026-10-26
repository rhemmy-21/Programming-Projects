import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Apple, Settings as SettingsIcon, Droplets, TrendingUp, Coffee, UtensilsCrossed, Cookie } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function Nutrition() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const macros = [
    { name: "Carbs", amount: 120, goal: 250, color: "bg-blue-500", percentage: 48 },
    { name: "Protein", amount: 45, goal: 75, color: "bg-red-500", percentage: 60 },
    { name: "Fats", amount: 35, goal: 65, color: "bg-yellow-500", percentage: 54 }
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 px-6 pt-16 pb-12 text-white relative">
          <button
            onClick={() => navigate("/home")}
            className="absolute left-6 top-16 p-2 bg-white/30 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="text-center mt-12">
            <h1 className="text-4xl font-bold mb-6">Nutrition</h1>
            <Apple className="mx-auto mb-6" size={80} />
            <div className="flex justify-center items-baseline gap-8 mb-6">
              <div>
                <div className="text-5xl font-bold">967</div>
                <div className="text-lg">Kcal</div>
              </div>
              <div>
                <div className="text-5xl font-bold">2.00</div>
                <div className="text-lg">Liters</div>
              </div>
            </div>
            <p className="text-base opacity-90">Last tracked: Today</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 bg-gray-50">
          {/* Daily Goal Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-3xl font-bold mb-6">Daily Goal</h3>
            
            <div className="mb-8">
              <p className="text-base text-gray-700 mb-3">Calorie left to go:</p>
              <p className="text-4xl font-bold text-yellow-500 mb-4">1,533 Kcal</p>
              <div className="flex items-center gap-6">
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
                      stroke="#eab308"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.387} ${2 * Math.PI * 40}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-500">38.7%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">kilocalories</p>
                </div>
              </div>
            </div>

            <div className="mb-6 pt-6 border-t-2 border-gray-100">
              <p className="text-base text-gray-700 mb-3">Liters left to go:</p>
              <p className="text-4xl font-bold text-yellow-500 mb-4">1.7 L</p>
              <div className="flex items-center gap-6">
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
                      stroke="#eab308"
                      strokeWidth="8"
                      strokeDasharray={`${2 * Math.PI * 40 * 0.54} ${2 * Math.PI * 40}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-yellow-500">54%</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">liters</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SettingsIcon className="text-yellow-500" size={28} />
                <span className="text-lg font-semibold text-gray-800">Reward</span>
              </div>
              <span className="text-yellow-500 font-bold text-2xl">+10 XP</span>
            </div>
          </div>

          {/* Weekly Challenge Card */}
          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-lg p-6 text-white mb-6">
            <h3 className="text-3xl font-bold mb-4">Weekly Challenge</h3>
            <p className="text-base mb-6">Consume at least 5000 kcal for 3 days</p>
            <div className="mb-6">
              <div className="flex justify-between mb-3 text-base font-semibold">
                <span>Progress</span>
                <span>967 / 5000</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-4">
                <div className="bg-white rounded-full h-4" style={{ width: '19%' }} />
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

          {/* Macronutrients */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Macronutrients</h3>
            <div className="space-y-5">
              {macros.map((macro, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-800">{macro.name}</span>
                    <span className="text-gray-600">{macro.amount}g / {macro.goal}g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${macro.color} rounded-full h-3 transition-all`}
                      style={{ width: `${macro.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hydration Tracker */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="text-blue-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Hydration</h3>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((glass, idx) => (
                <div
                  key={idx}
                  className={`h-16 rounded-xl flex items-center justify-center ${
                    idx < 4 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <Droplets size={20} />
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600">4 / 8 glasses (2.0 / 3.7 L)</p>
          </div>

          {/* Meal Breakdown */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Today's Meals</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
                <Coffee className="text-orange-500" size={24} />
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Breakfast</p>
                  <p className="text-sm text-gray-600">450 kcal</p>
                </div>
                <span className="text-lg font-bold text-orange-500">47%</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl">
                <UtensilsCrossed className="text-green-500" size={24} />
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Lunch</p>
                  <p className="text-sm text-gray-600">337 kcal</p>
                </div>
                <span className="text-lg font-bold text-green-500">35%</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl">
                <Cookie className="text-purple-500" size={24} />
                <div className="flex-1">
                  <p className="font-bold text-gray-800">Snacks</p>
                  <p className="text-sm text-gray-600">180 kcal</p>
                </div>
                <span className="text-lg font-bold text-purple-500">18%</span>
              </div>
            </div>
          </div>

          {/* Nutrition Insights */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nutrition Insights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-2xl">
                <TrendingUp className="text-yellow-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Low Calorie Intake</h4>
                  <p className="text-sm text-gray-600">You're consuming below your target. Try adding calorie-dense healthy foods like nuts, seeds, and avocados.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                <Droplets className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Good Hydration</h4>
                  <p className="text-sm text-gray-600">You're over 50% of your hydration goal! Keep up the good work and aim for 4 more glasses today.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-2xl">
                <Apple className="text-red-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Protein Goal</h4>
                  <p className="text-sm text-gray-600">Great job! You're 60% of the way to your protein target. Consider adding lean meats or legumes to dinner.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nutrition Tips */}
          <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nutrition Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">•</span>
                <p className="text-gray-700">Eat a variety of colorful fruits and vegetables to get diverse nutrients</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">•</span>
                <p className="text-gray-700">Balance your macros: 40-50% carbs, 25-35% protein, 20-30% fats</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">•</span>
                <p className="text-gray-700">Drink water before meals to stay hydrated and support digestion</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 text-xl">•</span>
                <p className="text-gray-700">Avoid skipping meals - eat regularly to maintain stable blood sugar levels</p>
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