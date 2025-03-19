import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme/themeProvider";
import AppLayout from "./components/layout/appLayout";
import Dashboard from "./pages/dashboard/dashboard";
import Settings from "./pages/settings/settings";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/logout" element={<Logout />} /> */}
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
