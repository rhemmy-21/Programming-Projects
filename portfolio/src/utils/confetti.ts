import confetti from "canvas-confetti";

export function triggerConfetti(originX = 0.5, originY = 0.6) {
  if (typeof window === "undefined") return;

  confetti({
    particleCount: 50,
    spread: 70,
    origin: { x: originX, y: originY },
    colors: ["#6366f1", "#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ec4899"],
    ticks: 200,
    gravity: 1.2,
    decay: 0.94,
    startVelocity: 30,
  });
}

export function triggerSparkles() {
  if (typeof window === "undefined") return;

  const duration = 1.5 * 1000;
  const animationEnd = Date.now() + duration;

  const interval: ReturnType<typeof setInterval> = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 20 * (timeLeft / duration);
    confetti({
      particleCount,
      startVelocity: 25,
      spread: 360,
      ticks: 60,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.4 + 0.1,
      },
      colors: ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#6366f1"],
    });
  }, 250);
}
