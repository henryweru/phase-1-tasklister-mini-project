// https://medium.com/@fernnandoptr/dom-manipulation-in-a-nutshell-76c8b7eb3f1c
//t fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("form")
  form.addEventListener("submit", (event)=>{
      event.preventDefault()//prevents loading of the page
      //https://developer.mozilla.org/en-US/docs/Web/API/Event/target
      //reference to the object onto which the event was dispatched. 
      createToDo(event.target.newTaskDescription.value)
      form.reset()
  } )
});
//Function to create our to do list
function createToDo(todo){
 
  //adding elements
  //Adding a list element
 let li = document.createElement("li")
 //Adding a delete button
 let btn = document.createElement("button") 
 //Assigning values to our delete button
 btn.textContent= "x"
 // Assigning text to the element
 li.textContent = `${todo}`
 //Listening to the event when the delete button is clicked
 btn.addEventListener("click", Delete)
 // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 // https://developer.mozilla.org/en-US/docs/Web/API/Node
 //A method of the node interface
 // Adds a node to the end of the list of children of a specifies parent node
 // the button must be appended to the list
 li.appendChild(btn)
 //document.querySelector("#tasks").appendChild(li)
 //a function that takes a CSS selector as a parameter 
 //and then returns the first matched element with the selector provided.
 document.getElementById("tasks").appendChild(li)
}
//creating a function that deletes done todo list items
// A node that is the parent of the current node
 function Delete(event){
  event.target.parentNode.remove()
 }