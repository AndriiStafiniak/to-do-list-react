const url = "/to-do-list-react/exampleTasks.json";

export const getExampleTasks = async () => {
   const response = await fetch(url);

   if (!response.ok) {
      throw new Error(response.statusText)
   }
   return await response.json();

};