let lists = document.getElementById("task__lists");
let errormsg = document.getElementById('error-msg');
let taskTitle = document.getElementById('task__title');
let taskTime = document.getElementById('task__time');
let taskDescription = document.getElementById('task__description');
let taskContainer = document.getElementById("task__container");
let editBtn = document.getElementsByClassName("editicn");
let trashBtn = document.getElementsByClassName("trashicn");
let addBtn= document.getElementById('addBtn');
let date = document.getElementById("task__date");


//update the elements
export function updateElem(){
    for(let i=0;i< editBtn.length;i++){
         editBtn[i].addEventListener("click",(e)=>{           

            taskContainer.className="show";
            taskTitle.value = e.target.parentElement.childNodes[0].nodeValue;
         taskTime.value = e.target.parentElement.childNodes[2].nodeValue;
         date.value = e.target.parentElement.childNodes[4].nodeValue;
         taskDescription.value = e.target.parentElement.childNodes[6].nodeValue;
         
         addBtn.setAttribute("type","input");
    addBtn.addEventListener("click",()=>{
        
         if(addBtn.getAttribute("type")==="input"){
                e.target.parentElement.childNodes[0].nodeValue= taskTitle.value;
                e.target.parentElement.childNodes[2].nodeValue=taskTime.value;
                e.target.parentElement.childNodes[4].nodeValue=date.value;
                e.target.parentElement.childNodes[6].nodeValue=taskDescription.value;
                taskContainer.className="hide";
            }

            
    });
});

    }    
    }  

    








//Add the elements
 export function newElement(){
    let listel = document.createElement("li");
    let lineBreak = document.createElement("br");
    let title = document.createTextNode(taskTitle.value);
    let tm = document.createTextNode(taskTime.value);
    let td = document.createTextNode(taskDescription.value);
    let spanelem = document.createElement("span"); 
    let spanel = document.createElement("span"); 
    let newLine = document.createElement("br"); 
    let trashtext = document.createTextNode("\u00D7");
    let edittext = document.createTextNode("\u270E");
    let taskList = lists.appendChild(listel);
    let datetext = document.createTextNode(date.value);
    let newlineTag = document.createElement("br");


            if(taskTitle.value=="" || taskDescription.value=="" || taskTime.value=="" || datetext.value == ""){
                errormsg.className="show";
                return false;
            }
            else{   
               
                listel.className ="bord"
                taskList.appendChild(title);
                listel.appendChild(lineBreak);
                taskList.appendChild(tm);
                listel.appendChild(newLine);
                taskList.appendChild(datetext);
                listel.appendChild(newlineTag);
                taskList.appendChild(td); 
                

                spanelem.className="trashicn";
                spanel.className="editicn";
                 spanelem.appendChild(trashtext);
                spanel.appendChild(edittext);
                taskList.append(spanelem,spanel);   
                errormsg.className="hide";
                taskContainer.className="hide";
                return true;
               
            }

         
     
    }

 
  
 //Delete the elements
 export function removeElem(){
    for(let i=0;i< trashBtn.length;i++){
        trashBtn[i].addEventListener("click",(e) => {
                trashBtn[i].parentElement.remove();
            });
    }
   }
   
   
