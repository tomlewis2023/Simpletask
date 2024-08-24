

let inputField = document.getElementById("input_1");
let addButton = document.getElementById("btn_1");
let removeButton = document.getElementById("btn_2");
let taskList = document.getElementById("listitems");

let tasks = [];

// Function to add a task
function addTask() {
    let task = inputField.value;
    
        tasks.push(task); 
        renderTasks(); 
        inputField.value = ""; 
   
}

// Function to remove the last task
function removeLastTask() {
    
        tasks.pop(); 
        renderTasks(); 
    
}

// Function to render the tasks in the DOM
function renderTasks() {
    taskList.innerHTML = ""; 
    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${task}`; 
        taskList.appendChild(li);
    });
}

