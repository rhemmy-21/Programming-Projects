import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Sparkles, TrendingUp, TrendingDown, AlertCircle, CheckCircle, Heart, Footprints, Flame, Moon, Brain } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function Insights() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const weeklyScore = 87;

  const insights = [
    {
      type: "positive",
      icon: CheckCircle,
      title: "Great Sleep Pattern",
      description: "You've averaged 7.5 hours of sleep this week, very close to your 8-hour goal.",
      metric: "Sleep",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
      iconColor: "text-blue-600"
    },
    {
      type: "positive",
      icon: TrendingUp,
      title: "Steps Trending Up",
      description: "Your daily step count increased by 18% compared to last week. Keep it up!",
      metric: "Steps",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-800",
      iconColor: "text-green-600"
    },
    {
      type: "warning",
      icon: AlertCircle,
      title: "Heart Rate Elevated",
      description: "Your resting heart rate has been slightly higher than usual. Consider stress management.",
      metric: "Heart Rate",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
      iconColor: "text-amber-600"
    },
    {
      type: "neutral",
      icon: TrendingDown,
      title: "BMI Slightly Low",
      description: "Your BMI is 17.1, which is in the underweight category. Consider increasing calorie intake.",
      metric: "BMI",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-800",
      iconColor: "text-purple-600"
    }
  ];

  const recommendations = [
    {
      icon: Heart,
      title: "Practice Stress Reduction",
      description: "Try 10 minutes of meditation or deep breathing exercises daily to lower your heart rate.",
      action: "Start Now"
    },
    {
      icon: Footprints,
      title: "Maintain Step Momentum",
      description: "You're doing great! Try adding a 15-minute evening walk to maintain your streak.",
      action: "Set Reminder"
    },
    {
      icon: Flame,
      title: "Optimize Nutrition",
      description: "Add 200-300 calories of nutrient-dense foods to reach a healthier BMI range.",
      action: "View Tips"
    },
    {
      icon: Moon,
      title: "Consistent Sleep Schedule",
      description: "Go to bed at the same time each night to improve sleep quality further.",
      action: "Set Bedtime"
    }
  ];

  const weeklyHighlights = [
    { label: "Best Day", value: "Thursday", sublabel: "5/6 goals met" },
    { label: "Total XP Earned", value: "280", sublabel: "+15% vs last week" },
    { label: "Streak Days", value: "5", sublabel: "Keep going!" },
    { label: "Challenges Done", value: "2/4", sublabel: "Active this week" }
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-gradient-to-b from-violet-50 to-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-r from-violet-400 to-purple-500 px-6 pt-16 pb-8 text-white">
            <button
              onClick={() => navigate("/home")}
              className="mb-4 text-white/80 hover:text-white"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Sparkles size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Insights</h1>
                <p className="opacity-90">AI-powered health analysis</p>
              </div>
            </div>

            {/* Weekly Score */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-sm opacity-90">Weekly Health Score</p>
                  <p className="text-5xl font-bold">{weeklyScore}</p>
                </div>
                <div className="w-20 h-20 rounded-full border-8 border-white/40 flex items-center justify-center">
                  <Brain size={36} />
                </div>
              </div>
              <p className="text-sm opacity-90">
                {weeklyScore >= 80 ? "Excellent! You're on track." : weeklyScore >= 60 ? "Good progress, room to improve." : "Let's work on building better habits."}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Key Insights */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Key Insights</h3>
              <div className="space-y-4">
                {insights.map((insight, idx) => {
                  const Icon = insight.icon;

                  return (
                    <div
                      key={idx}
                      className={`${insight.bgColor} rounded-2xl p-5 border-l-4`}
                      style={{ borderColor: insight.type === "positive" ? "#10b981" : insight.type === "warning" ? "#f59e0b" : "#6b7280" }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0`}>
                          <Icon size={24} className={insight.iconColor} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-bold ${insight.textColor} mb-1`}>{insight.title}</h4>
                          <p className={`text-sm ${insight.textColor} opacity-90`}>{insight.description}</p>
                          <p className={`text-xs ${insight.textColor} opacity-70 mt-2`}>Metric: {insight.metric}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recommendations */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personalized Recommendations</h3>
              <div className="space-y-4">
                {recommendations.map((rec, idx) => {
                  const Icon = rec.icon;

                  return (
                    <div key={idx} className="bg-white rounded-2xl shadow-lg p-5">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-1">{rec.title}</h4>
                          <p className="text-sm text-gray-600">{rec.description}</p>
                        </div>
                      </div>
                      <button className="w-full py-2 bg-gradient-to-r from-violet-400 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                        {rec.action}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Weekly Highlights */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">This Week's Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {weeklyHighlights.map((highlight, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-3.5">
                    <p className="text-xs text-gray-600 mb-1 leading-tight">{highlight.label}</p>
                    <p className="text-2xl font-bold text-gray-800 mb-1 leading-tight break-words">{highlight.value}</p>
                    <p className="text-xs text-gray-500 leading-tight break-words">{highlight.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Health Trends Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Health Trends</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <TrendingUp size={20} className="text-green-600" />
                    <span className="text-sm font-semibold text-gray-800">Activity Level</span>
                  </div>
                  <span className="text-sm font-bold text-green-600">+18%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <TrendingUp size={20} className="text-blue-600" />
                    <span className="text-sm font-semibold text-gray-800">Sleep Quality</span>
                  </div>
                  <span className="text-sm font-bold text-blue-600">+5%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <TrendingDown size={20} className="text-amber-600" />
                    <span className="text-sm font-semibold text-gray-800">Stress Indicators</span>
                  </div>
                  <span className="text-sm font-bold text-amber-600">+8%</span>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-violet-400 to-purple-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Weekly Report Ready</h3>
              <p className="text-sm opacity-90 mb-4">
                Your detailed health analysis updates every Sunday at 8 PM with personalized insights and trends.
              </p>
              <button className="w-full py-3 bg-white text-violet-600 rounded-xl font-semibold hover:shadow-lg transition-all">
                Download Full Report
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}
