export const getExampleTasks = async () => {
   const response = await fetch("/to-do-list-react/exampleTasks.json")

   if (!response.ok) {
      throw new Error(response.statusTexp)
   }
   return await response.json();

}