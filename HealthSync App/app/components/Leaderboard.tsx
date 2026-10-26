import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";

export function Leaderboard() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const leaderboardData = [
    { rank: 1, name: "Sarah Chen", xp: 12450, change: "up", avatar: "🏆" },
    { rank: 2, name: "Mike Johnson", xp: 11280, change: "up", avatar: "🥈" },
    { rank: 3, name: "Emma Davis", xp: 10950, change: "down", avatar: "🥉" },
    { rank: 4, name: "You (Rhem)", xp: 9840, change: "up", avatar: "👤", isUser: true },
    { rank: 5, name: "Alex Kim", xp: 9320, change: "same", avatar: "😊" },
    { rank: 6, name: "Lisa Wang", xp: 8750, change: "up", avatar: "💪" },
    { rank: 7, name: "Tom Brown", xp: 8210, change: "down", avatar: "🚀" },
    { rank: 8, name: "Nina Patel", xp: 7980, change: "up", avatar: "⭐" }
  ];

  return (
    <PhoneFrame>
      <div className="h-full bg-gradient-to-b from-green-50 to-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 px-6 pt-16 pb-8 text-white">
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
                <h1 className="text-3xl font-bold">Leaderboard</h1>
                <p className="opacity-90">Weekly XP rankings</p>
              </div>
            </div>

            {/* User Rank */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Your Rank</p>
                <p className="text-4xl font-bold">#4</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-90">Your XP</p>
                <p className="text-3xl font-bold">9,840</p>
              </div>
            </div>
          </div>

          {/* Leaderboard List */}
          <div className="px-6 py-6">
            <div className="space-y-3">
              {leaderboardData.map((user) => {
                const getChangeIcon = () => {
                  if (user.change === "up") return <TrendingUp className="text-green-500" size={16} />;
                  if (user.change === "down") return <TrendingDown className="text-red-500" size={16} />;
                  return <Minus className="text-gray-400" size={16} />;
                };

                return (
                  <div
                    key={user.rank}
                    className={`rounded-2xl p-5 shadow-lg transition-all ${
                      user.isUser
                        ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white'
                        : 'bg-white hover:shadow-xl'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Rank */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                        user.rank === 1
                          ? 'bg-yellow-100 text-yellow-600'
                          : user.rank === 2
                          ? 'bg-gray-100 text-gray-600'
                          : user.rank === 3
                          ? 'bg-orange-100 text-orange-600'
                          : user.isUser
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-50 text-gray-600'
                      }`}>
                        {user.rank}
                      </div>

                      {/* Avatar */}
                      <div className="text-3xl">{user.avatar}</div>

                      {/* Name & XP */}
                      <div className="flex-1">
                        <p className={`font-bold ${user.isUser ? 'text-white' : 'text-gray-800'}`}>
                          {user.name}
                        </p>
                        <p className={`text-sm ${user.isUser ? 'text-white/80' : 'text-gray-600'}`}>
                          {user.xp.toLocaleString()} XP
                        </p>
                      </div>

                      {/* Change Indicator */}
                      <div>{getChangeIcon()}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Info */}
            <div className="bg-blue-50 rounded-2xl p-4 border-l-4 border-blue-500 mt-6">
              <p className="text-sm text-blue-800">
                <strong>Weekly Reset:</strong> Leaderboard resets every Monday at 12:00 AM. Keep earning XP to climb the ranks!
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
