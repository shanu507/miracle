import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  familySignup: FormGroup;

  constructor(public formbuilder:FormBuilder,) { 
    this.familySignup = this.formbuilder.group({
      name:['',Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      checked:['',Validators.required]
    });
  }

  ngOnInit() {}
  
onsubmit(){
  
}
}
