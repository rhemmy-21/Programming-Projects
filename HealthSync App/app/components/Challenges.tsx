import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Trophy, Clock, Users, Zap, Target, Flame, Heart } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";
import { toast } from "sonner";

export function Challenges() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const activeChallenges = [
    {
      id: 1,
      name: "Step Master",
      description: "Walk 50,000 steps this week",
      progress: 38420,
      target: 50000,
      reward: 500,
      timeLeft: "2 days left",
      icon: Target,
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 2,
      name: "Calorie Crusher",
      description: "Burn 15,000 calories this week",
      progress: 11200,
      target: 15000,
      reward: 400,
      timeLeft: "2 days left",
      icon: Flame,
      color: "from-orange-400 to-red-500"
    },
    {
      id: 3,
      name: "Sleep Champion",
      description: "Get 8 hours of sleep for 7 days",
      progress: 5,
      target: 7,
      reward: 300,
      timeLeft: "2 days left",
      icon: Clock,
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 4,
      name: "Heart Health",
      description: "Maintain resting heart rate below 75 BPM",
      progress: 6,
      target: 7,
      reward: 250,
      timeLeft: "2 days left",
      icon: Heart,
      color: "from-red-400 to-pink-500"
    }
  ];

  const completedChallenges = [
    {
      name: "Weekend Warrior",
      description: "Hit step goal both weekend days",
      reward: 200,
      completedDate: "May 4, 2026",
      icon: Trophy
    },
    {
      name: "Early Bird",
      description: "Wake up before 7 AM for 5 days",
      reward: 150,
      completedDate: "May 1, 2026",
      icon: Clock
    },
    {
      name: "Hydration Hero",
      description: "Drink 8 glasses of water daily for a week",
      reward: 300,
      completedDate: "Apr 28, 2026",
      icon: Zap
    }
  ];

  const handleClaimReward = (challenge: any) => {
    const percentage = (challenge.progress / challenge.target) * 100;
    if (percentage >= 100) {
      toast.success(`Claimed ${challenge.reward} XP from ${challenge.name}!`);
    } else {
      toast.error(`Complete the challenge first! ${Math.round(100 - percentage)}% remaining.`);
    }
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-gradient-to-b from-amber-50 to-white flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 px-6 pt-16 pb-8 text-white">
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
                <h1 className="text-3xl font-bold">Challenges</h1>
                <p className="opacity-90">Complete challenges to earn XP</p>
              </div>
            </div>

            {/* Challenge Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <p className="text-sm opacity-90">Active</p>
                <p className="text-3xl font-bold">{activeChallenges.length}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <p className="text-sm opacity-90">Completed</p>
                <p className="text-3xl font-bold">{completedChallenges.length}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Active Challenges */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Active Challenges</h3>
              <div className="space-y-4">
                {activeChallenges.map((challenge) => {
                  const Icon = challenge.icon;
                  const percentage = Math.min((challenge.progress / challenge.target) * 100, 100);

                  return (
                    <div
                      key={challenge.id}
                      className="bg-white rounded-2xl shadow-lg p-5"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${challenge.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 mb-1">{challenge.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{challenge.description}</p>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock size={14} />
                            <span>{challenge.timeLeft}</span>
                            <span className="mx-1">•</span>
                            <Trophy size={14} />
                            <span>{challenge.reward} XP</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-semibold text-gray-800">
                            {challenge.progress.toLocaleString()} / {challenge.target.toLocaleString()}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`bg-gradient-to-r ${challenge.color} rounded-full h-3 transition-all`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1 text-right">{Math.round(percentage)}% complete</p>
                      </div>

                      {/* Claim Button */}
                      <button
                        onClick={() => handleClaimReward(challenge)}
                        disabled={percentage < 100}
                        className={`w-full py-3 rounded-xl font-semibold transition-all ${
                          percentage >= 100
                            ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:shadow-lg'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        {percentage >= 100 ? 'Claim Reward' : 'In Progress'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Completed Challenges */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Completed This Month</h3>
              <div className="space-y-3">
                {completedChallenges.map((challenge, idx) => {
                  const Icon = challenge.icon;

                  return (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border-l-4 border-green-500"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">{challenge.name}</h4>
                          <p className="text-sm text-gray-600">{challenge.description}</p>
                          <p className="text-xs text-gray-500 mt-1">{challenge.completedDate}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-green-600 font-semibold">
                            <Trophy size={16} />
                            <span>+{challenge.reward}</span>
                          </div>
                          <p className="text-xs text-green-600">Claimed</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Info Card */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">New challenges every week!</h3>
              <p className="text-sm opacity-90">
                Complete challenges to earn bonus XP and unlock exclusive rewards in the shop.
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
