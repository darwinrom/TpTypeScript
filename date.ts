export class Dates{
    //attributs
    _year:number=0;
    _month: number=0;
    _day:number=0;

    //Valide la date et modifie
    public valide(year:number,month: number,day:number){
        if(month>0 && month<=12 && year>0 && year<=9999 && day>0){ 
            //Controle des mois de 31 jours
            if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12 ){
                if(day<=31){
                 this._year = year;
                 this._month = month;
                 this._day = day; 
                }
            }
             //Controle des mois de 30 jours
            if(month===4 || month===6 || month===9  || month===11){
             if(day<=30){
              this._year = year;
              this._month = month;
              this._day = day; 
             }
           }
           //Controle du mois de 28 jours
             if(month===2){
                 if(day<=28){
                     this._year = year;
                     this._month = month;
                     this._day = day; 
                    }
 
             }
             //Sinon tous sera initialise a 0
         }

    }

    
    //constructor 
    constructor(year:number,month: number,day:number) {
        this.valide(year,month,day);
       }
       

    // Getters
    get year(): number {
        return this._year;
    }

    get month(): number {
        return this._month;
    }

    get day(): number {
        return this._day;
    }

    //Setters

    set year(newYear: number) {
        this._year = newYear;
    }

    set month(newMonth: number) {
        this._year = newMonth;
    }

    set day(newDay: number) {
        this._year = newDay;
    }
//Autres methodes
    //Retourne la date en AAAA-MM-DD
    public toString():string{
        return this._year+"-"+this._month+"-"+this._day;
    }


    //Cree une date et retourne la date en AAAA-MM-DD
    public create(year:number,month: number,day:number):string{
       this.valide(year,month,day);
         return this.toString();
      // return this._year+"-"+this._month+"-"+this._day;
    }
    
    public setDate(year:number,month: number,day:number):string{
        this.valide(year,month,day);
       return this.toString();
     // return this._year+"-"+this._month+"-"+this._day;
    }
   
    public yesterday():string{
        let a:number=this._year;
        let b:number=this._month;
        let c:number=this._day;
        if(this._day===1 && this._month===1){
            b=12;
            c=31;
            a=a-1;
        }else if(this._day===1 && this._month!=1){
            if( this._month===5 || this._month===7 || this._month===8 || this._month===10 || this._month===12 ){
                b-=1;
                c=30;
            }  
            if(this._month===2 ||this._month===4 || this._month===6 || this._month===9 ||  this._month===11){
                b-=1;
                c=31;
            } 
            if(this._month===3){
                b-=1;
                c=28;

            } 
        }else{
            c-=1;
        }
        
        return a+"-"+b+"-"+c;
    }
   
public tomorrow():string{
    let a:number=this._year;
        let b:number=this._month;
        let c:number=this._day;
    if(this._day===30 && (this._month===4 || this._month===6 || this._month===9 ||  this._month===11)){
        b+=1;
        c=1;
       
    }else
    if(this._day===31 && (this._month===1 || this._month===3 || this._month===5 || this._month===7 || this._month===8 || this._month===10 )){
       b+=1;
        c=1;
       
    }else
    if(this._day===28 && this._month===2){
        b+=1;
        c=1;   
    }else 
    if(this._day===31 && this._month===12){
        b=1;
        c=1;
        a+=1;   
    }else{
        c+=1;

    }
    
    return a+"-"+b+"-"+c;
}

 public addDay(nbrDay:number=1):string{
    if(nbrDay>0){
        for(var i:number=0;i<nbrDay;i++){
        if(this._day===30 && (this._month===4 || this._month===6 || this._month===9 ||  this._month===11)){
            this._month+=1;
            this._day=1;
           
        }else
        if(this._day===31 && (this._month===1 || this._month===3 || this._month===5 || this._month===7 || this._month===8 || this._month===10 )){
            this._month+=1;
            this._day=1;
           
        }else
        if(this._day===28 && this._month===2){
            this._month+=1;
            this._day=1;   
        }else 
        if(this._day===31 && this._month===12){
            this._month=1;
            this._day=1;
            this._year+=1;   
        }else{
            this._day+=1;
    
        }
    }
          
    }
    return this._year+"-"+this._month+"-"+this._day;      
}

public subDay(nbrDay:number=1):string{
    if(nbrDay>0){
        for(var i:number=0;i<nbrDay;i++){
            if(this._day===1 && this._month===1){
                this._month=12;
                this._day=31;
                this._year-=1;
            }else if(this._day===1 && this._month!=1){
                if( this._month===5 || this._month===7 || this._month===8 || this._month===10 || this._month===12 ){
                    this._month-=1;
                    this._day=30;
                }  
                if(this._month===2 ||this._month===4 || this._month===6 || this._month===9 ||  this._month===11){
                    this._month-=1;
                    this._day=31;
                } 
                if(this._month===3){
                    this._month-=1;
                    this._day=28;
    
                } 
            }else{
                this._day-=1;
            }

        }
       
    }
    return this._year+"-"+this._month+"-"+this._day;      
}

public addMonth(nbrMonth:number=1):string{
  nbrMonth*=30;
  this.addDay(nbrMonth);
       
    return this._year+"-"+this._month+"-"+this._day;      
}


public subMonth(nbrMonth:number=1):string{
    nbrMonth*=30;
    this.subDay(nbrMonth);
         
      return this._year+"-"+this._month+"-"+this._day;     
}


public addYear(nbrYear:number=1):string{
    if(nbrYear>0){
    this._year+=nbrYear;
    }
    return this._year+"-"+this._month+"-"+this._day;      
}

public subYear(nbrYear:number=1):string{
    if(nbrYear>0){
        this._year-=nbrYear;
    }
    return this._year+"-"+this._month+"-"+this._day;      
}



}



