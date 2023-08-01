import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  generi:string[] = ['uomo','donna','altro'];

  @ViewChild('form',{static:true}) form!:NgForm;

  submit(form:NgForm) {
    console.log(form);
    console.log(form.form.value);
    this.form.reset();
  }


  ngOnInit(){
    this.form.statusChanges?.subscribe(status => console.log(status)//valid | invalid
    )

  }

}
