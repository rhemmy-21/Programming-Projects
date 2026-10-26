export interface BMIResult {
  value: number;
  category: "Underweight" | "Normal" | "Overweight" | "Obese";
  color: string;
  colorDark: string;
  gradient: string;
  gradientDark: string;
}

/**
 * Calculate BMI from height (cm) and weight (kg)
 * Formula: BMI = weight(kg) / height(m)²
 */
export function calculateBMI(heightCm: number, weightKg: number): BMIResult {
  if (heightCm <= 0 || weightKg <= 0) {
    return {
      value: 0,
      category: "Normal",
      color: "#00C896",
      colorDark: "#00FFB8",
      gradient: "from-green-400 to-green-500",
      gradientDark: "from-green-500 to-green-600"
    };
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) {
    return {
      value: bmi,
      category: "Underweight",
      color: "#F59E0B",      // Amber/warning
      colorDark: "#FBB80F",
      gradient: "from-amber-400 to-yellow-500",
      gradientDark: "from-amber-500 to-yellow-600"
    };
  } else if (bmi < 25.0) {
    return {
      value: bmi,
      category: "Normal",
      color: "#00C896",      // Green
      colorDark: "#00FFB8",
      gradient: "from-green-400 to-green-500",
      gradientDark: "from-green-500 to-green-600"
    };
  } else if (bmi < 30.0) {
    return {
      value: bmi,
      category: "Overweight",
      color: "#FF6B35",      // Orange
      colorDark: "#FF7A45",
      gradient: "from-orange-400 to-orange-500",
      gradientDark: "from-orange-500 to-orange-600"
    };
  } else {
    return {
      value: bmi,
      category: "Obese",
      color: "#FF4D4D",      // Red
      colorDark: "#FF6B6B",
      gradient: "from-red-400 to-red-500",
      gradientDark: "from-red-500 to-red-600"
    };
  }
}

/**
 * Get formatted BMI display text
 */
export function getBMIDisplay(bmi: BMIResult | undefined): string {
  if (!bmi || bmi.value === 0) {
    return "Not calculated";
  }
  return `${bmi.value.toFixed(1)} (${bmi.category})`;
}

/**
 * Get BMI category explanation
 */
export function getBMIExplanation(): string {
  return "A healthy BMI range is 18.5–24.9";
}
