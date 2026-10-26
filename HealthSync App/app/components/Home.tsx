import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { Menu, Search, Heart, Footprints, Flame, Apple, Activity, Moon, User, ChevronLeft, ChevronRight, Trophy, Zap, Gift, Users, Swords, UserPlus, TrendingUp, Target, Brain, Home as HomeIcon, Settings } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";
import { useUser } from "../UserContext";
import { calculateBMI, getBMIDisplay } from "../utils/bmi";

export function Home() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { userData } = useUser();

  // Calculate BMI dynamically
  const bmiData = useMemo(() => {
    if (userData.height > 0 && userData.weight > 0) {
      return calculateBMI(userData.height, userData.weight);
    }
    return null;
  }, [userData.height, userData.weight]);

  const healthCards = [
    { icon: Heart, label: "Heart Rate", value: "78 bpm (Normal)", color: "from-red-400 to-pink-500", route: "/heart-rate", xp: "+10 XP", animation: "animate-heartbeat" },
    { icon: Footprints, label: "Steps", value: "9,723 / 10,000 steps", color: "from-green-400 to-green-500", route: "/steps", xp: "+10 XP", animation: "animate-walk" },
    {
      icon: Flame,
      label: "Calories",
      value: "Burned: 2,200 kcal • Goal: 2,200 kcal",
      color: "from-orange-400 to-orange-500",
      route: "/calories",
      xp: "+10 XP",
      animation: "animate-flicker"
    },
    { icon: Moon, label: "Sleep", value: "7 h 30 m / 8 h", color: "from-blue-400 to-blue-500", route: "/sleep", xp: "+10 XP", animation: "animate-pulse-slow" },
    {
      icon: Apple,
      label: "Nutrition",
      value: "Consumed: 967 kcal • Water: 2.0 L",
      color: "from-yellow-400 to-yellow-500",
      route: "/nutrition",
      xp: "+10 XP",
      animation: "animate-bounce-subtle"
    },
    {
      icon: Activity,
      label: "BMI",
      value: bmiData ? getBMIDisplay(bmiData) : "Not calculated",
      color: bmiData?.gradient || "from-purple-400 to-purple-500",
      route: "/bmi",
      xp: "+10 XP",
      animation: ""
    },
    {
      icon: Activity,
      label: "Activity",
      value: "No activity logged today",
      color: "from-indigo-400 to-purple-500",
      route: "/activity",
      xp: "+10 XP",
      animation: ""
    },
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-gray-50 dark:bg-[#0F0F0F] flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-white dark:bg-[#1E1E1E] px-6 pt-16 pb-6 shadow-sm border-b border-gray-100 dark:border-[#2E2E2E]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800 dark:text-[#F0F0F0]">Good Morning, {userData.fullName}</h2>
              <p className="text-sm text-gray-500 dark:text-[#9CA3AF]">Wednesday, March 25, 2026</p>
            </div>
            <button
              onClick={() => navigate("/profile")}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 dark:from-orange-500 dark:to-amber-600 flex items-center justify-center shadow-lg"
            >
              <User className="text-white" size={24} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#9CA3AF]" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-[#2A2A2A] text-gray-800 dark:text-[#F0F0F0] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-orange-500 placeholder:text-gray-400 dark:placeholder:text-[#9CA3AF]"
            />
          </div>
          
          {/* Level Info */}
          <div className="mt-6">
            <p className="text-xs text-gray-500 dark:text-[#9CA3AF] mb-1">Current level</p>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-[#F0F0F0] mb-2">Level 1</h3>
            <div className="w-full bg-gray-200 dark:bg-[#2A2A2A] rounded-full h-2.5 mb-1 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-400 to-amber-500 dark:from-orange-500 dark:to-amber-600 rounded-full h-2.5 animate-progress" style={{ width: '40%' }} />
            </div>
            <p className="text-xs text-gray-500 dark:text-[#9CA3AF] text-right">40 / 100 XP to Level 2</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-6 py-6 bg-gray-50 dark:bg-[#0F0F0F]">
          <div className="grid grid-cols-1 gap-4">
            {healthCards.map((card, idx) => (
              <button
                key={idx}
                onClick={() => navigate(card.route)}
                className={`bg-gradient-to-r ${card.color} rounded-2xl p-5 text-white hover:shadow-xl transition-all relative overflow-hidden hover:scale-[1.02] active:scale-[0.98]`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <card.icon size={28} className={card.animation} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-1">{card.label}</h3>
                      <p className="text-sm opacity-90">{card.value}</p>
                    </div>
                  </div>
                  <div className="bg-white/30 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-bold">{card.xp}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />

        {/* FitQuest Menu Overlay */}
        {showMenu && (
          <div className="absolute inset-0 z-50 flex flex-col">
            {/* Gradient Background */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(160deg, #F0EEFF 0%, #E8F5F0 50%, #FFF8F0 100%)'
              }}
              onClick={() => setShowMenu(false)}
            />

            {/* Menu Content */}
            <div className="relative z-10 w-full overflow-y-auto pb-24">
              <div className="p-6 pt-16">
                {/* Back Button */}
                <button
                  onClick={() => setShowMenu(false)}
                  className="mb-4 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Header with stronger lavender tint */}
                <div className="mb-6 p-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, #EAE6FF 0%, rgba(234, 230, 255, 0.3) 100%)' }}>
                  <h2 className="text-3xl font-bold text-gray-800">FitQuest Menu</h2>
                  <p className="text-gray-600 mt-1">Morning, {userData.fullName} ✨</p>
                </div>

                {/* Section 1: Gamification */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 px-2">Gamification</p>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/achievements");
                      }}
                      className="w-full backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        border: '0.5px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(83, 74, 183, 0.12)' }}>
                        <Trophy size={20} style={{ color: '#534AB7' }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-800">Achievements</p>
                        <p className="text-xs text-gray-500">Badges and milestones</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>

                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/streaks");
                      }}
                      className="w-full backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        border: '0.5px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(83, 74, 183, 0.12)' }}>
                        <Zap size={20} style={{ color: '#534AB7' }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-800">Streaks</p>
                        <p className="text-xs text-gray-500">Daily goal streak tracker</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>

                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/rewards-shop");
                      }}
                      className="w-full backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        border: '0.5px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(83, 74, 183, 0.12)' }}>
                        <Gift size={20} style={{ color: '#534AB7' }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-800">Rewards Shop</p>
                        <p className="text-xs text-gray-500">Spend XP on themes and avatars</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Section 2: Social */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 px-2">Social</p>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/leaderboard");
                      }}
                      className="w-full backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        border: '0.5px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(15, 110, 86, 0.12)' }}>
                        <Users size={20} style={{ color: '#0F6E56' }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-800">Leaderboard</p>
                        <p className="text-xs text-gray-500">Weekly XP rankings</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>

                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/challenges");
                      }}
                      className="w-full backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        border: '0.5px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(15, 110, 86, 0.12)' }}>
                        <Swords size={20} style={{ color: '#0F6E56' }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-800">Challenges</p>
                        <p className="text-xs text-gray-500">Compete in timed health challenges</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>

                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/friends");
                      }}
                      className="w-full backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        border: '0.5px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(15, 110, 86, 0.12)' }}>
                        <UserPlus size={20} style={{ color: '#0F6E56' }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-800">Friends</p>
                        <p className="text-xs text-gray-500">Add friends and share progress</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>

                {/* Section 3: Health Tracking */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-3 px-2">Health Tracking</p>
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/history");
                      }}
                      className="w-full backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        border: '0.5px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(24, 95, 165, 0.12)' }}>
                        <TrendingUp size={20} style={{ color: '#185FA5' }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-800">History</p>
                        <p className="text-xs text-gray-500">Weekly and monthly metric charts</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>

                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/goals");
                      }}
                      className="w-full backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        border: '0.5px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(24, 95, 165, 0.12)' }}>
                        <Target size={20} style={{ color: '#185FA5' }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-800">Goals</p>
                        <p className="text-xs text-gray-500">Set custom targets per metric</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>

                    <button
                      onClick={() => {
                        setShowMenu(false);
                        navigate("/insights");
                      }}
                      className="w-full backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all"
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.75)',
                        border: '0.5px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
                      }}
                    >
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(24, 95, 165, 0.12)' }}>
                        <Brain size={20} style={{ color: '#185FA5' }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-800">Insights</p>
                        <p className="text-xs text-gray-500">AI-powered weekly health summary</p>
                      </div>
                      <ChevronRight size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation (on menu) - transparent to show gradient */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4">
              <div className="flex items-center justify-around w-full max-w-sm mx-auto">
                <button onClick={() => setShowMenu(false)} className="flex flex-col items-center gap-1">
                  <Menu size={24} className="text-orange-500" />
                  <span className="text-xs text-orange-500 font-semibold">Menu</span>
                </button>
                <button onClick={() => setShowMenu(false)} className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center -mt-2">
                    <HomeIcon size={24} className="text-white" />
                  </div>
                  <span className="text-xs text-orange-400 font-semibold">Home</span>
                </button>
                <button onClick={() => navigate("/settings")} className="flex flex-col items-center gap-1">
                  <Settings size={24} className="text-gray-600" />
                  <span className="text-xs text-gray-600">Settings</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </PhoneFrame>
  );
}
