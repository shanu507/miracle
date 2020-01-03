import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-elf',
  templateUrl: './elf.component.html',
  styleUrls: ['./elf.component.css']
})
export class ElfComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  // Name:string="";
  

  constructor(public formBuilder:FormBuilder) { 
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      // email: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  ngOnInit() {

  }
  // get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

  }
}
