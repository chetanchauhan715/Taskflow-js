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

add_btn.addEventListener("click" , ()=>{
     const data = input_task.value;
     if(!validation(data)) return;

    const task_data  = document.createElement("div"); 

    const list_item = document.createElement("span");
    list_item.textContent = data;

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "Delete";

    const check_box = document.createElement("input");
    check_box.type = "checkbox";

    check_box.addEventListener("change" , ()=>{
        if(check_box.checked){
            list_item.style.textDecoration = "line-through";
        }else{
            list_item.style.textDecoration = "none";
        }
    });

    delete_btn.addEventListener("click" , ()=>{
        task_data.remove();
    });

    task_data.appendChild(check_box);
    task_data.appendChild(list_item);
    task_data.appendChild(delete_btn);

    task_list.appendChild(task_data);

    input_task.focus();
    input_task.value = "";

});