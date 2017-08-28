import { Component } from '@angular/core';
import { ListService } from "app/service/list.service";
import { DropDownService } from "app/service/drop-down.service";
import {FormControl,FormGroup,Validators,FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListService]
})
export class RootComponent {
  title: string;
  name: string;
  lastName: string;
  userDetail = {};
  arrayList: any[] = [];
  genderArray: any[] = [];
  myform: FormGroup;
  constructor(private _listService: ListService, private _dropDownService: DropDownService) { }

  ngOnInit() {
    this.userDetail = {
      name: '',
      lastName: '',
      age: '',
      genderType: '',
    }
    this.myform = new FormGroup({
     name: new  FormControl('sree',[Validators.required]),
    lastName: new  FormControl('',[Validators.required]),
    age:new  FormControl('',[Validators.required]),
    genderType:new  FormControl('',[Validators.required]),
  
    });
    this.genderArray = this._dropDownService.getDropDown();
  }

   submit(values) {
   
    console.log(values);
    let model = {
      name: values.name,
      lastName: values.lastName,
      age: values.age,
      genderType: values.genderType
    }
    this._listService.addList(model);
    this.arrayList = this._listService.getList();
  }



}
