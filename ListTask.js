class Task{
    constructor(title){
    this.title = title;
    
    }

     ajouterTache = (title,listdeTAche,listTache) =>{
        listdeTAche.push(title)
        var index = 0;
        for (var i of listdeTAche){
               var newElement = document.createElement("li")
               newElement.innerHTML =`${i} <button id=${index++}  className='suppTask'> supprimer</buttton>`
                
            
        }
        return listTache.appendChild(newElement)
    }

    deleteTache = (id,listdeTAche,listTache) =>{               
                var index = listdeTAche.indexOf(id);
                if (index > -1) {
                listdeTAche.splice(index, 1);
                }
                listTache.remove(id)
                console.log(listdeTAche);
    }
}