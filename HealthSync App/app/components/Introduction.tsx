import { useState } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { Heart, Footprints, Trophy, TrendingUp, ChevronRight } from "lucide-react";

export function Introduction() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Heart,
      color: "from-red-400 to-pink-500",
      title: "Welcome to HealthSync",
      description: "Your personal health companion that makes fitness fun and rewarding",
      image: "💪"
    },
    {
      icon: Footprints,
      color: "from-green-400 to-emerald-500",
      title: "Track Your Activities",
      description: "Monitor steps, heart rate, calories, sleep, and nutrition all in one place",
      image: "📊"
    },
    {
      icon: Trophy,
      color: "from-orange-400 to-amber-500",
      title: "Earn Rewards & Level Up",
      description: "Complete daily goals and weekly challenges to earn XP and unlock achievements",
      image: "🏆"
    },
    {
      icon: TrendingUp,
      color: "from-blue-400 to-cyan-500",
      title: "Visualize Your Progress",
      description: "Get detailed insights, charts, and personalized health tips to reach your goals",
      image: "📈"
    }
  ];

  const currentSlideData = slides[currentSlide];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  return (
    <PhoneFrame>
      <div className="h-full bg-white flex flex-col">
        {/* Skip Button */}
        <div className="px-6 pt-16 pb-4 flex justify-end">
          {currentSlide < slides.length - 1 && (
            <button
              onClick={handleSkip}
              className="text-gray-400 hover:text-gray-600 font-semibold transition-colors"
            >
              Skip
            </button>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          {/* Icon/Illustration */}
          <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${currentSlideData.color} flex items-center justify-center mb-8 shadow-2xl`}>
            <span className="text-8xl">{currentSlideData.image}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            {currentSlideData.title}
          </h1>

          {/* Description */}
          <p className="text-base text-gray-600 text-center leading-relaxed px-4">
            {currentSlideData.description}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="px-8 pb-12">
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mb-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-orange-400"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Next/Get Started Button */}
          <button
            onClick={handleNext}
            className={`w-full py-4 rounded-2xl font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 bg-gradient-to-r ${currentSlideData.color}`}
          >
            {currentSlide < slides.length - 1 ? (
              <>
                Next
                <ChevronRight size={24} />
              </>
            ) : (
              "Get Started"
            )}
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
