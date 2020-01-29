import {Task} from "./task";
import {Dates} from "./date";
import {Priority} from "./priority";
import { Projet } from "./projet";


console.log("Simulation de la date");
console.log(" ");
// Creation d'une date
let date1 = new Dates(2020,1,12);
console.log("La date est "+date1.toString());
console.log("La date créée est "+date1.create(2020,18,12));
console.log("La date est modifiée en "+date1.setDate(2020,2,2));
console.log("La date d'hier était "+date1.yesterday());
console.log("La date de demain sera "+date1.tomorrow());
console.log("La date apres ajout de 35 jours devient "+date1.addDay(35));
console.log("La date apres ajout de 40 mois devient "+date1.addMonth(40));
console.log("La date apres ajout de 5 ans devient "+date1.addYear(5));
console.log("La date apres retrait de 35 jours devient "+date1.subDay(35));
console.log("La date apres retrait de 40 mois devient "+date1.subMonth(40));
console.log("La date apres retrait de 5 ans devient "+date1.subYear(5));


//Utilisation'une enumeration
let enum1=Priority.Small;

//Creation d'une tache1
let task1= new Task();
console.log(" ");
console.log("Simulation de la tache");
console.log("");
console.log("L'idee de cette tache est "+task1.add("Apprendre TypeScript pour Debutant",date1,enum1));
console.log(task1.toString());
task1.update("Apprendre TypeScript ")
console.log("La tache a ete mise a jour " );
console.log(task1.toString());
task1.close();
console.log("La tache a ete fermée");
console.log(task1.toString());

console.log("Simulation d'un projet'");
//Creation d'une tache2
let task2= new Task();
task2.add("Apprendre Ionic",date1,enum1);

//Ajout des taches au projets
let projet1=new Projet();
projet1.addTask(task1);
projet1.addTask(task2);
console.log("Liste des taches du projet");
projet1.all();
console.log("Liste des taches  incompletes du projet");
projet1.uncomplete();
console.log("Liste des taches  completes du projet");
projet1.complete();
console.log("La tache 2 est la suivante");
console.log(projet1.getTask(1).toString());
projet1.deleteTask(0);
console.log("La tache 1 a ete supprime");
projet1.all();








 




