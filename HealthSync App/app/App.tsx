import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <RouterProvider router={router} />
          <Toaster />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}
