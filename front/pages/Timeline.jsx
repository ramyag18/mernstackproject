import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./timeline.css"; // Ensure this file exists in the same directory


const initialTasks = [
    { id: 1, title: "UI Design Website", start: "2025-02-26", end: "2025-03-26", status: "Done", color: "bg-green-200" },
    { id: 2, title: "Developing State", start: "2025-03-12", end: "2025-04-11", status: "On Progress", color: "bg-blue-200" },
    { id: 3, title: "Testing", start: "2025-03-30", end: "2025-04-20", status: "Waiting", color: "bg-yellow-200" },
];

const colors = ["bg-red-200", "bg-purple-200", "bg-orange-200", "bg-teal-200", "bg-pink-200"];

export default function TimelineCalendar() {
    const [tasks, setTasks] = useState(initialTasks);
    const [selectedTask, setSelectedTask] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false); // Controls Calendar visibility
    const [newTaskDate, setNewTaskDate] = useState(new Date());

    // Function to handle adding a task with calendar
    const handleAddTask = () => {
        setShowCalendar(true); // Show calendar when add task is clicked
    };

    // Function to confirm adding task after selecting a date
    const handleDateSelection = (date) => {
        const formattedDate = date.toISOString().split("T")[0];

        const newTask = {
            id: tasks.length + 1,
            title: "New Task",
            start: formattedDate,
            end: formattedDate,
            status: "Waiting",
            color: colors[tasks.length % colors.length],
        };

        setTasks([...tasks, newTask]);
        setSelectedTask(newTask);
        setShowCalendar(false); // Hide calendar after adding task
    };

    // Function to delete selected task
    const handleDeleteTask = () => {
        if (selectedTask) {
            setTasks(tasks.filter((task) => task.id !== selectedTask.id));
            setSelectedTask(null);
        }
    };

    // Handle task field edits
    const handleTaskEdit = (id, field, value) => {
        setTasks((prevTasks) =>
            prevTasks.map(task =>
                task.id === id ? { ...task, [field]: value } : task
            )
        );

        if (selectedTask && selectedTask.id === id) {
            setSelectedTask(prevTask => ({ ...prevTask, [field]: value }));
        }
    };

    return (
        <div className="container">
            <h1 className="title">Project Timeline</h1>

            {/* Project Timeline Box */}
            <div className="task-container">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`task-card ${task.color}`}
                        onClick={() => setSelectedTask(task)}
                    >
                        <p className="task-title">{task.title}</p>
                        <p className="task-dates">{task.start} - {task.end}</p>
                        <p className="task-status">Status: {task.status}</p>
                    </div>
                ))}
            </div>

            {/* Add & Delete Task Buttons */}
            <div className="task-buttons">
                <button type="button" className="add-task-btn" onClick={handleAddTask}>➕ Add Task</button>
                <button type="button" className="delete-task-btn" onClick={handleDeleteTask} disabled={!selectedTask}>➖ Delete Task</button>
            </div>

            {/* Calendar for Adding a Task */}
            {showCalendar && (
                <div className="calendar-popup">
                    <h2>Select Date for New Task</h2>
                    <Calendar onChange={handleDateSelection} value={newTaskDate} />
                </div>
            )}

            {/* Task Edit Section */}
            {selectedTask && (
                <div className="task-editor">
                    <h2 className="editor-title">Edit Task</h2>

                    {/* Title Input */}
                    <div className="editor-field">
                        <label className="editor-label">Title:</label>
                        <input
                            type="text"
                            className="editor-input"
                            value={selectedTask.title}
                            onChange={(e) => handleTaskEdit(selectedTask.id, "title", e.target.value)}
                        />
                    </div>

                    {/* Status Dropdown */}
                    <div className="editor-field">
                        <label className="editor-label">Status:</label>
                        <select
                            className="editor-input"
                            value={selectedTask.status}
                            onChange={(e) => handleTaskEdit(selectedTask.id, "status", e.target.value)}
                        >
                            <option value="Done">Done</option>
                            <option value="On Progress">On Progress</option>
                            <option value="Waiting">Waiting</option>
                        </select>
                    </div>

                    {/* Start Date Calendar */}
                    <div className="editor-field">
                        <label className="editor-label">Start Date:</label>
                        <Calendar onChange={(date) => handleTaskEdit(selectedTask.id, "start", date.toISOString().split("T")[0])} value={new Date(selectedTask.start)} />
                    </div>
                </div>
            )}
        </div>
    );
}
