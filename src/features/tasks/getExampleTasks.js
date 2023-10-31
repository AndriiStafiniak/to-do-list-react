export const getExampleTasks = async () => {
   const url = "/to-do-list-react/exampleTasks.json"
   const response = await fetch(url)

   if (!response.ok) {
      throw new Error(response.statusText)
   }
   return await response.json();

}