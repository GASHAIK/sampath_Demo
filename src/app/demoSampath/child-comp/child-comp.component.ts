import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor(private crudService: CrudService, private toastr: ToastrService) { }
  Form: any;
  index: any;
  fruits: any
  btnName: boolean = false;
  isDataNull : boolean = true
  ngOnInit(): void {
    this.getFruitsList();
    this.createForm();
  }

  createForm() {
    this.Form = new FormGroup({
      fruitName: new FormControl('', Validators.required),
    });
  }



  Add() {
    this.crudService.addMtd(this.Form.value)
    this.getFruitsList();
    this.Form.reset();
    this.toastr.success("Added Successfully.")
  }

  getFruitsList() {
    var res = this.crudService.getFruitsData();
    sessionStorage.setItem('Fruits', res)
    this.fruits = res;
    debugger

    if(this.fruits.length == 0){
      this.isDataNull = true;
    }
    else{
      this.isDataNull = false;
    }
  }

  Edit(index: any, data: any) {
    this.index = index;
    this.Form = new FormGroup({
      fruitName: new FormControl(data, Validators.required),
    });
    this.btnName = true;
  }

  Delete(index : any){
    var i = 0;
    for (i = 0; i < this.fruits.length; i++) {
      if (i == index) {
        debugger
        this.fruits.pop(i)
        this.getFruitsList();
        this.toastr.warning("Deleted Successfully.")
      }
    }
  }

  saveEdit() {
    var i = 0;
    for (i = 0; i < this.fruits.length; i++) {
      if (i == this.index) {
        this.fruits[i] = this.Form.value.fruitName
        this.Form.reset();
        this.btnName = false
        this.getFruitsList();
        this.toastr.success("Changes Saved Successfully.")
      }
    }

  }

}
