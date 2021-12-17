import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }
  fruitsList : any =[]

  getFruitsData(){
     return this.fruitsList
  }

  addMtd(data : any){
    this.fruitsList.push(data.fruitName);
    sessionStorage.setItem('Fruits', this.fruitsList)
  }

  editMtd(){
    
  }
  
}
