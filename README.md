# Task Tracker

A simple task management app built with React and TypeScript. Add, edit, delete, and filter your tasks — everything saves automatically to your browser.

---

## Tech Stack

- **React 18** : UI and component logic
- **TypeScript** : type safety throughout
- **Vite** : development server and build tool
- **CSS** : plain CSS, no UI library

---

## Requirements

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) version 18 or higher
- npm (comes with Node.js)

To check if you have them, run:

```bash
node -v
npm -v
```

---

## Getting Started

1. Clone or download this repository and navigate into the folder:

```bash
cd task-tracker-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and go to `http://localhost:5173`

---

## Project Structure

```
src/
├── types.ts                  #TypeScript types(Task, FilterType)
├── main.tsx                  #Entry point of the app 
├── App.tsx                   #Root component
├── App.css                   #Styling
└── components/
    ├── TaskForm.tsx           #Input field and Add Task button
    ├── FilterBar.tsx          #All / Completed / Incomplete filter buttons
    ├── TaskList.tsx           #Renders the list of tasks
    └── TaskItem.tsx           #Single task row with edit and delete


