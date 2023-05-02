import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent {
  myForm!: FormGroup;

  constructor(private authService: AuthService) { }

  onSubmit() {
    const email = this.myForm.get('emailTS')?.value;
    const password = this.myForm.get('passwordTS')?.value;
    const user = { email, password };

    this.authService.signin(user).subscribe((result) => {
      console.log(result);
      console.log(`${this.authService.usuarioAtual.firstName} ${this.authService.usuarioAtual.lastName}`)
      this.myForm.reset();
    });
  }

  ngOnInit() {
    this.myForm = new FormGroup ({
      emailTS: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+\.[a-zA-Z]+")]),
      passwordTS: new FormControl('', Validators.required)
    });
  }
}
