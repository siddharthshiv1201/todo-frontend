// components/Sidebar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaBook, FaShoppingCart, FaBars } from "react-icons/fa";

const categoryIcons = {
  Exercise: <FaDumbbell />,
  Studies: <FaBook />,
  Groceries: <FaShoppingCart />,
};

const Sidebar = ({ currentCategory, setCurrentCategory, categories }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-indigo-700 text-white p-4 min-h-screen sticky top-0 flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        <button
          onClick={toggleSidebar}
          className="mb-6 text-white hover:text-gray-300 text-xl"
        >
          <FaBars />
        </button>

        {!collapsed && <h2 className="text-2xl font-bold mb-8">📝 MyTasks</h2>}

        <nav className="space-y-4">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setCurrentCategory(cat)}
              className={`flex items-center gap-2 w-full text-left px-4 py-2 rounded-lg transition ${
                currentCategory === cat
                  ? "bg-indigo-500 font-semibold"
                  : "hover:bg-indigo-600"
              }`}
            >
              <span className="text-lg">{categoryIcons[cat]}</span>
              {!collapsed && <span>{cat}</span>}
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
