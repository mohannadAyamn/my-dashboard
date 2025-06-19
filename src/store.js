import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { subscribeWithSelector } from "zustand/middleware";
import toast from "react-hot-toast";

export const useTodoStore = create(
  subscribeWithSelector(
    immer((set) => ({
      todosList: localStorage.getItem("todo")
        ? JSON.parse(localStorage.getItem("todo"))
        : [],

      addTask: (todo) =>
        set((state) => {
          state.todosList.push(todo);
          toast.success("Task added successfully!");
        }),

      removeTask: (id) => {
        set((state) => {
          state.todosList = state.todosList.filter((todo) => todo.id !== id);
          toast.success("Task removed successfully!");
        });
      },

      editTask: (editedTask) => {
        set((state) => {
          state.todosList = state.todosList.map((item) =>
            item.id === editedTask.id ? editedTask : item
          );
          toast.success("Task was edited succefully!");
        });
      },
    }))
  )
);

useTodoStore.subscribe(
  (state) => state.todosList,
  (todosList) => {
    localStorage.setItem("todo", JSON.stringify(todosList));
    console.log("Todos updated:", todosList);
  }
);
