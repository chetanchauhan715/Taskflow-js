const input_task = document.getElementById("task-input");
const add_btn = document.getElementById("add-btn");
const search_input = document.getElementById("search-input");
const filter_select = document.getElementById("filter");
const task_list = document.getElementById("task-list");
const priority_select = document.getElementById("priority");


let tasks = [];
let searchText = "";
let filterType = "all";
let editingId = null;

const priority_order = {
    high:3,
    medium:2,
    low:1
};

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
    task_list.innerHTML = "";

    let filtered_Task = tasks;

    if(searchText){
        filtered_Task = filtered_Task.filter(t =>
        t.text.toLowerCase().includes(searchText)
    );
    }

    if(filterType === "completed"){
        filtered_Task = filtered_Task.filter(t => t.completed);
    } else if(filterType=== "pending"){
        filtered_Task = filtered_Task.filter(t => !t.completed)
    }

    filtered_Task.sort( (a,b) =>{
        if(a.pinned && !b.pinner) return -1;
        if(!a.pinned && b.pinner) return 1;

        return priority_order[b.priority] - priority_order[a.priority];
    });

    for(let i=0; i<filtered_Task.length; i++){
        const task = filtered_Task[i];

        // CREATE
        const task_item = document.createElement("div");
        task_item.classList.add("task-item");

        const check_box = document.createElement("input");
        check_box.type = "checkbox";
        check_box.checked = task.completed;

        const priority_tag = document.createElement("span");
        priority_tag.textContent = task.priority;
        priority_tag.classList.add("priority" , task.priority);

        const pin_btn = document.createElement("button");
        if(task.pinned){
            pin_btn.textContent = "📌 Pinned" ;
        } else{
            pin_btn.textContent = "📌";
        }

        const delete_btn = document.createElement("button");
        delete_btn.textContent = "Delete";


        // Events 
        check_box.addEventListener("change" , ()=>{
            task.completed = check_box.checked ;
            saveTasks();
            renderTasks();
        });

        pin_btn.addEventListener("click" , ()=>{
            task.pinned = !task.pinned;
            saveTasks();
            renderTasks();
        });

        delete_btn.addEventListener("click" , ()=>{
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        let textElement;
        let action_btn ;

        if(editingId === task.id){
            textElement = document.createElement("input");
            textElement.value = task.text;

            action_btn = document.createElement("button");
            action_btn.textContent = "Save";

            action_btn.addEventListener("click" , ()=>{
                const edited_data =textElement.value;
                if(!validation(edited_data)) return ;

                task.text = edited_data;
                editingId = null;
                saveTasks();
                renderTasks();
            });
        } else {
            textElement = document.createElement("span");
            textElement.textContent = task.text;

            action_btn = document.createElement("button");
            action_btn.textContent = "Edit";

            action_btn.addEventListener("click" , ()=>{
                editingId = task.id;
                renderTasks();
            });
        }

        if(task.pinned){
            task_item.style.backgroundColor = "#fff3cd";
        }
    

    // append 
    task_item.appendChild(pin_btn);
    task_item.appendChild(check_box);
    task_item.appendChild(textElement);
    task_item.appendChild(action_btn);
    task_item.appendChild(priority_tag);
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
        completed:false,
        priority:priority_select.value,
        pinned:false // new for pin task 
    };

    tasks.push(newTask);
    saveTasks();

    renderTasks();
    input_task.value = "";
    input_task.focus();
});


// search event 
search_input.addEventListener("input" , ()=>{
    searchText = search_input.value.toLowerCase();
    renderTasks();
});

// filter event 
filter_select.addEventListener("change" , ()=>{
    filterType = filter_select.value;
    renderTasks();
});

