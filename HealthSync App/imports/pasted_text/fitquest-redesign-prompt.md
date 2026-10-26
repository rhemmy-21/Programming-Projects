================================================================================
  FITQUEST / HEALTHSYNC — FIGMA REDESIGN PROMPT
  Complete specification across 8 sections
================================================================================


────────────────────────────────────────────────────────────────────────────────
SECTION 1 · DESIGN SYSTEM & THEMING
────────────────────────────────────────────────────────────────────────────────

Design a health fitness app called FitQuest / HealthSync.

COLOR SYSTEM — define two complete themes as Figma variables:

Light theme:
  Background primary:    #FFFFFF
  Background secondary:  #F5F5F7
  Background tertiary:   #EBEBED
  Text primary:          #1A1A2E
  Text secondary:        #4A4A6A
  Accent orange:         #FF6B35
  Accent gradient:       start #FF6B35 → end #FF8C42

Dark theme (saturated, not just dimmed):
  Background primary:    #0F0F1A
  Background secondary:  #1A1A2E
  Background tertiary:   #252540
  Text primary:          #F0F0FF
  Text secondary:        #9090B8
  Accent orange:         #FF7A45  (brighter in dark mode)
  Card surface:          #1E1E35

Metric colors — saturate +20% in dark mode:
  Heart Rate (pink-red):  Light #FF4D6D  →  Dark #FF3D5F
  Steps (green):          Light #00C896  →  Dark #00FFB8
  Calories (orange):      Light #FF6B35  →  Dark #FF7A45
  Sleep (blue):           Light #4A90E2  →  Dark #5BA3FF
  Nutrition (yellow):     Light #FFB830  →  Dark #FFC94D
  BMI (purple):           Light #8B5CF6  →  Dark #A371F7
  Activity (purple-2):    Light #7C3AED  →  Dark #9B59FF

Apply both themes via a Figma Variables collection with a single "Mode" toggle
so switching Light ↔ Dark updates all 20+ screens instantly.
Every screen must be designed in both modes.


────────────────────────────────────────────────────────────────────────────────
SECTION 2 · SCREEN INVENTORY
────────────────────────────────────────────────────────────────────────────────

Build the following screens (375 × 812 px, iPhone 14 frame),
each in Light and Dark variants:

AUTHENTICATION
  01-login          — email/password, "Sign in with Google/Apple", link to sign up
  02-signup         — name, email, password, confirm password, agree to terms
  03-onboarding     — 3-step wizard: personal info → health goals → unit preferences

HOME DASHBOARD
  04-home           — greeting, XP level bar, metric cards (Heart Rate, Steps,
                      Calories, Sleep, Nutrition, BMI, Activity)

METRIC DETAIL SCREENS (one per metric, full-bleed colored header)
  05-heart-rate
  06-steps
  07-calories
  08-sleep
  09-nutrition
  10-bmi
  11-activity

FITQUEST MENU
  12-menu           — Gamification section + Social section + Health Tracking section

GAMIFICATION
  13-achievements
  14-streaks
  15-rewards-shop

SOCIAL
  16-leaderboard
  17-challenges
  18-friends

HEALTH TRACKING
  19-history
  20-goals
  21-insights

SETTINGS
  22-settings       — Personal + Units + Notifications + Devices
  23-account        — avatar, name, email, password, delete account
  24-language       — list selector
  25-location
  26-theme          — Light / Dark / System toggle (functional)
  27-unit-system    — Metric / Imperial / SI selector
  28-height-unit
  29-weight-unit
  30-volume-unit
  31-distance-unit

HELP
  32-help-home      — topic list
  33-help-intro
  34-help-add-device
  35-help-gps
  36-help-sync
  37-help-privacy


────────────────────────────────────────────────────────────────────────────────
SECTION 3 · NAVIGATION (ALWAYS-VISIBLE BOTTOM BAR)
────────────────────────────────────────────────────────────────────────────────

Every screen must include a fixed bottom navigation bar with three tabs:
  [≡ Menu]    [⌂ Home]    [⚙ Settings]

Rules:
  • Active tab icon and label use Accent Orange; inactive use Text Secondary
  • Home tab uses a filled circular orange background when active (like the mockup)
  • Bar background: Background Secondary with a 0.5px top border
  • Safe area inset: 34px bottom padding for home indicator
  • Tapping any tab from any screen navigates correctly —
    annotate all links in Figma prototype mode
  • On modal/sheet screens (e.g., Unit System picker), the bar is still
    visible behind the sheet


────────────────────────────────────────────────────────────────────────────────
SECTION 4 · MICRO-ANIMATIONS (FIGMA SMART ANIMATE)
────────────────────────────────────────────────────────────────────────────────

