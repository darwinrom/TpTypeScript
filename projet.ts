import {Task} from "./task";
export class Projet{
    private tasks :  Task[] = []
    
    public addTask(tache : Task){
        this.tasks.push(tache);
    }
    
    public getTask(indice: number){
        return this.tasks[indice]
    }
   
   public  deleteTask(indice: number){
        this.tasks.splice(indice)
    }
    
    public all(){
        this.tasks.forEach(value => console.log(value.toString()))
    }
    
    public complete(){
        this.tasks.forEach(value => value.checked ? console.log(value.toString()) : '')
    }
    
    public uncomplete(){
        this.tasks.forEach(value => !value.checked ? console.log(value) : '')
    }


}