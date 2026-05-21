import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";


interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState(""); 

  // fetch 10 tasks from API on mount
  useEffect(() => {
    axios
      .get<Task[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => setTasks(res.data))
      .catch(() => setError("Failed to load tasks"))
      .finally(() => setLoading(false));
  }, []); // empty array = run once when component first loads

  // adds a new task to the TOP of the list
  const addTask = () => {
    if (!input.trim()) return; // do nothing if input is empty
    const newTask: Task = {
      id: Date.now(), // unique id using timestamp
      title: input,
      completed: false, // new tasks always start as pending
    };
    setTasks((prev) => [newTask, ...prev]); // prepend to list
    setInput(""); // clear the input box
  };

  // removes a task from the list by filtering it out
  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  if (loading) return <p className="p-10 text-amber-800">Loading...</p>;
  if (error) return <p className="p-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-amber-50 p-10 flex flex-col gap-4">

      {/* Add task input row */}
      <div className="flex gap-3">
        <Input
          placeholder="New Task" 
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <Button onClick={addTask}>Add</Button> 
      </div>

      {/* Empty state — shows when list is empty */}
      {tasks.length === 0 && (
        <p className="text-gray-400">No tasks. Add one above.</p>
      )}

      {/* Task list */}
      {tasks.map((task) => (
        <Card key={task.id} className="border-amber-200">
          <CardContent className="flex items-center justify-between p-4">

            {/* Task title */}
            <p className="text-sm text-gray-700 flex-1">{task.title}</p>

            {/* Badge — green if completed, yellow if pending */}
            <Badge
              className={
                task.completed
                  ? "bg-green-100 text-green-700 mr-3" 
                  : "bg-amber-100 text-amber-700 mr-3"  
              }
            >
              {task.completed ? "Completed" : "Pending"} 
            </Badge>

            {/* Delete button */}
            <Button
              variant="destructive"
              onClick={() => deleteTask(task.id)}
            >
              Delete 
            </Button>

          </CardContent>
        </Card>
      ))}

    </div>
  );
}