import { Check, ClockFading, List } from "lucide-react";
import filterTodosByStatus from "@/funcs/filterTodosByStatus";
import { useTodoStore } from "@/store";
import { Badge } from "@/components/ui/badge";
import TaskBox from "@/components/TaskBox";

function Home() {
  const todos = useTodoStore((state) => state.todosList);

  // Filter todos by status
  const todoItems = filterTodosByStatus(todos, "to-do");
  const inProgressItems = filterTodosByStatus(todos, "in-progress");
  const doneItems = filterTodosByStatus(todos, "done");

  return (
    <div className="w-full min-h-screen bg-gradient-to-br dark:from-zinc-900 from-zinc-100 dark:via-zinc-800 via-zinc-200 dark:to-zinc-700 to-zinc-300 p-6 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold dark:text-white text-zinc-800 mb-10 tracking-tight">
          Home
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Todo Column */}
          <div className="dark:bg-white/10 bg-black/10 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <List className="dark:text-blue-400 text-blue-800" />
              <span className="text-lg font-semibold dark:text-blue-200 text-blue-600">
                To Do
              </span>
              <Badge className="ml-auto bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {todoItems.length}
              </Badge>
            </div>
            <div className="flex-1 space-y-4">
              {todoItems.length === 0 ? (
                <div className="dark:text-gray-400 text-gray-600 text-sm text-center py-8">
                  No recent tasks
                </div>
              ) : (
                todoItems.map((item) => <TaskBox key={item.id} todo={item} />)
              )}
            </div>
          </div>
          {/* In Progress Column */}
          <div className="dark:bg-white/10 bg-black/10 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <ClockFading className="dark:text-yellow-400 text-yellow-800" />
              <span className="text-lg font-semibold dark:text-yellow-200 text-yellow-600">
                In Progress
              </span>
              <Badge className="ml-auto bg-yellow-600 text-white text-xs px-2 py-0.5 rounded-full">
                {inProgressItems.length}
              </Badge>
            </div>
            <div className="flex-1 space-y-4">
              {inProgressItems.length === 0 ? (
                <div className="dark:text-gray-400 text-gray-600 text-sm text-center py-8">
                  No recent tasks
                </div>
              ) : (
                inProgressItems.map((item) => (
                  <TaskBox key={item.id} todo={item} />
                ))
              )}
            </div>
          </div>
          {/* Done Column */}
          <div className="dark:bg-white/10 bg-black/10 backdrop-blur rounded-2xl shadow-lg p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Check className="dark:text-green-400 text-green-800" />
              <span className="text-lg font-semibold dark:text-green-200 text-green-600">
                Done
              </span>
              <Badge className="ml-auto bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                {doneItems.length}
              </Badge>
            </div>
            <div className="flex-1 space-y-4">
              {doneItems.length === 0 ? (
                <div className="dark:text-gray-400 text-gray-600 text-sm text-center py-8">
                  No recent tasks
                </div>
              ) : (
                doneItems.map((item) => <TaskBox key={item.id} todo={item} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
