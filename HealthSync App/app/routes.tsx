import { createBrowserRouter } from "react-router";
import { Splash } from "./components/Splash";
import { Loading } from "./components/Loading";
import { Introduction } from "./components/Introduction";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { ForgotPassword } from "./components/ForgotPassword";
import { OTPVerification } from "./components/OTPVerification";
import { ResetPassword } from "./components/ResetPassword";
import { Home } from "./components/Home";
import { HeartRate } from "./components/HeartRate";
import { Steps } from "./components/Steps";
import { Calories } from "./components/Calories";
import { Nutrition } from "./components/Nutrition";
import { BMI } from "./components/BMI";
import { Sleep } from "./components/Sleep";
import { Profile } from "./components/Profile";
import { Settings } from "./components/Settings";
import { AccountSettings } from "./components/AccountSettings";
import { LocationSettings } from "./components/LocationSettings";
import { AddDevice } from "./components/AddDevice";
import { UserSupport } from "./components/UserSupport";
import { Help } from "./components/Help";
import { HelpIntro } from "./components/HelpIntro";
import { HelpDevice } from "./components/HelpDevice";
import { HelpGPS } from "./components/HelpGPS";
import { HelpSync } from "./components/HelpSync";
import { HelpPrivacy } from "./components/HelpPrivacy";
import { Achievements } from "./components/Achievements";
import { Streaks } from "./components/Streaks";
import { Leaderboard } from "./components/Leaderboard";
import { ActivityTracker } from "./components/ActivityTracker";
import { RewardsShop } from "./components/RewardsShop";
import { Challenges } from "./components/Challenges";
import { Friends } from "./components/Friends";
import { History } from "./components/History";
import { Goals } from "./components/Goals";
import { Insights } from "./components/Insights";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/loading",
    Component: Loading,
  },
  {
    path: "/introduction",
    Component: Introduction,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/otp-verification",
    Component: OTPVerification,
  },
  {
    path: "/reset-password",
    Component: ResetPassword,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/heart-rate",
    Component: HeartRate,
  },
  {
    path: "/steps",
    Component: Steps,
  },
  {
    path: "/calories",
    Component: Calories,
  },
  {
    path: "/nutrition",
    Component: Nutrition,
  },
  {
    path: "/bmi",
    Component: BMI,
  },
  {
    path: "/sleep",
    Component: Sleep,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/settings",
    Component: Settings,
  },
  {
    path: "/account-settings",
    Component: AccountSettings,
  },
  {
    path: "/location-settings",
    Component: LocationSettings,
  },
  {
    path: "/add-device",
    Component: AddDevice,
  },
  {
    path: "/user-support",
    Component: UserSupport,
  },
  {
    path: "/help",
    Component: Help,
  },
  {
    path: "/help-intro",
    Component: HelpIntro,
  },
  {
    path: "/help-device",
    Component: HelpDevice,
  },
  {
    path: "/help-gps",
    Component: HelpGPS,
  },
  {
    path: "/help-sync",
    Component: HelpSync,
  },
  {
    path: "/help-privacy",
    Component: HelpPrivacy,
  },
  {
    path: "/achievements",
    Component: Achievements,
  },
  {
    path: "/streaks",
    Component: Streaks,
  },
  {
    path: "/leaderboard",
    Component: Leaderboard,
  },
  {
    path: "/activity",
    Component: ActivityTracker,
  },
  {
    path: "/rewards-shop",
    Component: RewardsShop,
  },
  {
    path: "/challenges",
    Component: Challenges,
  },
  {
    path: "/friends",
    Component: Friends,
  },
  {
    path: "/history",
    Component: History,
  },
  {
    path: "/goals",
    Component: Goals,
  },
  {
    path: "/insights",
    Component: Insights,
  },
]);
