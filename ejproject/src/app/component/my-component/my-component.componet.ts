import { Component } from "@angular/core";
//todo es directivas
@Component({
    selector: 'my-component',
    templateUrl: './my-component.component.html'
    //aca tambien podiamos poner temprate y poner el codigo html
           
    
    
}) //aca no lleva punto y compa
/*
templateUrl como utiliza en react
*/ 
export class MyComponent{
    public titulo:string;
    public comentario:string;
    public year:number;

    constructor(){
        this.titulo="este es un titulo cualquiera";
        this.year=2021;
        this.comentario="este es un comentario cualquiera";
        console.log("my.component.component Cargado");
        console.log(this.titulo,this.comentario,this.year);
    }
}