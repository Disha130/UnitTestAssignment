import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators, MinLengthValidator } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  constructor(public router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ["", [Validators.required,Validators.minLength(6)]],
    });
  }

  /*Get controls of form */
  get formControls() {
    return this.loginForm.controls;
  }
  /*Intiliaze component */
  ngOnInit() {}
  /*Call when click on login*/
  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    if (email === "admin@gmail.com" && password === "admin@123") {
      this.router.navigate(["/dashboard"]);
    } else {
      this.errorMessage = "Please enter valid email and password";
    }
  }
}
