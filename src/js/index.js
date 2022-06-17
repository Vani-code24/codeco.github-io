
import flatpickr from "flatpickr";
import "../styles/main.scss";
import {updateElem,newElement,removeElem} from "./functions";

let taskTitle = document.getElementById('task__title');
let taskTime = document.getElementById('task__time');
let taskDescription = document.getElementById('task__description');
let taskContainer = document.getElementById("task__container");
let taskAdd = document.querySelector('.task__add');
let cancelBtn = document.getElementById('cancelBtn');
let date = document.getElementById("task__date");


//close the form on click of cancel button
   cancelBtn.onclick = function(){
       taskContainer.className="hide";
   }


   //after submitting the form
    taskContainer.addEventListener('submit',(e)=>{
        if(taskTime.value != "" && taskTitle.value != "" && taskDescription.value !=""){
            taskTime.value="";
            taskTitle.value="";
            taskDescription.value="";
            // date.value="";
          
        }
      
        e.preventDefault();
    
    })
   
    // Open the form container with plus button
    taskAdd.addEventListener('click',(e)=>{
        addBtn.setAttribute("type","submit");
         taskContainer.classList.toggle('show');
  
    })    
  
    //combining all the functions 

 addBtn.addEventListener('click',(e)=>{
    if(e.target.getAttribute("type")==="submit"){
        newElement();
    }
    updateElem();
    removeElem();
   });




//flatpicker
   flatpickr(date,{
    dateFormat:"Y-m-d",
    altInput: true,
    
   });









   
