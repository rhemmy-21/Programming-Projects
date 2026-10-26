import { useEffect } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import { motion } from "motion/react";
import logoImg from "figma:asset/b6153685f046bf46e842d7c5278e61d0d9e17020.png";

export function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/introduction");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PhoneFrame>
      <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-400 via-pink-400 to-teal-400">
        <img src={logoImg} alt="HealthSync Logo" className="w-32 h-32 mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">HealthSync</h1>
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0 }}
          />
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
          />
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
          />
        </motion.div>
        <p className="text-white text-lg mt-6">Loading...</p>
      </div>
    </PhoneFrame>
  );
}
