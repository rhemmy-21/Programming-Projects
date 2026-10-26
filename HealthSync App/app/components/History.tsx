import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, History as HistoryIcon, Heart, Footprints, Flame, Moon, Apple, Scale } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function History() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<"steps" | "heartRate" | "calories" | "sleep" | "nutrition" | "bmi">("steps");
  const [timeRange, setTimeRange] = useState<"week" | "month">("week");

  const metrics = [
    { id: "steps" as const, name: "Steps", icon: Footprints, color: "#10b981" },
    { id: "heartRate" as const, name: "Heart Rate", icon: Heart, color: "#ef4444" },
    { id: "calories" as const, name: "Calories", icon: Flame, color: "#f97316" },
    { id: "sleep" as const, name: "Sleep", icon: Moon, color: "#3b82f6" },
    { id: "nutrition" as const, name: "Nutrition", icon: Apple, color: "#eab308" },
    { id: "bmi" as const, name: "BMI", icon: Scale, color: "#a855f7" }
  ];

  const weeklyData = {
    steps: [
      { day: "Mon", value: 8420 },
      { day: "Tue", value: 9870 },
      { day: "Wed", value: 7650 },
      { day: "Thu", value: 10230 },
      { day: "Fri", value: 9723 },
      { day: "Sat", value: 11450 },
      { day: "Sun", value: 8900 }
    ],
    heartRate: [
      { day: "Mon", value: 72 },
      { day: "Tue", value: 75 },
      { day: "Wed", value: 71 },
      { day: "Thu", value: 74 },
      { day: "Fri", value: 78 },
      { day: "Sat", value: 70 },
      { day: "Sun", value: 73 }
    ],
    calories: [
      { day: "Mon", value: 2150 },
      { day: "Tue", value: 2340 },
      { day: "Wed", value: 1980 },
      { day: "Thu", value: 2280 },
      { day: "Fri", value: 2200 },
      { day: "Sat", value: 2450 },
      { day: "Sun", value: 2100 }
    ],
    sleep: [
      { day: "Mon", value: 7.5 },
      { day: "Tue", value: 8.0 },
      { day: "Wed", value: 6.5 },
      { day: "Thu", value: 7.8 },
      { day: "Fri", value: 7.5 },
      { day: "Sat", value: 8.2 },
      { day: "Sun", value: 7.0 }
    ],
    nutrition: [
      { day: "Mon", value: 1850 },
      { day: "Tue", value: 2050 },
      { day: "Wed", value: 1750 },
      { day: "Thu", value: 1920 },
      { day: "Fri", value: 1967 },
      { day: "Sat", value: 2100 },
      { day: "Sun", value: 1800 }
    ],
    bmi: [
      { day: "Mon", value: 17.2 },
      { day: "Tue", value: 17.2 },
      { day: "Wed", value: 17.1 },
      { day: "Thu", value: 17.1 },
      { day: "Fri", value: 17.1 },
      { day: "Sat", value: 17.0 },
      { day: "Sun", value: 17.1 }
    ]
  };

  const monthlyData = {
    steps: [
      { week: "Week 1", value: 62340 },
      { week: "Week 2", value: 68920 },
      { week: "Week 3", value: 71450 },
      { week: "Week 4", value: 65243 }
    ],
    heartRate: [
      { week: "Week 1", value: 73 },
      { week: "Week 2", value: 72 },
      { week: "Week 3", value: 74 },
      { week: "Week 4", value: 73 }
    ],
    calories: [
      { week: "Week 1", value: 15400 },
      { week: "Week 2", value: 16200 },
      { week: "Week 3", value: 15800 },
      { week: "Week 4", value: 15500 }
    ],
    sleep: [
      { week: "Week 1", value: 7.6 },
      { week: "Week 2", value: 7.8 },
      { week: "Week 3", value: 7.4 },
      { week: "Week 4", value: 7.5 }
    ],
    nutrition: [
      { week: "Week 1", value: 13200 },
      { week: "Week 2", value: 14100 },
      { week: "Week 3", value: 13800 },
      { week: "Week 4", value: 13437 }
    ],
    bmi: [
      { week: "Week 1", value: 17.3 },
      { week: "Week 2", value: 17.2 },
      { week: "Week 3", value: 17.1 },
      { week: "Week 4", value: 17.1 }
    ]
  };

  const currentMetric = metrics.find(m => m.id === selectedMetric)!;
  const chartData = timeRange === "week" ? weeklyData[selectedMetric] : monthlyData[selectedMetric];

  const getAverage = () => {
    const sum = chartData.reduce((acc, curr) => acc + curr.value, 0);
    return (sum / chartData.length).toFixed(selectedMetric === "bmi" || selectedMetric === "sleep" ? 1 : 0);
  };

  const getUnit = () => {
    switch (selectedMetric) {
      case "steps": return "steps";
      case "heartRate": return "BPM";
      case "calories": return "kcal";
      case "sleep": return "hours";
      case "nutrition": return "kcal";
      case "bmi": return "";
      default: return "";
    }
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-gradient-to-b from-teal-50 to-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-400 to-cyan-500 px-6 pt-16 pb-8 text-white">
            <button
              onClick={() => navigate("/home")}
              className="mb-4 text-white/80 hover:text-white"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <HistoryIcon size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">History</h1>
                <p className="opacity-90">Track your progress over time</p>
              </div>
            </div>

            {/* Time Range Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setTimeRange("week")}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  timeRange === "week"
                    ? "bg-white text-teal-500"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setTimeRange("month")}
                className={`flex-1 py-3 rounded-xl font-semibold transition-all ${
                  timeRange === "month"
                    ? "bg-white text-teal-500"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Metric Selector */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Select Metric</h3>
              <div className="grid grid-cols-3 gap-3">
                {metrics.map((metric) => {
                  const Icon = metric.icon;
                  const isSelected = selectedMetric === metric.id;

                  return (
                    <button
                      key={metric.id}
                      onClick={() => setSelectedMetric(metric.id)}
                      className={`p-4 rounded-2xl transition-all ${
                        isSelected
                          ? "bg-white shadow-lg ring-2"
                          : "bg-white shadow hover:shadow-md"
                      }`}
                      style={isSelected ? { ringColor: metric.color } : {}}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                        style={{ backgroundColor: metric.color + "20" }}
                      >
                        <Icon size={20} style={{ color: metric.color }} />
                      </div>
                      <p className="text-xs font-semibold text-gray-800 text-center">{metric.name}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{currentMetric.name}</h3>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Average</p>
                  <p className="text-2xl font-bold" style={{ color: currentMetric.color }}>
                    {getAverage()} {getUnit()}
                  </p>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={250}>
                {selectedMetric === "steps" || selectedMetric === "calories" || selectedMetric === "nutrition" ? (
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey={timeRange === "week" ? "day" : "week"} tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill={currentMetric.color} radius={[8, 8, 0, 0]} />
                  </BarChart>
                ) : (
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey={timeRange === "week" ? "day" : "week"} tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={currentMetric.color}
                      strokeWidth={3}
                      dot={{ fill: currentMetric.color, r: 5 }}
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>

            {/* Insights */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Insights</h3>
              <div className="space-y-3">
                <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-500">
                  <p className="text-sm text-green-800">
                    <strong>Trend:</strong> Your {currentMetric.name.toLowerCase()} is {timeRange === "week" ? "improving" : "stable"} this {timeRange}.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                  <p className="text-sm text-blue-800">
                    <strong>Best Day:</strong> {chartData.reduce((max, curr) => curr.value > max.value ? curr : max).day || chartData.reduce((max, curr) => curr.value > max.value ? curr : max).week} with {chartData.reduce((max, curr) => curr.value > max.value ? curr : max).value} {getUnit()}
                  </p>
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Keep Tracking!</h3>
              <p className="text-sm opacity-90">
                Consistent tracking helps you identify patterns and make data-driven health decisions.
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
