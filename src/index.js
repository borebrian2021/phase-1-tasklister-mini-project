document.addEventListener("DOMContentLoaded", () => {
  // your code here
  var form =document.querySelector('#create-task-form').addEventListener('submit',(e)=>
  {

    e.preventDefault()
    
createTodo(e.target.newTaskDescription.value)
    
  });
});

function createTodo(todo){
  let unorderedList=document.querySelector('#tasks');
  
  let creaateOl=document.createElement('li')
  let remove=document.createElement('button')
  remove.addEventListener('click',deleteTodo)

  creaateOl.textContent=todo;
  remove.textContent=" X "
  creaateOl.appendChild(remove)
  unorderedList.appendChild(creaateOl)



}


function deleteTodo(e){
  e.target.parentNode.remove()
}