Animate the following using Figma Smart Animate / After Effects specs for handoff:

METRIC CARD ICONS (looping, subtle):
  Heart Rate   — icon pulses: scale 1.0→1.15→1.0, duration 800ms, ease In-Out, loop
  Steps        — footprint icon bobs up 3px and back, alternating left/right,
                 600ms each, loop
  Calories     — flame flickers: slight rotation -3°→+3°, scale 1.0→1.05→1.0,
                 500ms, loop
  Sleep        — moon slowly rocks -5°→+5°, 2s ease In-Out, loop
  Nutrition    — apple gently bounces: translateY 0→-4px→0, 1s ease, loop
  BMI          — pulse wave line animates from left to right, 1.5s, loop
  Activity     — waveform line draws itself left to right, 1.2s, then resets, loop

GRADIENT BACKGROUNDS (metric detail screens):
  All full-bleed gradient headers animate a slow color-shift:
    • Gradient angle rotates 0°→15°→0°, duration 6s, ease In-Out, loop
    • Opacity of gradient layers breathes: 90%→100%→90%, 4s, loop
  Heart Rate screen: gradient pulses in sync with heart icon
    (scale + opacity, 800ms)

NUMBER COUNTERS:
  On screen entry, all large metric numbers count up from 0 to their value
  Duration: 1200ms, ease Out Cubic
  Use Figma Variables + Prototype "On Load" trigger

XP PROGRESS BAR:
  Fills from left to right on Home screen load, 800ms, ease Out

LEVEL UP CELEBRATION (when XP crosses threshold):
  Confetti burst from center, 1.5s, then fade out
  Badge/level text scales 0.5→1.2→1.0, 600ms spring

BUTTON PRESS:
  All primary buttons: scale 0.96 on press, 150ms, spring
  All list rows: background flash to Background Tertiary on tap, 100ms


────────────────────────────────────────────────────────────────────────────────
SECTION 5 · BMI LIVE CALCULATION LOGIC
────────────────────────────────────────────────────────────────────────────────

BMI must recalculate whenever the user changes height or weight in their
profile (Account → About Me).

Formula:
  Metric:    BMI = weight(kg) / height(m)²
  Imperial:  BMI = 703 × weight(lb) / height(in)²

