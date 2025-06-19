import { useTodoStore } from "@/store";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { useState } from "react";
import { Input } from "./ui/input";
import StatusDropdownMenu from "./StatusDropdownMenu";
import { Button } from "./ui/button";
import { Check, CircleX } from "lucide-react";

function EditingTaskDialogContent({ todo, setOpen }) {
  const editTask = useTodoStore((state) => state.editTask);

  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);
  const [showError, setShowError] = useState(false);

  function handleEditing() {
    if (!name || !description) {
      setShowError(true);
      return;
    }
    const editedTask = {
      id: todo.id,
      name: name,
      description: description,
      status: status,
      editedTime: Date.now(),
    };
    editTask(editedTask);
    setOpen(false);
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit task</DialogTitle>
        <DialogDescription>
          Edit the task to change the descrition or the name the status ...etc
        </DialogDescription>
      </DialogHeader>
      <div className="text-lg text-gray-800 dark:text-gray-300">
        <h1 className="text-sm text-rose-600 " hidden={!showError}>
          Please fill all the fields below
        </h1>
        <div className="mb-4">
          <span className="block">Name:</span>
          <Input
            type="text"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </div>
        <div className="mb-4">
          <span className="block">Description :</span>
          <Input
            type="text"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <span className="block">Status:</span>
          <StatusDropdownMenu selected={status} setSelected={setStatus} />
        </div>
      </div>
      <DialogFooter>
        <Button onClick={handleEditing}>
          <Check />
          Edit task
        </Button>
        <DialogClose asChild>
          <Button>
            <CircleX />
            Cancel
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}

export default EditingTaskDialogContent;
