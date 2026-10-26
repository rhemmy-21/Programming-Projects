import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Flame, Settings as SettingsIcon, UtensilsCrossed, Coffee, Apple, Pizza } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function Calories() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const activities = [
    { name: "Running", calories: 550, icon: "🏃" },
    { name: "Walking", calories: 250, icon: "🚶" },
    { name: "Bicycling", calories: 400, icon: "🚴" },
  ];

  const meals = [
    { name: "Breakfast", time: "7:30 AM", calories: 450, items: ["Oatmeal", "Banana", "Coffee"], icon: Coffee },
    { name: "Lunch", time: "12:45 PM", calories: 680, items: ["Grilled Chicken", "Rice", "Salad"], icon: UtensilsCrossed },
    { name: "Snack", time: "3:00 PM", calories: 180, items: ["Apple", "Almonds"], icon: Apple },
    { name: "Dinner", time: "7:00 PM", calories: 750, items: ["Salmon", "Vegetables", "Quinoa"], icon: Pizza }
  ];

  const weeklyData = [
    { day: "Mon", burned: 2100, consumed: 2050 },
    { day: "Tue", burned: 2250, consumed: 2100 },
    { day: "Wed", burned: 2050, consumed: 1980 },
    { day: "Thu", burned: 2200, consumed: 2150 },
    { day: "Fri", burned: 2200, consumed: 2060 },
    { day: "Sat", burned: 1950, consumed: 2200 },
    { day: "Sun", burned: 2100, consumed: 2000 }
  ];

  const maxCalories = 2500;
  const totalConsumed = meals.reduce((sum, meal) => sum + meal.calories, 0);
  const netCalories = 2200 - totalConsumed;

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 px-6 pt-16 pb-12 text-white relative">
            <button
              onClick={() => navigate("/home")}
              className="absolute left-6 top-16 p-2 bg-white/30 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="text-center mt-12">
              <h1 className="text-4xl font-bold mb-6">Calories</h1>
              <Flame className="mx-auto mb-6" size={80} />
              <div className="text-6xl font-bold mb-2">2,200</div>
              <div className="text-2xl mb-6">kcal burned</div>
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
                  <p className="text-base text-gray-700">Amount of calories burnt achieved!</p>
                </div>
                <div className="ml-4">
                  <div className="w-20 h-20 rounded-full border-8 border-orange-500 flex items-center justify-center">
                    <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-2xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SettingsIcon className="text-orange-500" size={28} />
                  <span className="text-lg font-semibold text-gray-800">Reward</span>
                </div>
                <span className="text-orange-500 font-bold text-2xl">+10 XP</span>
              </div>
            </div>

            {/* Calorie Balance */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Today's Balance</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Consumed</p>
                  <p className="text-2xl font-bold text-orange-500">{totalConsumed}</p>
                  <p className="text-xs text-gray-400">kcal</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Burned</p>
                  <p className="text-2xl font-bold text-green-500">2,200</p>
                  <p className="text-xs text-gray-400">kcal</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Net</p>
                  <p className={`text-2xl font-bold ${netCalories < 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {netCalories > 0 ? '+' : ''}{netCalories}
                  </p>
                  <p className="text-xs text-gray-400">kcal</p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-orange-500 h-full transition-all"
                  style={{ width: `${(totalConsumed / 2500) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                {2500 - totalConsumed} kcal remaining of daily limit
              </p>
            </div>

            {/* Meals Log */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Meals Today</h3>
              <div className="space-y-4">
                {meals.map((meal, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                          <meal.icon className="text-orange-600" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{meal.name}</h4>
                          <p className="text-xs text-gray-500">{meal.time}</p>
                        </div>
                      </div>
                      <p className="text-xl font-bold text-orange-500">{meal.calories} kcal</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {meal.items.map((item, i) => (
                        <span key={i} className="text-xs bg-white px-3 py-1 rounded-full text-gray-600">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities Card */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Activities</h3>
              <div className="space-y-4">
                {activities.map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="flex-shrink-0 text-3xl">{activity.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-bold text-gray-800">{activity.name}</span>
                        <span className="text-xl font-bold text-orange-500">{activity.calories} kcal</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-orange-500 rounded-full h-3"
                          style={{ width: `${(activity.calories / 550) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Trend */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Weekly Trend</h3>
              <div className="space-y-3">
                {weeklyData.map((data, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-700">{data.day}</span>
                      <div className="flex gap-4">
                        <span className="text-red-500">↑ {data.consumed}</span>
                        <span className="text-green-500">↓ {data.burned}</span>
                      </div>
                    </div>
                    <div className="flex gap-1 h-2">
                      <div
                        className="bg-red-400 rounded"
                        style={{ width: `${(data.consumed / maxCalories) * 100}%` }}
                      />
                      <div
                        className="bg-green-400 rounded"
                        style={{ width: `${(data.burned / maxCalories) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded"></div>
                  <span className="text-gray-600">Consumed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded"></div>
                  <span className="text-gray-600">Burned</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Nutrition Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p className="text-gray-700">Eating smaller, frequent meals can help maintain energy levels</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p className="text-gray-700">Track your macros: 40% carbs, 30% protein, 30% healthy fats</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 text-xl">•</span>
                  <p className="text-gray-700">Stay within your calorie budget to meet your health goals</p>
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