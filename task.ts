import {Dates} from "./date";
import {Priority} from "./priority";
export class Task{
    //attribut
    private  _id:number=0;
    private _content:string;
    private _date:Dates;
    private _priority:Priority ;
    private _checked:boolean=false;
    

    get id():number{
        return this._id;
    }
    get content():string{
        return this._content;
    }

    get date():Dates{
        return this._date; 
    }

    get priority():Priority{
        return this._priority; 
    }

    getchecked():boolean{
        return this._checked; 
    }

    set content(content:string){
        this._content=content;
    }

    
    set date(date:Dates){
        this._date=date;
    }

    
    set priority(priority:Priority){
        this._priority=priority;
    }

    
    set checked(checked:boolean){
        this._checked=checked;
    }

    //Methode qui renvoie id de task
    public add(content:string,date:Dates,priority:Priority):number{
        this._content=content;
        this._date=date;
        this._priority=priority;
        this._id++;
        return this._id;
        
    }
//Methode mise a jour
    public update(content:string=this._content,date:Dates=this._date,priority:Priority=this._priority,checked:boolean=this._checked){
        this._content=content;
        this._date=date;
        this._priority=priority;
        this._checked=checked;
    }
//Methode fermer une tache
    public close(){
        this._checked=true;
    }

    //Methode affichage 
    public toString():string{
    var etat:string;
    var prio:string;
        if(this._checked) etat="Effectué";
        else  etat="Non effectué";
        if(this._priority=1) prio="Small";
        if(this._priority=2) prio="Tiny";
        if(this._priority=3) prio="Urgent";
    
    
    return "\nCONTENU :"+this._content+"\nDATE : "+this._date.toString()+"\nPRIORITY: "+prio+"\nETAT: "+etat;
    }
    




}