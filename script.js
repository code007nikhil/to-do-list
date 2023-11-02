var input = document.getElementById("inputt");
var addbtn = document.getElementById("add-btn");
var taskbox =  document.getElementById("tasks-box");


var serial = 0;
var change = 0; 
addbtn.addEventListener("click",()=>{
    if (input.value.length >= 5) {
        serial++ 
    taskbox.innerHTML += `<li class="task">
    <div class="task-div">
    <div class="serialno">${serial}</div>
    <h4 class="taskline">${input.value}</h4>
    </div>
    <div class="update">
    <button  class="update-btn complete btn-big" onclick="taskcompleted(${change})" >Task completed</button>
    <button  class="update-btn remove btn-big" onclick="taskremoved(${change})" >Remove Task</button>
    <button  class="update-btn complete btnsmall" onclick="taskcompleted(${change})" ><i class="fa-solid fa-check"></i></button>
    <button  class="update-btn remove btnsmall" onclick="taskremoved(${change})" ><i class="fa-solid fa-xmark"></i></button>
    
    </li>` ;
    input.value = "";
        change++
    }
    else{
        alert("please enter a task")
    }
})

function taskcompleted(chng){
    console.log(chng);
    if (change > 0) {
    var task = document.querySelectorAll(".task");
    var taskline = document.querySelectorAll(".taskline")
    }
    else{
    var task = document.querySelector(".task");
    var taskline = document.querySelector(".taskline")
    
    }
   for (let i = 0; i <= task.length; i++) {
    if (i === chng) {
        task[i].style.background = "green";
        taskline[i].style.textDecoration = "none"
    }
   }
}
function taskremoved(chng){
    console.log(chng);
    if (change > 0) {
    var task = document.querySelectorAll(".task");
    var taskline = document.querySelectorAll(".taskline")
    }
    else{
    var task = document.querySelector(".task");
    var taskline = document.querySelector(".taskline")
    }
   for (let i = 0; i <= task.length; i++) {
    if (i === chng) {
        task[i].style.background = "red";
        taskline[i].style.textDecoration = "line-through"

    }
   }
}