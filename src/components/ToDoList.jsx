// components/ToDoList.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ToDoList({ category, tasks, onToggle, onDelete }) {
  return (
    <AnimatePresence>
      <ul className="space-y-3 mb-6">
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            className="flex justify-between items-center bg-white p-3 rounded-lg shadow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={`cursor-pointer ${
                task.done ? "line-through text-gray-400" : "text-gray-800"
              }`}
              onClick={() => onToggle(category, task.id)}
            >
              {task.task}
            </span>
            <motion.button
              whileHover={{ scale: 1.2, color: "#DC2626" }}
              onClick={() => onDelete(category, task.id)}
              className="text-red-500"
            >
              ❌
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </AnimatePresence>
  );
}
