import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useTodoStore } from "@/store";
import { Check, ClockFading, List, SquarePen, Trash } from "lucide-react";

function ShowTaskDialogContent({ todo, setEditing }) {
  const removeTask = useTodoStore((state) => state.removeTask);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>showing a Task</DialogTitle>
      </DialogHeader>
      <div className="text-lg text-gray-800 dark:text-gray-300">
        <div className="mb-4">
          <span className="block">name:</span>
          <h1 className="text-md ml-1.5">{todo.name}</h1>
        </div>
        <div>
          <span className="block">Description :</span>
          <p className="m-1.5">
            {todo.description || "No description provided."}
          </p>
        </div>
        <div className="mt-4">
          <span className="text-md text-gray-800 dark:text-gray-300">
            Created at: {new Date(todo.id).toLocaleString()}
          </span>
        </div>
        <div className="mt-2 ">
          <span className="text-md text-gray-800 dark:text-gray-300 flex items-center gap-2">
            Status:{" "}
            {todo.status === "done" ? (
              <Check size={22} className="inline" />
            ) : todo.status === "in-progress" ? (
              <ClockFading size={22} className="inline" />
            ) : (
              <List size={22} className="inline" />
            )}{" "}
            {todo.status}
          </span>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button onClick={() => removeTask(todo.id)}>
            <Trash /> Remove Task
          </Button>
        </DialogClose>
        <Button onClick={() => setEditing(true)}>
          <SquarePen />
          Edit Task
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}

export default ShowTaskDialogContent;
