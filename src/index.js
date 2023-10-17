import {createEventListener} from "/src/creatingProject";
import { listEvent} from "/src/creatingTask";
import { editContainerEventListener} from "/src/editingProject";
import {dragAndDropEvent} from "/src/dragAndDrop";
import {displayAllTasks} from "/src/homeSection";

listEvent();
createEventListener();
editContainerEventListener();
dragAndDropEvent();
displayAllTasks();

//hide side menu event listener
const hiddenMenu = document.querySelector(".hiddenMenu");
hiddenMenu.addEventListener("click", ()=>{
    const leftPanel = document.querySelector(".leftPanel");
    leftPanel.classList.toggle("hidden");
});


//on start up checked wheather its on light mode or dark mode
const checkbox = document.getElementById("checkbox");
if(checkbox.checked === true){
    document.body.classList.add("light");
}
else{
    document.body.classList.remove("light");
}

//event listener for every time the dark mode toggle change
checkbox.addEventListener("change", () =>{
    document.body.classList.toggle("light");
})