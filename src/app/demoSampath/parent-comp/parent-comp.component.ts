import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  fruits : any
  isDataNull : boolean = true
  constructor(private crudService: CrudService, private route: Router ) { }

  ngOnInit(): void {
    this.getFruitsList();
  }

  getFruitsList(){
    var res = this.crudService.getFruitsData();
    sessionStorage.setItem('Fruits', res)
    this.fruits = res;
    if(this.fruits.length == 0){
      this.isDataNull = true;
    }
    else{
      this.isDataNull = false;
    }
  }

  loadChild(){
    debugger
    this.route.navigateByUrl('child');
  }

}
