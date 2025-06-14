# Task Manager App

A simple task manager built with React where you can add, edit, and delete tasks.

## What it does

- Add new tasks with a title and description
- Edit tasks by clicking the edit button (opens in a popup)
- Delete tasks you don't need anymore
- Everything saves to a backend server

## How to run it

1. Make sure you have Node.js installed
2. Download/clone this project
3. Open terminal in the project folder
4. Run `npm install` to install everything
5. Run `npm run dev` to start it
6. Open your browser to the link it shows (usually http://localhost:5173)

**Important:** You need a backend server running on http://localhost:5000 for this to work properly.

## Project files

```
src/
├── api/
│   ├── axiosInstance.js    # Sets up connection to backend
│   └── taskApi.js          # Functions to talk to the server
├── components/
│   ├── Button.jsx          # Just a button component
│   ├── EditModal.jsx       # The popup for editing tasks
│   ├── TaskForm.jsx        # Form to add new tasks
│   └── TaskList.jsx        # Shows all your tasks
└── pages/
    └── TaskPage.jsx        # Main page where everything happens
```

## What each part does

**TaskPage** - The main page that handles everything

**TaskForm** - The form at the top where you type in new tasks

**TaskList** - Shows all your tasks with edit/delete buttons

**EditModal** - The popup that appears when you want to edit a task

**API files** - Handle talking to the backend server

## Backend requirements

Your backend needs these endpoints:
- `GET /tasks` - get all tasks
- `POST /tasks` - create a task
- `PUT /tasks/:id` - update a task  
- `DELETE /tasks/:id` - delete a task

The server should return data like this:
```json
{
  "data": [
    {
      "id": 1,
      "name": "Task name",
      "description": "Task description"
    }
  ]
}
```

## Tech used

- React for the frontend
- Vite for building/running
- Tailwind CSS for styling
- Axios for talking to the backend

## If something breaks

- Make sure your backend is running on port 5000
- Check the browser console for errors
- Make sure you ran `npm install`

