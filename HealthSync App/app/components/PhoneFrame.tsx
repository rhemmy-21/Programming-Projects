import { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative w-[375px] h-[812px] bg-gray-900 rounded-[50px] shadow-2xl overflow-hidden border-[14px] border-gray-800">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[30px] bg-gray-800 rounded-b-3xl z-50" />
      
      {/* Screen */}
      <div className="w-full h-full bg-white overflow-hidden relative">
        {children}
      </div>
      
      {/* Volume buttons */}
      <div className="absolute left-0 top-[120px] w-[3px] h-[60px] bg-gray-700 rounded-r" />
      <div className="absolute left-0 top-[200px] w-[3px] h-[60px] bg-gray-700 rounded-r" />
      
      {/* Power button */}
      <div className="absolute right-0 top-[160px] w-[3px] h-[80px] bg-gray-700 rounded-l" />
    </div>
  );
}
