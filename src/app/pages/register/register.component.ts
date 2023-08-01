import {Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form!:FormGroup;
  gender:string[] = ["uomo", "donna", "altro",]

  constructor( private fb: FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      name: this.fb.control(null),
      surname: this.fb.control(null),
      password: this.fb.control(null),
      password2: this.fb.control(null),
      gender: this.fb.control([]),
      image: this.fb.control(null),
      biography: this.fb.control(null),
      username: this.fb.control(null),
    })
  }

  sendUser(){
    console.log(this.form.value);
    this.form.reset()
  }
}
