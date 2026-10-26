import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Activity, TrendingDown, TrendingUp, AlertTriangle, Info } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function BMI() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const bmiCategories = [
    { label: "Underweight", range: "Below 18.5", highlight: true },
    { label: "Normal", range: "18.5 - 24.9", highlight: false },
    { label: "Overweight", range: "25.0 - 29.9", highlight: false },
    { label: "Obesity Class I", range: "30.0 - 34.9", highlight: false },
    { label: "Obesity Class II", range: "35.0 - 39.9", highlight: false },
  ];

  const bmiHistory = [
    { month: "Jan", bmi: 16.8 },
    { month: "Feb", bmi: 16.9 },
    { month: "Mar", bmi: 17.0 },
    { month: "Apr", bmi: 17.1 },
    { month: "May", bmi: 17.1 }
  ];

  const maxBmi = 25;
  const targetBmi = 20;

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-br from-purple-400 to-purple-500 px-6 pt-16 pb-12 text-white relative">
            <button
              onClick={() => navigate("/home")}
              className="absolute left-6 top-16 p-2 bg-white/30 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="text-center mt-12">
              <h1 className="text-4xl font-bold mb-6">BMI</h1>
              <Activity className="mx-auto mb-6" size={80} />
              <div className="text-6xl font-bold mb-2">17.1</div>
              <div className="text-2xl mb-6">Body-Mass Index</div>
              <p className="text-base opacity-90">Last tracked: Today</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6 bg-gray-50">
            {/* Health Status Card */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-3xl font-bold mb-6">Health Status</h3>

              <div className="bg-purple-100 rounded-2xl p-5 mb-6">
                <p className="text-base text-gray-700">
                  BMI Category: <span className="font-bold text-red-500">Underweight</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Current Height</p>
                  <p className="text-4xl font-bold text-purple-500">171 cm</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Current Weight</p>
                  <p className="text-4xl font-bold text-purple-500">50 kg</p>
                </div>
              </div>
            </div>

            {/* BMI History */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">BMI History</h3>
              <div className="flex items-end justify-between gap-2 h-40 mb-4">
                {bmiHistory.map((data, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex-1 w-full flex items-end justify-center relative">
                      {/* Target line */}
                      <div
                        className="absolute left-0 right-0 border-t-2 border-dashed border-green-400"
                        style={{ bottom: `${(targetBmi / maxBmi) * 100}%` }}
                      />
                      <div
                        className="w-full bg-gradient-to-t from-purple-400 to-purple-500 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${(data.bmi / maxBmi) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{data.month}</span>
                    <span className="text-xs text-gray-500">{data.bmi}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <div className="w-4 h-0.5 border-t-2 border-dashed border-green-400"></div>
                <span>Target BMI: {targetBmi}</span>
              </div>
            </div>

            {/* BMI Category Card */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">BMI Categories</h3>
              <div className="space-y-3">
                {bmiCategories.map((category, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl flex justify-between items-center ${
                      category.highlight
                        ? "bg-purple-500 text-white font-semibold"
                        : "bg-gray-50 text-gray-800"
                    }`}
                  >
                    <span className="text-base">{category.label}</span>
                    <span className="text-base">{category.range}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Insights */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Health Insights</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-2xl">
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Underweight Status</h4>
                    <p className="text-sm text-gray-600">Your BMI is below the healthy range. Consider consulting with a healthcare provider to develop a healthy weight gain plan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl">
                  <TrendingUp className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Positive Trend</h4>
                    <p className="text-sm text-gray-600">Your BMI has been gradually increasing over the past months. Continue with your current nutrition plan!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-2xl">
                  <Info className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Target Weight</h4>
                    <p className="text-sm text-gray-600">To reach a healthy BMI of 20, you would need to gain approximately 8.5 kg (reach 58.5 kg).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">BMI Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">•</span>
                  <p className="text-gray-700">Focus on nutrient-dense foods like nuts, avocados, and whole grains to gain weight healthily</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">•</span>
                  <p className="text-gray-700">Add strength training exercises to build muscle mass, not just fat</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">•</span>
                  <p className="text-gray-700">Eat more frequently - aim for 5-6 smaller meals throughout the day</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">•</span>
                  <p className="text-gray-700">Stay hydrated and get adequate sleep for optimal metabolism</p>
                </li>
              </ul>
            </div>

            {/* Important Note */}
            <div className="bg-yellow-50 rounded-2xl p-4 border-l-4 border-yellow-500">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> BMI is a general indicator. It doesn't account for muscle mass, bone density, or body composition. Consult a healthcare provider for personalized advice.
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