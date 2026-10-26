import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Trophy, Star, Zap, Award, Lock, CheckCircle } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function Achievements() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const achievements = [
    {
      id: 1,
      icon: Trophy,
      name: "First Steps",
      description: "Complete your first day",
      xp: 100,
      unlocked: true,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      icon: Star,
      name: "Week Warrior",
      description: "7 day streak",
      xp: 500,
      unlocked: true,
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      icon: Zap,
      name: "Speed Demon",
      description: "Hit 10,000 steps in one day",
      xp: 250,
      unlocked: true,
      color: "from-blue-400 to-cyan-500"
    },
    {
      id: 4,
      icon: Award,
      name: "Heart Hero",
      description: "Maintain healthy heart rate for 7 days",
      xp: 1000,
      unlocked: true,
      color: "from-red-400 to-pink-500"
    },
    {
      id: 5,
      icon: Trophy,
      name: "Month Master",
      description: "30 day streak",
      xp: 2000,
      unlocked: false,
      color: "from-gray-300 to-gray-400"
    },
    {
      id: 6,
      icon: Star,
      name: "Marathon Runner",
      description: "Walk 100km total",
      xp: 1500,
      unlocked: false,
      color: "from-gray-300 to-gray-400"
    },
    {
      id: 7,
      icon: Zap,
      name: "Sleep Champion",
      description: "8+ hours sleep for 14 days",
      xp: 1200,
      unlocked: false,
      color: "from-gray-300 to-gray-400"
    },
    {
      id: 8,
      icon: Award,
      name: "Nutrition Expert",
      description: "Track nutrition for 30 days",
      xp: 1800,
      unlocked: false,
      color: "from-gray-300 to-gray-400"
    }
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalXP = achievements.filter(a => a.unlocked).reduce((sum, a) => sum + a.xp, 0);

  return (
    <PhoneFrame>
      <div className="h-full bg-gradient-to-b from-purple-50 to-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 px-6 pt-16 pb-8 text-white">
            <button
              onClick={() => navigate("/home")}
              className="mb-4 text-white/80 hover:text-white"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Trophy size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Achievements</h1>
                <p className="opacity-90">Badges and milestones</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                <p className="text-4xl font-bold">{unlockedCount}/{achievements.length}</p>
                <p className="text-sm opacity-90 mt-1">Unlocked</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                <p className="text-4xl font-bold">{totalXP}</p>
                <p className="text-sm opacity-90 mt-1">Total XP</p>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="px-6 py-6">
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className={`rounded-2xl p-5 shadow-lg transition-all ${
                      achievement.unlocked ? 'bg-white hover:shadow-xl' : 'bg-gray-100'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-3 mx-auto relative`}>
                      <Icon size={32} className="text-white" />
                      {achievement.unlocked && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                      )}
                      {!achievement.unlocked && (
                        <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                          <Lock size={24} className="text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className={`font-bold text-center mb-1 ${achievement.unlocked ? 'text-gray-800' : 'text-gray-400'}`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-xs text-center mb-3 ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                      {achievement.description}
                    </p>
                    <div className={`text-center py-2 rounded-lg ${achievement.unlocked ? 'bg-purple-100' : 'bg-gray-200'}`}>
                      <span className={`text-sm font-bold ${achievement.unlocked ? 'text-purple-600' : 'text-gray-400'}`}>
                        +{achievement.xp} XP
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation onMenuClick={() => setShowMenu(true)} />
      </div>
    </PhoneFrame>
  );
}