BMI categories and colors:
  < 18.5      Underweight   → amber/warning  (#F59E0B)
  18.5–24.9   Normal        → green          (#00C896)
  25.0–29.9   Overweight    → orange         (#FF6B35)
  ≥ 30        Obese         → red            (#FF4D4D)

In Figma, annotate this as a Prototype Variable interaction:
  • height_cm and weight_kg are Number variables
  • bmi_value = weight_kg / (height_cm / 100)²   [formula annotation]
  • bmi_category updates the color token of the BMI card and detail screen header
  • The BMI card on Home and the BMI detail screen both reflect the live value
  • Add explanatory text on the BMI detail screen: "A healthy BMI range is 18.5–24.9"

Note for developers: implement this calculation in the app state layer, not in
Figma directly. Figma annotation should show the variable connections and
expected outputs for each category.


────────────────────────────────────────────────────────────────────────────────
SECTION 6 · UNIT SYSTEM — GLOBAL PROPAGATION
────────────────────────────────────────────────────────────────────────────────

When the user changes units in Settings → Units, ALL measurements across the
entire app must update.

Unit conversions to annotate:

HEIGHT
  Centimeters (cm)   ↔   Feet & Inches (ft/in)   ↔   Meters (m, SI)
  Conversion: 1 in = 2.54 cm

WEIGHT
  Kilograms (kg)     ↔   Pounds (lb)              ↔   kg (SI, same as metric)
  Conversion: 1 kg = 2.20462 lb

VOLUME / WATER INTAKE
  Milliliters (mL)   ↔   Fluid ounces (fl oz)     ↔   Liters (L, SI)
  Conversion: 1 fl oz = 29.5735 mL

DISTANCE
  Kilometers (km)    ↔   Miles (mi)               ↔   Meters (m, SI)
  Conversion: 1 mi = 1.60934 km

Screens affected:
  Home metric cards, all detail screens, Goals, History, Insights,
  BMI screen, Profile/Account, Challenges progress.

In Figma: create a "unit_system" string variable with values
  "metric" | "imperial" | "si"
Annotate each measurement label with a conditional display rule.
Provide three complete variants of the Home screen (one per unit system)
to demonstrate how labels change.


────────────────────────────────────────────────────────────────────────────────
SECTION 7 · HELP SECTION CONTENT
────────────────────────────────────────────────────────────────────────────────

Each Help article screen should contain real, useful content:

SCREEN: Introduction to HealthSync / FitQuest
  • What the app tracks: heart rate, steps, calories, sleep, nutrition, BMI, activity
  • How XP works: earn 10 XP per daily goal completed; spend XP in Rewards Shop
  • How Streaks work: maintain all daily goals to extend your streak day by day
  • Privacy: all health data stored locally; optional cloud sync available

SCREEN: How to add or remove a device?
  • Go to Settings → Devices → Add Device
  • Supported devices: Apple Watch, Fitbit, Garmin, Samsung Galaxy Watch,
    Google Pixel Watch
  • To remove: long-press device → Remove, or go to
    Settings → Devices → [device] → Remove
  • Troubleshooting: ensure Bluetooth is enabled;
    keep app in foreground during pairing

SCREEN: How to fix GPS/MAP errors?
  • Grant location permission:
    Phone Settings → HealthSync → Location → Always
  • If GPS is slow: move outdoors, away from tall buildings
  • Reset GPS cache: Settings → Location → Reset Location Cache
  • If map shows wrong route: tap "Recalibrate" in the activity session screen

SCREEN: App Sync / Data loss solutions
  • Enable auto-sync: Settings → Account → Sync → Auto Sync On
  • Manual sync: pull down on any screen to refresh
  • If data is missing: check the date range filter in History
  • Data recovery: Settings → Account → Restore from Backup
    (cloud backup must be enabled first)

SCREEN: Privacy & Data Control
  • What we collect: health metrics, device identifiers,
    usage analytics (optional, can be disabled)
  • What we don't collect: GPS routes, personal conversations, contact lists
  • Delete your data: Settings → Account → Delete Account → Confirm
  • Export your data: Settings → Account → Export Data → CSV or JSON
  • GDPR / CCPA inquiries: contact privacy@healthsync.app


────────────────────────────────────────────────────────────────────────────────
SECTION 8 · BUG FIXES & UX IMPROVEMENTS
────────────────────────────────────────────────────────────────────────────────

Fix the following issues identified in the existing mockups:

NAVIGATION BUGS
  ✦ Bottom nav bar disappears on metric detail screens
    Fix: always render it on every screen
  ✦ Back chevron (‹) on detail screens conflicts with bottom nav
    Fix: ensure both coexist without overlap

BMI SCREEN
  ✦ BMI of 17.1 is "Underweight" — card currently shows neutral purple
    Fix: use amber/warning color to communicate health concern
  ✦ Add explanatory text: "A healthy BMI range is 18.5–24.9"

NUTRITION SCREEN
  ✦ "967 kcal / 2.0 L" is ambiguous
    Fix: separate into two distinct labeled stat chips

HOME SCREEN
  ✦ Calories card shows "2,200 / 2,200 kcal" — burned vs. goal is unclear
    Fix: use labels "Burned" and "Goal" explicitly
  ✦ Activity card shows "Track all activities" with no data
    Fix: show a placeholder/empty state or display the last logged activity

SETTINGS
  ✦ Language screen: add a real list of languages
    (English, Filipino, Spanish, French, Japanese, Korean, Arabic, Portuguese,
    German, Hindi, Indonesian, Chinese Simplified)
  ✦ Theme toggle: wire Light / Dark / System options to actually switch
    the Figma mode variable
  ✦ Unit System picker: selecting "Imperial" should immediately update the
    preview value on the same screen

ACHIEVEMENTS
  ✦ Show locked badges (grayed out) below unlocked ones so users see
    what to work toward
  ✦ Tapping a badge opens a detail sheet with name, description, and XP reward

STREAKS
  ✦ "This Week" row shows circles but no day labels
    Fix: add Mon Tue Wed Thu Fri Sat Sun under each circle

LEADERBOARD
  ✦ Current user (Rhem) is only shown in the header stats, not in the ranked list
    Fix: highlight Rhem's row in the full list with an accent background

FRIENDS
  ✦ Placeholder text reads "Enter userr" (typo)
    Fix: correct to "Enter username or email"

OVERALL DESIGN & ACCESSIBILITY
  ✦ Increase font contrast ratios to WCAG AA (4.5:1 minimum) in dark mode
  ✦ Add empty/zero states for History, Goals, and Insights screens
  ✦ Add loading skeleton screens for all data-fetching screens
  ✦ Ensure all interactive elements are at least 44 × 44 pt tap targets
  ✦ Add haptic feedback annotations on all primary actions (badge unlock,
    streak extension, challenge completion, level-up)


================================================================================
  END OF PROMPT — FitQuest / HealthSync Figma Redesign Specification
================================================================================
