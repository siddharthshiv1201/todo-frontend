import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ToDoList from "./ToDoList";
import { motion } from "framer-motion";

// Sample categories with initial tasks
const initialData = {
  Exercise: [
    { id: 1, task: "Cycling", done: false },
    { id: 2, task: "Swimming", done: false },
    { id: 3, task: "Gym", done: false },
  ],
  Studies: [
    { id: 4, task: "Revising Topics", done: false },
    { id: 5, task: "Coding", done: false },
    { id: 6, task: "Development", done: false },
  ],
  Groceries: [
    { id: 7, task: "Buy Vegetables", done: false },
    { id: 8, task: "Buy Milk", done: false },
    { id: 9, task: "Buy Rice", done: false },
  ],
};

export default function Home() {
  const [categories, setCategories] = useState(initialData);
  const [currentCategory, setCurrentCategory] = useState("Exercise");
  const [newTask, setNewTask] = useState("");

  // Toggle task done status
  const toggleTask = (category, taskId) => {
    const updated = {
      ...categories,
      [category]: categories[category].map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      ),
    };
    setCategories(updated);
  };

  // Delete a task
  const deleteTask = (category, taskId) => {
    const updated = {
      ...categories,
      [category]: categories[category].filter((task) => task.id !== taskId),
    };
    setCategories(updated);
  };

  // Add a new task
  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const newItem = {
      id: Date.now(),
      task: newTask.trim(),
      done: false,
    };

    const updated = {
      ...categories,
      [currentCategory]: [...categories[currentCategory], newItem],
    };

    setCategories(updated);
    setNewTask("");
  };

  return (
    <div className="flex">
      {/* Sidebar for category navigation */}
      <Sidebar
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={categories}
      />

      {/* Main content area */}
      <motion.div
        className="flex-1 p-8 bg-gray-50 min-h-screen"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          className="text-3xl font-bold text-indigo-700 mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {currentCategory} Tasks
        </motion.h1>

        {/* ToDo List */}
        <ToDoList
          category={currentCategory}
          tasks={categories[currentCategory]}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />

        {/* Add new task input */}
        <div className="flex mt-6">
          <input
            type="text"
            placeholder="Add new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            onClick={handleAddTask}
            className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700"
          >
            Add
          </button>
        </div>
      </motion.div>
    </div>
  );
}
