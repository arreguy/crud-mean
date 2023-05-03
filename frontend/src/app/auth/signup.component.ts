import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  onSubmit() {
    const user = new User(
      this.myForm.value.firstNameTS,
      this.myForm.value.lastNameTS,
      this.myForm.value.passwordTS,
      this.myForm.value.emailTS,
      this.myForm.value.countryTS,
      this.myForm.value.genderTS,
      this.myForm.value.majorityTS
    );
    console.log(user);
    this.authService.signup(user)
      .subscribe({
        next: dados => console.log(dados),
        error: erro => console.log(erro)
      });
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      emailTS: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")]],
      passwordTS: ['', Validators.required],
      firstNameTS: ['', Validators.required],
      lastNameTS: ['', Validators.required],
      countryTS: ['', Validators.required],
      genderTS: ['', Validators.required],
      majorityTS: ['', Validators.required]
    });
  }
}