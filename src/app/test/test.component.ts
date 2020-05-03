import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  title = 'Reactive Forms Demo';
  email = new FormControl('');
  password = new FormControl('');

  loginForm: FormGroup;


  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.maxLength(8)]]

  })

  }



loginUser(){
  console.log(this.loginForm.status);
  console.log(this.loginForm.value);}
}
