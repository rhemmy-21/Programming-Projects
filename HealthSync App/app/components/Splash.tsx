import { useEffect } from "react";
import { useNavigate } from "react-router";
import { PhoneFrame } from "./PhoneFrame";
import logoImg from "figma:asset/b6153685f046bf46e842d7c5278e61d0d9e17020.png";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/loading");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PhoneFrame>
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-red-400 via-pink-400 to-teal-400">
        <img src={logoImg} alt="HealthSync Logo" className="w-48 h-48" />
      </div>
    </PhoneFrame>
  );
}
