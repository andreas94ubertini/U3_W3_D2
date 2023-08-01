import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username:string = ''
  password:string = ''
  @ViewChild('f',{static:true}) form!:NgForm
  submit(form:NgForm){
    console.log(form.value, 'ciao')

  }

}
