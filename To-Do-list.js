//  Setp varibles  

var myInput = document.querySelector("header input"),
    mySpanButton = document.querySelector("header span"),
    addContener = document.querySelector("article"),
    noTasksMassage = document.querySelector("article .no-tasks"),
    tasks = document.querySelectorAll("article .task"),
    TasksFinshed = document.querySelector("article .finshed"),
    outTasksLength = document.querySelector(".task-number span"),
    outTasksCompletedLength = document.querySelector(".task-complet span"),
    finshedAllButton = document.querySelector("article .finshed-all"),
    deletedAllButton = document.querySelector("article .delete-all");

    
// Setp Functions Main
// function focus in Input after load
function focusInput() {
    "use strict";
    myInput.focus();
}

// function create Add task
function addTask() {
    "use strict";
    // create Min Div Task          
    var taskDiv = document.createElement("div");

    // create Text to div task
    var taskText = document.createTextNode(myInput.value);

    // Add the text to div task
    taskDiv.appendChild(taskText);

    // add class to div task
    taskDiv.classList.add("task");

    // create delet Button and text to this and appent text to Button and class 
    var deletButton = document.createElement("span"); // create span delete

    var deletButtonText = document.createTextNode("delete"); // create text to span

    deletButton.appendChild(deletButtonText);  // add the text to span delete

    deletButton.classList.add("delete");  // add class (delete) tp span delete

    // Add the button delete to Div task
    taskDiv.appendChild(deletButton);

    // Add the Div task to contener Tasks
    addContener.appendChild(taskDiv);
}

// function calck length tasks 
function calckTask() {
    "use strict";
    var // Numper task | Number finsh task |
        tasks = document.querySelectorAll("article .task"),
        TasksFinshed = document.querySelectorAll("article .finshed");
    
    // change Number output in tasks span to task length
    outTasksLength.innerHTML = tasks.length;

    // change Number output in complate span to complate tasks length
    outTasksCompletedLength.innerHTML = TasksFinshed.length;

    // run the function change opacity button finsh $ delete All
    opacityButton();
}

// function toggle opacity buttons All when tasks => 0    
function opacityButton() {
    "use strict";
    var tasks = document.querySelectorAll("article .task");

    if (tasks.length >= 1) {  // change opacity buttons All (deleted / finshed) => 100%
        finshedAllButton.style.opacity = "1";
        deletedAllButton.style.opacity = "1";

    } else {   // change opacity buttons All (deleted / finshed) => 60%
        finshedAllButton.style.opacity = ".6";
        deletedAllButton.style.opacity = ".6";
    }
}

// Function create No Tasks Massege
function showNoTasksMassage() {
    "use strict";
    var tasks = document.querySelectorAll("article .task");

    if (tasks.length === 0) {  // if don`t tasks => show the massage
        noTasksMassage.style.display = "block";
    }
}


// when Widow on load focus in input
window.onload = function () {
    "use strict";
    focusInput();
};


// Add Tasks when click to span button
mySpanButton.onclick = function () {
    "use strict";
    if (myInput.value === "") {
        // out put => if Input Empaty 
        window.alert("اكتب المهمة ياعم");

    } else {

        // Remove Div No Tasks Massege
        noTasksMassage.style.display = "none";  // => remove()

        // Add Tasks [div(task) =. span(delete)] and add text and class list
        addTask();

        // empaty value in input when onclick
        myInput.value = "";

        // focus in Input when onclick
        focusInput();

        // calck Number Tasks 
        calckTask();
    }
};


// Finshed | Deleted   or   finshed All |deleted All
document.addEventListener("click", function (e) {
    "use strict";
    var tasks = document.querySelectorAll("article .task");

    // finshed task ==> when click to Div task
    if (e.target.classList.contains("task")) {
        // Add class finshed to tasks
        e.target.classList.toggle("finshed");
    }

    // deleted task ==> when click button delet
    if (e.target.className === "delete") {
        // Add class finshed to tasks
        e.target.parentElement.remove();
    }
    
    // Finshed All Tasks    
    if (e.target === finshedAllButton) {
        for (var f = 0; f < tasks.length; f++) {
            tasks[f].classList.add("finshed");
        }
    }

     // deleted All Tasks    
     if (e.target === deletedAllButton) {
        for (var t = 0; t < tasks.length; t++) {
            tasks[t].remove();
        }
    }

    // add No tasks Massge when tasks => 0
    showNoTasksMassage();

    // calck Number Tasks
    calckTask();
});