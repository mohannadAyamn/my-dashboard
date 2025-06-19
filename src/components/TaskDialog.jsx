import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SidebarMenuButton } from "./ui/sidebar";
import { useTodo } from "@/store";

function TaskDialog() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = useState(false);

  const addTodo = useTodo((state) => state.addTodo);

  function clearStates() {
    setTaskName("");
    setTaskDescription("");
  }

  function handleSubmit(e) {
    setShowError(false);
    e.preventDefault();
    if (!taskName || !taskDescription) {
      setShowError(true);
      return;
    }
    setOpen(false);
    clearStates();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <SidebarMenuButton>
          <Plus />
          <span className="text-[16px]">New Task</span>
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogDescription>
            Use this form to create a new task. Fill in the details and click
            "Create" to add it to your task list.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <h1 className="text-sm text-rose-600 " hidden={!showError}>
            Please fill all the fields below
          </h1>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Task Name</label>
            <input
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter task name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter task description"
            ></textarea>
          </div>
          <DialogFooter>
            <Button type="submit">Add new task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default TaskDialog;
