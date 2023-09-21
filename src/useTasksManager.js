import { useState, useEffect } from "react";

const useTaskManager = () => {
   const [tasks, setTasks] = useState([]);
   const [dataLoaded, setDataLoaded] = useState(false)


   useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(storedTasks);
      setDataLoaded(true);
   }, []);

   useEffect(() => {
      if (dataLoaded) {
         localStorage.setItem("tasks", JSON.stringify(tasks));
      }
   }, [tasks, dataLoaded]);

   const addNewTask = (content) => {
      setTasks((prevTasks) => [
         ...prevTasks,
         {
            content,
            done: false,
            id: prevTasks.length ? prevTasks[prevTasks.length - 1].id + 1 : 1,
         },
      ]);
   };

   const setAllDone = () => {
      setTasks((prevTasks) =>
         prevTasks.map((task) => ({
            ...task,
            done: true,
         }))
      );
   };

   const toggleTaskDone = (id) => {
      setTasks((prevTasks) =>
         prevTasks.map((task) => {
            if (task.id === id) {
               return { ...task, done: !task.done };
            }
            return task;
         })
      );
   };

   const removeTask = (id) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
   };

   return {
      tasks,
      addNewTask,
      setAllDone,
      toggleTaskDone,
      removeTask,
   };
};

export default useTaskManager;
