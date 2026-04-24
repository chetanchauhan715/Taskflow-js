const input_task = document.getElementById("task-input");
const add_btn = document.getElementById("add-btn");
const search_input = document.getElementById("search-input");
const filter_select = document.getElementById("filter");
const task_list = document.getElementById("task-list");


let tasks = [];

function validation(data){
    if(data.trim() === ""){
        alert("Please Enter Valid Task")
        return false;
    }
    return true ;
}


function saveTasks(){
    localStorage.setItem("tasks" , JSON.stringify(tasks));
}


const saved = localStorage.getItem("tasks");
if(saved){
    tasks = JSON.parse(saved);
    renderTasks();
}

function renderTasks(){
    task_list.innerHTML="";

    for(let i=0; i<tasks.length; i++){
        const task = tasks[i];
    

    const task_item = document.createElement("div");

    const list_item = document.createElement("span");
    list_item.textContent = task.text;

    const check_box = document.createElement("input");
    check_box.type = "checkbox";
    check_box.checked = task.completed;

    check_box.addEventListener("change" , ()=>{
        task.completed = check_box.checked;
        saveTasks();
        renderTasks();
    });

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";

    delete_btn.addEventListener("click" , ()=>{
        tasks = tasks.filter(t => t.id !== task.id);
        saveTasks();
        renderTasks();
    });

    if(task.completed){
        list_item.style.textDecoration = "line-through";
    }

    task_item.appendChild(check_box);
    task_item.appendChild(list_item);
    task_item.appendChild(delete_btn);

    task_list.appendChild(task_item);
    
    }

}

add_btn.addEventListener("click" , ()=>{
     const data = input_task.value;
     if(!validation(data)) return;

    const newTask = {
        id:Date.now(),
        text:data,
        completed:false
    };

    tasks.push(newTask);
    saveTasks();

    renderTasks();
    input_task.value = "";
    input_task.focus();
});