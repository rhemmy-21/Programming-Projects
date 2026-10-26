import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Users, UserPlus, Trophy, TrendingUp, Flame, Target, Search } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";
import { toast } from "sonner";

export function Friends() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const friends = [
    {
      id: 1,
      name: "Sarah Mitchell",
      avatar: "SM",
      rank: 2,
      xp: 12450,
      streak: 8,
      status: "online",
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 2,
      name: "James Chen",
      avatar: "JC",
      rank: 7,
      xp: 8920,
      streak: 12,
      status: "online",
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "ER",
      rank: 15,
      xp: 6730,
      streak: 5,
      status: "offline",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      name: "Alex Johnson",
      avatar: "AJ",
      rank: 23,
      xp: 5210,
      streak: 3,
      status: "offline",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 5,
      name: "Maya Patel",
      avatar: "MP",
      rank: 31,
      xp: 4180,
      streak: 7,
      status: "online",
      color: "from-amber-400 to-orange-500"
    }
  ];

  const recentActivity = [
    { user: "Sarah Mitchell", action: "completed 10,000 steps challenge", time: "2 hours ago", icon: Target },
    { user: "James Chen", action: "reached a 12-day streak", time: "5 hours ago", icon: Flame },
    { user: "Emma Rodriguez", action: "earned Champion Crown badge", time: "Yesterday", icon: Trophy },
    { user: "Maya Patel", action: "joined the leaderboard", time: "2 days ago", icon: TrendingUp }
  ];

  const handleAddFriend = () => {
    if (searchQuery.trim()) {
      toast.success(`Friend request sent to ${searchQuery}!`);
      setSearchQuery("");
    } else {
      toast.error("Please enter a username to add a friend.");
    }
  };

  const handleChallengeFriend = (friendName: string) => {
    toast.success(`Challenge sent to ${friendName}!`);
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-gradient-to-b from-cyan-50 to-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 pt-16 pb-8 text-white">
            <button
              onClick={() => navigate("/home")}
              className="mb-4 text-white/80 hover:text-white"
            >
              <ChevronLeft size={28} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Users size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Friends</h1>
                <p className="opacity-90">Connect and compete</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <p className="text-sm opacity-90">Total Friends</p>
                <p className="text-3xl font-bold">{friends.length}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <p className="text-sm opacity-90">Online Now</p>
                <p className="text-3xl font-bold">{friends.filter(f => f.status === "online").length}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Add Friend */}
            <div className="bg-white rounded-2xl shadow-lg p-5 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <UserPlus size={24} className="text-cyan-500" />
                <h3 className="font-bold text-gray-800">Add Friend</h3>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter username or email"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <button
                  onClick={handleAddFriend}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Friends List */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">My Friends</h3>
              <div className="space-y-3">
                {friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="bg-white rounded-2xl shadow-lg p-5"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${friend.color} flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">{friend.avatar}</span>
                        </div>
                        {friend.status === "online" && (
                          <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800">{friend.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Trophy size={14} className="text-amber-500" />
                            <span>Rank #{friend.rank}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Flame size={14} className="text-orange-500" />
                            <span>{friend.streak} days</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{friend.xp.toLocaleString()} XP</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleChallengeFriend(friend.name)}
                      className="w-full py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      Challenge Friend
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
              <div className="bg-white rounded-2xl shadow-lg p-5">
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => {
                    const Icon = activity.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-800">
                            <span className="font-semibold">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Stay Motivated Together!</h3>
              <p className="text-sm opacity-90">
                Challenge friends, share progress, and climb the leaderboard together.
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
