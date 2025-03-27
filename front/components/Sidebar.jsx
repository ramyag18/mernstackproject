import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

import { FaPlus } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  // Initial tasks
  const [tasks, setTasks] = useState([
    { name: "Navigation bar", completed: false },
    { name: "Auth function", completed: true },
    { name: "About page", completed: false },
    { name: "Create database", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Function to toggle task completion
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Calculate percentages for Pie Chart
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const inProgressTasks = totalTasks - completedTasks;
  const waitingTasks = Math.max(0, totalTasks - completedTasks - inProgressTasks);

  const data = [
    { name: "Done", value: completedTasks, color: "#007bff" },
    { name: "In Progress", value: inProgressTasks, color: "#28a745" },
    { name: "Waiting", value: waitingTasks, color: "#cccccc" },
  ];

  return (
    <div className="sidebar">
      {/* Pie Chart */}
      <PieChart width={180} height={180}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
          {data.map((entry, index) => (
            <Cell key={'cell-${index}'} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      {/* Legend with percentages */}
      <div className="legend">
        {data.map((entry) => (
          <div key={entry.name} className="legend-item">
            <span className="legend-color" style={{ background: entry.color }}></span>
            {entry.name} - {totalTasks > 0 ? ((entry.value / totalTasks) * 100).toFixed(1) : 0}%
          </div>
        ))}
      </div>

      {/* To-Do List */}
      <h3>Today's To-Do List</h3>
      <div className="todo-container">
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
        />
        <button onClick={handleAddTask}>
          <FaPlus />
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""} onClick={() => toggleTask(index)}>
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;