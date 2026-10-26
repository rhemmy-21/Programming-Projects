import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { ChevronLeft, Gift, Crown, Palette, Sparkles, Lock } from "lucide-react";
import { BottomNavigation } from "./BottomNavigation";
import { toast } from "sonner";

export function RewardsShop() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const userXP = 9840;

  const [ownedItems, setOwnedItems] = useState<number[]>([1]);

  const shopItems = [
    { id: 1, name: "Default Theme", category: "Theme", price: 0, icon: Palette, color: "from-gray-400 to-gray-500", owned: true },
    { id: 2, name: "Ocean Blue Theme", category: "Theme", price: 500, icon: Palette, color: "from-blue-400 to-cyan-500", owned: false },
    { id: 3, name: "Sunset Orange Theme", category: "Theme", price: 500, icon: Palette, color: "from-orange-400 to-pink-500", owned: false },
    { id: 4, name: "Forest Green Theme", category: "Theme", price: 500, icon: Palette, color: "from-green-400 to-emerald-500", owned: false },
    { id: 5, name: "Champion Crown", category: "Badge", price: 1000, icon: Crown, color: "from-yellow-400 to-amber-500", owned: false },
    { id: 6, name: "Elite Star", category: "Badge", price: 1500, icon: Sparkles, color: "from-purple-400 to-pink-500", owned: false },
    { id: 7, name: "Legend Status", category: "Badge", price: 2500, icon: Crown, color: "from-red-400 to-rose-500", owned: false },
    { id: 8, name: "Double XP Boost (7 days)", category: "Boost", price: 2000, icon: Sparkles, color: "from-indigo-400 to-purple-500", owned: false }
  ];

  const handlePurchase = (item: any) => {
    if (item.owned || ownedItems.includes(item.id)) {
      toast.error("You already own this item!");
      return;
    }

    if (userXP < item.price) {
      toast.error(`Not enough XP! You need ${item.price - userXP} more XP.`);
      return;
    }

    setOwnedItems([...ownedItems, item.id]);
    toast.success(`${item.name} purchased successfully!`);
  };

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
                <Gift size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Rewards Shop</h1>
                <p className="opacity-90">Spend XP on themes and avatars</p>
              </div>
            </div>

            {/* XP Balance */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-5 text-center">
              <p className="text-sm opacity-90 mb-1">Your XP Balance</p>
              <p className="text-5xl font-bold">{userXP.toLocaleString()}</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            {/* Themes Section */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Themes</h3>
              <div className="grid grid-cols-2 gap-4">
                {shopItems.filter(item => item.category === "Theme").map((item) => {
                  const Icon = item.icon;
                  const isOwned = item.owned || ownedItems.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg p-5 relative"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 mx-auto`}>
                        <Icon size={32} className="text-white" />
                        {isOwned && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <h4 className="font-bold text-center text-gray-800 mb-2">{item.name}</h4>
                      <button
                        onClick={() => handlePurchase(item)}
                        disabled={isOwned}
                        className={`w-full py-2 rounded-lg font-semibold transition-all ${
                          isOwned
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-purple-500 text-white hover:bg-purple-600'
                        }`}
                      >
                        {isOwned ? 'Owned' : `${item.price} XP`}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Badges Section */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Badges</h3>
              <div className="grid grid-cols-2 gap-4">
                {shopItems.filter(item => item.category === "Badge").map((item) => {
                  const Icon = item.icon;
                  const isOwned = item.owned || ownedItems.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg p-5 relative"
                    >
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 mx-auto relative`}>
                        <Icon size={32} className="text-white" />
                        {!isOwned && (
                          <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center">
                            <Lock size={24} className="text-white" />
                          </div>
                        )}
                        {isOwned && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <h4 className="font-bold text-center text-gray-800 mb-2">{item.name}</h4>
                      <button
                        onClick={() => handlePurchase(item)}
                        disabled={isOwned}
                        className={`w-full py-2 rounded-lg font-semibold transition-all ${
                          isOwned
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-purple-500 text-white hover:bg-purple-600'
                        }`}
                      >
                        {isOwned ? 'Owned' : `${item.price} XP`}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Boosts Section */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Boosts</h3>
              <div className="space-y-3">
                {shopItems.filter(item => item.category === "Boost").map((item) => {
                  const Icon = item.icon;
                  const isOwned = item.owned || ownedItems.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl shadow-lg p-5"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={32} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800">{item.name}</h4>
                          <p className="text-sm text-gray-600">Earn 2x XP for a week</p>
                        </div>
                        <button
                          onClick={() => handlePurchase(item)}
                          disabled={isOwned}
                          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                            isOwned
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-purple-500 text-white hover:bg-purple-600'
                          }`}
                        >
                          {isOwned ? 'Active' : `${item.price} XP`}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Info */}
            <div className="bg-blue-50 rounded-2xl p-4 border-l-4 border-blue-500">
              <p className="text-sm text-blue-800">
                <strong>Earn XP:</strong> Complete daily goals, weekly challenges, and maintain streaks to earn more XP for the shop!
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
