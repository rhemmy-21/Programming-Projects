import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface UserData {
  fullName: string;
  email: string;
  age: number;
  gender: string;
  height: number;
  heightUnit: string;
  weight: number;
  weightUnit: string;
  healthGoal: string;
  profilePhoto?: string;
}

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

const defaultUserData: UserData = {
  fullName: "Rhem",
  email: "rhem@healthsync.com",
  age: 25,
  gender: "Male",
  height: 170,
  heightUnit: "cm",
  weight: 50,
  weightUnit: "kg",
  healthGoal: "Stay Active"
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>(() => {
    const saved = localStorage.getItem("healthsync-user-data");
    return saved ? JSON.parse(saved) : defaultUserData;
  });

  useEffect(() => {
    localStorage.setItem("healthsync-user-data", JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
}
