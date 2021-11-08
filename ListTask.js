class Task{
    constructor(title,listdeTAche){
        
    this.title = title;
    this.complete = false;
    this.listdeTAche = listdeTAche
    //this.addlisteners()
    //const container = document.querySelector()
    }


     ajouterTache = (title,listdeTAche,listTache) =>{
        listdeTAche.push(title)
        for (var i of listdeTAche){
               var newElement = document.createElement("li")
               newElement.innerHTML =`${i} <input type='checkbox'/> <button class='suppTask'>supprimer</buttton> `
               newElement.lastElementChild.addEventListener("click",()=>{
                   newElement.remove()
               }) 
               newElement.children[0].addEventListener("change",()=>{
                   this.complete = !this.complete;
                   if(this.complete){
                       newElement.classList.add('complete')
                   }else{
                       newElement.classList.remove('complete')
                   }
               })    
        }
        console.log(newElement.querySelector('.suppTask'))
        return listTache.appendChild(newElement)
        
    }
    addlisteners(){
        this.newElement.querySelector(".suppTask").addEventListener("click",this.delete.bind(this))
    }
    delete(){
        this.newElement.remove()
        this.listdeTAche.splice(this,1)

    }

}