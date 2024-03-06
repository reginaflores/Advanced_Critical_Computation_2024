
let btn = document.getElementById("submit")

btn.addEventListener("click", () => {
    let todo = document.getElementById("form");
    console.log(todo.elements[0].value);
    

    let newItem = document.createElement("li");
    newItem.innerHTML = todo.elements[0].value; 
    
    let list = document.getElementById("list");
    console.log(list)
    list.appendChild(newItem);
    todo.elements[0].value ="";
})