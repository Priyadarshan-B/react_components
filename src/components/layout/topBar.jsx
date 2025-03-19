import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../theme/themeProvider";

const Topbar = ({ toggleSidebar }) => {
    const { darkMode, toggleTheme } = useTheme();
    return (
      <div className="bg-white dark:bg-gray-900 text-white p-4 flex justify-between items-center shadow-md transition-all">
        <h1 className="text-xl text-black dark:text-white font-bold">App Name...</h1>
  
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
            {darkMode ? <LightModeIcon className="text-yellow-500" /> : <DarkModeIcon className="text-gray-800" />}
          </button>
          <button className="md:hidden" onClick={toggleSidebar}>
            <MenuIcon className="text-3xl" />
          </button>
        </div>
      </div>
    );
  };

export default Topbar;
