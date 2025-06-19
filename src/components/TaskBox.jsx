import EditingTaskDialogContent from "./EditingTaskDialogContent";
import ShowTaskDialogContent from "./ShowTaskDialogContent";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { useState } from "react";

function TaskBox({ todo }) {
  const [editing, setEditing] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setEditing(false);
        setOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <div className=" dark:bg-white/20 bg-black/20 rounded-lg p-4 shadow flex flex-row dark:hover:bg-white/30 hover:bg-black/30 transition cursor-default">
          <div>
            <h3 className="text-lg font-semibold truncate max-w-[65%]">
              {todo.name}
            </h3>
            <span className="dark:text-gray-300 text-gray-600 block text-xs">
              Click to show details
            </span>
          </div>
        </div>
      </DialogTrigger>
      {editing ? (
        <EditingTaskDialogContent todo={todo} setOpen={setOpen} />
      ) : (
        <ShowTaskDialogContent todo={todo} setEditing={setEditing} />
      )}
    </Dialog>
  );
}

export default TaskBox;
