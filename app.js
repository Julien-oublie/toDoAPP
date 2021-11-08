const Displayform = document.getElementById('Displayform');
const formAjout = document.getElementById('formAjout');
const listTache = document.getElementById('tacheList');
const addTache = document.getElementById('addTache');
const tache = document.getElementById('tache');
const suppTask = document.getElementsByClassName('suppTask')




var listdeTAche = [];


//Displayform.addEventListener("click",function(){
   // if(getComputedStyle(formAjout).style=="hidden"){
     //   formAjout.style.visibility = "visible"
   // }
   //else{
     //   formAjout.style.visibility = "hidden"

   // }
    //console.log(formAjout.style.visibility)

//})

const ajouterTache = () =>{
    var task = new Task(tache.value)
    task.ajouterTache(task.title,listdeTAche,listTache)
    console.log(task)

    
}
const deleteTache = () =>{
    task.deleteTache(document.getElementById(task.title),listdeTAche,listTache)
}

suppTask.addEventListener('onClick',deleteTache())